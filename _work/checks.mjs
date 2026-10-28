import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";

const outDir = "/workspace/scratch/virus-fork-cli-evidence-v15";
fs.mkdirSync(outDir, { recursive: true });
const file = path.resolve("/workspace/virus-fork-cli/playable.html");
const url = "file://" + file + "?envGap=0";

const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--allow-file-access-from-files"]
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(url, { waitUntil: "domcontentloaded" });

const BAN = /加強|減弱|強化|削弱|穩定度|種群[＋+\-－]|[＋+\-－]\d/;

const api = await page.evaluate((banSrc) => {
  const ban = new RegExp(banSrc);
  const V = window.__VIRUS_FORK__;
  const fake = V.assertNoFakeForks();
  const cov = V.assertEnvCoverage();
  const depths = V.envDepthStats();
  const proof = V.PROOF;
  const textHits = [];
  Object.keys(V.ENV_POOLS).forEach((pid) => {
    const nodes = V.ENV_POOLS[pid].nodes;
    Object.keys(nodes).forEach((id) => {
      const n = nodes[id];
      if (n.end) {
        if (ban.test(n.endTitle || "") || ban.test(n.endStory || "")) textHits.push("end:" + id);
        return;
      }
      if (ban.test(n.prompt || "")) textHits.push("prompt:" + id);
      (n.options || []).forEach((o) => {
        if (ban.test(o.title || "")) textHits.push("title:" + id + ":" + o.title);
        if (ban.test(o.sub || "")) textHits.push("sub:" + id + ":" + o.sub);
      });
    });
  });
  return {
    endingCount: proof.endingCount,
    endings: proof.endings,
    depthMin: proof.depthMin,
    depthMax: proof.depthMax,
    fakeForks: fake,
    envMissing: cov,
    envDepths: depths,
    poolCount: Object.keys(V.ENV_POOLS).length,
    mapped: Object.keys(V.ENV_POOL_OF).length,
    gapMs: V.ENV_OPTION_GAP_MS,
    textHits
  };
}, BAN.source);

await page.evaluate(() => { try { localStorage.removeItem("virus-fork-dex"); } catch (e) {} });
await page.reload({ waitUntil: "domcontentloaded" });
await page.click("#btnDex");
await page.waitForTimeout(250);
const leak = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const names = V.PROOF.endings.map((id) => V.FORMS[id].name);
  V.showDexDetail(V.PROOF.endings[0]);
  const detail = document.getElementById("dexDetail").innerText || "";
  const list = document.getElementById("dexList").innerText || "";
  let leakCount = 0;
  const hits = [];
  const unlocked = V.loadUnlocked();
  names.forEach((n) => {
    const id = V.PROOF.endings.find((eid) => V.FORMS[eid].name === n);
    if (!unlocked[id] && detail.includes(n)) { leakCount++; hits.push("detail:" + n); }
    if (!unlocked[id] && list.includes(n)) { leakCount++; hits.push("list:" + n); }
  });
  return { leakCount, hits };
});
await page.click("#btnDexBack");
await page.waitForTimeout(80);

const pathResult = await page.evaluate(async () => {
  const V = window.__VIRUS_FORK__;
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
  V.startGame();
  await sleep(50);
  const target = "aureus";
  const parent = {};
  const q = ["seed"];
  const seen = { seed: true };
  while (q.length) {
    const id = q.shift();
    const n = V.LEVELS[id];
    if (!n || n.end) continue;
    for (const opt of n.options || []) {
      if (!seen[opt.next]) { seen[opt.next] = true; parent[opt.next] = id; q.push(opt.next); }
    }
  }
  let cur = target;
  const chain = [];
  while (cur && cur !== "seed") { chain.push(cur); cur = parent[cur]; }
  chain.reverse();
  async function flush() {
    for (let i = 0; i < 30; i++) {
      const s = V.getState();
      if (s) s.pauseUntil = 0;
      await sleep(20);
      if (document.getElementById("end").classList.contains("active")) return "end";
      const st = V.getState();
      if (st && st.gatesReady && !st.resolved && !st.pendingEnd && !st.pendingSpawn) return "ready";
    }
    return "timeout";
  }
  for (const nid of chain) {
    if (document.getElementById("end").classList.contains("active")) break;
    const st = V.getState();
    st.pauseUntil = 0;
    const level = V.LEVELS[st.nodeId];
    const idx = level.options.findIndex((o) => o.next === nid);
    if (idx < 0) return { error: "no opt " + nid + " from " + st.nodeId };
    V.fallInto(idx);
    await sleep(30);
    await flush();
  }
  await flush();
  return {
    endActive: document.getElementById("end").classList.contains("active"),
    title: document.getElementById("endTitle")?.textContent,
    last: V.getLastEnd()?.form,
    unlocked: !!V.loadUnlocked()["aureus"],
    chain
  };
});

await page.screenshot({ path: path.join(outDir, "10-evo-end-aureus.png"), fullPage: true });

await page.click("#btnEnterEnv");
await page.waitForTimeout(400);
const envStart = await page.evaluate(() => {
  const s = window.__VIRUS_FORK__.getState();
  const mood = document.getElementById("popMood")?.textContent || "";
  const hasBar = !!document.querySelector(".pop-bar, .pop-fill, #popVal");
  const hasStableLabel = (document.getElementById("hud")?.innerText || "").includes("穩定度");
  return {
    phase: s && s.phase,
    pop: s && s.pop,
    nodeId: s && s.nodeId,
    playPhase: document.getElementById("play").classList.contains("phase-env"),
    mood,
    hasBar,
    hasStableLabel,
    creatureClass: document.getElementById("creature")?.className || "",
    particleCount: document.querySelectorAll("#particles i").length,
    gap: window.__VIRUS_FORK__.ENV_OPTION_GAP_MS,
    liveGrowFlag: !!window.__VIRUS_FORK__.liveGrow,
    gateTitleFs: getComputedStyle(document.querySelector(".gate .g-title") || document.body).fontSize,
    gateMinH: (document.querySelector(".gate") || {}).offsetHeight || 0
  };
});

await page.screenshot({ path: path.join(outDir, "20-env-diegetic-options.png"), fullPage: true });

// live-grow gap evidence: pick once then let pause run without zeroing pauseUntil
const gapEvidence = await page.evaluate(async () => {
  const V = window.__VIRUS_FORK__;
  let s = V.getState();
  const before = s.pop;
  s.pauseUntil = 0;
  V.fallInto(0);
  await new Promise((r) => setTimeout(r, 50));
  s = V.getState();
  const after = s.pop;
  // ?envGap=0 skips real gap; force a short grow window for evidence
  s.pendingSpawn = s.pendingSpawn || s.nodeId;
  s.pauseUntil = performance.now() + 1600;
  V.beginEnvGapGrow(before, after);
  const frames = [];
  const stage = document.getElementById("stage");
  for (let i = 0; i < 5; i++) {
    await new Promise((r) => setTimeout(r, 250));
    const st = V.getState();
    const c = document.getElementById("creature");
    const cr = c.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    const cyRatio = sr.height ? ((cr.top + cr.bottom) / 2 - sr.top) / sr.height : 0;
    frames.push({
      t: i,
      pauseLeft: st ? Math.max(0, (st.pauseUntil || 0) - performance.now()) : 0,
      pendingSpawn: !!(st && st.pendingSpawn),
      liveGrow: !!(c && c.classList.contains("live-grow")),
      gapGrowing: document.getElementById("play").classList.contains("gap-growing"),
      y: st && Math.round(st.y),
      cyRatio: Math.round(cyRatio * 1000) / 1000,
      className: c ? c.className : "",
      transform: c ? (c.style.transform || "") : "",
      buds: document.querySelectorAll("#colony .bud").length,
      growHint: !!(document.getElementById("grow-hint") && getComputedStyle(document.getElementById("grow-hint")).display !== "none")
    });
  }
  const transforms = frames.map((f) => f.transform || "");
  const scales = transforms.map((tr) => {
    const m = /scale\(([^)]+)\)/.exec(tr || "");
    return m ? parseFloat(m[1]) : 1;
  });
  const scaleSpan = scales.length ? Math.max(...scales) - Math.min(...scales) : 0;
  const midRatios = frames.map((f) => f.cyRatio).filter((n) => typeof n === "number");
  const centeredOk = midRatios.length > 0 && midRatios.every((r) => r >= 0.35 && r <= 0.68);
  const growHintVisible = frames.some((f) => f.growHint);
  // style toggle smoke
  V.setArtStyle("mc", { silent: true });
  const mcOn = V.artStyleGet() === "mc" && document.getElementById("creature").classList.contains("art-mc");
  const mcHtml = document.getElementById("creature").innerHTML || "";
  V.setArtStyle("classic", { silent: true });
  const classicOn = V.artStyleGet() === "classic";
  return {
    before, after, frames, liveGrowFlag: !!V.liveGrow,
    scaleSpan, budMax: Math.max(...frames.map((f) => f.buds || 0)),
    centeredOk, growHintVisible,
    mcOn, classicOn, mcHasRect: mcHtml.includes("<rect")
  };
});

await page.screenshot({ path: path.join(outDir, "23-env-gap-grow-a.png"), fullPage: true });
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "24-env-gap-grow-b.png"), fullPage: true });
// clear remaining gap so later envPick can proceed
await page.evaluate(() => { const s = window.__VIRUS_FORK__.getState(); if (s) { s.pauseUntil = 0; } });
await page.waitForTimeout(80);

// Scene A/B evidence (non-destructive sample via API, then restore env run)
const formIdForEnv = await page.evaluate(() => (window.__VIRUS_FORK__.getLastEnd() && window.__VIRUS_FORK__.getLastEnd().form) || "aureus");
await page.evaluate(() => window.__VIRUS_FORK__.startGame());
await page.waitForTimeout(200);
const sceneEvo = await page.evaluate(() => ({
  scene: document.getElementById("play")?.getAttribute("data-scene") || "",
  phaseEnv: document.getElementById("play")?.classList.contains("phase-env"),
  api: window.__VIRUS_FORK__.getSceneKey()
}));
await page.screenshot({ path: path.join(outDir, "50-scene-cosmos-evo.png"), fullPage: true });

await page.evaluate((fid) => window.__VIRUS_FORK__.startEnv(fid), formIdForEnv);
await page.waitForTimeout(250);
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.setSceneKey(V.inferSceneKey("繁忙市區捷運車廂 人群摩肩"));
});
await page.waitForTimeout(120);
const sceneCity = await page.evaluate(() => document.getElementById("play")?.getAttribute("data-scene") || "");
await page.screenshot({ path: path.join(outDir, "51-scene-city.png"), fullPage: true });
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.setSceneKey(V.inferSceneKey("近郊住宅陽台 陽光與風較多"));
});
await page.waitForTimeout(120);
const sceneSuburb = await page.evaluate(() => document.getElementById("play")?.getAttribute("data-scene") || "");
await page.screenshot({ path: path.join(outDir, "52-scene-suburb.png"), fullPage: true });
const sceneEvidence = {
  evoCosmos: sceneEvo.scene === "cosmos" && sceneEvo.phaseEnv === false,
  cityOk: sceneCity === "city",
  suburbOk: sceneSuburb === "suburb",
  inferCity: await page.evaluate(() => window.__VIRUS_FORK__.inferSceneKey("繁忙市區捷運車廂")),
  inferSuburb: await page.evaluate(() => window.__VIRUS_FORK__.inferSceneKey("近郊住宅陽台")),
  inferHospital: await page.evaluate(() => window.__VIRUS_FORK__.inferSceneKey("醫院門診等候區")),
  inferHost: await page.evaluate(() => window.__VIRUS_FORK__.inferSceneKey("寄生在人的手部皮膚")),
  inferWet: await page.evaluate(() => window.__VIRUS_FORK__.inferSceneKey("浴室磁磚接縫"))
};

// centered still shot during forced grow
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  if (!s) return;
  s.gatesReady = false;
  s.pendingSpawn = s.nodeId || "x";
  s.pauseUntil = performance.now() + 2200;
  V.beginEnvGapGrow(40, 80);
  V.placeCreatureCentered(performance.now());
});
await page.waitForTimeout(350);
await page.screenshot({ path: path.join(outDir, "53-centered-gap.png"), fullPage: true });

// restore clean env for subsequent envPick growth path
await page.evaluate((fid) => {
  const V = window.__VIRUS_FORK__;
  V.startEnv(fid);
  const s = V.getState();
  if (s) s.pauseUntil = 0;
}, formIdForEnv);
await page.waitForTimeout(200);

async function envPick(idx) {
  await page.evaluate((i) => {
    const V = window.__VIRUS_FORK__;
    const s = V.getState();
    if (s) s.pauseUntil = 0;
    V.fallInto(i);
  }, idx);
  await page.waitForTimeout(60);
  for (let k = 0; k < 40; k++) {
    await page.evaluate(() => { const s = window.__VIRUS_FORK__.getState(); if (s) s.pauseUntil = 0; });
    const status = await page.evaluate(() => {
      if (document.getElementById("envEnd").classList.contains("active")) return "end";
      const s = window.__VIRUS_FORK__.getState();
      if (s && s.gatesReady && !s.resolved && !s.pendingEnvEnd && !s.pendingSpawn) return "ready";
      return "wait";
    });
    if (status === "end" || status === "ready") return status;
    await page.waitForTimeout(30);
  }
  return "timeout";
}

// growth path: pick ok (0) repeatedly
for (let i = 0; i < 4; i++) await envPick(0);
const midHigh = await page.evaluate(() => ({
  pop: window.__VIRUS_FORK__.getState()?.pop,
  mood: document.getElementById("popMood")?.textContent,
  creatureClass: document.getElementById("creature")?.className,
  particles: document.querySelectorAll("#particles i").length,
  toast: document.getElementById("toast")?.textContent || "",
  gateTitles: [...document.querySelectorAll(".gate .g-title")].map((e) => e.textContent)
}));
await page.screenshot({ path: path.join(outDir, "21-env-vital-high.png"), fullPage: true });

// finish toward thrive: keep picking 0
let thrive = { active: false };
for (let i = 0; i < 16 && !thrive.active; i++) {
  await envPick(0);
  thrive = await page.evaluate(() => ({
    active: document.getElementById("envEnd").classList.contains("active"),
    title: document.getElementById("envEndTitle")?.textContent,
    popLine: document.getElementById("envEndPop")?.textContent,
    outcome: document.getElementById("envEnd").className
  }));
}
await page.screenshot({ path: path.join(outDir, "30-env-thrive.png"), fullPage: true });

await page.click("#btnEnvBackEnd");
await page.waitForTimeout(150);
await page.click("#btnEnterEnv");
await page.waitForTimeout(300);
// decline-ish: pick bad (2) often
for (let i = 0; i < 3; i++) await envPick(2);
const midLow = await page.evaluate(() => ({
  pop: window.__VIRUS_FORK__.getState()?.pop,
  mood: document.getElementById("popMood")?.textContent,
  creatureClass: document.getElementById("creature")?.className,
  particles: document.querySelectorAll("#particles i").length
}));
await page.screenshot({ path: path.join(outDir, "22-env-vital-low.png"), fullPage: true });

let decline = { active: false };
for (let i = 0; i < 20 && !decline.active; i++) {
  await envPick(2);
  decline = await page.evaluate(() => ({
    active: document.getElementById("envEnd").classList.contains("active"),
    title: document.getElementById("envEndTitle")?.textContent,
    popLine: document.getElementById("envEndPop")?.textContent,
    outcome: document.getElementById("envEnd").className
  }));
}
await page.screenshot({ path: path.join(outDir, "31-env-decline.png"), fullPage: true });

await page.click("#btnEnvAgain");
await page.waitForTimeout(80);
await page.click("#btnStart");
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "40-play-ui-portrait.png"), fullPage: true });
await page.setViewportSize({ width: 844, height: 390 });
await page.waitForTimeout(200);
await page.screenshot({ path: path.join(outDir, "41-play-ui-landscape.png"), fullPage: true });

function envDepthOk(depths) {
  const vals = Object.values(depths);
  if (!vals.length) return false;
  return vals.every((d) => d.min >= 8 && d.max <= 12);
}

const noHudMetrics = !envStart.hasBar && !envStart.hasStableLabel;
const noEndMetrics = !BAN.test(thrive.popLine || "") && !BAN.test(decline.popLine || "") &&
  !(thrive.popLine || "").includes("穩定度") && !(decline.popLine || "").includes("穩定度");
const toastClean = !BAN.test(midHigh.toast || "") && !/[＋+\-－]\d/.test(midHigh.toast || "");

const checks = {
  endingCount: api.endingCount,
  depthMin: api.depthMin,
  depthMax: api.depthMax,
  fakeForks: api.fakeForks,
  fakeForkCount: api.fakeForks.length,
  envMissing: api.envMissing,
  envMapped: api.mapped,
  envPools: api.poolCount,
  envDepths: api.envDepths,
  nameLeak: leak.leakCount,
  gapMs: api.gapMs,
  textHits: api.textHits,
  pathResult,
  envStart,
  gapEvidence,
  sceneEvidence,
  midHigh,
  midLow,
  thrive,
  decline,
  pass: {
    endings29: api.endingCount === 29,
    depthOk: api.depthMin >= 4 && api.depthMax <= 7,
    noFake: api.fakeForks.length === 0,
    envCover: api.envMissing.length === 0 && api.mapped === 29,
    envDepthOk: envDepthOk(api.envDepths),
    nameLeak0: leak.leakCount === 0,
    envEntered: envStart.phase === "env" && envStart.playPhase === true,
    gap10s: api.gapMs === 0 || api.gapMs === 10000, // test url forces 0; default constant checked below
    gapDefaultConst: true, // filled after
    noBannedCopy: api.textHits.length === 0,
    noHudMetrics,
    noEndMetrics,
    toastClean,
    liveGrowApi: !!envStart.liveGrowFlag,
    gateTitleBig: parseFloat(envStart.gateTitleFs || "0") >= 15, // ~0.96–1.02rem at 390
    gateTall: (envStart.gateMinH || 0) >= 100,
    gapLiveFrames: (gapEvidence.frames || []).filter((f) => f.liveGrow || f.gapGrowing).length >= 2,
    gapScaleVisible: (gapEvidence.scaleSpan || 0) >= 0.35,
    gapBuds: (gapEvidence.budMax || 0) >= 2,
    artMc: !!(gapEvidence.mcOn && gapEvidence.mcHasRect),
    artClassic: !!gapEvidence.classicOn,
    gapCentered: !!(gapEvidence.centeredOk),
    growHint: !!(gapEvidence.growHintVisible),
    sceneCosmos: !!(sceneEvidence && sceneEvidence.evoCosmos),
    sceneCity: !!(sceneEvidence && sceneEvidence.cityOk),
    sceneSuburb: !!(sceneEvidence && sceneEvidence.suburbOk),
    vitalHigh: /vital-high/.test(midHigh.creatureClass || "") || (midHigh.particles || 0) >= (envStart.particleCount || 0),
    vitalLow: /vital-low/.test(midLow.creatureClass || "") || (midLow.pop || 99) < (envStart.pop || 0),
    thriveOk: !!(thrive.active && /繁盛|適應/.test(thrive.title || "")),
    declineOk: !!(decline.active && /消退|衰退|清除|改換/.test(thrive.active ? decline.title || "" : decline.title || ""))
  }
};

// Confirm default constant is 10000 by reading source snippet via evaluate of unbound default:
// We opened with ?envGap=0 so runtime is 0; check playable source:
const src = fs.readFileSync(file, "utf8");
checks.pass.gapDefaultConst = /return 10000;/.test(src) && /ENV_OPTION_GAP_MS/.test(src);
checks.pass.declineOk = !!(decline.active && /消退|衰退|清除|改換/.test(decline.title || ""));

checks.allPass = Object.values(checks.pass).every(Boolean);
fs.writeFileSync(path.join(outDir, "checks.json"), JSON.stringify(checks, null, 2));
console.log(JSON.stringify(checks.pass, null, 2));
console.log("allPass", checks.allPass);
console.log("envDepths sample", JSON.stringify(api.envDepths, null, 2));
console.log("gapMs runtime", api.gapMs, "textHits", api.textHits.length);
await browser.close();
process.exit(checks.allPass ? 0 : 2);
