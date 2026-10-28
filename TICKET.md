# TICKET — feat/env-diegetic-face-colony-hint

## 目標
現實環境（B 段）主體視覺加強：外觀變化更大、正中、加表情、細胞群數量感、環境偏好用色／形狀暗示（無文字）。

## John 需求（原文意譯）
1. **外觀變化加大**，但主體／群體必須維持畫面正中（不可頂部、不可被標題壓住）。
2. **加臉**：細胞／病毒要有表情；致死率（CFR）升高時，由微笑 → 生氣。
3. **細胞數量**：群體迅速增殖時，畫面可見細胞數增加，仍整體置中。
4. **環境暗示（無文字）**：用顏色或形狀暗示適合哪類環境；同一特徵固定同一色／形（例：喜熱 → 偏紅；僅範例，可自訂一致映射）。畫面上**不得**寫出「喜熱」「適合城市」等文字提示。

## 範圍（路徑 A）
- 在現有 `feat/env-time-grow-persist` 成果上繼續（時間軸 bodyScale、約 10s 選項、12s 思考、growthRate、A/B 場景、classic·mc 保留）。
- 僅改 B 段（現實環境）主體與群體呈現；A 段下落進化可不動，除非共用繪製需微調。
- 禁止：螢幕上文字標籤／HUD 指標條說明環境偏好；致死率數字 HUD（用表情表達即可）。
- 置中硬性：主體與群體錨點在畫面中央。

## 驗收
1. 外觀差異明顯大於現版，但中心不飄、不頂。
2. 臉隨致死／危險感由笑→怒（至少 3 階可辨）。
3. 群體快速生長時可見「更多細胞」，整體仍正中。
4. 同特徵同色／同形；玩家可不靠文字猜偏好環境；畫面上無該類提示文字。
5. classic / Minecraft 切換仍可用；證據截圖含：笑臉、怒臉、低／高細胞數、至少兩種環境色／形暗示。
6. `playable.html` 單檔交付；STATUS=done；checks + verify-phone PASS。

## 路徑
A — Mobile Engineer 在虛擬電腦直接開 Grok Build CLI；自驗寫 STATUS=done。
不開路徑 B。CLI 工房僅緊急備援。

## 筆記路徑
- john_notes: /workspace/scratch/virus-fork-cli-john-notes-v17/
- evidence: /workspace/scratch/virus-fork-cli-evidence-v17/
