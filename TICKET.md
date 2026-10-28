# virus-fork-cli — 波間仍看不見＋A／B 場景動背景＋生物置中（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩＋截圖；追加「隻嘢要擺喺畫面正中間，而家係上方同文字重疊」  
路徑：A — Mobile Engineer 直開 grok（卡住可直寫）；自驗 STATUS=done。不派 CLI 工房。  
`--cwd /workspace/virus-fork-cli`。分支 `feat/scene-bg-gap-obvious`（自 main @ `165c01e`）。  
John 截圖路徑：`/workspace/scratch/virus-fork-cli-john-notes-v15/gap-still-no-change-1.png`、`…/gap-still-no-change-2.png`

## 做什麼

### 1）波間生長：John 仍「看不到」——必須修到無可辯駁
- 現況：v14 後仍回「看不到」；截圖為現實環境＋方塊風，幾乎靜止感。
- 約 10 秒波間須**一眼可見**持續變化（菌落明顯縮放／分裂、背景微動、顆粒增減等）。原有與方塊風皆要成立。
- 證據連續幀並排一眼可辨；必要時加非數值的「生長中」視覺提示。

### 2）A／B 場景專屬動畫背景（John 拍板）
- **A 場景**＝開局進化／下落選擇：動畫背景＝**混沌宇宙**（持續動，非靜圖）。
- **B 場景**＝現實環境：每個場所／處境配**獨有動畫背景**（城市→城市；郊區→郊區；其餘各自可辨）。切換場所時背景跟著換，禁止整段共用同一深色漸層。

### 3）生物／菌落置中（本回合追加）
- 主體（公仔／菌落／方塊風集群）須在**畫面正中央**（視覺中心），不得偏上與標題／狀態文案重疊。
- 適用 A、B 兩場景與兩種外表；頂部 HUD／說明改避讓或下移層級，主體優先置中。
- 對齊 John 截圖問題：現況偏上與「幽門螺旋桿菌」等文字重疊。

### 4）交付
- 更新 `index.html`，重建 `playable.html`（勿強制瘦身）。
- checks allPass；`verify-phone-html playable.html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v15/`（波間對比；A 宇宙；B 城市＋郊區；置中無重疊；兩外表）。
- push；STATUS=done 無圖回報本席。

## 怎樣算做完
波間一眼在變；A＝宇宙動背景；B＝依場所換動背景；主體正中不擋字；STATUS=done。

## 不要做
不恢復數值 HUD；不砍外表切換；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`；不強制瘦身；不改路徑 B 票據檔。
