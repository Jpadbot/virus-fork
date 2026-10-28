import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";

const file = path.resolve("/workspace/virus-fork-cli/playable.html");
const url = "file://" + file;
const outDir = "/workspace/scratch/virus-fork-cli-evidence-v10";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--allow-file-access-from-files"]
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(url, { waitUntil: "domcontentloaded" });

const api = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const fake = V.assertNoFakeForks();
  const cov = V.assertEnvCoverage();
  const depths = V.envDepthStats();
  const proof = V.PROOF;
  return {
    endingCount: proof.endingCount,
    endings: proof.endings,
    depthMin: proof.depthMin,
    depthMax: proof.depthMax,
    fakeForks: fake,
    envMissing: cov,
    envDepths: depths,
    poolCount: Object.keys(V.ENV_POOLS).length,
    mapped: Object.keys(V.ENV_POOL_OF).length
  };
});

await page.evaluate(() => { try { localStorage.removeItem("virus-fork-dex"); } catch(e){} });
await page.reload({ waitUntil: "domcontentloaded" });
await page.click("#btnDex");
await page.waitForTimeout(300);
const leak = await page.evaluate(() => {
  const V = window.__VIRUS_FORK__;
  const names = V.PROOF.endings.map(id => V.FORMS[id].name);
  V.showDexDetail(V.PROOF.endings[0]);
  const detail = document.getElementById("dexDetail").innerText || "";
  const list = document.getElementById("dexList").innerText || "";
  let leakCount = 0;
  const hits = [];
  const unlocked = V.loadUnlocked();
  names.forEach(n => {
    const id = V.PROOF.endings.find(eid => V.FORMS[eid].name === n);
    if (!unlocked[id] && detail.includes(n)) { leakCount++; hits.push("detail:"+n); }
    if (!unlocked[id] && list.includes(n)) { leakCount++; hits.push("list:"+n); }
  });
  return { leakCount, hits, detailSnippet: detail.slice(0, 160) };
});

await page.click("#btnDexBack");
await page.waitForTimeout(100);

const pathResult = await page.evaluate(async () => {
  const V = window.__VIRUS_FORK__;
  function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
  V.startGame();
  await sleep(60);
  const target = "aureus";
  const parent = {};
  const q = ["seed"];
  const seen = { seed: true };
  while (q.length) {
    const id = q.shift();
    const n = V.LEVELS[id];
    if (!n || n.end) continue;
    for (const opt of (n.options || [])) {
      if (!seen[opt.next]) {
        seen[opt.next] = true;
        parent[opt.next] = id;
        q.push(opt.next);
      }
    }
  }
  let cur = target;
  const chain = [];
  while (cur && cur !== "seed") {
    chain.push(cur);
    cur = parent[cur];
  }
  chain.reverse();

  async function flush() {
    for (let i=0;i<25;i++) {
      const s = V.getState();
      if (s) s.pauseUntil = 0;
      await sleep(25);
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
    const idx = level.options.findIndex(o => o.next === nid);
    if (idx < 0) return { error: "no opt "+nid+" from "+st.nodeId };
    V.fallInto(idx);
    await sleep(40);
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
await page.waitForTimeout(450);
const envStart = await page.evaluate(() => {
  const s = window.__VIRUS_FORK__.getState();
  return { phase: s && s.phase, pop: s && s.pop, nodeId: s && s.nodeId, playPhase: document.getElementById("play").classList.contains("phase-env") };
});
await page.screenshot({ path: path.join(outDir, "20-env-play-start.png"), fullPage: true });

async function envPick(idx) {
  await page.evaluate((i) => {
    const V = window.__VIRUS_FORK__;
    const s = V.getState();
    if (s) { s.pauseUntil = 0; }
    V.fallInto(i);
  }, idx);
  await page.waitForTimeout(80);
  for (let k=0;k<20;k++) {
    await page.evaluate(() => { const s = window.__VIRUS_FORK__.getState(); if (s) s.pauseUntil = 0; });
    const status = await page.evaluate(() => {
      if (document.getElementById("envEnd").classList.contains("active")) return "end";
      const s = window.__VIRUS_FORK__.getState();
      if (s && s.gatesReady && !s.resolved && !s.pendingEnvEnd && !s.pendingSpawn) return "ready";
      return "wait";
    });
    if (status === "end" || status === "ready") return status;
    await page.waitForTimeout(40);
  }
  return "timeout";
}

await envPick(0);
const midPop = await page.evaluate(() => window.__VIRUS_FORK__.getState()?.pop);
await page.screenshot({ path: path.join(outDir, "21-env-pop-growth.png"), fullPage: true });
await envPick(0);
await envPick(0);
await page.waitForTimeout(250);
const thrive = await page.evaluate(() => ({
  active: document.getElementById("envEnd").classList.contains("active"),
  title: document.getElementById("envEndTitle")?.textContent,
  pop: document.getElementById("envEndPop")?.textContent,
  outcome: document.getElementById("envEnd").className
}));
await page.screenshot({ path: path.join(outDir, "30-env-thrive.png"), fullPage: true });

await page.click("#btnEnvBackEnd");
await page.waitForTimeout(200);
await page.click("#btnEnterEnv");
await page.waitForTimeout(300);
await envPick(2);
const midPop2 = await page.evaluate(() => window.__VIRUS_FORK__.getState()?.pop);
await page.screenshot({ path: path.join(outDir, "22-env-pop-decline.png"), fullPage: true });
await envPick(1);
await page.waitForTimeout(250);
let decline = await page.evaluate(() => ({
  active: document.getElementById("envEnd").classList.contains("active"),
  title: document.getElementById("envEndTitle")?.textContent,
  outcome: document.getElementById("envEnd").className,
  pop: window.__VIRUS_FORK__.getState()?.pop
}));
for (let i=0;i<6 && !decline.active;i++) {
  await envPick(1);
  decline = await page.evaluate(() => ({
    active: document.getElementById("envEnd").classList.contains("active"),
    title: document.getElementById("envEndTitle")?.textContent,
    outcome: document.getElementById("envEnd").className,
    pop: window.__VIRUS_FORK__.getState()?.pop
  }));
}
await page.screenshot({ path: path.join(outDir, "31-env-decline.png"), fullPage: true });

await page.click("#btnEnvAgain");
await page.waitForTimeout(100);
await page.click("#btnStart");
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, "40-play-ui-portrait.png"), fullPage: true });

await page.setViewportSize({ width: 844, height: 390 });
await page.waitForTimeout(250);
await page.screenshot({ path: path.join(outDir, "41-play-ui-landscape.png"), fullPage: true });

function envDepthOk(depths) {
  const vals = Object.values(depths);
  if (!vals.length) return false;
  return vals.every(d => d.min >= 3 && d.max <= 5);
}

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
  nameLeakHits: leak.hits,
  pathResult,
  envStart,
  midPop,
  midPop2,
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
    popGrew: typeof midPop === "number" && midPop > (envStart.pop || 0),
    thriveOk: !!(thrive.active && /繁盛|適應/.test(thrive.title || "")),
    declineOk: !!(decline.active && /衰退|清除/.test(decline.title || ""))
  }
};
checks.allPass = Object.values(checks.pass).every(Boolean);
fs.writeFileSync(path.join(outDir, "checks.json"), JSON.stringify(checks, null, 2));
fs.writeFileSync(path.join(outDir, "checks-raw.json"), JSON.stringify({ api, leak, pathResult, envStart, midPop, midPop2, thrive, decline }, null, 2));
console.log(JSON.stringify(checks.pass, null, 2));
console.log("allPass", checks.allPass);
console.log("envDepths", JSON.stringify(api.envDepths, null, 2));
await browser.close();
process.exit(checks.allPass ? 0 : 2);
