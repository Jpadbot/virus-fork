# virus-fork-cli — 手機單檔＋科學加深＋副標開關（路徑 A／CLI only）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩（手機開唔到；演化要科學；關卡可隨複雜度加長；可關按鈕第二行）  
路徑：A；路徑 B 仍暫緩  
`--cwd /workspace/virus-fork-cli`。自 `feat/evolution-atlas` 開新分支（例 `feat/science-depth-hints`）。

## John 原文要點
1. **手機開唔到**——交付必須讓手機瀏覽器直接可玩（勿只交 zip／多檔相對路徑）。
2. **演化過程根據科學**——分叉與關卡順序要貼近該細菌／病毒真實結構、生活史、傳播／複製特徵（仍標「簡化科普／假設」；非醫療）。
3. **關卡數量可增加、無特別上限**——依該物種複雜度決定深度（簡單者短、複雜者多關）；不要為湊數做假分叉。
4. **新增選項**：玩家可自行決定看不看「演化選擇的結果」——即每個按鈕的**第二行**（現有 `.g-sub`／`opt.sub`）。開關放 title／設定；預設建議「顯示」；記住選擇（localStorage）。

## 做什麼（what）

### A. 手機可開（必修）
- 產出 **單檔**可玩：`/workspace/virus-fork-cli/playable.html`（或等價名）：把 `cover-v1.jpg` 與 `assets/evolution-trees/*` **inline**（data URL 或內嵌 SVG），開一個檔即可完整玩（含圖鑑）。
- 保留多檔 `index.html`＋相對資產亦可，但 **done 以單檔為驗收交付物**。
- 禁選字、下落 2–4 門、圖鑑入口保留。

### B. 科學加深＋可變關卡深度（必修）
- 重審 `LEVELS`／`FORMS`：每條終局路線的關卡數可不同；**複雜物種加關**（例：HIV 可含進入／反轉錄／整合等示意關；結核可含抗酸壁／巨噬細胞內等；流感可含血球凝集素／神經胺酸酶示意——名稱通俗繁中即可）。
- 維持 **≥20 互斥終局**（可多於 21）；**零假分叉**（同關每個 `next` 互異）。
- 按鈕第一行＝當下結構／策略選擇；第二行＝結果提示（物種或方向）。科學上說得通；勿劇透到破壞探索亦可，但第二行本來就是結果提示。
- 更新 `PROOF`／`ROUTES.md`；對局內仍不顯示科技樹 HUD。

### C. 副標（第二行）開關（必修）
- Title（或明顯設定）開關文案例：「顯示選擇結果（按鈕第二行）」開／關。
- 關：門槽只顯示第一行（title）；開：顯示 `sub`。
- `localStorage` 持久化；終局重開仍生效。

### D. 驗證與證據
- `verify-phone-html --also-landscape` 對 **單檔** PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v7/`（單檔可開證明、副標開／關對照截圖、至少兩條不同深度路線截圖、ROUTES、DECISIONS、checks 含 fakeForks=[]與終局數）。

## 怎樣算做完（done-when）
1. 只傳 `playable.html` 一個檔，手機可開完整局＋圖鑑。
2. 副標開關可用且會記住。
3. 路線深度依物種複雜度有差異；科學簡化合理；零假分叉；≥20 終局。
4. STATUS=done；無圖回報本席。

## 不要做
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent；對局不塞科技樹；不做假分叉；不捏造假醫學宣稱；SendToAgent 不附圖。
