# virus-fork-cli — 單檔瘦身（手機聊天可預覽／可開）（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 截圖「檔案過大，無法預覽」  
路徑：A — Mobile Engineer 直開 Grok Build CLI；自驗 STATUS=done。不派 CLI 工房。路徑 B 暫緩。  
`--cwd /workspace/virus-fork-cli`。自 `feat/env-long-diegetic` @ `ea45442` 開分支（例 `feat/playable-slim`）。

## 問題
- 現況 `playable.html` ≈ **633 KB**；聊天內建預覽報「檔案過大，無法預覽」。
- 先前約 470 KB 級尚可在手機流程打開；inline cover JPEG base64 約 **375 KB**，為主因。
- John 截圖：`/workspace/scratch/virus-fork-cli-john-notes-v11/preview-too-large.png`

## 做什麼
1. **瘦身單檔** `playable.html`：重壓／縮小封面（或改較小 WebP／更低 JPEG 品質與解析度）、去掉無用空白與重複；目標 **≤ 450 KB**（理想 ≤ 400 KB），且手機 Safari／Chrome 開 file 仍正常。
2. **玩法與畫面功能不砍**：長局環境、10 秒間隔、現實處境選項、視覺消長、圖鑑、29 終局等全部保留。
3. 重建流程寫進 DECISIONS（如何從 index＋cover 產出 playable）。
4. `verify-phone-html playable.html --also-landscape` PASS；checks 回歸 allPass。
5. 證據：`/workspace/scratch/virus-fork-cli-evidence-v12/`（檔案大小前後、封面可辨、首屏／環境仍可玩、checks）。

## 怎樣算做完
- `playable.html` ≤ 450 KB；功能不回退；STATUS=done；無圖回報本席。

## 不要做
不改產品玩法範圍；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`。
