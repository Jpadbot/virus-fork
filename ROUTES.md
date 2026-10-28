# ≥29 終局逐步驗證（物種圖鑑・加深・零假分叉）

可玩（驗收主交付）：`/workspace/virus-fork-cli/playable.html`（單檔，cover inline，**無**演化樹）  
多檔開發：`/workspace/virus-fork-cli/index.html`＋`cover-v1.jpg`  
分支：`feat/species-dex`  
日期：2026-10-28（Asia/Hong_Kong）  
Grok CLI：`1.0.72`／模型 `grok-4.7`（`--cwd` 直寫）

## 證明非假分叉
- `window.__VIRUS_FORK__.assertNoFakeForks()` → `[]`
- 每一關每個選項的 `next` 互異。
- **29** 個 `end: true`；深度（選擇次數）**4–7**（見 `PROOF.depths`／`checks.json`）。

## 樹狀概要（幕後；對局不畫科技樹／不顯示舊三張樹圖）
```
seed(3)：細胞壁 | 彎曲體壁 | 蛋白殼
├─ bact_wall(3)
│  ├─ bact_cocci(2) → staph_line(2)→金黃|表皮
│  │                → strep_line→莢膜→肺炎鏈球菌（深 5）
│  ├─ bact_rod(2)
│  │  ├─ enteric(2)→定植→大腸桿菌 | 入侵→沙門氏菌（深 5）
│  │  └─ tb_acid(2)→吸入→巨噬→肉芽腫→結核(7) | 鳥(6) | 麻風(5)
│  └─ bact_spore(2)→梭菌(2)→破傷風|肉毒 | 芽孢桿→炭疽（深 4）
├─ curve_wall(2)→螺旋→胃適應→幽門(4) | 弧形→水生→霍亂(4)
└─ vir_capsid(4)
   ├─ env_rna(2)→呼吸道→HA→NA→流感|副流感(6) | B(5) | 麻疹(5)
   │            →系統性→神經→狂犬 | 蟲媒→登革（深 5）
   ├─ naked(2)→腸胃→諾羅|輪狀(4) | 鼻腔→鼻病毒(4)
   ├─ dna(2)→腺樣→腺病毒(4) | 潛伏→部位→疱疹|EBV(5)
   └─ retro(2)→脫殼→RT→整合→HIV|泡沫(6) | HIV-2(5) | δ→HTLV(4)
```

## 圖鑑
- 入口：Title／終局「物種圖鑑」
- 解鎖：`localStorage` `virus-fork-dex`；終局自動記入
- 未解鎖顯示未知數；解鎖可見特徵＋歷史

## 操作
- 拖移跟指選門；鍵盤 ← →；禁選字不擋拖動
- 副標開關保留（`virus-fork-show-subs`）

## 備註
簡化科普／假設；非醫療建議或診斷依據。
