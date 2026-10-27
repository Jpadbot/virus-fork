# virus-fork-cli — 大改：圖鑑公仔＋科技樹＋真實進化鏈（路徑 A）

規格：`/workspace/scratch/spec-microbe-choice-loop-2026-10-27.md`（已更新）與本目錄 `SPEC.md`（請先同步複製最新規格）。

## 做什麼（what）
重做 `/workspace/virus-fork-cli/index.html`：
1. **中央公仔**：畫面正中顯示當前形態（原創 SVG／簡筆；隨進化換造型／顏色／大小）。禁止抄 Pokemon／1in8b 資產。
2. **拿掉頂部**所有「擴散／適應／潛伏／傳染性」等文字數值標籤與狀態條。
3. **科技樹**：可見節點圖（已走亮、當前、未走灰）；路線分叉清楚。
4. **真實風格進化**：由「細／初級／未分化」依簡化科學根據，進化到現實細菌或病毒（例：金黃葡萄球菌 *Staphylococcus aureus*、流感病毒 Influenza 等）。至少兩條可感知不同路線（偏細菌鏈 vs 偏病毒鏈）。
5. 每關鍵節點一句簡化科普，文案標「簡化科普」或同等提示；勿捏造假醫學宣稱。
6. 操作仍為按鈕；無倒數；休閒探索；可選路線回顧。手機直式可玩。

用 Grok Build CLI：`--cwd /workspace/virus-fork-cli`。只改此目錄。

## 怎樣算做完（done-when）
1. `index.html` 可玩；無頂部數值字標。
2. 正中有當前形態公仔，進化後外觀改變。
3. 科技樹可見。
4. 兩路線終局形態不同（名稱＋公仔可辨）。
5. 截圖證據（開局、科技樹、兩路線終局至少）放 `/workspace/scratch/virus-fork-cli-evidence-v2/`。

## 不要做什麼（must-not）
- 不准讀 `/workspace/notes/`；只改 `/workspace/virus-fork-cli`。
- 不開 Cloud Agent；不上架；不經 Grok Bot 發佈。
- 不抄 Pokemon／1in8b；不恢復頂部數值條。

## 交回證據（evidence）
可玩路徑＋截圖目錄＋兩路線逐步；回 Mobile Engineer。
