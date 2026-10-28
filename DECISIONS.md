# virus-fork-cli — 決策紀錄

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
