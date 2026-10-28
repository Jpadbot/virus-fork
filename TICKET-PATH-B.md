# virus-fork — 路徑 B 試跑（獨立票；與路徑 A 不同票）

日期：2026-10-28（Asia/Hong_Kong）  
來源：John「測試路徑 B」  
路徑：**B only** — Mobile Engineer **直連 Cursor Cloud Agent**（模型 **grok-4.7**）。勿開 Grok Build CLI；勿派 CLI 工房。  
倉庫：公開 `https://github.com/Jpadbot/virus-fork`（main 可讀寫；Pages 已開）。  
並行：路徑 A 票 `feat/env-live-grow-ui`（現實環境連續生長＋按鈕）仍由 ME／CLI 進行中——**本票不得併入該分支、不得改其 TICKET.md／STATUS.md**。

## 試跑目標
證明路徑 B 全鏈可用：ME → Cloud Agent → 在 GitHub 開分支改碼 → 可驗證交付。

## 做什麼（小而可見；勿做完整長局大改）
1. Cloud Agent 以 `main` 為底開新分支，例 `feat/path-b-smoke`。
2. 做一項**肉眼可見、不破壞玩法**的煙測改動，擇一即可（優先 1）：
   - 封面／標題區加細小「B」角標或副標「路徑 B 試跑」；或
   - 設定頁／關於加一行「Cloud Agent 煙測」文案。
3. 同步更新能反映該改動的 `playable.html`（或文件內建流程重建）。
4. push 分支；開 PR 到 `main`（勿直接強推蓋掉路徑 A 進行中工作所依賴的遠端協作約定；PR 即可）。
5. 自驗：頁面可開、改動可見；回報 PR URL、分支、commit、證據路徑。

## 怎樣算做完
- PR 已開且 Cloud Agent 跑完；可見煙測改動；`STATUS-PATH-B.md` = done；無圖回報 Orchestrator（只給路徑／URL）。

## 不要做
- 不實作路徑 A 的「波間連續生長／按鈕重設計」（那是另一票）。
- 不改 `TICKET.md`／`STATUS.md`（路徑 A 專用）。
- 不強制瘦身；不關 Pages；不刪檔。
