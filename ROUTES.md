# ≥29 終局逐步驗證（科學加深・可變深度・零假分叉）

可玩（驗收主交付）：`/workspace/virus-fork-cli/playable.html`（單檔，cover＋演化樹 inline）  
多檔開發：`/workspace/virus-fork-cli/index.html`＋相對資產  
分支：`feat/science-depth-hints`  
日期：2026-10-28（Asia/Hong_Kong）  
Grok CLI：`1.0.72`／模型 `grok-4.7`（`--cwd` 直寫）

## 證明非假分叉
- 執行期 `window.__VIRUS_FORK__.assertNoFakeForks()` → `[]`
- 每一關每個選項的 `next` 互異；無雙選同 next。
- **29** 個 `end: true` 節點、29 個互斥物種名稱、29 條可達 route（見 `PROOF.routes`／`checks.json`）。
- 深度（選擇次數）約 **2–5**：短如彎曲體終局≈2、球菌≈3；深如結核／流感 HA→NA／HIV 進入→反轉錄→整合≈5。

## 樹狀概要（幕後；對局不畫科技樹）
```
seed(3)：細胞壁 | 彎曲體壁 | 蛋白殼
├─ bact_wall(3)
│  ├─ bact_cocci(3) → 金黃葡萄球菌 | 表皮葡萄球菌 | 肺炎鏈球菌
│  ├─ bact_rod(2)
│  │  ├─ enteric(2) → 大腸桿菌 | 沙門氏菌
│  │  └─ tb_acid(2) → tb_intra(2)→結核|鳥分枝桿菌 | 麻風分枝桿菌
│  └─ bact_spore(3) → 破傷風梭菌 | 炭疽芽孢桿菌 | 肉毒桿菌
├─ curve_wall(2) → 幽門螺旋桿菌 | 霍亂弧菌
└─ vir_capsid(4)
   ├─ vir_env_rna(4)
   │  ├─ flu_ha(2) → flu_na(2)→流感|副流感 | 流感 B 型
   │  ├─ 麻疹 | 狂犬病 | 登革
   ├─ vir_naked(3) → 諾羅 | 鼻病毒 | 輪狀病毒
   ├─ vir_dna(2) → 腺病毒 | herpes_lat(2)→疱疹|EBV
   └─ retro_entry(2)
      ├─ retro_rt(2) → retro_int(2)→HIV|泡沫病毒 | HIV-2
      └─ HTLV
```

## 深度差異摘要
| 路線 | 約略深度 | 科學加關（簡化） |
|------|----------|------------------|
| 彎曲體終局 | 2 | 短 |
| 球菌三終局 | 3 | 短 |
| 麻疹等有膜 RNA | 3 | 中短 |
| 腸道桿菌 | 4 | 中 |
| 疱疹／EBV | 4 | 潛伏分關 |
| 結核 | 5 | 抗酸壁→巨噬內 |
| 流感 | 5 | HA→NA |
| HIV | 5 | 進入→反轉錄→整合 |

## 副標開關
- Title：「顯示選擇結果（按鈕第二行）」；預設開。
- `localStorage` 鍵 `virus-fork-show-subs`；關則門槽只顯示第一行。

## 操作
- 鍵盤 ← → 或 A D；觸控點／拖到門槽（2–4 門均分）
- 禁選字不擋選門；圖鑑僅 title／終局入口

## 備註
簡化科普／假設；非醫療建議或診斷依據。
