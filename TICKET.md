# virus-fork-cli — 波間生長要「看得見」＋ Minecraft 外表（保留原有）（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩（回覆線上 playable）：「果10秒見唔到任何變化」；「外表嘗試用 Minecraft 風格，但同時保留原有嘅」  
路徑：A — Mobile Engineer 直開 Grok Build CLI（卡住可直寫）；自驗 STATUS=done。不派 CLI 工房。路徑 B 另票並行，**勿改** `TICKET-PATH-B.md`／`STATUS-PATH-B.md`。  
`--cwd /workspace/virus-fork-cli`。自 `feat/env-live-grow-ui` @ `1b00313`／`main` @ `e2efe7f` 開分支（例 `feat/gap-grow-visible-mc-style`）。

## 做什麼

### A. 現實環境 10 秒波間：變化必須肉眼明顯
- 現況：John 在約 10 秒波間**完全看不出變化**（前一版 live-grow 不夠顯眼）。
- 要求：波間必須有**持續、清楚可見**的生長／變化（大小、形狀、細胞疏密、色澤、分裂／蠕動／呼吸幅度等），無需盯著才察覺。
- 仍用外表表達；禁止指標條／±數字 HUD。
- 證據需能對比波間前／中／後的明顯差異（截圖或短說明）。

### B. 外表：Minecraft 風格＋保留原有
- **新增** Minecraft 風格外表（方塊感／像素風微生物呈現，貼合物種可辨）。
- **同時保留**原有（現有矢量／寫實向）外表，不可刪掉舊風格。
- 玩家可切換（設定開關或對等清楚入口）；預設可維持原有，或首次提示可切——拍板權歸 ME，須在 DECISIONS 寫明。
- 兩種風格在進化段與現實環境段皆可用；波間生長在兩風格下都要看得見。

### C. 交付
1. 更新 `index.html`，重建 `playable.html`（勿強制瘦身）。
2. checks allPass；`verify-phone-html playable.html --also-landscape` PASS。
3. 證據：`/workspace/scratch/virus-fork-cli-evidence-v14/`（波間明顯變化；原有風格；Minecraft 風格；切換入口）。
4. push 分支；STATUS=done 後無圖回報本席（路徑／分支／commit）。

## 怎樣算做完
- John 級標準：波間 10 秒「一眼就覺得有在變」；Minecraft 與原有並存可切；STATUS=done。

## 不要做
不恢復數值 HUD；不砍長局節奏概念；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`；不強制瘦身；不覆蓋路徑 B 票據檔。
