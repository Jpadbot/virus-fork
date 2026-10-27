# virus-fork-cli — 決策與證據（路徑 A 對照件）

日期：2026-10-27（Asia/Hong_Kong）

## 工具／版本
- Grok CLI：`grok 1.0.63`（`~/.grok/bin/grok`），模型目標 `grok-4.7`
- 啟動：`--cwd /workspace/virus-fork-cli --always-approve`（經 `script` 配 PTY）
- **Grok 實況**：讀完 TICKET／SPEC／PRODUCT／GROK_TASK 後，於 loop_index=3 長時間 `streaming_reasoning`（≥8 分鐘、0 次 write），無產出檔案；已終止。
- 因此由 CLI 工房實作代理人在**同一 cwd**直接寫出 `index.html`（未碰 `/workspace/virus-fork`、未讀 `/workspace/notes/`）。
- `verify-phone-html`：PASS（`--also-landscape`，無 `--game`）；僅 favicon 404 警告。

## 產品決策
- 暫名 UI 標題「病毒路線」；非正式品名。
- 固定身分「病毒」；三條 0–100 狀態條：擴散／適應／潛伏。
- 7 輪；每輪 2–4 按鈕；覆蓋地點／宿主／進化。
- 兩主路線：疾行擴散 vs 靜默潛伏（旗標 rush／silent＋狀態條＋回顧文案）。
- 無倒數、無勝敗結算；終局＝路線回顧。
- viewport：`width=device-width, initial-scale=1`（無 maximum-scale=1／user-scalable=no）。
- 禁抄 1in8b 文案／品牌／統計。

## Git
- 本目錄內 `git init`；分支 `feat/virus-choice-prototype`。
- 不上架、不推公開 Pages。
