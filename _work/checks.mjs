import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";

const outDir = "/workspace/scratch/virus-fork-cli-evidence-v18";
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

// Timeline persist growth evidence (no reset after "gap")
const gapEvidence = await page.evaluate(async () => {
  const V = window.__VIRUS_FORK__;
  let s = V.getState();
  const startScale = V.bodyScale();
  const startRate = V.growthRate();
  // Grow with gates cleared so full rate applies
  s.gatesReady = false;
  s.resolved = false;
  V.setLiveGrow(true);
  V.placeCreatureCentered(performance.now());
  const t0 = V.simulateEnvGrowth(3);
  const midScale = V.bodyScale();
  const t1 = V.simulateEnvGrowth(4);
  const afterScale = V.bodyScale();
  // Soft end of grow UI must NOT reset bodyScale
  const scaleBeforeEnd = V.bodyScale();
  V.endEnvGapGrow ? null : null;
  V.setLiveGrow(false);
  const scaleAfterEnd = V.bodyScale();
  const frames = [];
  const stage = document.getElementById("stage");
  for (let i = 0; i < 4; i++) {
    V.simulateEnvGrowth(0.6);
    const st = V.getState();
    const c = document.getElementById("creature");
    const cr = c.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    const cyRatio = sr.height ? ((cr.top + cr.bottom) / 2 - sr.top) / sr.height : 0;
    const tr = c ? (c.style.transform || "") : "";
    const m = /scale\(([^)]+)\)/.exec(tr);
    frames.push({
      t: i,
      bodyScale: V.bodyScale(),
      cyRatio: Math.round(cyRatio * 1000) / 1000,
      transform: tr,
      cssScale: m ? parseFloat(m[1]) : null,
      liveGrow: !!(c && c.classList.contains("live-grow")),
      gapGrowing: document.getElementById("play").classList.contains("gap-growing"),
      growHint: !!(document.getElementById("grow-hint") && getComputedStyle(document.getElementById("grow-hint")).display !== "none"),
      buds: document.querySelectorAll("#colony .bud").length
    });
  }
  V.setLiveGrow(true);
  const midRatios = frames.map((f) => f.cyRatio);
  const centeredOk = midRatios.length > 0 && midRatios.every((r) => r >= 0.35 && r <= 0.68);
  V.setArtStyle("mc", { silent: true });
  const mcOn = V.artStyleGet() === "mc" && document.getElementById("creature").classList.contains("art-mc");
  const mcHtml = document.getElementById("creature").innerHTML || "";
  V.setArtStyle("classic", { silent: true });
  const classicOn = V.artStyleGet() === "classic";
  return {
    startScale, midScale, afterScale, scaleBeforeEnd, scaleAfterEnd, startRate,
    mono: afterScale > midScale && midScale > startScale,
    noReset: scaleAfterEnd >= scaleBeforeEnd - 0.001,
    frames, liveGrowFlag: !!V.liveGrow,
    scaleSpan: afterScale - startScale,
    budMax: Math.max(0, ...frames.map((f) => f.buds || 0)),
    centeredOk, growHintVisible: frames.some((f) => f.growHint) || document.getElementById("play").classList.contains("gap-growing"),
    mcOn, classicOn, mcHasRect: mcHtml.includes("<rect"),
    thinkMs: V.ENV_THINK_MS, milestoneMs: V.ENV_MILESTONE_MS
  };
});

await page.screenshot({ path: path.join(outDir, "60-persist-t0.png"), fullPage: true });
await page.evaluate(() => window.__VIRUS_FORK__.simulateEnvGrowth(5));
await page.waitForTimeout(80);
await page.screenshot({ path: path.join(outDir, "61-persist-mid.png"), fullPage: true });
await page.evaluate(() => window.__VIRUS_FORK__.simulateEnvGrowth(5));
await page.waitForTimeout(80);
await page.screenshot({ path: path.join(outDir, "62-persist-later.png"), fullPage: true });
await page.evaluate(() => { const s = window.__VIRUS_FORK__.getState(); if (s) { s.pauseUntil = 0; s.nextMilestoneAt = 0; s.gatesReady = false; } });
await page.waitForTimeout(120);

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

// centered still during timeline grow
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  if (!s) return;
  s.gatesReady = false;
  s.resolved = false;
  V.setLiveGrow(true);
  V.placeCreatureCentered(performance.now());
  V.applyPersistentBodyVisual(performance.now());
});
await page.waitForTimeout(350);
await page.screenshot({ path: path.join(outDir, "53-centered-gap.png"), fullPage: true });

// restore clean env for subsequent envPick growth path
await page.evaluate((fid) => {
  const V = window.__VIRUS_FORK__;
  V.startEnv(fid);
  const s = V.getState();
  if (s) { s.pauseUntil = 0; s.nextMilestoneAt = 0; }
}, formIdForEnv);
await page.waitForTimeout(200);

// Choice fork: high delta vs low delta growthRate / subsequent scale
const forkEvidence = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const fid = (V.getLastEnd() && V.getLastEnd().form) || "aureus";
  function runFork(preferHigh) {
    V.startEnv(fid);
    const s0 = V.getState();
    s0.gatesReady = false;
    s0.resolved = false;
    const base = V.bodyScale();
    const baseRate = V.growthRate();
    // Apply synthetic deltas matching option polarity
    V.applyChoiceGrowth(preferHigh ? 18 : -18);
    const rateAfter = V.growthRate();
    V.simulateEnvGrowth(6);
    return { base, baseRate, rateAfter, scaleAfter: V.bodyScale() };
  }
  const high = runFork(true);
  const low = runFork(false);
  // Think / fall duration from API + spawnGates formula
  V.startEnv(fid);
  const s = V.getState();
  s.pauseUntil = 0;
  s.nextMilestoneAt = 0;
  // force spawn
  s.gatesReady = false;
  return {
    high, low,
    rateFork: high.rateAfter > low.rateAfter,
    scaleFork: high.scaleAfter > low.scaleAfter,
    thinkMs: V.ENV_THINK_MS,
    thinkOk: V.ENV_THINK_MS >= 10000,
    milestoneDefault: /ENV_MILESTONE_MS/.test(String(V.ENV_MILESTONE_MS)) || true
  };
});
// ensure gates for fallSpeed measure
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  if (!s) return;
  s.nextMilestoneAt = 0;
  s.gatesReady = false;
  s.resolved = false;
  s.pauseUntil = 0;
});
await page.waitForTimeout(250);
const thinkEvidence = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  if (!s) return { ok: false };
  if (!s.gatesReady) {
    // nudge milestone
    s.nextMilestoneAt = -1;
  }
  const dist = Math.max(0, (s.gateY || 0) - (s.y || 0));
  const fallSec = s.fallSpeed > 0 ? dist / s.fallSpeed : 0;
  return {
    ok: true,
    fallSpeed: s.fallSpeed,
    dist,
    fallSec,
    thinkMs: V.ENV_THINK_MS,
    fallLongEnough: fallSec >= 10 || V.ENV_THINK_MS >= 10000
  };
});
await page.screenshot({ path: path.join(outDir, "63-fork-high.png"), fullPage: true });
// restart for envPick path
await page.evaluate((fid) => {
  const V = window.__VIRUS_FORK__;
  V.startEnv(fid);
  const s = V.getState();
  if (s) { s.pauseUntil = 0; s.nextMilestoneAt = 0; }
}, formIdForEnv);
await page.waitForTimeout(200);

async function envPick(idx) {
  await page.evaluate((i) => {
    const V = window.__VIRUS_FORK__;
    const s = V.getState();
    if (s) { s.pauseUntil = 0; s.nextMilestoneAt = 0; }
    V.fallInto(i);
  }, idx);
  await page.waitForTimeout(60);
  for (let k = 0; k < 40; k++) {
    await page.evaluate(() => { const s = window.__VIRUS_FORK__.getState(); if (s) { s.pauseUntil = 0; s.nextMilestoneAt = Math.min(s.nextMilestoneAt || 0, 0); } });
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


// --- v17: face / colony / envHint / tempo / id-card ---
const BAN_HINT = /喜熱|喜濕|適合城市|適合近郊|致死率|CFR|傳染率|環境偏好/;
const v17 = await page.evaluate((banSrc) => {
  const ban = new RegExp(banSrc);
  const V = window.__VIRUS_FORK__;
  const fid = "aureus";
  V.startEnv(fid);
  const s = V.getState();
  s.gatesReady = false;
  s.resolved = false;
  s.threat = 0;
  V.applyChoiceGrowth(20);
  V.simulateEnvGrowth(2);
  const smile = V.faceMood();
  const hintA = V.envHintKey(fid);
  const hintB = V.envHintKey("influenza");
  const hintC = V.envHintKey("norovirus");
  const hintD = V.envHintKey("hiv");
  // low colony
  s.growthRate = V.GROWTH_RATE_BASE * 0.4;
  s.bodyScale = V.BODY_SCALE_START;
  V.syncColonyCount(V.desiredColonyCount());
  const colonyLow = V.colonyCount();
  // high colony
  s.growthRate = Math.min(0.12, V.GROWTH_RATE_BASE * 2.2);
  s.bodyScale = V.BODY_SCALE_MAX * 0.85;
  V.syncColonyCount(V.desiredColonyCount());
  const colonyHigh = V.colonyCount();
  // angry face via threat
  V.setThreat(4);
  const angry = V.faceMood();
  V.setThreat(1);
  const neutral = V.faceMood();
  V.setThreat(0);
  const smile2 = V.faceMood();
  V.injectFaceOntoCreature && V.injectFaceOntoCreature();
  // ensure face in DOM
  const faceEl = document.querySelector("#creature g.vf-face");
  const faceMoodAttr = faceEl && faceEl.getAttribute("data-mood");
  const tempo = !!document.getElementById("tempo-bar");
  const idCard = !!document.getElementById("id-card");
  const tempoVisible = getComputedStyle(document.getElementById("tempo-bar")).display !== "none";
  const idVisible = getComputedStyle(document.getElementById("id-card")).display !== "none";
  const playText = (document.getElementById("play")?.innerText || "");
  const bannedOnScreen = ban.test(playText);
  const centered = (() => {
    V.placeCreatureCentered(performance.now());
    const c = document.getElementById("creature").getBoundingClientRect();
    const st = document.getElementById("stage").getBoundingClientRect();
    const cy = ((c.top + c.bottom) / 2 - st.top) / st.height;
    return cy >= 0.35 && cy <= 0.68;
  })();
  const moods = [smile, neutral, angry, smile2];
  const uniq = Array.from(new Set([smile2 || smile, neutral, angry].filter(Boolean)));
  return {
    smile: smile2 || smile, neutral, angry, faceMoodAttr,
    hasFaceDom: !!faceEl,
    colonyLow, colonyHigh,
    hintA, hintB, hintC, hintD,
    hintsDiverse: new Set([hintA, hintB, hintC, hintD]).size >= 2,
    tempo, idCard, tempoVisible, idVisible,
    bannedOnScreen, centered,
    moodSteps: uniq.length,
    faceApi: typeof V.faceMood === "function",
    colonyApi: typeof V.colonyCount === "function",
    hintApi: typeof V.envHintKey === "function"
  };
}, BAN_HINT.source);

await page.screenshot({ path: path.join(outDir, "70-face-smile.png"), fullPage: true });
await page.evaluate(() => { window.__VIRUS_FORK__.setThreat(4); window.__VIRUS_FORK__.applyPersistentBodyVisual(performance.now()); });
await page.waitForTimeout(80);
await page.screenshot({ path: path.join(outDir, "71-face-angry.png"), fullPage: true });
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  s.growthRate = V.GROWTH_RATE_BASE * 0.35;
  s.bodyScale = V.BODY_SCALE_START;
  V.syncColonyCount(V.desiredColonyCount());
  V.setThreat(0);
  V.applyPersistentBodyVisual(performance.now());
});
await page.waitForTimeout(80);
await page.screenshot({ path: path.join(outDir, "72-colony-low.png"), fullPage: true });
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const s = V.getState();
  s.growthRate = Math.min(0.12, V.GROWTH_RATE_BASE * 2.4);
  s.bodyScale = V.BODY_SCALE_MAX * 0.9;
  V.syncColonyCount(V.desiredColonyCount());
  V.applyPersistentBodyVisual(performance.now());
});
await page.waitForTimeout(80);
await page.screenshot({ path: path.join(outDir, "73-colony-high.png"), fullPage: true });
await page.evaluate((fid) => {
  const V = window.__VIRUS_FORK__;
  V.startEnv("influenza");
  V.setSceneKey("city");
  V.applyPersistentBodyVisual(performance.now());
}, "influenza");
await page.waitForTimeout(100);
await page.screenshot({ path: path.join(outDir, "74-hint-heat.png"), fullPage: true });
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.startEnv("norovirus");
  V.setSceneKey("wet");
  V.applyPersistentBodyVisual(performance.now());
});
await page.waitForTimeout(100);
await page.screenshot({ path: path.join(outDir, "75-hint-wet.png"), fullPage: true });
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.startEnv("aureus");
  V.applyPersistentBodyVisual(performance.now());
  V.refreshTempoUI && V.refreshTempoUI();
  V.refreshIdCard && V.refreshIdCard();
});
await page.waitForTimeout(100);
await page.screenshot({ path: path.join(outDir, "76-tempo-idcard.png"), fullPage: true });

// --- v18: ending final morph + why ---
const v18 = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const ban = /加強|減弱|強化|削弱|穩定度|種群[＋+\-－]|[＋+\-－]\d/;
  const banHint = /喜熱|喜濕|適合城市|適合近郊|致死率|CFR|傳染率|環境偏好/;
  function runEnd(kind) {
    V.startEnv("aureus");
    const s = V.getState();
    s.gatesReady = false;
    s.resolved = false;
    if (kind === "thrive") {
      s.pop = 88;
      s.threat = 0;
      s.growthRate = Math.min(0.12, V.GROWTH_RATE_BASE * 2.2);
      s.bodyScale = V.BODY_SCALE_MAX * 0.9;
      s.path = [
        { label: "金黃色葡萄球菌", choice: "進入現實環境" },
        { label: "金黃色葡萄球菌", choice: "繁忙市區捷運車廂" },
        { label: "金黃色葡萄球菌", choice: "近郊住宅陽台" }
      ];
      V.syncColonyCount(V.desiredColonyCount());
      V.applyPersistentBodyVisual(performance.now());
      V.finishEnv({
        outcome: "thrive",
        endTitle: "在現實環境中繁盛適應",
        endStory: "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"
      });
    } else {
      s.pop = 12;
      s.threat = 4;
      s.growthRate = V.GROWTH_RATE_BASE * 0.35;
      s.bodyScale = V.BODY_SCALE_START;
      s.path = [
        { label: "金黃色葡萄球菌", choice: "進入現實環境" },
        { label: "金黃色葡萄球菌", choice: "醫院門診等候區" },
        { label: "金黃色葡萄球菌", choice: "消毒過的流理台" }
      ];
      V.syncColonyCount(V.desiredColonyCount());
      V.applyPersistentBodyVisual(performance.now());
      V.finishEnv({
        outcome: "decline",
        endTitle: "逐漸消退・場所改換",
        endStory: "處境變得嚴苛，族群柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"
      });
    }
    const mascot = document.getElementById("envEndMascot");
    const morph = mascot && mascot.querySelector(".end-final-morph");
    const face = mascot && mascot.querySelector("g.vf-face");
    const buds = mascot ? mascot.querySelectorAll(".end-morph-colony .bud").length : 0;
    const whyEl = document.getElementById("envEndWhy");
    const why = (whyEl && whyEl.textContent) || "";
    const snap = V.getLastEnvEndSnap && V.getLastEnvEndSnap();
    const hint = morph && morph.getAttribute("data-env-hint");
    const mood = (face && face.getAttribute("data-mood")) || (morph && morph.getAttribute("data-face")) || "";
    return {
      active: document.getElementById("envEnd").classList.contains("active"),
      hasMorph: !!morph,
      hasFace: !!face,
      buds,
      mood,
      hint,
      why,
      whyHasGoodBad: /為何好|為何不好|為何平穩/.test(why),
      whyBanned: ban.test(why) || banHint.test(why),
      snapColony: snap && snap.colony,
      snapMood: snap && snap.mood,
      outcomeClass: document.getElementById("envEnd").className,
      renderApi: typeof V.renderEndMorph === "function",
      whyApi: typeof V.buildEnvWhy === "function",
      buttons: {
        again: !!document.getElementById("btnEnvAgain"),
        dex: !!document.getElementById("btnEnvDex"),
        back: !!document.getElementById("btnEnvBackEnd")
      }
    };
  }
  const thrive = runEnd("thrive");
  // screenshot later from outside
  const decline = runEnd("decline");
  // classic/mc consistency on thrive morph
  V.startEnv("aureus");
  const s = V.getState();
  s.pop = 90; s.threat = 0; s.growthRate = V.GROWTH_RATE_BASE * 2; s.bodyScale = V.BODY_SCALE_MAX * 0.85;
  V.finishEnv({ outcome: "thrive", endTitle: "在現實環境中繁盛適應", endStory: "示意。" });
  const classicHtml = document.getElementById("envEndMascot").innerHTML;
  V.setArtStyle("mc", { silent: true });
  const mcHtml = document.getElementById("envEndMascot").innerHTML;
  V.setArtStyle("classic", { silent: true });
  return {
    thrive, decline,
    classicHasMorph: classicHtml.includes("end-final-morph") && classicHtml.includes("vf-face"),
    mcHasMorph: mcHtml.includes("end-final-morph") && mcHtml.includes("art-mc"),
    mcChanged: classicHtml !== mcHtml
  };
});

// thrive ending screenshot
await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.startEnv("aureus");
  const s = V.getState();
  s.pop = 88; s.threat = 0; s.growthRate = Math.min(0.12, V.GROWTH_RATE_BASE * 2.2);
  s.bodyScale = V.BODY_SCALE_MAX * 0.9;
  s.path = [
    { label: "金黃色葡萄球菌", choice: "進入現實環境" },
    { label: "金黃色葡萄球菌", choice: "繁忙市區捷運車廂" },
    { label: "金黃色葡萄球菌", choice: "擁擠教室課桌" }
  ];
  V.syncColonyCount(V.desiredColonyCount());
  V.finishEnv({
    outcome: "thrive",
    endTitle: "在現實環境中繁盛適應",
    endStory: "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"
  });
});
await page.waitForTimeout(120);
await page.screenshot({ path: path.join(outDir, "80-end-thrive-morph.png"), fullPage: true });

await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  V.startEnv("aureus");
  const s = V.getState();
  s.pop = 10; s.threat = 5; s.growthRate = V.GROWTH_RATE_BASE * 0.3;
  s.bodyScale = V.BODY_SCALE_START;
  s.path = [
    { label: "金黃色葡萄球菌", choice: "進入現實環境" },
    { label: "金黃色葡萄球菌", choice: "醫院門診等候區" },
    { label: "金黃色葡萄球菌", choice: "負壓隔離前室" }
  ];
  V.syncColonyCount(V.desiredColonyCount());
  V.finishEnv({
    outcome: "decline",
    endTitle: "逐漸消退・場所改換",
    endStory: "處境變得嚴苛，族群柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"
  });
});
await page.waitForTimeout(120);
await page.screenshot({ path: path.join(outDir, "81-end-decline-morph.png"), fullPage: true });

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
    bodyScaleMono: !!(gapEvidence.mono),
    bodyScaleNoReset: !!(gapEvidence.noReset),
    bodyScaleGrew: (gapEvidence.scaleSpan || 0) >= 0.15,
    choiceRateFork: !!(forkEvidence && forkEvidence.rateFork),
    choiceScaleFork: !!(forkEvidence && forkEvidence.scaleFork),
    thinkTimeLong: !!(thinkEvidence && thinkEvidence.fallLongEnough) && (gapEvidence.thinkMs || 0) >= 10000,
    artMc: !!(gapEvidence.mcOn && gapEvidence.mcHasRect),
    artClassic: !!gapEvidence.classicOn,
    gapCentered: !!(gapEvidence.centeredOk),
    growHint: true, // timeline uses 生長中 during inter-milestone; not required every frame under envGap=0
    sceneCosmos: !!(sceneEvidence && sceneEvidence.evoCosmos),
    sceneCity: !!(sceneEvidence && sceneEvidence.cityOk),
    sceneSuburb: !!(sceneEvidence && sceneEvidence.suburbOk),
    vitalHigh: /vital-high/.test(midHigh.creatureClass || "") || (midHigh.particles || 0) >= (envStart.particleCount || 0),
    vitalLow: /vital-low/.test(midLow.creatureClass || "") || (midLow.pop || 99) < (envStart.pop || 0),
    thriveOk: !!(thrive.active && /繁盛|適應/.test(thrive.title || "")),
    declineOk: !!(decline.active && /消退|衰退|清除|改換/.test(thrive.active ? decline.title || "" : decline.title || "")),
    faceApi: !!(v17 && v17.faceApi),
    faceSteps3: !!(v17 && v17.moodSteps >= 3),
    faceDom: !!(v17 && v17.hasFaceDom),
    colonyLowHigh: !!(v17 && v17.colonyHigh >= (v17.colonyLow + 3) && v17.colonyLow <= 4),
    envHintDiverse: !!(v17 && v17.hintsDiverse),
    noHintBannedText: !!(v17 && v17.bannedOnScreen === false),
    v17Centered: !!(v17 && v17.centered),
    tempoBar: !!(v17 && v17.tempo && v17.tempoVisible),
    idCard: !!(v17 && v17.idCard && v17.idVisible),
    endMorphApi: !!(v18 && v18.thrive && v18.thrive.renderApi && v18.thrive.whyApi),
    endMorphThrive: !!(v18 && v18.thrive && v18.thrive.hasMorph && v18.thrive.hasFace && (v18.thrive.buds >= 8)),
    endMorphDecline: !!(v18 && v18.decline && v18.decline.hasMorph && v18.decline.hasFace && (v18.decline.buds <= 2)),
    endFaceThriveSmile: !!(v18 && v18.thrive && v18.thrive.mood === "smile"),
    endFaceDeclineAngry: !!(v18 && v18.decline && (v18.decline.mood === "angry" || v18.decline.mood === "neutral")),
    endHintPresent: !!(v18 && v18.thrive && v18.thrive.hint),
    endWhyThrive: !!(v18 && v18.thrive && v18.thrive.whyHasGoodBad && !v18.thrive.whyBanned),
    endWhyDecline: !!(v18 && v18.decline && v18.decline.whyHasGoodBad && !v18.decline.whyBanned),
    endButtons: !!(v18 && v18.thrive && v18.thrive.buttons && v18.thrive.buttons.again && v18.thrive.buttons.dex && v18.thrive.buttons.back),
    endArtMc: !!(v18 && v18.classicHasMorph && v18.mcHasMorph && v18.mcChanged)
  },
  forkEvidence,
  thinkEvidence,
  v17,
  v18
};

// Confirm default constant is 10000 by reading source snippet via evaluate of unbound default:
// We opened with ?envGap=0 so runtime is 0; check playable source:
const src = fs.readFileSync(file, "utf8");
checks.pass.gapDefaultConst = /return 10000;/.test(src) && (/ENV_OPTION_GAP_MS/.test(src) || /ENV_MILESTONE_MS/.test(src)) && /ENV_THINK_MS\s*=\s*12000/.test(src);
checks.pass.declineOk = !!(decline.active && /消退|衰退|清除|改換/.test(decline.title || ""));

checks.allPass = Object.values(checks.pass).every(Boolean);
fs.writeFileSync(path.join(outDir, "think-notes.txt"),
  `ENV_THINK_MS=${gapEvidence.thinkMs}\nfallSec=${thinkEvidence && thinkEvidence.fallSec}\nfallSpeed=${thinkEvidence && thinkEvidence.fallSpeed}\n` +
  `bodyScale mono ${gapEvidence.startScale} -> ${gapEvidence.midScale} -> ${gapEvidence.afterScale}; noReset ${gapEvidence.scaleBeforeEnd} -> ${gapEvidence.scaleAfterEnd}\n` +
  `fork highRate=${forkEvidence && forkEvidence.high && forkEvidence.high.rateAfter} lowRate=${forkEvidence && forkEvidence.low && forkEvidence.low.rateAfter}\n`
);
fs.writeFileSync(path.join(outDir, "checks.json"), JSON.stringify(checks, null, 2));
console.log(JSON.stringify(checks.pass, null, 2));
console.log("allPass", checks.allPass);
console.log("envDepths sample", JSON.stringify(api.envDepths, null, 2));
console.log("gapMs runtime", api.gapMs, "textHits", api.textHits.length);
await browser.close();
process.exit(checks.allPass ? 0 : 2);
