# virus-fork-cli — 波間仍看不見＋A／B 場景專屬動畫背景（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩＋截圖（Pages playable；方塊風／現實環境）  
路徑：A — Mobile Engineer 直開 grok（卡住可直寫）；自驗 STATUS=done。不派 CLI 工房。  
`--cwd /workspace/virus-fork-cli`。自 `feat/gap-grow-visible-mc-style`／`main` @ `165c01e` 開分支（例 `feat/scene-bg-gap-obvious`）。  
John 截圖（只路徑、勿附圖）：`/workspace/scratch/virus-fork-cli-john-notes-v15/gap-still-no-change-1.png`、`…/gap-still-no-change-2.png`

## 做什麼

### 1）波間生長：John 仍「看不到」——必須修到無可辯駁
- 現況：v14 後 John 仍回「看不到」；截圖為現實環境＋外表方塊風，畫面幾乎靜止感。
- 要求：約 10 秒波間，**無需說明也能看出**持續變化（建議同時動：公仔／菌落明顯變大變小或分裂、背景微動、顆粒明顯增減）。原有與方塊風兩種外表都要成立。
- 自驗標準：證據連續幀差異大到截圖並排一眼可辨；必要時加極短「生長中」視覺提示（非數值 HUD）。

### 2）場景定義（John 拍板）
- **A 場景**＝開局依選擇進化的那段（下落／進化樹遊玩）：畫面動畫背景＝**混沌宇宙**（星塵、霧氣、緩慢視差等，持續動，非靜圖）。
- **B 場景**＝通關成為物種後的**現實環境**：每個場所／處境配**獨有動畫背景**。
  - 例：城市→城市動畫背景；郊區→郊區動畫背景；其餘場所（室內、野外、宿主相關等）各自可辨、可持續微動。
  - 切換選項／場所時背景要跟著換，不能整段共用同一塊深色漸層。

### 3）交付
- 更新 `index.html`，重建 `playable.html`（勿強制瘦身）。
- checks allPass；`verify-phone-html playable.html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v15/`（波間前後明顯對比；A 混沌宇宙；B 至少城市＋郊區兩套不同動畫背景；方塊風與原有）。
- push 分支；STATUS=done 無圖回報本席。

## 怎樣算做完
- 波間「一眼有在變」；A＝宇宙動背景；B＝依場所換獨有動背景；STATUS=done。

## 不要做
不恢復數值 HUD；不砍 Minecraft／原有切換；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`；不強制瘦身；不改路徑 B 票據檔。
