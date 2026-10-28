# virus-fork-cli — 現實環境連續生長＋選項按鈕重設計（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩意見（粵語口述）  
路徑：A — Mobile Engineer 於虛擬電腦直開 Grok Build CLI；自驗並寫 STATUS=done。不派 CLI 工房。路徑 B 暫緩。  
`--cwd /workspace/virus-fork-cli`。自目前 `main`（含環境長局 playable ≈633KB）開新分支（例 `feat/env-live-grow-ui`）。一票只走路徑 A。

## 做什麼

### A. 現實環境：10 秒內持續生長／變化（外表表達）
- John 原意：**不是**站著等 10 秒再跳出選項；而是這段約 10 秒內，物種／細胞要**不斷自行生長、變化**。
- 若有生長／消長／狀態變化，一律用**外表、外觀**表達（表情、形體、細胞疏密、色澤、大小等既有視覺語言），延續「不要指標條／數字 HUD」方針。
- 選項波次節奏可維持約每 10 秒一波（`ENV_OPTION_GAP_MS` 概念可留），但**波間必須有可見的連續動態**，不可靜止僵住。
- 玩法仍為休閒探索；現實處境選項文案方向不變。

### B. 選項按鈕全面重設計
- **所有**選項按鈕（下落選關與現實環境選項皆含）改設計：更美觀、專業，減少「臨時 UI」感。
- **字再大一點**（可讀性優先，尤其手機）。
- 版面／門卡質感對齊既有「玩時畫面要更專業」方向；勿堆砌 AI 感花俏。

### C. 交付
1. 更新 `index.html`，重建 `playable.html`（勿再強制瘦身；John 已否決瘦身）。
2. `verify-phone-html playable.html --also-landscape` PASS；相關 checks allPass。
3. 證據目錄：`/workspace/scratch/virus-fork-cli-evidence-v13/`（波間連續生長動態截圖或短錄說明、新按鈕樣式、環境選一波）。
4. 推本地分支；STATUS=done 後無圖回報本席（只給路徑）。本席收成轉 John；若 John 要上 GitHub／Pages 再另推。

## 怎樣算做完
- 現實環境波間可見連續生長／變化（外表）；選項按鈕重設計且字更大；功能不回退；STATUS=done。

## 不要做
- 不恢復指標條／±數字 HUD；不砍長局與現實處境文案方向；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`；不強制單檔瘦身。
