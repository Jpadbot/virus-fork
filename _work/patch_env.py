#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Patch index.html: ENV phase + play UI polish."""
from pathlib import Path

ROOT = Path("/workspace/virus-fork-cli")
INDEX = ROOT / "index.html"
ENV_JS = (ROOT / "_work" / "env_data.js").read_text(encoding="utf-8")
html = INDEX.read_text(encoding="utf-8")

# ---------- CSS: replace #play block start through controls-hint with upgraded styles ----------
OLD_PLAY_CSS = """  #play { position: relative; background: radial-gradient(ellipse at 50% 20%, #152028 0%, var(--bg) 55%); }
  #hud {
    position: absolute; top: 0; left: 0; right: 0; z-index: 5;
    padding: 12px 14px 10px;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(11,18,24,0.9) 0%, rgba(11,18,24,0) 100%);
  }
  #hud .name { font-size: 1.05rem; font-weight: 700; margin: 0; letter-spacing: 0.03em; }
  #hud .latin { font-size: 0.76rem; color: var(--muted); font-style: italic; margin: 2px 0 0; }
  #hud .blurb { font-size: 0.74rem; color: var(--muted); margin: 6px 0 0; max-width: 95%; }
  #stage {
    flex: 1; position: relative; overflow: hidden;
    touch-action: none; -ms-touch-action: none;
    cursor: pointer;
  }
  #creature { touch-action: none; pointer-events: none; }
  .particles {
    position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
  }
  .particles i {
    position: absolute; width: 3px; height: 3px; border-radius: 50%;
    background: rgba(140, 200, 210, 0.35);
    animation: drift linear infinite;
  }
  @keyframes drift {
    from { transform: translateY(-10px); opacity: 0; }
    10% { opacity: 0.6; }
    to { transform: translateY(110vh); opacity: 0; }
  }
  .lane-hint {
    position: absolute; inset: 0; display: flex; pointer-events: none; opacity: 0.07; z-index: 1;
  }
  .lane-hint span { flex: 1; border-right: 1px dashed #fff; }
  .lane-hint span:last-child { border-right: none; }

  #creature {
    position: absolute; width: 86px; height: 86px;
    margin-left: -43px; margin-top: -43px;
    z-index: 3; will-change: left, top;
    filter: drop-shadow(0 0 10px rgba(160, 210, 220, 0.35));
    transition: filter 0.2s;
  }
  #creature.flash { filter: drop-shadow(0 0 18px rgba(255, 230, 160, 0.85)) brightness(1.25); }

  .gate-row {
    position: absolute; left: 0; right: 0; height: 100px;
    display: flex; gap: 8px; padding: 0 10px;
    z-index: 2; will-change: top;
  }
  .gate-row.gates-3 { gap: 6px; padding: 0 8px; }
  .gate-row.gates-4 { gap: 4px; padding: 0 6px; }
  .gate {
    flex: 1; min-width: 0; min-height: 88px;
    border: 2px solid var(--line);
    border-radius: 12px;
    background: var(--gate);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 8px 6px; text-align: center;
    box-shadow: inset 0 0 24px rgba(0,0,0,0.35);
    position: relative;
  }
  .gate-row.gates-4 .gate { min-height: 82px; padding: 6px 3px; border-radius: 10px; }
  .gate::before {
    content: ""; position: absolute; inset: 4px; border-radius: 8px;
    border: 1px dashed rgba(255,255,255,0.08); pointer-events: none;
  }
  .gate.hi {
    border-color: var(--bact);
    background: var(--gate-hi);
    box-shadow: 0 0 16px var(--bact-glow), inset 0 0 20px rgba(224,168,58,0.08);
  }
  .gate.vir-hi {
    border-color: var(--vir);
    background: var(--gate-hi);
    box-shadow: 0 0 16px var(--vir-glow), inset 0 0 20px rgba(94,200,232,0.08);
  }
  .gate .g-icon { width: 28px; height: 28px; margin-bottom: 4px; opacity: 0.9; flex-shrink: 0; }
  .gate-row.gates-4 .g-icon { width: 22px; height: 22px; margin-bottom: 2px; }
  .gate .g-title { font-size: 0.84rem; font-weight: 700; line-height: 1.15; word-break: break-word; }
  .gate-row.gates-3 .g-title { font-size: 0.76rem; }
  .gate-row.gates-4 .g-title { font-size: 0.68rem; }
  .gate .g-sub { font-size: 0.68rem; color: var(--muted); margin-top: 3px; line-height: 1.1; word-break: break-word; }
  .gate-row.gates-3 .g-sub { font-size: 0.62rem; }
  .gate-row.gates-4 .g-sub { font-size: 0.58rem; }

  #toast {
    position: absolute; left: 50%; top: 40%; transform: translate(-50%, -50%);
    z-index: 6; pointer-events: none;
    background: rgba(20, 30, 38, 0.94); border: 1px solid var(--line);
    border-radius: 10px; padding: 10px 16px;
    font-size: 0.92rem; text-align: center; max-width: 86%;
    opacity: 0; transition: opacity 0.2s;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }
  #toast.show { opacity: 1; }

  #controls-hint {
    position: absolute; bottom: calc(10px + var(--safe-bottom)); left: 0; right: 0;
    text-align: center; color: var(--muted); font-size: 0.74rem;
    z-index: 4; pointer-events: none;
  }"""

NEW_PLAY_CSS = """  #play {
    position: relative;
    background:
      radial-gradient(ellipse at 50% 12%, rgba(40,70,88,0.55) 0%, transparent 52%),
      radial-gradient(ellipse at 80% 70%, rgba(30,50,40,0.25) 0%, transparent 45%),
      radial-gradient(ellipse at 50% 20%, #152028 0%, var(--bg) 58%);
  }
  #play::before {
    content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(circle at 20% 30%, rgba(94,200,232,0.06) 0%, transparent 40%),
      radial-gradient(circle at 75% 55%, rgba(224,168,58,0.05) 0%, transparent 42%);
  }
  #play.phase-env {
    background:
      radial-gradient(ellipse at 50% 10%, rgba(48,90,70,0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 80%, rgba(40,70,50,0.28) 0%, transparent 45%),
      radial-gradient(ellipse at 50% 25%, #14241c 0%, #0b1410 60%);
  }
  #play.phase-env::before {
    background:
      radial-gradient(circle at 30% 40%, rgba(120,200,140,0.07) 0%, transparent 42%),
      radial-gradient(circle at 70% 60%, rgba(80,160,120,0.05) 0%, transparent 40%);
  }
  #hud {
    position: absolute; top: 0; left: 0; right: 0; z-index: 5;
    padding: 10px 14px 12px;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(11,18,24,0.92) 0%, rgba(11,18,24,0.35) 70%, rgba(11,18,24,0) 100%);
  }
  #play.phase-env #hud {
    background: linear-gradient(180deg, rgba(10,20,14,0.92) 0%, rgba(10,20,14,0.3) 70%, transparent 100%);
  }
  #hud .name { font-size: 1.02rem; font-weight: 700; margin: 0; letter-spacing: 0.03em; text-shadow: 0 1px 8px rgba(0,0,0,0.45); }
  #hud .latin { font-size: 0.74rem; color: var(--muted); font-style: italic; margin: 2px 0 0; }
  #hud .blurb { font-size: 0.72rem; color: #7a9088; margin: 5px 0 0; max-width: 95%; line-height: 1.35; }
  #hud .phase-tag {
    display: inline-block; margin: 6px 0 0; padding: 2px 8px; border-radius: 999px;
    font-size: 0.68rem; letter-spacing: 0.04em;
    border: 1px solid #3a4a54; color: #a8c0c8; background: rgba(20,30,38,0.55);
  }
  #play.phase-env #hud .phase-tag {
    border-color: #3a5a48; color: #b8e0c0; background: rgba(20,40,28,0.55);
  }
  .pop-wrap { display: none; margin-top: 8px; max-width: 280px; }
  #play.phase-env .pop-wrap { display: block; }
  .pop-label {
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 0.7rem; color: #a8c8b0; margin-bottom: 4px;
  }
  .pop-label strong { color: #e0f0d8; font-size: 0.82rem; font-variant-numeric: tabular-nums; }
  .pop-bar {
    height: 8px; border-radius: 999px; background: rgba(20,36,28,0.85);
    border: 1px solid #2a4a38; overflow: hidden;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.4);
  }
  .pop-fill {
    height: 100%; width: 50%; border-radius: 999px;
    background: linear-gradient(90deg, #3a8a58 0%, #7ecf90 55%, #c8f0b0 100%);
    box-shadow: 0 0 10px rgba(120,200,140,0.35);
    transition: width 0.35s ease, background 0.3s;
  }
  .pop-fill.low { background: linear-gradient(90deg, #8a4a30 0%, #d08850 100%); box-shadow: 0 0 8px rgba(200,120,60,0.3); }
  .pop-fill.crit { background: linear-gradient(90deg, #6a2830 0%, #c06068 100%); box-shadow: 0 0 8px rgba(200,80,80,0.3); }
  #stage {
    flex: 1; position: relative; overflow: hidden;
    touch-action: none; -ms-touch-action: none;
    cursor: pointer; z-index: 1;
  }
  #creature { touch-action: none; pointer-events: none; }
  .particles {
    position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
  }
  .particles i {
    position: absolute; width: 3px; height: 3px; border-radius: 50%;
    background: rgba(140, 200, 210, 0.38);
    box-shadow: 0 0 4px rgba(140,200,210,0.25);
    animation: drift linear infinite;
  }
  #play.phase-env .particles i {
    background: rgba(140, 210, 160, 0.36);
    box-shadow: 0 0 4px rgba(140,210,160,0.22);
  }
  @keyframes drift {
    from { transform: translateY(-10px); opacity: 0; }
    10% { opacity: 0.65; }
    to { transform: translateY(110vh); opacity: 0; }
  }
  .lane-hint {
    position: absolute; inset: 0; display: flex; pointer-events: none; opacity: 0.055; z-index: 1;
  }
  .lane-hint span { flex: 1; border-right: 1px dashed #fff; }
  .lane-hint span:last-child { border-right: none; }

  #creature {
    position: absolute; width: 92px; height: 92px;
    margin-left: -46px; margin-top: -46px;
    z-index: 3; will-change: left, top;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.45)) drop-shadow(0 0 12px rgba(160, 210, 220, 0.4));
    transition: filter 0.2s;
  }
  #creature.flash { filter: drop-shadow(0 0 20px rgba(255, 230, 160, 0.9)) brightness(1.28); }
  #play.phase-env #creature {
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.45)) drop-shadow(0 0 12px rgba(140, 210, 160, 0.42));
  }

  .gate-row {
    position: absolute; left: 0; right: 0; height: 108px;
    display: flex; gap: 8px; padding: 0 10px;
    z-index: 2; will-change: top;
  }
  .gate-row.gates-3 { gap: 6px; padding: 0 8px; }
  .gate-row.gates-4 { gap: 4px; padding: 0 6px; }
  .gate {
    flex: 1; min-width: 0; min-height: 96px;
    border: 2px solid rgba(60,80,90,0.9);
    border-radius: 14px;
    background: linear-gradient(165deg, rgba(28,42,52,0.96) 0%, rgba(16,26,34,0.94) 100%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 8px 6px; text-align: center;
    box-shadow:
      0 8px 20px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.06),
      inset 0 0 28px rgba(0,0,0,0.28);
    position: relative;
    transition: border-color 0.15s, box-shadow 0.15s, transform 0.12s;
  }
  #play.phase-env .gate {
    border-color: rgba(50,80,60,0.9);
    background: linear-gradient(165deg, rgba(24,44,34,0.96) 0%, rgba(14,28,20,0.94) 100%);
  }
  .gate-row.gates-4 .gate { min-height: 88px; padding: 6px 3px; border-radius: 12px; }
  .gate::before {
    content: ""; position: absolute; inset: 4px; border-radius: 10px;
    border: 1px dashed rgba(255,255,255,0.07); pointer-events: none;
  }
  .gate.hi {
    border-color: var(--bact);
    background: linear-gradient(165deg, rgba(48,42,28,0.97) 0%, rgba(28,26,18,0.95) 100%);
    box-shadow: 0 0 18px var(--bact-glow), 0 8px 18px rgba(0,0,0,0.3), inset 0 0 22px rgba(224,168,58,0.1);
  }
  .gate.vir-hi {
    border-color: var(--vir);
    background: linear-gradient(165deg, rgba(28,44,54,0.97) 0%, rgba(16,28,36,0.95) 100%);
    box-shadow: 0 0 18px var(--vir-glow), 0 8px 18px rgba(0,0,0,0.3), inset 0 0 22px rgba(94,200,232,0.1);
  }
  .gate.selected {
    outline: 2px solid #e8efe8; outline-offset: 2px;
    transform: translateY(-2px);
    box-shadow: 0 0 22px rgba(232,239,232,0.22), 0 10px 22px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.04);
  }
  .gate .g-icon { width: 30px; height: 30px; margin-bottom: 4px; opacity: 0.92; flex-shrink: 0; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); }
  .gate-row.gates-4 .g-icon { width: 22px; height: 22px; margin-bottom: 2px; }
  .gate .g-title { font-size: 0.84rem; font-weight: 700; line-height: 1.15; word-break: break-word; color: #eef4f0; }
  .gate-row.gates-3 .g-title { font-size: 0.76rem; }
  .gate-row.gates-4 .g-title { font-size: 0.68rem; }
  .gate .g-sub { font-size: 0.68rem; color: #8fa8a0; margin-top: 4px; line-height: 1.15; word-break: break-word; }
  .gate-row.gates-3 .g-sub { font-size: 0.62rem; }
  .gate-row.gates-4 .g-sub { font-size: 0.58rem; }
  #play.phase-env .gate .g-sub { color: #8fb898; }

  #toast {
    position: absolute; left: 50%; top: 38%; transform: translate(-50%, -50%);
    z-index: 6; pointer-events: none;
    background: rgba(16, 26, 34, 0.94); border: 1px solid rgba(70,90,100,0.8);
    border-radius: 12px; padding: 11px 18px;
    font-size: 0.92rem; text-align: center; max-width: 86%;
    opacity: 0; transition: opacity 0.2s;
    box-shadow: 0 10px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05);
  }
  #toast.show { opacity: 1; }
  #toast.pop-up { border-color: #4a8a58; color: #d0f0d0; }
  #toast.pop-down { border-color: #8a5848; color: #f0d0c0; }

  #controls-hint {
    position: absolute; bottom: calc(10px + var(--safe-bottom)); left: 0; right: 0;
    text-align: center; color: #6a7e78; font-size: 0.72rem;
    z-index: 4; pointer-events: none;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }"""

if OLD_PLAY_CSS not in html:
    raise SystemExit("OLD_PLAY_CSS not found")
html = html.replace(OLD_PLAY_CSS, NEW_PLAY_CSS, 1)

# env end screen CSS before body.hide-subs
ENV_END_CSS = """
  #envEnd {
    padding: 24px 18px calc(24px + var(--safe-bottom));
    justify-content: center; gap: 12px; text-align: center; overflow-y: auto;
    background: radial-gradient(ellipse at 50% 18%, #1a3024 0%, #0b1410 55%);
  }
  #envEnd h2 {
    margin: 0; font-size: 1.35rem; line-height: 1.35;
    color: #c8e8b0; letter-spacing: 0.02em;
  }
  #envEnd.outcome-decline h2 { color: #e8c8a0; }
  #envEnd.outcome-steady h2 { color: #c8d8e0; }
  #envEnd .latin { color: var(--muted); font-style: italic; font-size: 0.9rem; margin: 0; }
  #envEnd .end-mascot {
    width: 140px; height: 140px; margin: 4px auto;
    filter: drop-shadow(0 0 16px rgba(140, 210, 160, 0.4));
  }
  #envEnd .story { color: var(--muted); font-size: 0.88rem; margin: 0; text-align: left; }
  #envEnd .pop-final {
    font-size: 0.85rem; color: #b8d8c0; margin: 0;
    padding: 8px 10px; border-radius: 10px;
    background: rgba(30,50,38,0.5); border: 1px solid #3a5a48;
  }
  #envEnd .env-note-opt {
    font-size: 0.78rem; color: #a8c8b0; margin: 0; text-align: left;
  }

"""
marker = "  body.hide-subs .gate .g-sub { display: none !important; }"
if marker not in html:
    raise SystemExit("hide-subs marker missing")
html = html.replace(marker, ENV_END_CSS + marker, 1)

# ---------- HTML: play HUD ----------
OLD_HUD = """    <div id="hud">
      <p class="name" id="hudName">原始微粒</p>
      <p class="latin" id="hudLatin">Proto-microbe（簡化／假設）</p>
      <p class="blurb" id="hudBlurb">簡化科普／假設：尚未分化成細菌或病毒。</p>
    </div>"""
NEW_HUD = """    <div id="hud">
      <p class="name" id="hudName">原始微粒</p>
      <p class="latin" id="hudLatin">Proto-microbe（簡化／假設）</p>
      <p class="blurb" id="hudBlurb">簡化科普／假設：尚未分化成細菌或病毒。</p>
      <span class="phase-tag" id="hudPhase">進化・實驗室</span>
      <div class="pop-wrap" id="popWrap" aria-live="polite">
        <div class="pop-label"><span>種群穩定度</span><strong id="popVal">55</strong></div>
        <div class="pop-bar"><div class="pop-fill" id="popFill" style="width:55%"></div></div>
      </div>
    </div>"""
if OLD_HUD not in html:
    raise SystemExit("OLD_HUD missing")
html = html.replace(OLD_HUD, NEW_HUD, 1)

OLD_END_BTNS = """    <button type="button" class="btn" id="btnAgain">再玩一次</button>
    <button type="button" class="btn btn-secondary" id="btnDexEnd">物種圖鑑</button>
  </section>

  <section id="dex" class="screen" aria-label="物種圖鑑">"""

NEW_END_BTNS = """    <button type="button" class="btn" id="btnEnterEnv">進入現實環境</button>
    <button type="button" class="btn btn-secondary" id="btnAgain">再玩一次</button>
    <button type="button" class="btn btn-ghost" id="btnDexEnd">物種圖鑑</button>
  </section>

  <section id="envEnd" class="screen" aria-label="環境結局">
    <div class="end-mascot" id="envEndMascot"></div>
    <h2 id="envEndTitle">環境結局</h2>
    <p class="latin" id="envEndLatin"></p>
    <p class="pop-final" id="envEndPop"></p>
    <p class="story" id="envEndStory"></p>
    <p class="env-note-opt" id="envEndNote"></p>
    <p class="disclaimer">簡化科普／假設・休閒探索；非醫療建議或診斷依據。消長為遊戲示意，非真實病程或分數競賽。</p>
    <button type="button" class="btn" id="btnEnvAgain">再玩一次</button>
    <button type="button" class="btn btn-secondary" id="btnEnvDex">物種圖鑑</button>
    <button type="button" class="btn btn-ghost" id="btnEnvBackEnd">回終局摘要</button>
  </section>

  <section id="dex" class="screen" aria-label="物種圖鑑">"""

if OLD_END_BTNS not in html:
    raise SystemExit("OLD_END_BTNS missing")
html = html.replace(OLD_END_BTNS, NEW_END_BTNS, 1)

# ---------- Inject ENV after PROOF ----------
PROOF_MARK = "  const PROOF = buildProof();\n"
if PROOF_MARK not in html:
    raise SystemExit("PROOF mark missing")
html = html.replace(PROOF_MARK, PROOF_MARK + "\n" + ENV_JS + "\n", 1)

# ---------- Extend el object ----------
OLD_EL_TAIL = """    dexList: document.getElementById("dexList"),
    dexDetail: document.getElementById("dexDetail"),
    dexSummary: document.getElementById("dexSummary")
  };"""
NEW_EL_TAIL = """    dexList: document.getElementById("dexList"),
    dexDetail: document.getElementById("dexDetail"),
    dexSummary: document.getElementById("dexSummary"),
    hudPhase: document.getElementById("hudPhase"),
    popWrap: document.getElementById("popWrap"),
    popVal: document.getElementById("popVal"),
    popFill: document.getElementById("popFill"),
    envEnd: document.getElementById("envEnd"),
    envEndMascot: document.getElementById("envEndMascot"),
    envEndTitle: document.getElementById("envEndTitle"),
    envEndLatin: document.getElementById("envEndLatin"),
    envEndPop: document.getElementById("envEndPop"),
    envEndStory: document.getElementById("envEndStory"),
    envEndNote: document.getElementById("envEndNote")
  };"""
if OLD_EL_TAIL not in html:
    raise SystemExit("EL_TAIL missing")
html = html.replace(OLD_EL_TAIL, NEW_EL_TAIL, 1)

# ---------- showScreen ----------
OLD_SHOW = """  function showScreen(name) {
    el.title.classList.toggle("active", name === "title");
    el.play.classList.toggle("active", name === "play");
    el.end.classList.toggle("active", name === "end");
    el.dex.classList.toggle("active", name === "dex");
  }"""
NEW_SHOW = """  function showScreen(name) {
    el.title.classList.toggle("active", name === "title");
    el.play.classList.toggle("active", name === "play");
    el.end.classList.toggle("active", name === "end");
    el.dex.classList.toggle("active", name === "dex");
    if (el.envEnd) el.envEnd.classList.toggle("active", name === "envEnd");
  }"""
html = html.replace(OLD_SHOW, NEW_SHOW, 1)

# ---------- Helper + rewrite startGame / pickOption / finish / tick pieces ----------
# Insert env helpers before startGame
OLD_START = """  function startGame() {
    cancelAnimationFrame(raf);
    clearGates();
    state = {
      nodeId: "seed", segment: 0, x: 0.5, y: 100, vx: 0, fallSpeed: 120,
      path: [{ label: "原始微粒", choice: "開局" }],
      gatesReady: false, resolved: false, pauseUntil: 0, domain: null
    };
    showScreen("play");
    setForm("seed");
    state.x = el.stage.clientWidth / 2;
    spawnGates(LEVELS.seed);
    lastTs = 0;
    pointerActive = false;
    raf = requestAnimationFrame(tick);
    toast(LEVELS.seed.prompt, 1200);
  }

  function pickOption(idx) {
    if (!state || state.resolved) return;
    var level = LEVELS[state.nodeId];
    if (!level || level.end || !level.options) return;
    var opt = level.options[idx];
    if (!opt) return;
    state.resolved = true;
    state.path.push({ label: FORMS[level.form].name, choice: opt.title });
    if (opt.next === "bact_wall" || opt.next === "curve_wall") state.domain = "bact";
    if (opt.next === "vir_capsid" || opt.next === "retro_entry") state.domain = "vir";
    var nextId = opt.next;
    var nextNode = LEVELS[nextId];
    toast(opt.title, 700);
    clearGates();
    state.gatesReady = false;
    if (nextNode && nextNode.end) {
      setForm(nextNode.form);
      state.path.push({ label: FORMS[nextNode.form].name, choice: "終局" });
      state.pauseUntil = performance.now() + 600;
      state.pendingEnd = nextNode;
      return;
    }
    state.nodeId = nextId;
    state.segment += 1;
    setForm(nextNode.form);
    state.pauseUntil = performance.now() + 450;
    state.pendingSpawn = nextId;
  }"""

NEW_START = r"""  var lastEndNode = null;
  var envNotesMap = {};
  var ENV_NOTE_KEY = "virus-fork-env-notes";

  function loadEnvNotes() {
    try {
      var raw = localStorage.getItem(ENV_NOTE_KEY);
      if (raw) envNotesMap = JSON.parse(raw) || {};
    } catch (e) { envNotesMap = envNotesMap || {}; }
    return envNotesMap;
  }
  function saveEnvNote(formId, note) {
    if (!formId || !note) return;
    loadEnvNotes();
    envNotesMap[formId] = note;
    try { localStorage.setItem(ENV_NOTE_KEY, JSON.stringify(envNotesMap)); } catch (e) {}
  }

  function setPhaseUI(phase) {
    el.play.classList.toggle("phase-env", phase === "env");
    if (el.hudPhase) el.hudPhase.textContent = phase === "env" ? "現實環境" : "進化・實驗室";
  }

  function updatePopUI() {
    if (!state || state.phase !== "env") return;
    var p = Math.max(0, Math.min(100, Math.round(state.pop)));
    el.popVal.textContent = String(p);
    el.popFill.style.width = p + "%";
    el.popFill.classList.remove("low", "crit");
    if (p <= 25) el.popFill.classList.add("crit");
    else if (p <= 45) el.popFill.classList.add("low");
  }

  function currentLevel() {
    if (!state) return null;
    if (state.phase === "env") {
      var nodes = getEnvNodes(state.envFormId);
      return nodes ? nodes[state.nodeId] : null;
    }
    return LEVELS[state.nodeId];
  }

  function spawnGatesForCurrent() {
    var level = currentLevel();
    if (!level || !level.options) return;
    spawnGates(level);
  }

  function startGame() {
    cancelAnimationFrame(raf);
    clearGates();
    setPhaseUI("evo");
    state = {
      phase: "evo", envFormId: null, pop: 0,
      nodeId: "seed", segment: 0, x: 0.5, y: 100, vx: 0, fallSpeed: 120,
      path: [{ label: "原始微粒", choice: "開局" }],
      gatesReady: false, resolved: false, pauseUntil: 0, domain: null,
      pendingEnd: null, pendingEnvEnd: null, pendingSpawn: null
    };
    showScreen("play");
    setForm("seed");
    state.x = el.stage.clientWidth / 2;
    spawnGates(LEVELS.seed);
    lastTs = 0;
    pointerActive = false;
    raf = requestAnimationFrame(tick);
    toast(LEVELS.seed.prompt, 1200);
  }

  function startEnv(formId) {
    cancelAnimationFrame(raf);
    clearGates();
    var startId = getEnvStartId(formId);
    if (!startId) { toast("此物種尚無環境關卡", 1200); return; }
    setPhaseUI("env");
    var base = getEnvBasePop(formId);
    var form = FORMS[formId];
    state = {
      phase: "env", envFormId: formId, pop: base,
      nodeId: startId, segment: 0, x: 0.5, y: 100, vx: 0, fallSpeed: 120,
      path: [{ label: form.name, choice: "進入現實環境" }],
      gatesReady: false, resolved: false, pauseUntil: 0, domain: null,
      pendingEnd: null, pendingEnvEnd: null, pendingSpawn: null
    };
    showScreen("play");
    setForm(formId);
    el.hudBlurb.textContent = "現實環境示意：處境選擇影響種群消長。非醫療。";
    state.x = el.stage.clientWidth / 2;
    updatePopUI();
    spawnGatesForCurrent();
    lastTs = 0;
    pointerActive = false;
    raf = requestAnimationFrame(tick);
    var lv = currentLevel();
    toast((lv && lv.prompt) || "現實環境", 1200);
  }

  function applyPopDelta(delta) {
    if (!state || state.phase !== "env") return;
    var before = state.pop;
    state.pop = Math.max(0, Math.min(100, state.pop + (delta || 0)));
    updatePopUI();
    var d = state.pop - before;
    el.toast.classList.remove("pop-up", "pop-down");
    if (d > 0) el.toast.classList.add("pop-up");
    else if (d < 0) el.toast.classList.add("pop-down");
  }

  function finishEnv(endNode) {
    cancelAnimationFrame(raf);
    clearGates();
    pointerActive = false;
    setPhaseUI("evo");
    var formId = state.envFormId;
    var form = FORMS[formId];
    var outcome = endNode.outcome || "steady";
    el.envEnd.classList.remove("outcome-decline", "outcome-steady", "outcome-thrive");
    el.envEnd.classList.add("outcome-" + outcome);
    el.envEndMascot.innerHTML = form.draw();
    el.envEndTitle.textContent = endNode.endTitle;
    el.envEndLatin.textContent = form.latin;
    el.envEndPop.textContent = "最終種群穩定度：" + Math.round(state.pop) + "／100（示意）";
    el.envEndStory.textContent = endNode.endStory;
    var noteLine = "";
    if (outcome === "thrive") {
      var poolId = getEnvPoolId(formId);
      var note = (ENV_NOTES.thrive && ENV_NOTES.thrive[poolId]) || "曾在現實環境段繁盛適應。";
      saveEnvNote(formId, note);
      noteLine = "已選記入環境筆記：「" + note + "」";
    } else {
      noteLine = "（繁盛結局可選記入一句環境筆記；本次未記入。）";
    }
    el.envEndNote.textContent = noteLine;
    showScreen("envEnd");
  }

  function pickOption(idx) {
    if (!state || state.resolved) return;
    var level = currentLevel();
    if (!level || level.end || !level.options) return;
    var opt = level.options[idx];
    if (!opt) return;
    state.resolved = true;

    if (state.phase === "env") {
      var formName = FORMS[state.envFormId].name;
      state.path.push({ label: formName, choice: opt.title });
      applyPopDelta(opt.delta || 0);
      var deltaTxt = (opt.delta > 0 ? "＋" : "") + (opt.delta || 0);
      toast(opt.title + "（" + deltaTxt + "）", 800);
      clearGates();
      state.gatesReady = false;
      if (state.pop <= 0) {
        state.pauseUntil = performance.now() + 550;
        state.pendingEnvEnd = {
          outcome: "decline",
          endTitle: "種群衰退・逐漸清除",
          endStory: "穩定度降至最低，種群柔和消退。可再玩或回圖鑑。非懲罰・非醫療。"
        };
        return;
      }
      var nextId = opt.next;
      var nodes = getEnvNodes(state.envFormId);
      var nextNode = nodes[nextId];
      if (nextNode && nextNode.end) {
        state.pauseUntil = performance.now() + 550;
        state.pendingEnvEnd = nextNode;
        return;
      }
      state.nodeId = nextId;
      state.segment += 1;
      state.pauseUntil = performance.now() + 420;
      state.pendingSpawn = nextId;
      return;
    }

    state.path.push({ label: FORMS[level.form].name, choice: opt.title });
    if (opt.next === "bact_wall" || opt.next === "curve_wall") state.domain = "bact";
    if (opt.next === "vir_capsid" || opt.next === "retro_entry") state.domain = "vir";
    var nextId2 = opt.next;
    var nextNode2 = LEVELS[nextId2];
    toast(opt.title, 700);
    clearGates();
    state.gatesReady = false;
    if (nextNode2 && nextNode2.end) {
      setForm(nextNode2.form);
      state.path.push({ label: FORMS[nextNode2.form].name, choice: "終局" });
      state.pauseUntil = performance.now() + 600;
      state.pendingEnd = nextNode2;
      return;
    }
    state.nodeId = nextId2;
    state.segment += 1;
    setForm(nextNode2.form);
    state.pauseUntil = performance.now() + 450;
    state.pendingSpawn = nextId2;
  }"""

if OLD_START not in html:
    raise SystemExit("OLD_START missing")
html = html.replace(OLD_START, NEW_START, 1)

# finish: keep lastEndNode
OLD_FINISH = """  function finish(endNode) {
    cancelAnimationFrame(raf);
    clearGates();
    pointerActive = false;
    var form = FORMS[endNode.form];
    var fresh = unlockSpecies(endNode.form);
    el.endMascot.innerHTML = form.draw();
    el.endTitle.textContent = endNode.endTitle;
    el.endLatin.textContent = form.latin;
    el.endStory.textContent = endNode.endStory + " " + PROOF.note;
    el.endDexNote.textContent = fresh ? "已記入圖鑑（新解鎖）" : "已記入圖鑑";
    el.endPath.innerHTML = "";
    state.path.forEach(function (p) {
      var li = document.createElement("li");
      li.textContent = p.label + " ← " + p.choice;
      el.endPath.appendChild(li);
    });
    showScreen("end");
  }"""
NEW_FINISH = """  function finish(endNode) {
    cancelAnimationFrame(raf);
    clearGates();
    pointerActive = false;
    setPhaseUI("evo");
    lastEndNode = endNode;
    var form = FORMS[endNode.form];
    var fresh = unlockSpecies(endNode.form);
    el.endMascot.innerHTML = form.draw();
    el.endTitle.textContent = endNode.endTitle;
    el.endLatin.textContent = form.latin;
    el.endStory.textContent = endNode.endStory + " " + PROOF.note;
    el.endDexNote.textContent = fresh ? "已記入圖鑑（新解鎖）" : "已記入圖鑑";
    el.endPath.innerHTML = "";
    state.path.forEach(function (p) {
      var li = document.createElement("li");
      li.textContent = p.label + " ← " + p.choice;
      el.endPath.appendChild(li);
    });
    showScreen("end");
  }"""
html = html.replace(OLD_FINISH, NEW_FINISH, 1)

# highlightGate: use .selected class
OLD_HI = """  var hiIdx = -1;
  function highlightGate() {
    if (!gateRowEl) return;
    var idx = nearestGateIndex();
    if (idx === hiIdx) return;
    hiIdx = idx;
    gateRowEl.querySelectorAll(".gate").forEach(function (g, i) {
      g.style.outline = i === idx ? "2px solid #e8efe8" : "none";
      g.style.outlineOffset = "2px";
    });
  }"""
NEW_HI = """  var hiIdx = -1;
  function highlightGate() {
    if (!gateRowEl) return;
    var idx = nearestGateIndex();
    if (idx === hiIdx) return;
    hiIdx = idx;
    gateRowEl.querySelectorAll(".gate").forEach(function (g, i) {
      g.classList.toggle("selected", i === idx);
    });
  }"""
html = html.replace(OLD_HI, NEW_HI, 1)

# tick: handle pendingEnvEnd + env spawn
OLD_TICK_PENDING = """    if (state.pendingEnd) {
      var e = state.pendingEnd; state.pendingEnd = null; finish(e); return;
    }
    if (state.pendingSpawn) {
      var id = state.pendingSpawn; state.pendingSpawn = null;
      hiIdx = -1;
      spawnGates(LEVELS[id]);
      toast(LEVELS[id].prompt, 1000);
    }"""
NEW_TICK_PENDING = """    if (state.pendingEnd) {
      var e = state.pendingEnd; state.pendingEnd = null; finish(e); return;
    }
    if (state.pendingEnvEnd) {
      var ee = state.pendingEnvEnd; state.pendingEnvEnd = null; finishEnv(ee); return;
    }
    if (state.pendingSpawn) {
      var id = state.pendingSpawn; state.pendingSpawn = null;
      hiIdx = -1;
      if (state.phase === "env") {
        spawnGatesForCurrent();
        var lv = currentLevel();
        toast((lv && lv.prompt) || "", 1000);
      } else {
        spawnGates(LEVELS[id]);
        toast(LEVELS[id].prompt, 1000);
      }
    }"""
html = html.replace(OLD_TICK_PENDING, NEW_TICK_PENDING, 1)

# closeDex: also envEnd
OLD_CLOSE = """  function closeDex() {
    showScreen(dexReturnTo === "end" ? "end" : "title");
  }"""
NEW_CLOSE = """  function closeDex() {
    if (dexReturnTo === "end") showScreen("end");
    else if (dexReturnTo === "envEnd") showScreen("envEnd");
    else showScreen("title");
  }"""
html = html.replace(OLD_CLOSE, NEW_CLOSE, 1)

# showDexDetail: include env note if any
OLD_DEX_DET = """    el.dexDetail.querySelector(".dd-traits").textContent = d.traits || form.blurb;
    el.dexDetail.querySelector(".dd-hist").textContent = d.history || "（簡化科普／假設）";
    el.dexDetail.classList.add("show");
  }"""
NEW_DEX_DET = """    el.dexDetail.querySelector(".dd-traits").textContent = d.traits || form.blurb;
    el.dexDetail.querySelector(".dd-hist").textContent = d.history || "（簡化科普／假設）";
    loadEnvNotes();
    if (envNotesMap[id]) {
      var sec = document.createElement("div");
      sec.className = "dd-sec";
      sec.innerHTML = "<strong>環境筆記</strong><span class=\\"dd-envnote\\"></span>";
      sec.querySelector(".dd-envnote").textContent = envNotesMap[id];
      el.dexDetail.appendChild(sec);
    }
    el.dexDetail.classList.add("show");
  }"""
html = html.replace(OLD_DEX_DET, NEW_DEX_DET, 1)

# event listeners
OLD_LISTEN = """  document.getElementById("btnStart").addEventListener("click", startGame);
  document.getElementById("btnAgain").addEventListener("click", function () { showScreen("title"); });
  document.getElementById("btnDex").addEventListener("click", function () { openDex("title"); });
  document.getElementById("btnDexEnd").addEventListener("click", function () { openDex("end"); });
  document.getElementById("btnDexBack").addEventListener("click", closeDex);"""
NEW_LISTEN = """  document.getElementById("btnStart").addEventListener("click", startGame);
  document.getElementById("btnAgain").addEventListener("click", function () { showScreen("title"); });
  document.getElementById("btnDex").addEventListener("click", function () { openDex("title"); });
  document.getElementById("btnDexEnd").addEventListener("click", function () { openDex("end"); });
  document.getElementById("btnDexBack").addEventListener("click", closeDex);
  document.getElementById("btnEnterEnv").addEventListener("click", function () {
    var formId = (lastEndNode && lastEndNode.form) || (state && state.path && state.path.length && null);
    if (lastEndNode && lastEndNode.form) startEnv(lastEndNode.form);
    else toast("請先完成進化終局", 1000);
  });
  document.getElementById("btnEnvAgain").addEventListener("click", function () { showScreen("title"); });
  document.getElementById("btnEnvDex").addEventListener("click", function () { openDex("envEnd"); });
  document.getElementById("btnEnvBackEnd").addEventListener("click", function () { showScreen("end"); });"""
html = html.replace(OLD_LISTEN, NEW_LISTEN, 1)

# assertNoFakeForks: also check ENV
OLD_ASSERT = """  function assertNoFakeForks() {
    var bad = [];
    Object.keys(LEVELS).forEach(function (id) {
      var n = LEVELS[id];
      if (!n.options) return;
      var seen = {};
      n.options.forEach(function (opt, i) {
        if (seen[opt.next] !== undefined) bad.push(id + " options[" + seen[opt.next] + "] and [" + i + "] share next=" + opt.next);
        seen[opt.next] = i;
      });
    });
    return bad;
  }"""
NEW_ASSERT = """  function assertNoFakeForks() {
    var bad = [];
    function checkTree(tree, label) {
      Object.keys(tree).forEach(function (id) {
        var n = tree[id];
        if (!n || !n.options) return;
        var seen = {};
        n.options.forEach(function (opt, i) {
          if (seen[opt.next] !== undefined) bad.push(label + ":" + id + " options[" + seen[opt.next] + "] and [" + i + "] share next=" + opt.next);
          seen[opt.next] = i;
        });
      });
    }
    checkTree(LEVELS, "evo");
    Object.keys(ENV_POOLS).forEach(function (pid) {
      checkTree(ENV_POOLS[pid].nodes, "env:" + pid);
    });
    return bad;
  }

  function assertEnvCoverage() {
    var missing = [];
    PROOF.endings.forEach(function (id) {
      if (!ENV_POOL_OF[id] || !getEnvStartId(id)) missing.push(id);
    });
    return missing;
  }

  function envDepthStats() {
    var out = {};
    Object.keys(ENV_POOLS).forEach(function (pid) {
      var pool = ENV_POOLS[pid];
      var depths = [];
      function walk(nid, d) {
        var n = pool.nodes[nid];
        if (!n) return;
        if (n.end) { depths.push(d); return; }
        (n.options || []).forEach(function (o) { walk(o.next, d + 1); });
      }
      walk(pool.start, 0);
      out[pid] = {
        min: depths.length ? Math.min.apply(null, depths) : 0,
        max: depths.length ? Math.max.apply(null, depths) : 0,
        samples: depths.length
      };
    });
    return out;
  }"""
html = html.replace(OLD_ASSERT, NEW_ASSERT, 1)

# expose on window
OLD_API = """  window.__VIRUS_FORK__ = {
    FORMS: FORMS, LEVELS: LEVELS, DEX: DEX, PROOF: PROOF,
    startGame: startGame, openDex: openDex, renderDex: renderDex,
    loadUnlocked: loadUnlocked, unlockSpecies: unlockSpecies,
    saveUnlocked: saveUnlocked, probeStorage: probeStorage,
    getStorageState: getStorageState, showDexDetail: showDexDetail,
    getState: function () { return state; },
    forcePick: function (idx) { pickOption(idx); },
    assertNoFakeForks: assertNoFakeForks,
    getShowSubs: getShowSubs, applyShowSubs: applyShowSubs,
    gateIndexFromClientX: gateIndexFromClientX,"""
NEW_API = """  window.__VIRUS_FORK__ = {
    FORMS: FORMS, LEVELS: LEVELS, DEX: DEX, PROOF: PROOF,
    ENV_POOLS: ENV_POOLS, ENV_POOL_OF: ENV_POOL_OF,
    startGame: startGame, startEnv: startEnv, openDex: openDex, renderDex: renderDex,
    loadUnlocked: loadUnlocked, unlockSpecies: unlockSpecies,
    saveUnlocked: saveUnlocked, probeStorage: probeStorage,
    getStorageState: getStorageState, showDexDetail: showDexDetail,
    getState: function () { return state; },
    forcePick: function (idx) { pickOption(idx); },
    assertNoFakeForks: assertNoFakeForks,
    assertEnvCoverage: assertEnvCoverage, envDepthStats: envDepthStats,
    getShowSubs: getShowSubs, applyShowSubs: applyShowSubs,
    gateIndexFromClientX: gateIndexFromClientX,
    getLastEnd: function () { return lastEndNode; },
    finishEnv: finishEnv,"""
html = html.replace(OLD_API, NEW_API, 1)

INDEX.write_text(html, encoding="utf-8")
print("patched", INDEX, "bytes", INDEX.stat().st_size)
print("lines", html.count(chr(10)) + 1)
