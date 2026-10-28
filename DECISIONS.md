# virus-fork-cli — 決策紀錄

## 2026-10-28 真分叉擴充（feat/evo-tree-20）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`--cwd` **直寫** `index.html`（未開 TUI；路徑 A 禁止 Cloud Agent）。
- 互斥終局 **21**（細菌 11＋病毒 10）；`assertNoFakeForks()` 空陣列。
- 選擇關 11；≥3 選 7（63.6%）；4 選關：`vir_capsid`、`vir_env_rna`。
- 多門槽 UI：`gate-row.gates-N`；`nearestGateIndex`／`gateIndexFromClientX` 支援 N>2；觸控以水平均分對齊門，不再寫死左右半＝2。
- 保留禁選字、cover-v1.jpg title、下落玩法；無可見科技樹／無頂部數值 HUD。
- verify-phone-html --also-landscape **PASS**（無 --game）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v5/`

## 2026-10-28 試玩改版（feat/playtest-polish）
- 六互斥終局；禁選字；封面 title。證據 v4。

## 2026-10-27 下落大改（feat/falling-choice）
- 隱藏科技樹；下落＋左右選；兩終局。證據 v3。

## 2026-10-28 演化圖鑑資產接入（feat/evolution-atlas）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`--cwd` **直寫** `index.html`（未開 TUI；路徑 A 禁止 Cloud Agent）。
- 資產六檔納入 `assets/evolution-trees/`（v1／v2／v3 各 svg+png）；`index.html` 相對路徑優先載入 SVG，PNG 作 onerror 後備。
- Title 與終局入口「演化圖鑑」→ 獨立 `#atlas` 畫面；可切 v1 概覽／v2 內共生／v3 深入；縮放 ±／重置＋viewport 捲動；葉片膠囊展開細節（勿一次塞滿）。
- 準則一行：根＝LUCA；細菌／古菌二分；真核＝古菌系＋內共生（非第三域）；病毒＝多起源側枝；標「簡化科普／假設」。
- **對局內仍無科技樹 HUD**；21 終局下落玩法、禁選字、cover-v1.jpg 保留。
- verify-phone-html --also-landscape **PASS**（無 --game；無 maximum-scale=1／user-scalable=no）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v6/`
