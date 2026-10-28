# virus-fork-cli — 決策紀錄

## 2026-10-28 現實環境第二段＋玩時畫面加強（feat/env-phase-ui）
- 接手 CLI WIP `8dd89c3`；Grok CLI 無頭一度因權限中斷，改由本席直寫收尾。
- **環境段**：終局「進入現實環境」→ 依物種分池 `ENV_POOLS`（13 池覆蓋 29 終局）；`pop` 0–100 消長；繁盛／持平／衰退柔和結局；零假分叉。
- **cocci 加深**：最短線原 `0→1b→die`（depth 2）不符 3–5；改經 `e_cocci_2dry` 中繼，三路 next 互異（`2ok`／`die`／`2mid`）。`envDepthOk`：各池 min≥3、max≤5。
- **玩時 UI**：沿 WIP 舞台層次／門卡／環境色溫；禁選字、副標、拖動跟手保留。
- **單檔**：`index.html`＋inline cover → `playable.html`；無樹圖。
- 自驗：`_work/checks.mjs` **allPass=true**；`verify-phone-html --also-landscape` **PASS**（含點進現實環境）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v10/`

## 2026-10-28 圖鑑解鎖修復＋未解鎖不露名＋真實形態（feat/dex-fix-morph）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`grok update`＋`grok models` 已確認。**直寫檔**修 `index.html`（非互動 TUI；路徑 A 禁止 Cloud Agent）。
- **A 解鎖**：`sessionUnlocked` 記憶體 map 永遠先寫；`probeStorage` 偵測 localStorage；失敗時 Title／圖鑑頂部繁中提示（Safari／Chrome 開檔、勿用聊天預覽）；`catch` 不再空吞（`console.warn`＋畫面訊號）。通關後同一頁開圖鑑必見解鎖。
- **B 不露名**：`showDexDetail` 鎖定改「尚未解鎖。走到對應終局後即可記入圖鑑。」；字串／DOM 掃描 29 終局 name／latin → leakCount=0。
- **C 真實形態**：共用 helper（`cocci` 葡萄串、`strepto` 鏈、`rod`／`thickRod`、`spiral`、`vibrioArc`、`sporeRod`、`virion` 棘、`naked`／`hexVir` 二十面體、`adenoVir` 纖維、`herpesVir`、`hivVir` 圓錐核心、`rhabdo` 彈狀、`rotaVir`）；對局公仔與圖鑑同一套。
- **保留**：29 終局、深度 4–7、副標開關、拖動跟手、零假分叉、單檔 playable（cover JPEG inline；無三張樹圖）。
- verify-phone-html --also-landscape **PASS**；證據 `/workspace/scratch/virus-fork-cli-evidence-v9/`。

## 2026-10-28 解鎖式物種圖鑑＋拖動＋加深（feat/species-dex）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`--cwd` **直寫**（未開 TUI；路徑 A 禁止 Cloud Agent）。
- **拿掉三張演化樹**：刪 atlas tab／縮放／SVG｜PNG inline；`assets/evolution-trees/` 留 repo 但不進 `playable.html`。
- **物種圖鑑**：Title／終局入口「物種圖鑑」；列表＝29 終局；未解鎖「？？？」＋剪影；頂部「已解鎖 x／總數 y｜未知 z」；解鎖後特徵＋歷史（DEX 表）；`localStorage` 鍵 `virus-fork-dex`；終局提示「已記入圖鑑」。
- **拖動跟手（E）**：
  - 前：`pointermove` 寫 `state.x` 同時用 dx 推 `keys.left/right`，tick 內再套 vx 阻尼 → 與跟指搶水平、高亮只在 tick → 手感黏／延遲。
  - 後：`pointerActive` 時**只跟指**（`applyPointerX` 立刻 `syncCreatureX`＋`highlightGate`）；拖動中 `vx=0`、不套鍵盤推力；`touch-action:none`＋touch/pointer `preventDefault`；鍵盤 ←→ 僅在非拖動時生效。
- **進化加深（F）**：所有終局深度 **4–7**（`depthMin=4`，結核 7、流感／HIV 6）；中間科學階段關（莢膜／定植／吸入／脫殼等）；`assertNoFakeForks()=[]`。
- **單檔** `playable.html` ≈ 456 KB（僅 cover JPEG inline；無樹圖）≪ 先前 ~486 KB。
- verify-phone-html --also-landscape 對 **playable.html** **PASS**（無 --game）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v8/`

## 2026-10-28 手機單檔＋科學加深＋副標開關（feat/science-depth-hints）
- 見 git 歷史；已被本分支圖鑑改版取代樹圖交付。

## 更早
- evolution-atlas／evo-tree-20／playtest-polish／falling-choice：見既有 commits。
