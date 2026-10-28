# virus-fork-cli — 試玩改版（路徑 A／CLI only）

規格：`/workspace/scratch/spec-microbe-choice-loop-2026-10-27.md`（已更新）。同步更新本目錄 SPEC.md。

封面資產（已放專案內）：`/workspace/virus-fork-cli/cover-v1.jpg`  
禁選字 bug 參考：`/workspace/scratch/virus-fork-cli-playtest-highlight.png`  
（來源 scratch：`/workspace/scratch/virus-fork-assets/`）

## 做什麼（what）
在現有下落＋左右選基礎上改 `/workspace/virus-fork-cli/`（主檔 `index.html`；可加專案內資產）：

1. **禁選字／highlight（必修）**  
   手機長按／點選不得觸發系統文字選取（Copy／Look Up）。全域＋互動區設 `user-select: none`、`-webkit-user-select: none`、`-webkit-touch-callout: none`；觸控在必要處 `preventDefault`，**不可**擋左右半屏點／滑與鍵盤 ←→。對照 bug 圖驗收。

2. **畫面更吸睛**  
   保留下落＋左右選門；加強中央公仔／圖鑑感、門槽、終局視覺（可用原創 SVG／簡筆或現有封面風格元素）。**不要**頂部數值字標、**不要**科技樹 UI。

3. **封面／title screen**  
   接到開局 title：顯示 `cover-v1.jpg`（標題「微粒進化」），一鍵開始進下落局。

4. **更多選項結果／路線變化**  
   多關真分叉（每關 2–3 選項；**禁止殊途同歸**）。終局大字：「你已成為『某某』細菌／病毒」。物種須**多於**僅金黃葡萄球菌 vs 流感病毒（至少再加 ≥2 個真實方向終局，例假設：大腸桿菌、結核分枝桿菌、諾羅病毒、鼻病毒——標簡化／假設；幕後資料表可，畫面不堆數值 HUD）。

`--cwd /workspace/virus-fork-cli`。只改此目錄。從目前分支續開新分支（例 `feat/playtest-polish`），勿在舊 session 硬接。

## 怎樣算做完（done-when）
1. 可玩 `index.html`；title 有封面；下落＋左右選仍可操作。
2. 手機長按／點選**無**系統選字選單（證據：截圖或檢查 CSS／觸控行為說明）。
3. 中央公仔／門槽／終局視覺明顯優於純文字版；無頂部數值字標、無科技樹面板。
4. ≥3 條互斥終局物種名稱不同；附逐步證明非假分叉（ROUTES）。
5. `verify-phone-html --also-landscape` PASS。
6. 證據目錄：`/workspace/scratch/virus-fork-cli-evidence-v4/`（含 title、下落、門槽、禁選字證明、至少兩終局截圖、ROUTES.md、DECISIONS.md）。

## 不要做（must-not）
不准讀 `/workspace/notes/`；只改 `virus-fork-cli`；不開 Cloud Agent／不上架；不顯示科技樹；不做假分叉；不抄 Pokemon／1in8b 資產；不捏造假醫學宣稱（科普標簡化／假設）。

## 證據
完成後回 **Mobile Engineer**（本席），附路徑＋分支＋evidence-v4；由本席驗收後轉 Orchestrator。
