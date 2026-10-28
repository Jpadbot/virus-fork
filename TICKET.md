# virus-fork-cli — 真分叉擴充（≥20 終局／多選項）（路徑 A／CLI only）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John 試玩回饋（本席直派）  
路徑：A（CLI 工房）；路徑 B 仍暫緩  
`--cwd /workspace/virus-fork-cli`。從 `feat/playtest-polish` 開新分支（例 `feat/evo-tree-20`），勿硬接舊 session。

## John 原文要點（必須滿足）
1. **結果不能只有兩個**——期望**終局 ≥20 個**互斥物種名稱。
2. **不能揀左揀右結果一樣**——每一關每個選項的 `next` 必須不同；禁止殊途同歸（現版 `bact_pigment`／`ecoli_draft`／`myco_draft`／`vir_envelope`／`vir_spike`／`noro_draft`／`rhino_draft` 等雙選同 `next` 必須剷除）。
3. **選項不要只得兩個**——參考現實科學裡細菌／病毒進化／分類樹狀邏輯，關卡出現 **2–4 個選項**（自然分岔處給 3–4；不要硬湊）。
4. 玩法仍為中央生物下落＋門槽；操作：←→／AD／點半屏／拖移；終局大字「你已成為『某某』細菌／病毒」。
5. 進化樹只做幕後資料；**畫面不畫科技樹**；不要頂部數值 HUD；禁選字／封面 title 保留。

## 做什麼（what）
改 `/workspace/virus-fork-cli/`（主檔 `index.html`；可加專案內 SVG／簡筆資產）：

### A. 資料／分叉
- 重寫 `LEVELS`（及必要的 `FORMS`／`PROOF`）：**≥20 個** `end: true` 節點，物種名稱互斥（真實細菌或病毒俗名／學名簡寫皆可；標「簡化科普／假設」）。
- 建議結構（可調整，但須可驗證）：
  - 第 1 關至少分 **細菌域／病毒域**（可再加第 3 向，例如「螺旋／弧菌向」或「DNA 病毒／RNA 病毒」等——以科學分類感為準）。
  - **細菌線**參考形態／生活史分岔（例：球菌／桿菌／螺旋或弧菌；再分腸道、呼吸道、皮膚、抗酸、芽孢等）→ 至少約 10 個細菌終局（例示：金黃葡萄球菌、表皮葡萄球菌、肺炎鏈球菌、大腸桿菌、沙門氏菌、幽門螺旋桿菌、霍亂弧菌、結核分枝桿菌、破傷風梭菌、炭疽芽孢桿菌……可替換，但須真實存在）。
  - **病毒線**參考有膜／裸殼、核酸或傳播場域等分岔 → 至少約 10 個病毒終局（例示：流感、麻疹、疱疹、諾羅、鼻病毒、輪狀病毒、腺病毒、狂犬病、登革、HIV……可替換）。
- **每一選項 `next` 唯一且導向不同子樹或不同終局**；中間關不得「兩個標籤同一 next」。
- 多數分岔關提供 **3 或 4** 個選項；少數自然二元關可維持 2。
- `window.__VIRUS_FORK__.PROOF`：列出全部 endings 陣列＋每條 route 逐步節點；`ROUTES.md` 同步。

### B. UI／操作（多門槽）
- `gate-row` 須穩妥排 **2–4** 個門（窄螢幕可縮小字／icon，不可溢出或重疊到不可點）。
- `nearestGateIndex`／鍵盤／觸控須支援 N>2（勿寫死左右半屏＝僅 2 選；可用水平位置對應最近門，或均分螢幕寬度區）。
- 保留禁選字 CSS／preventDefault（**不可**擋選門操作）；保留 `cover-v1.jpg` title。
- 中央公仔隨形態變；無頂部數值字標、無可見科技樹。

### C. 驗證
- 手動或腳本證明 ≥20 終局皆可到達且名稱不同。
- `verify-phone-html --also-landscape` PASS。
- 證據：`/workspace/scratch/virus-fork-cli-evidence-v5/`（title、3–4 門截圖、至少 4 個不同終局截圖、ROUTES.md、DECISIONS.md、ANTI_SELECT 說明、verify log）。

## 怎樣算做完（done-when）
1. 可玩；title 有封面；下落＋多門可操作。
2. **≥20** 互斥終局；ROUTES／PROOF 完整；**零**「雙選同 next」假分叉。
3. 至少一半以上的選擇關為 **≥3** 選項。
4. 禁選字仍在；verify PASS。
5. STATUS.md → `done`；無圖回報本席（路徑文字即可）。

## 不要做（must-not）
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent／不上架；不顯示科技樹；不做假分叉；不抄 Pokemon／1in8b 資產；不捏造假醫學宣稱（科普標簡化／假設）；SendToAgent 不附圖。

## 證據與回報
完成後回 **Mobile Orchestrator**（本席）＋抄送驗收意向給流程：改 STATUS=done，證據路徑 `evidence-v5`；本席再交 Mobile Engineer 驗收。
