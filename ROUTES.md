# ≥21 終局逐步驗證（真分叉・零假分叉）

可玩：`/workspace/virus-fork-cli/index.html`  
分支：`feat/evo-tree-20`  
日期：2026-10-28（Asia/Hong_Kong）  
Grok CLI：`1.0.72`／模型 `grok-4.7`（`--cwd` 直寫）

## 證明非假分叉
- 執行期 `window.__VIRUS_FORK__.assertNoFakeForks()` → `[]`
- 每一關每個選項的 `next` 互異；無雙選同 next。
- 21 個 `end: true` 節點、21 個互斥物種名稱、21 條可達 route（見 `PROOF.routes`）。
- 選擇關 11；其中 ≥3 選項者 7（占比 63.6%）；含 4 選關 2（`vir_capsid`、`vir_env_rna`）。

## 樹狀概要（幕後；畫面不畫科技樹）
```
seed(3)：細胞壁 | 彎曲體壁 | 蛋白殼
├─ bact_wall(3)
│  ├─ bact_cocci(3) → 金黃葡萄球菌 | 表皮葡萄球菌 | 肺炎鏈球菌
│  ├─ bact_rod(2) → enteric(2)→大腸桿菌|沙門氏菌 | 結核分枝桿菌
│  └─ bact_spore(3) → 破傷風梭菌 | 炭疽芽孢桿菌 | 肉毒桿菌
├─ curve_wall(2) → 幽門螺旋桿菌 | 霍亂弧菌
└─ vir_capsid(4)
   ├─ vir_env_rna(4) → 流感 | 麻疹 | 狂犬病 | 登革
   ├─ vir_naked(3) → 諾羅 | 鼻病毒 | 輪狀病毒
   ├─ vir_dna(2) → 腺病毒 | 疱疹病毒
   └─ HIV
```

## 細菌終局（11）
1. 金黃葡萄球菌 — seed→bact_wall→bact_cocci→aureus  
2. 表皮葡萄球菌 — …→bact_cocci→epidermidis  
3. 肺炎鏈球菌 — …→bact_cocci→pneumoniae  
4. 大腸桿菌 — …→bact_rod→enteric→ecoli  
5. 沙門氏菌 — …→bact_rod→enteric→salmonella  
6. 結核分枝桿菌 — …→bact_rod→tuberculosis  
7. 破傷風梭菌 — …→bact_spore→tetani  
8. 炭疽芽孢桿菌 — …→bact_spore→anthracis  
9. 肉毒桿菌 — …→bact_spore→botulinum  
10. 幽門螺旋桿菌 — seed→curve_wall→helicobacter  
11. 霍亂弧菌 — seed→curve_wall→vibrio  

## 病毒終局（10）
12. 流感病毒 — seed→vir_capsid→vir_env_rna→influenza  
13. 麻疹病毒 — …→vir_env_rna→measles  
14. 狂犬病病毒 — …→vir_env_rna→rabies  
15. 登革病毒 — …→vir_env_rna→dengue  
16. 諾羅病毒 — …→vir_naked→norovirus  
17. 鼻病毒 — …→vir_naked→rhinovirus  
18. 輪狀病毒 — …→vir_naked→rotavirus  
19. 腺病毒 — …→vir_dna→adenovirus  
20. 疱疹病毒 — …→vir_dna→herpes  
21. 人類免疫缺乏病毒 — seed→vir_capsid→hiv  

## 操作
- 鍵盤 ← → 或 A D（水平移動；`nearestGateIndex` 對 N>2）
- 觸控：點／拖到門槽（均分寬度對應門；**非**寫死左右半＝2 選）
- 禁選字 CSS／preventDefault **不**擋選門

## 備註（簡化／假設）
終局物種為休閒探索命名；科普句標「簡化科普／假設」；非醫療建議。
