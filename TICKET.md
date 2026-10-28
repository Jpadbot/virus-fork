# virus-fork-cli — 演化樹資產接入（圖鑑／說明）（路徑 A／CLI only）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 經 Grok Bot 交演化樹資產給 Mobile Orchestrator  
路徑：A（CLI 工房）；路徑 B 仍暫緩  
`--cwd /workspace/virus-fork-cli`。自 `feat/evo-tree-20` 開新分支（例 `feat/evolution-atlas`）。

## 資產（已拷入專案；來源 scratch 只讀對照）
專案內：`/workspace/virus-fork-cli/assets/evolution-trees/`
- `v1-overview.svg`／`.png` — App 首屏／快速認知
- `v2-endosymbiosis.svg`／`.png` — 課程／說明頁（內共生）
- `v3-detailed.svg`／`.png` — 圖鑑／深入說明  
來源備份：`/workspace/scratch/evolution-trees/`（勿改 scratch；以專案內為準）

## 科學準則（畫面文案與圖不得違背）
- 根＝LUCA
- 細菌域／古菌域二分
- 真核由古菌系衍生＋內共生（**勿**畫成與細菌／古菌並列的第三域）
- 病毒＝多起源側群（虛線側枝；**勿**畫成單一「病毒域」）
- 標籤繁體中文

## 產品定位（必須遵守既有玩法決策）
- **下落對局內**：進化邏輯仍只在幕後；**不要**把樹當科技樹 HUD／對局 UI（John 先前拍板）。
- **本票要做的**：把三版樹做成可開關的 **圖鑑／說明** 層（title 或結算可進），App 內嵌優先 **SVG**。
- 建議：v1 作「認識演化」入口預覽；v2 說明頁；v3 圖鑑深入。互動可點葉片展開細節，**勿一次塞滿**。

## 做什麼（what）
1. 確認 `assets/evolution-trees/` 六檔齊全；`index.html` 以相對路徑引用 SVG（可加輕量 viewer）。
2. Title（或終局）加入口：「演化圖鑑」→ 可切換 v1／v2／v3；支援縮放／捲動；手機可讀。
3. 簡短準則提示（一行繁中即可，勿長文）；標「簡化科普／假設」。
4. 不改壞現有 21 終局下落玩法、禁選字、封面。
5. `verify-phone-html --also-landscape` PASS。
6. 證據：`/workspace/scratch/virus-fork-cli-evidence-v6/`（title 入口、三版圖鑑截圖、DECISIONS、verify）。

## 怎樣算做完（done-when）
1. 可從 title（或明確入口）打開三版 SVG 圖鑑並切換。
2. 對局畫面仍無科技樹面板。
3. 資產路徑相對專案可離線開 `index.html`。
4. STATUS → done；無圖回報 Mobile Orchestrator。

## 不要做（must-not）
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent；不把樹塞進下落 HUD；不改科學準則畫成三域並列或單一病毒域；SendToAgent 不附圖。
