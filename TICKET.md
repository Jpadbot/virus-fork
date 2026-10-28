# virus-fork-cli — 現實環境：時間軸持續生長（選項影響；動畫不可還原）（路徑 A）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 英文試玩意見＋截圖  
路徑：A — Mobile Engineer 直開 grok（卡住可直寫）；自驗 STATUS=done。不派 CLI 工房。  
`--cwd /workspace/virus-fork-cli`。自 `main`／`feat/scene-bg-gap-obvious` @ `1b4ff07` 開分支（例 `feat/env-time-grow-persist`）。  
John 截圖：`/workspace/scratch/virus-fork-cli-john-notes-v16/gap-anim-options.png`、`…/gap-growing-label.png`

## 問題（John 原意）
1. 現在波間「生長」動畫**沒意義**：動畫結束後外表／大小**回到跟之前一樣**（演完還原）。
2. 要的是**時間軸**：時間從 **0 秒**起一直走；細胞／病毒**持續長大**（累積、不可還原到開場尺寸）。
3. **每約 10 秒**出現一波選項；**思考／選項停留時間要更長**（不要幾乎來不及想）。
4. 選完後，**之後的生長軌跡受該選擇影響**（興旺／變差／方向分叉須在外表上留下結果，不能選完又長回原樣）。

## 做什麼
### A. 時間驅動的持續生長（B 場景／現實環境）
- 進入現實環境後啟動計時（從 0）；時間持續前進。
- 主體大小／密度／外表隨時間**單調或有意義地累積變化**（可因壞選擇衰退，但那是「選擇後果」，不是動畫 reset）。
- 禁止：gap 動畫播完把 scale／vital／芽體重置回 gap 前狀態。

### B. 選項節奏與思考時間
- 約每 **10 秒**一波選項（時間軸上的里程碑，不是「空等 10 秒演假動作」）。
- 選項出現後的**可思考時間加長**（具體秒數 ME 拍板並寫 DECISIONS；須明顯長於現況，手機上夠讀完 2–4 個選項）。
- 選項期間生長可減速或暫停——拍板寫進 DECISIONS；選定後生長繼續且套用影響。

### C. 選擇影響生長
- 每個選項對後續生長有可感知後果（外表：大小、色澤、疏密、形狀、健康感等；仍無指標條／±數字 HUD）。
- 證據須能展示：同一時間軸上，選 A 與選 B 之後外觀分叉，且不會「變回選前」。

### D. 交付
- 更新 `index.html`，重建 `playable.html`（勿強制瘦身）。
- 保留既有：置中、A 宇宙／B 場所動背景、外表 classic／mc 切換。
- checks allPass；`verify-phone-html playable.html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v16/`（t=0／中段／選後持續變大或分叉；證明無 reset；選項停留更長）。
- push；STATUS=done 無圖回報本席。

## 怎樣算做完
- 生長為時間累積、選後有後果、動畫不再還原；每 ~10s 出選項且思考時間加長；STATUS=done。

## 不要做
不恢復數值 HUD；不上路徑 B；不附圖 SendToAgent；不准讀 `/workspace/notes/`；不強制瘦身；不改路徑 B 票據；不回退置中與 A／B 背景。
