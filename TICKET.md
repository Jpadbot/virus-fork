# TICKET — feat/ending-final-morph-why

## 目標
終局摘要畫面改為顯示「最終完成版」細胞／病毒外觀，並清楚說明這次生長為何好或不好。

## John 需求
1. **Show finish version**：終局主視覺用本局最終形態（含表情階、群體密度、環境色／形暗示等本局累積結果），勿用與過程脫節的靜態示意圖示。
2. **Tell why grow good or bad**：用白話說明本次在現實環境中生長／適應為何成功或失敗（對應選擇與環境匹配、群體消長等），讓玩家看懂因果。

## 現況參考
- `/workspace/scratch/virus-fork-cli-john-notes-v18/ending-current.png`
- `/workspace/scratch/virus-fork-cli-john-notes-v18/NOTES.md`

## 範圍（路徑 A）
- 基底：`feat/env-diegetic-face-colony-hint` @ `3581e39`／tip（表情、群體、hint 色形、頂列／身分卡、時間軸生長）。
- 主要改終局／摘要畫面；過程玩法可不動，除非需把最終狀態傳入終局繪製。
- 保留：再玩一次、物種圖鑑、回終局摘要等按鈕；未解鎖物種不露名。
- 仍禁止：環境偏好文字提示出現在過程 HUD；終局「為何好／壞」可用簡短說明文（這是摘要，不是過程 hint）。

## 驗收
1. 終局主體＝本局最終外觀（表情／群體／色形與結局狀態一致，可辨）。
2. 有「為何好／壞」說明，對得上本局選擇與結果（至少成功一則、偏弱／失敗一則可截圖對照）。
3. classic·mc 切換若影響繪製，終局一致。
4. `playable.html`；證據 `/workspace/scratch/virus-fork-cli-evidence-v18/`；checks + verify-phone PASS；STATUS=done。

## 路徑
A — Mobile Engineer 直開 Grok Build CLI；自驗 STATUS=done。不開路徑 B。

## 筆記
- john_notes: /workspace/scratch/virus-fork-cli-john-notes-v18/
- evidence: /workspace/scratch/virus-fork-cli-evidence-v18/
