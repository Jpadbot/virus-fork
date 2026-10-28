# virus-fork-cli — 解鎖式物種圖鑑（取代三張樹圖）（路徑 A／CLI only）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John  
路徑：A；路徑 B 仍暫緩  
`--cwd /workspace/virus-fork-cli`。自 `feat/science-depth-hints` 開新分支（例 `feat/species-dex`）。

## John 原文要點
1. **新增圖鑑功能**；**不要**那三張演化樹圖（v1／v2／v3 overview／endosymbiosis／detailed）。
2. 玩家解鎖一種細菌／病毒後，圖鑑才顯示該物種。
3. 玩家要看得出**還有多少種未知**未解鎖。
4. 解鎖後可看該物種的**特徵**與**歷史**（簡化科普／假設；非醫療）。

## 做什麼（what）

### A. 拿掉三張樹圖
- 刪除／停用 atlas 的三版 tab、縮放樹圖、inline 的三張 SVG／PNG data URL（可大幅縮小單檔）。
- `assets/evolution-trees/` 可留在 repo 但不進 `playable.html` 交付。

### B. 解鎖式物種圖鑑（主交付仍為單檔 `playable.html`）
- Title／終局保留「圖鑑」入口（文案可改「物種圖鑑」）。
- 圖鑑列表＝全部終局物種（現有 ≥29；與 `LEVELS` end 節點對齊）。
- **未解鎖**：顯示為「？？？」或剪影格；可點但只見「尚未解鎖」；頂部／摘要顯示「已解鎖 x／總數 y」與「未知 z」。
- **已解鎖**：顯示名稱（與終局「你已成為『某某』」一致）、細菌／病毒標籤、簡筆公仔（可用現有 FORMS SVG 或簡化 icon）、**特徵**、**歷史**（各 2–4 句繁中，標簡化科普／假設）。
- **解鎖條件**：該局走到該終局即解鎖；`localStorage` 持久（鍵名自定，例 `virus-fork-dex`）。
- 終局畫面可提示「已記入圖鑑」。

### C. 資料
- 為每個 end 節點加 `dex: { traits, history, kind }`（或平行 `DEX` 表）；內容須科學向簡化，勿捏造假醫學宣稱。
- 對局玩法、29（或以上）互斥終局、副標開關、禁選字、封面、科學加深路線**保留**；零假分叉。

### D. 驗證與證據
- 重建／更新單檔 `playable.html`（無三張樹圖 inline）。
- `verify-phone-html playable.html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v8/`（未解鎖列表、解鎖後詳情、進度 x／y、終局記入提示、DECISIONS、checks）。


### E. 拖動手感（John 追加）
- 下落選門的**拖動／滑移不夠順滑**——修觸控拖動與跟手（含 `touch-action`、move 節流／直接跟指、減少卡頓與門高亮延遲）。
- 鍵盤 ←→ 不受影響；禁選字仍在且不擋拖動。
- 證據加：拖動跟手短說明或前後對照筆記（DECISIONS）。

## 怎樣算做完
1. 圖鑑無三張演化樹圖；改為物種解鎖格。
2. 未解鎖可見剩餘未知數；解鎖可見特徵＋歷史。
3. 拖動選門跟手明顯改善。
4. 單檔手機可開；STATUS=done；無圖回報本席。

## 不要做
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent；對局不塞科技樹；不做假分叉；SendToAgent 不附圖。
