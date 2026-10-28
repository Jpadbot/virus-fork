# virus-fork-cli — 決策紀錄

## 2026-10-29 外觀＋表情＋群體＋環境色形＋頂列／側卡（feat/env-diegetic-face-colony-hint）
- John：外觀加大但仍正中；加臉（致死／危險感↑ → 笑→怒）；群體增殖細胞數↑；環境偏好用固定色／形（無文字）；並學 UI 參考圖頂列節奏＋左側身分卡。
- **表情** `faceMood()`：`smile`／`neutral`／`angry`（≥3）。映射：`state.threat`（選 delta<0 +1、>0 −0.5）＋低 `growthRate`／低 pop 加危險階。無 CFR／致死數字 HUD。SVG `g.vf-face` 疊眼＋嘴；`__VIRUS_FORK__.faceMood()`。
- **群體** `syncColonyCount(desired)`：desired ≈ f(growthRate, bodyScale)，約 2→8→14；環繞置中主體。`colonyCount()` 供測。env 關 live-grow 提示時不清空群體。
- **環境暗示** `ENV_HINT_OF`／`envHintKey(formId)`：
  - `heat_resp` 暖橙＋尖角（呼吸道／密閉喜熱向）
  - `wet_gi` 青綠＋波紋（腸胃／水）
  - `skin` 琥珀＋方塊邊（皮膚／接觸）
  - `hospital` 冷青白＋十字（醫院／消毒壓力）
  - `soil` 土褐＋方塊邊（土壤／芽孢）
  僅光暈／外輪廓／粒子色；畫面禁「喜熱」「適合城市」等。
- **頂列 `#tempo-bar`**：階段大字「現實環境」＋細進度（對齊下一里程碑）；暫停、1x／2x／4x、快轉到下一抉擇、自動抉擇。禁止致死／傳染數字。
- **左側 `#id-card`**：頭像＋名稱（未解鎖「？？？」）＋域／處／貌極短欄；可折疊；MRZ 裝飾線。卡上不寫環境偏好句。
- 保留：時間軸 bodyScale／growthRate／10s／12s、置中、A cosmos／B 場所、classic·mc。
- 路徑 A 直寫；證據 v17。

## 2026-10-28 現實環境時間軸持續生長（feat/env-time-grow-persist）
- John：波間「生長中…」動畫結束後大小／外表**還原**＝meaningless。要時間從 0 走、持續累積、選後有後果、思考更長。
- **持久體型** `state.bodyScale`（起 0.55、上限 2.4）；`setLiveGrow(false)`／`endEnvGapGrow` **不得**清 transform 回 1。
- **時間軸** `envT0`／`envElapsed`；`ENV_MILESTONE_MS=10000`（`?envGap=`／`ENV_OPTION_GAP_MS` 別名可覆寫）一波選項。
- **思考** `ENV_THINK_MS=12000`：env 門階段 `fallSpeed = dist/(THINK_MS/1000)`，可讀完 2–4 選項。
- **選項期間**生長 ×0.25（不暫停）；選定後 `applyChoiceGrowth(delta)` 調 `growthRate`／微調 bodyScale＋色澤；**不會變回選前 bodyScale**。
- 波間改「時間累積」；假 gap 表演 reset 路徑移除。保留置中、A cosmos／B 場所、classic／mc、無數值 HUD。
- 路徑 A 直寫；證據 v16。

## 2026-10-28 波間明顯生長＋Minecraft 外表並存（feat/gap-grow-visible-mc-style）
- John：前版 10 秒波間「見唔到變化」→ 改為大幅縮放／色相／分裂芽體（`#colony`），一眼可見。
- 外表：**預設原有**；可切 Minecraft 方塊風（標題 checkbox＋玩時 chip）；`localStorage` 鍵 `virus-fork-art-style`；舊 `draw()` 保留。
- 路徑 A 直寫（不派 CLI 工房）；未動路徑 B 票據檔；未強制瘦身。
- checks allPass；verify PASS；證據 `/workspace/scratch/virus-fork-cli-evidence-v14/`。

## 2026-10-28 現實環境連續生長＋選項按鈕重設計（feat/env-live-grow-ui）
- Grok CLI 無頭探索逾數分鐘未改檔 → 本席直寫收尾（路徑 A 既有備援）。
- **波間**：`tick` 在 env＋`pendingSpawn`／`pendingEnvEnd` 期間呼叫 `updateEnvLiveGrow`（pop 外表插值、呼吸 keyframes、顆粒桶、輕微漂浮）；`?envGap=0` 仍可瞬切（測試用）。
- **門卡**：下落＋環境共用 `.gate` 加大字級與卡片高度。
- **禁**：指標條／±HUD；未強制瘦身（cover-v1 inline）。
- checks allPass；verify-phone-html PASS；證據 `/workspace/scratch/virus-fork-cli-evidence-v13/`。

## 2026-10-28 單檔瘦身（feat/playable-slim）
- 問題：`playable.html` ≈633KB，聊天預覽「檔案過大」；inline cover base64 為主因（原 cover-v1.jpg ≈281KB → base64 ≈375KB）。
- 作法：另存 `cover-playable.jpg`（440×782、JPEG q=62、optimize）≈40KB；`scripts/build-playable.py` 將 `index.html` 的 `cover-v1.jpg` 換成 data URL 產出 `playable.html`。
- 結果：playable **≈312KB**（≤450／理想≤400）；`index.html` 仍用完整 `cover-v1.jpg` 開發。
- 玩法未砍；checks allPass；verify-phone-html PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v12/`

## 2026-10-28 現實環境第二段＋玩時畫面加強（feat/env-phase-ui）
- 接手 CLI WIP `8dd89c3`；Grok CLI 無頭一度因權限中斷，改由本席直寫收尾。
- **環境段**：終局「進入現實環境」→ 依物種分池 `ENV_POOLS`（13 池覆蓋 29 終局）；`pop` 0–100 消長；繁盛／持平／衰退柔和結局；零假分叉。
- **cocci 加深**：最短線原 `0→1b→die`（depth 2）不符 3–5；改經 `e_cocci_2dry` 中繼，三路 next 互異（`2ok`／`die`／`2mid`）。`envDepthOk`：各池 min≥3、max≤5。
- **玩時 UI**：沿 WIP 舞台層次／門卡／環境色溫；禁選字、副標、拖動跟手保留。
- **單檔**：`index.html`＋inline cover → `playable.html`；無樹圖。
- 自驗：`_work/checks.mjs` **allPass=true**；`verify-phone-html --also-landscape` **PASS**（含點進現實環境）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v10/`

## 2026-10-28 圖鑑解鎖修復＋未解鎖不露名＋真實形態（feat/dex-fix-morph）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`grok update`＋`grok models` 已確認。**直寫檔**修 `index.html`（非互動 TUI；路徑 A 禁止 Cloud Agent）。
- **A 解鎖**：`sessionUnlocked` 記憶體 map 永遠先寫；`probeStorage` 偵測 localStorage；失敗時 Title／圖鑑頂部繁中提示（Safari／Chrome 開檔、勿用聊天預覽）；`catch` 不再空吞（`console.warn`＋畫面訊號）。通關後同一頁開圖鑑必見解鎖。
- **B 不露名**：`showDexDetail` 鎖定改「尚未解鎖。走到對應終局後即可記入圖鑑。」；字串／DOM 掃描 29 終局 name／latin → leakCount=0。
- **C 真實形態**：共用 helper（`cocci` 葡萄串、`strepto` 鏈、`rod`／`thickRod`、`spiral`、`vibrioArc`、`sporeRod`、`virion` 棘、`naked`／`hexVir` 二十面體、`adenoVir` 纖維、`herpesVir`、`hivVir` 圓錐核心、`rhabdo` 彈狀、`rotaVir`）；對局公仔與圖鑑同一套。
- **保留**：29 終局、深度 4–7、副標開關、拖動跟手、零假分叉、單檔 playable（cover JPEG inline；無三張樹圖）。
- verify-phone-html --also-landscape **PASS**；證據 `/workspace/scratch/virus-fork-cli-evidence-v9/`。

## 2026-10-28 解鎖式物種圖鑑＋拖動＋加深（feat/species-dex）
- Grok CLI `1.0.72`／模型 `grok-4.7`；`--cwd` **直寫**（未開 TUI；路徑 A 禁止 Cloud Agent）。
- **拿掉三張演化樹**：刪 atlas tab／縮放／SVG｜PNG inline；`assets/evolution-trees/` 留 repo 但不進 `playable.html`。
- **物種圖鑑**：Title／終局入口「物種圖鑑」；列表＝29 終局；未解鎖「？？？」＋剪影；頂部「已解鎖 x／總數 y｜未知 z」；解鎖後特徵＋歷史（DEX 表）；`localStorage` 鍵 `virus-fork-dex`；終局提示「已記入圖鑑」。
- **拖動跟手（E）**：
  - 前：`pointermove` 寫 `state.x` 同時用 dx 推 `keys.left/right`，tick 內再套 vx 阻尼 → 與跟指搶水平、高亮只在 tick → 手感黏／延遲。
  - 後：`pointerActive` 時**只跟指**（`applyPointerX` 立刻 `syncCreatureX`＋`highlightGate`）；拖動中 `vx=0`、不套鍵盤推力；`touch-action:none`＋touch/pointer `preventDefault`；鍵盤 ←→ 僅在非拖動時生效。
- **進化加深（F）**：所有終局深度 **4–7**（`depthMin=4`，結核 7、流感／HIV 6）；中間科學階段關（莢膜／定植／吸入／脫殼等）；`assertNoFakeForks()=[]`。
- **單檔** `playable.html` ≈ 456 KB（僅 cover JPEG inline；無樹圖）≪ 先前 ~486 KB。
- verify-phone-html --also-landscape 對 **playable.html** **PASS**（無 --game）。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v8/`

## 2026-10-28 手機單檔＋科學加深＋副標開關（feat/science-depth-hints）
- 見 git 歷史；已被本分支圖鑑改版取代樹圖交付。

## 更早
- evolution-atlas／evo-tree-20／playtest-polish／falling-choice：見既有 commits。
