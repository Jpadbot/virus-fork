# virus-fork-cli — 圖鑑解鎖修復＋未解鎖不露名＋真實形態（路徑 A／CLI only）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩回報（手機截圖）  
路徑：A；路徑 B 仍暫緩  
`--cwd /workspace/virus-fork-cli`。自目前 Accept 分支 `feat/species-dex` 開新分支（例 `feat/dex-fix-morph`）。

## John 原文要點
1. **圖鑑 is not working** — 玩了兩次，圖鑑仍 **已解鎖 0／總數 29**。
2. **Don’t show the name of the hidden item** — 未解鎖時不可露出物種名（截圖底欄寫「走到『狂犬病病毒』終局…」＝洩露）。
3. **Shape and figure of the cell should follow the real shape in the real world** — 公仔／剪影須貼近真實微生物外形。

John 截圖（本席已放 scratch，SendToAgent 不附圖，請自讀）：
`/workspace/scratch/virus-fork-cli-john-notes-v9/dex-0-unlocked-leak-name.png`

## 根因線索（供開工，勿盲改）
- `unlockSpecies(endNode.form)` 與 `PROOF.endings` 鍵一致（29 終局 id＝form id），**邏輯鍵名本身對得上**。
- `saveUnlocked` 的 `catch (e) {}` 會吞掉寫入失敗；手機若用**聊天／App 內「預覽」**開 `playable.html`（非 Safari／Chrome 固定路徑），`localStorage` 常無法持久 → 重開即 0。
- `showDexDetail` 未解鎖文案用了 `d.name || form.name` → **確定 bug**，必須修。

## 做什麼（what）

### A. 圖鑑解鎖必須可用（主修）
1. 通關 `finish` 後，**同一頁不重新載入**打開圖鑑，必須立刻顯示該物種已解鎖（即使 storage 失敗，至少本局 session 要有）。
2. 偵測 `localStorage` 可否讀寫；失敗時在 Title／圖鑑頂部用繁中短提示，說明：
   - 請用 **Safari 或 Chrome** 開啟本檔（**不要用聊天內預覽／原始碼切換頁**）；
   - 將檔案存到「檔案」後固定用同一路徑開啟，圖鑑才會記住。
3. 寫入失敗不可靜默：至少 `console`／畫面上有可驗證訊號（勿 Eng 長段）。
4. 重建單檔後用自動化或手動腳本證明：呼叫 unlock → `renderDex` 計數 ≥1；證據資料夾留「通關後已解鎖 ≥1」截圖。
5. 若需極小改動改善 file 協議體驗可做；**不要**為此改走路徑 B 或要求上架。不開 Cloud Agent。

### B. 未解鎖絕不露名
- 鎖定卡、詳情、toast、aria、任何提示：**禁止**中文名、拉丁名、暗示性專有名。
- 鎖定詳情改為中性句，例：「尚未解鎖。走到對應終局後即可記入圖鑑。」
- 未解鎖格維持「？？？」＋「未知」；剪影可保留外形但不標名。
- 用字串／DOM 檢查：鎖定態詳情 HTML 不得出現各終局 `FORMS[id].name`／`latin`。

### C. 真實世界外形
- 重畫／調整 `FORMS`（及圖鑑 icon）使外形貼近真實：
  - 葡萄球菌＝葡萄串球菌；鏈球菌＝鏈狀；桿菌／腸道＝桿狀；結核／抗酸＝略粗桿；芽孢＝桿＋芽孢；螺旋／幽門＝螺旋；弧菌＝逗點弧；
  - 有膜 RNA／流感等＝大致球＋棘／套膜示意；裸殼＝二十面體／多角；皰疹＝有膜較大；腺病毒＝二十面體＋纖維；HIV／反轉錄＝圓錐核心／圓形有膜示意；彈狀（狂犬）＝子彈／桿狀病毒示意等。
- 仍為簡筆 SVG（單檔可負載），但**不得**再用無關抽象形（魚形等）。科普簡化即可，勿偽醫學精度。
- 對局中下落公仔與圖鑑解鎖／未解鎖剪影同一套形態邏輯。

### D. 保留
- 29（或以上）互斥終局、深度 4–7、副標開關、拖動跟手、零假分叉、單檔 `playable.html`、無三張樹圖。

### E. 驗證與證據
- `verify-phone-html playable.html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v9/`
  - 未解鎖詳情**不露名**；
  - 通關後圖鑑已解鎖 ≥1（含計數）；
  - 數個物種外形對照（球菌／桿菌／螺旋／有膜病毒／彈狀等）；
  - DECISIONS 寫清 storage 策略與開啟方式提示；
  - checks（可自動化字串／計數）。

## 怎樣算做完
1. John 用瀏覽器開單檔，通關後圖鑑有解鎖；聊天預覽若不可用要有明確提示。
2. 未解鎖任何 UI 不出現隱藏物種名。
3. 細胞／病毒外形明顯貼近真實類群。
4. STATUS=done；無圖回報本席（證據路徑文字即可）。

## 不要做
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent／路徑 B；不做假分叉；SendToAgent 不附圖。
