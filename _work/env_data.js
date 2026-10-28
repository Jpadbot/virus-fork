/* ===== 現實環境第二段 ENV ===== */
  var ENV_POOL_OF = {
    aureus: "cocci", epidermidis: "cocci", pneumoniae: "cocci",
    ecoli: "rod", salmonella: "rod",
    tuberculosis: "myco", leprae: "myco", mavium: "myco",
    tetani: "spore", botulinum: "spore", anthracis: "spore",
    helicobacter: "spiral", vibrio: "spiral",
    influenza: "env_rna", influenza_b: "env_rna", parainfluenza: "env_rna",
    measles: "env_rna", rabies: "neuro", dengue: "arbo",
    norovirus: "naked_gi", rotavirus: "naked_gi", rhinovirus: "naked_resp",
    adenovirus: "dna", herpes: "dna_lat", ebv: "dna_lat",
    hiv: "retro", hiv2: "retro", foamy: "retro", htlv: "retro"
  };
  var ENV_BASE_POP = {
    aureus: 55, epidermidis: 58, pneumoniae: 52,
    ecoli: 56, salmonella: 50,
    tuberculosis: 48, leprae: 46, mavium: 50,
    tetani: 45, botulinum: 45, anthracis: 48,
    helicobacter: 54, vibrio: 52,
    influenza: 50, influenza_b: 50, parainfluenza: 52,
    measles: 48, rabies: 45, dengue: 50,
    norovirus: 54, rotavirus: 52, rhinovirus: 56,
    adenovirus: 52, herpes: 50, ebv: 50,
    hiv: 48, hiv2: 48, foamy: 50, htlv: 48
  };

  function envEnd(id, outcome, title, story) {
    return { id: id, end: true, outcome: outcome, endTitle: title, endStory: story };
  }
  function envOpt(title, sub, next, delta, tint) {
    return { title: title, sub: sub, next: next, delta: delta, tint: tint || "" };
  }

  /* 分池模板：每池 3–5 關節點（含起點）＋互異 next；結局 thrive／decline／steady */
  var ENV_POOLS = {
    cocci: {
      start: "e_cocci_0",
      nodes: {
        e_cocci_0: { prompt: "落在皮膚／黏膜表面：周圍偏濕還是偏乾？", options: [
          envOpt("潮濕微溫", "利於附著・種群＋", "e_cocci_1a", 14, "bact"),
          envOpt("乾燥空氣", "水分流失・種群－", "e_cocci_1b", -12, "bact"),
          envOpt("清潔劑殘留", "外層受損・明顯衰退", "e_cocci_1c", -18, "bact")
        ]},
        e_cocci_1a: { prompt: "宿主防衛靠近：你怎麼應對？", options: [
          envOpt("躲進微裂縫", "暫時避開・再＋", "e_cocci_2ok", 12, "bact"),
          envOpt("正面碰上免疫細胞", "壓力大・衰退", "e_cocci_2bad", -20, "bact"),
          envOpt("薄薄一層生物膜", "持平略穩", "e_cocci_2mid", 4, "bact")
        ]},
        e_cocci_1b: { prompt: "乾燥之後遇到：", options: [
          envOpt("汗水／皮脂再度潤濕", "恢復生長", "e_cocci_2ok", 16, "bact"),
          envOpt("持續風乾", "走向清除", "e_cocci_die", -22, "bact"),
          envOpt("短暫接觸毛巾濕氣", "勉強持平", "e_cocci_2mid", 2, "bact")
        ]},
        e_cocci_1c: { prompt: "清潔壓力後：", options: [
          envOpt("殘存於縫隙", "緩慢回升", "e_cocci_2mid", 8, "bact"),
          envOpt("再遇強效消毒", "種群崩潰", "e_cocci_die", -28, "bact")
        ]},
        e_cocci_2ok: { prompt: "定植穩定後的下一步？", options: [
          envOpt("低調共生式擴張", "走向繁盛", "e_cocci_thrive", 18, "bact"),
          envOpt("過度消耗局部養分", "回落至中線", "e_cocci_2mid", -10, "bact")
        ]},
        e_cocci_2mid: { prompt: "季節／宿主作息改變：", options: [
          envOpt("溫暖潮濕季節", "迎來繁盛", "e_cocci_thrive", 20, "bact"),
          envOpt("頻繁洗手與乾燥", "柔和衰退", "e_cocci_die", -24, "bact"),
          envOpt("維持現況", "穩定收束", "e_cocci_steady", 0, "bact")
        ]},
        e_cocci_2bad: { prompt: "免疫壓力持續：", options: [
          envOpt("找到庇護微環境", "勉强翻盤", "e_cocci_2mid", 10, "bact"),
          envOpt("無處可躲", "衰退結局", "e_cocci_die", -26, "bact")
        ]},
        e_cocci_thrive: envEnd("e_cocci_thrive", "thrive", "種群繁盛・適應此地", "在簡化示意中，球菌群於合適濕度與庇護微環境下穩定擴張。休閒探索・非醫療。"),
        e_cocci_steady: envEnd("e_cocci_steady", "steady", "種群持平・低調存在", "既未大繁盛也未被完全清除，維持低度定植示意。休閒探索・非醫療。"),
        e_cocci_die: envEnd("e_cocci_die", "decline", "種群衰退・逐漸清除", "乾燥、清潔或免疫壓力使種群柔和消退。可再玩或回圖鑑。非懲罰・非醫療。")
      }
    },
    rod: {
      start: "e_rod_0",
      nodes: {
        e_rod_0: { prompt: "腸道／外環境交界：養分與流動如何？", options: [
          envOpt("豐富養分流動", "利於定植・＋", "e_rod_1a", 15, "bact"),
          envOpt("空腹／養分稀", "競爭加劇・－", "e_rod_1b", -10, "bact"),
          envOpt("短暫高酸衝擊", "明顯受挫", "e_rod_1c", -16, "bact")
        ]},
        e_rod_1a: { prompt: "鞭毛與附著：", options: [
          envOpt("貼近黏膜微區", "穩定擴張", "e_rod_2ok", 12, "bact"),
          envOpt("隨流動沖走", "流失", "e_rod_2bad", -18, "bact"),
          envOpt("與其他菌共存", "持平", "e_rod_2mid", 3, "bact")
        ]},
        e_rod_1b: { prompt: "養分不足時：", options: [
          envOpt("切換節省代謝", "熬過低潮", "e_rod_2mid", 8, "bact"),
          envOpt("硬拼快速分裂", "耗盡衰退", "e_rod_die", -22, "bact")
        ]},
        e_rod_1c: { prompt: "酸衝擊後：", options: [
          envOpt("躲進較中性微區", "緩慢恢復", "e_rod_2mid", 10, "bact"),
          envOpt("持續暴露", "清除", "e_rod_die", -24, "bact")
        ]},
        e_rod_2ok: { prompt: "定植鞏固：", options: [
          envOpt("溫和擴張", "繁盛", "e_rod_thrive", 16, "bact"),
          envOpt("觸發宿主加速清除", "回落", "e_rod_2mid", -12, "bact")
        ]},
        e_rod_2mid: { prompt: "飲食與作息變化：", options: [
          envOpt("多樣飲食回流", "繁盛", "e_rod_thrive", 18, "bact"),
          envOpt("抗菌物質短暫暴露", "衰退", "e_rod_die", -20, "bact"),
          envOpt("維持平衡", "持平", "e_rod_steady", 0, "bact")
        ]},
        e_rod_2bad: { prompt: "被沖離後：", options: [
          envOpt("重新抓住表面", "中線", "e_rod_2mid", 9, "bact"),
          envOpt("完全離開適位", "衰退", "e_rod_die", -25, "bact")
        ]},
        e_rod_thrive: envEnd("e_rod_thrive", "thrive", "種群繁盛・腸道微位適應", "桿菌群在養分與附著條件合適時穩定擴張（簡化）。非醫療。"),
        e_rod_steady: envEnd("e_rod_steady", "steady", "種群持平・低調代謝", "維持低度存在，未走向極端消長。休閒探索・非醫療。"),
        e_rod_die: envEnd("e_rod_die", "decline", "種群衰退・離開適位", "酸、沖刷或資源耗盡使種群柔和消退。可再玩。非醫療。")
      }
    },
    myco: {
      start: "e_myco_0",
      nodes: {
        e_myco_0: { prompt: "氣溶膠／塵埃路徑：你落在哪？", options: [
          envOpt("深入細支氣管示意區", "進入持存路徑・＋", "e_myco_1a", 10, "bact"),
          envOpt("僅停留上呼吸道", "易被黏液清走・－", "e_myco_1b", -12, "bact"),
          envOpt("乾燥表面久置", "活力下降", "e_myco_1c", -14, "bact")
        ]},
        e_myco_1a: { prompt: "巨噬細胞相遇：", options: [
          envOpt("脂質外壁助持存", "緩慢增殖示意", "e_myco_2ok", 12, "bact"),
          envOpt("被有效隔離清除", "衰退", "e_myco_2bad", -20, "bact"),
          envOpt("形成靜默小灶", "持平", "e_myco_2mid", 2, "bact")
        ]},
        e_myco_1b: { prompt: "上呼吸道結局：", options: [
          envOpt("偶發再吸入更深", "轉入持存", "e_myco_1a", 8, "bact"),
          envOpt("咳出／清除", "衰退", "e_myco_die", -22, "bact")
        ]},
        e_myco_1c: { prompt: "環境乾燥後：", options: [
          envOpt("再遇適宜氣溶膠", "回到起點路徑", "e_myco_1a", 10, "bact"),
          envOpt("長期失活", "衰退", "e_myco_die", -24, "bact")
        ]},
        e_myco_2ok: { prompt: "長期持存示意：", options: [
          envOpt("穩定肉芽腫樣平衡", "繁盛／適應", "e_myco_thrive", 14, "bact"),
          envOpt("宿主防衛加強", "回落", "e_myco_2mid", -10, "bact")
        ]},
        e_myco_2mid: { prompt: "歲月與免疫波動：", options: [
          envOpt("條件轉鬆", "繁盛", "e_myco_thrive", 16, "bact"),
          envOpt("條件轉緊", "衰退", "e_myco_die", -18, "bact"),
          envOpt("長期靜默", "持平", "e_myco_steady", 0, "bact")
        ]},
        e_myco_2bad: { prompt: "隔離壓力：", options: [
          envOpt("殘存極少", "持平邊緣", "e_myco_2mid", 6, "bact"),
          envOpt("完全清除示意", "衰退", "e_myco_die", -26, "bact")
        ]},
        e_myco_thrive: envEnd("e_myco_thrive", "thrive", "持存適應・緩慢繁盛示意", "分枝桿菌脂質外壁與持存生活史的簡化隱喻。非診斷／醫療。"),
        e_myco_steady: envEnd("e_myco_steady", "steady", "靜默平衡・低調持存", "既未清除也未擴張的示意狀態。休閒探索・非醫療。"),
        e_myco_die: envEnd("e_myco_die", "decline", "柔和清除・种群消退", "黏液清除、乾燥或防衛加強使種群消退。可再玩。非醫療。")
      }
    },
    spore: {
      start: "e_spore_0",
      nodes: {
        e_spore_0: { prompt: "土壤／傷口／缺氧縫？", options: [
          envOpt("厭氧縫隙萌發", "營養體擴張・＋", "e_spore_1a", 14, "bact"),
          envOpt("持續有氧乾燥", "維持芽孢・慢耗", "e_spore_1b", -6, "bact"),
          envOpt("高熱／強消毒", "芽孢受創", "e_spore_1c", -20, "bact")
        ]},
        e_spore_1a: { prompt: "萌發後環境：", options: [
          envOpt("穩定缺氧＋養分", "繁盛路徑", "e_spore_2ok", 14, "bact"),
          envOpt("氧氣湧入", "受挫", "e_spore_2bad", -16, "bact"),
          envOpt("養分普通", "持平", "e_spore_2mid", 2, "bact")
        ]},
        e_spore_1b: { prompt: "芽孢休眠中：", options: [
          envOpt("條件轉為適宜萌發", "進入擴張", "e_spore_1a", 12, "bact"),
          envOpt("多年無萌發機會", "持平收束", "e_spore_steady", 0, "bact"),
          envOpt("極端滅菌條件", "衰退", "e_spore_die", -28, "bact")
        ]},
        e_spore_1c: { prompt: "滅菌壓力後：", options: [
          envOpt("少數芽孢倖存", "休眠持平", "e_spore_2mid", 4, "bact"),
          envOpt("全滅示意", "衰退", "e_spore_die", -30, "bact")
        ]},
        e_spore_2ok: { prompt: "營養體社群：", options: [
          envOpt("持續厭氧繁盛", "繁盛", "e_spore_thrive", 16, "bact"),
          envOpt("環境轉氧", "回落", "e_spore_2mid", -12, "bact")
        ]},
        e_spore_2mid: { prompt: "下一季環境：", options: [
          envOpt("再度適宜", "繁盛", "e_spore_thrive", 18, "bact"),
          envOpt("反覆滅菌", "衰退", "e_spore_die", -22, "bact"),
          envOpt("長期芽孢庫", "持平", "e_spore_steady", 0, "bact")
        ]},
        e_spore_2bad: { prompt: "氧衝擊：", options: [
          envOpt("重新形成芽孢", "持平", "e_spore_2mid", 8, "bact"),
          envOpt("營養體大量失活", "衰退", "e_spore_die", -24, "bact")
        ]},
        e_spore_thrive: envEnd("e_spore_thrive", "thrive", "芽孢策略成功・種群繁盛", "在適宜萌發條件下芽孢菌群擴張（簡化）。非醫療／非恐嚇。"),
        e_spore_steady: envEnd("e_spore_steady", "steady", "芽孢庫持平・等待時機", "長期以芽孢形式低調存在。休閒探索・非醫療。"),
        e_spore_die: envEnd("e_spore_die", "decline", "滅菌／氧壓・柔和衰退", "極端條件使種群消退。可再玩。非醫療。")
      }
    },
    spiral: {
      start: "e_spiral_0",
      nodes: {
        e_spiral_0: { prompt: "黏液層／水體：你怎麼移動？", options: [
          envOpt("螺旋鑽入黏液", "到位・＋", "e_spiral_1a", 14, "bact"),
          envOpt("水流過強被沖走", "流失・－", "e_spiral_1b", -14, "bact"),
          envOpt("酸鹼不適", "受創", "e_spiral_1c", -16, "bact")
        ]},
        e_spiral_1a: { prompt: "定植微區：", options: [
          envOpt("尿素酶／適應酶示意啟動", "穩固", "e_spiral_2ok", 12, "bact"),
          envOpt("宿主黏液加速更新", "壓力", "e_spiral_2bad", -14, "bact"),
          envOpt("低度定植", "持平", "e_spiral_2mid", 2, "bact")
        ]},
        e_spiral_1b: { prompt: "被沖走後：", options: [
          envOpt("再抓住表面", "中線", "e_spiral_2mid", 10, "bact"),
          envOpt("離開適生位", "衰退", "e_spiral_die", -22, "bact")
        ]},
        e_spiral_1c: { prompt: "酸鹼壓力：", options: [
          envOpt("躲進緩衝微區", "恢復", "e_spiral_2mid", 10, "bact"),
          envOpt("持續暴露", "衰退", "e_spiral_die", -24, "bact")
        ]},
        e_spiral_2ok: { prompt: "長期定植：", options: [
          envOpt("生態位穩固", "繁盛", "e_spiral_thrive", 16, "bact"),
          envOpt("清除手段介入", "回落", "e_spiral_2mid", -12, "bact")
        ]},
        e_spiral_2mid: { prompt: "季節／飲食／水質：", options: [
          envOpt("條件友善", "繁盛", "e_spiral_thrive", 18, "bact"),
          envOpt("條件惡化", "衰退", "e_spiral_die", -20, "bact"),
          envOpt("維持低調", "持平", "e_spiral_steady", 0, "bact")
        ]},
        e_spiral_2bad: { prompt: "黏液壓力：", options: [
          envOpt("更深鑽入", "翻盤中線", "e_spiral_2mid", 8, "bact"),
          envOpt("被排出", "衰退", "e_spiral_die", -24, "bact")
        ]},
        e_spiral_thrive: envEnd("e_spiral_thrive", "thrive", "螺旋／弧形適應・繁盛", "形態與微環境適應使種群穩定（簡化）。非醫療。"),
        e_spiral_steady: envEnd("e_spiral_steady", "steady", "低調定植・持平", "維持低度存在。休閒探索・非醫療。"),
        e_spiral_die: envEnd("e_spiral_die", "decline", "沖刷或酸鹼・衰退", "離開適生位後種群柔和消退。可再玩。非醫療。")
      }
    },
    env_rna: {
      start: "e_erna_0",
      nodes: {
        e_erna_0: { prompt: "飛沫／接觸：粒子落在何處？", options: [
          envOpt("濕潤黏膜", "吸附機會・＋", "e_erna_1a", 14, "vir"),
          envOpt("乾燥物體表面", "活性下降・－", "e_erna_1b", -12, "vir"),
          envOpt("陽光／通風", "快速失活", "e_erna_1c", -18, "vir")
        ]},
        e_erna_1a: { prompt: "進入細胞前後：", options: [
          envOpt("HA／融合順利示意", "複製啟動", "e_erna_2ok", 14, "vir"),
          envOpt("黏液與干擾素壓力", "受阻", "e_erna_2bad", -16, "vir"),
          envOpt("少量成功進入", "持平", "e_erna_2mid", 2, "vir")
        ]},
        e_erna_1b: { prompt: "表面殘存：", options: [
          envOpt("手→黏膜再傳遞", "回到吸附", "e_erna_1a", 10, "vir"),
          envOpt("久置失活", "衰退", "e_erna_die", -22, "vir")
        ]},
        e_erna_1c: { prompt: "環境失活壓力：", options: [
          envOpt("陰影潮濕角落倖存", "中線", "e_erna_2mid", 6, "vir"),
          envOpt("徹底失活", "衰退", "e_erna_die", -26, "vir")
        ]},
        e_erna_2ok: { prompt: "細胞內複製：", options: [
          envOpt("釋放更多粒子", "繁盛", "e_erna_thrive", 18, "vir"),
          envOpt("宿主提早中止複製", "回落", "e_erna_2mid", -12, "vir")
        ]},
        e_erna_2mid: { prompt: "季節與人群流動：", options: [
          envOpt("涼爽季節＋密閉空間", "繁盛", "e_erna_thrive", 16, "vir"),
          envOpt("通風與間隔", "衰退", "e_erna_die", -20, "vir"),
          envOpt("低度循環", "持平", "e_erna_steady", 0, "vir")
        ]},
        e_erna_2bad: { prompt: "先天免疫壓力：", options: [
          envOpt("少數逃脫", "中線", "e_erna_2mid", 8, "vir"),
          envOpt("複製鏈中斷", "衰退", "e_erna_die", -24, "vir")
        ]},
        e_erna_thrive: envEnd("e_erna_thrive", "thrive", "有膜 RNA・季節循環繁盛", "在適宜傳播條件下粒子產量上升（簡化）。非醫療／非診斷。"),
        e_erna_steady: envEnd("e_erna_steady", "steady", "低度循環・持平", "未爆發也未消失的示意。休閒探索・非醫療。"),
        e_erna_die: envEnd("e_erna_die", "decline", "乾燥通風・粒子衰退", "環境與防衛使活性粒子柔和消退。可再玩。非醫療。")
      }
    },
    neuro: {
      start: "e_neuro_0",
      nodes: {
        e_neuro_0: { prompt: "暴露途徑示意：", options: [
          envOpt("接近神經末梢路徑", "前進・＋", "e_neuro_1a", 12, "vir"),
          envOpt("僅皮膚淺表接觸", "難前進・－", "e_neuro_1b", -14, "vir"),
          envOpt("乾燥失活", "衰退風險", "e_neuro_1c", -18, "vir")
        ]},
        e_neuro_1a: { prompt: "沿路徑移動：", options: [
          envOpt("緩慢向心", "複製機會", "e_neuro_2ok", 12, "vir"),
          envOpt("局部防衛攔截", "受阻", "e_neuro_2bad", -16, "vir")
        ]},
        e_neuro_1b: { prompt: "淺表結局：", options: [
          envOpt("偶然進入適徑", "轉入前進", "e_neuro_1a", 8, "vir"),
          envOpt("被清除", "衰退", "e_neuro_die", -22, "vir")
        ]},
        e_neuro_1c: { prompt: "環境壓力：", options: [
          envOpt("潮濕庇護", "中線", "e_neuro_2mid", 6, "vir"),
          envOpt("失活", "衰退", "e_neuro_die", -26, "vir")
        ]},
        e_neuro_2ok: { prompt: "神經嗜性示意：", options: [
          envOpt("穩定存在於路徑", "繁盛／適應", "e_neuro_thrive", 14, "vir"),
          envOpt("防衛加強", "回落", "e_neuro_2mid", -10, "vir")
        ]},
        e_neuro_2mid: { prompt: "後續：", options: [
          envOpt("條件轉鬆", "繁盛", "e_neuro_thrive", 14, "vir"),
          envOpt("條件轉緊", "衰退", "e_neuro_die", -20, "vir"),
          envOpt("長期低調", "持平", "e_neuro_steady", 0, "vir")
        ]},
        e_neuro_2bad: { prompt: "攔截後：", options: [
          envOpt("殘存", "中線", "e_neuro_2mid", 6, "vir"),
          envOpt("中斷", "衰退", "e_neuro_die", -24, "vir")
        ]},
        e_neuro_thrive: envEnd("e_neuro_thrive", "thrive", "神經嗜性路徑・適應示意", "簡化生活史隱喻，非真實病程模擬。非醫療／非恐嚇。"),
        e_neuro_steady: envEnd("e_neuro_steady", "steady", "路徑中斷邊緣・持平", "低調存在示意。休閒探索・非醫療。"),
        e_neuro_die: envEnd("e_neuro_die", "decline", "攔截或失活・衰退", "柔和消退。可再玩。非醫療。")
      }
    },
    arbo: {
      start: "e_arbo_0",
      nodes: {
        e_arbo_0: { prompt: "蟲媒循環：季節與媒介？", options: [
          envOpt("媒介活躍季節", "傳播機會・＋", "e_arbo_1a", 14, "vir"),
          envOpt("乾冷媒介稀少", "循環放緩・－", "e_arbo_1b", -12, "vir"),
          envOpt("防媒措施普及", "受阻", "e_arbo_1c", -16, "vir")
        ]},
        e_arbo_1a: { prompt: "在媒介／宿主間：", options: [
          envOpt("順利完成一輪", "擴張", "e_arbo_2ok", 14, "vir"),
          envOpt("宿主防衛偏強", "受挫", "e_arbo_2bad", -14, "vir"),
          envOpt("低度循環", "持平", "e_arbo_2mid", 2, "vir")
        ]},
        e_arbo_1b: { prompt: "淡季：", options: [
          envOpt("局部溫暖微生境", "中線", "e_arbo_2mid", 8, "vir"),
          envOpt("循環中斷", "衰退", "e_arbo_die", -22, "vir")
        ]},
        e_arbo_1c: { prompt: "防媒壓力：", options: [
          envOpt("殘存於少數熱點", "中線", "e_arbo_2mid", 6, "vir"),
          envOpt("大範圍中斷", "衰退", "e_arbo_die", -24, "vir")
        ]},
        e_arbo_2ok: { prompt: "循環鞏固：", options: [
          envOpt("季節繁盛", "繁盛", "e_arbo_thrive", 16, "vir"),
          envOpt("突然轉涼", "回落", "e_arbo_2mid", -10, "vir")
        ]},
        e_arbo_2mid: { prompt: "下一季：", options: [
          envOpt("媒介回升", "繁盛", "e_arbo_thrive", 18, "vir"),
          envOpt("持續防媒", "衰退", "e_arbo_die", -20, "vir"),
          envOpt("低度維持", "持平", "e_arbo_steady", 0, "vir")
        ]},
        e_arbo_2bad: { prompt: "防衛後：", options: [
          envOpt("改道少數宿主", "中線", "e_arbo_2mid", 8, "vir"),
          envOpt("鏈斷", "衰退", "e_arbo_die", -24, "vir")
        ]},
        e_arbo_thrive: envEnd("e_arbo_thrive", "thrive", "蟲媒季節・循環繁盛", "媒介活躍時循環擴張的簡化示意。非醫療。"),
        e_arbo_steady: envEnd("e_arbo_steady", "steady", "低度熱點・持平", "未消失也未擴張。休閒探索・非醫療。"),
        e_arbo_die: envEnd("e_arbo_die", "decline", "淡季或防媒・衰退", "循環柔和中斷。可再玩。非醫療。")
      }
    },
    naked_gi: {
      start: "e_ngi_0",
      nodes: {
        e_ngi_0: { prompt: "糞口／表面：粒子遇到？", options: [
          envOpt("潮濕污染表面", "穩定・＋", "e_ngi_1a", 14, "vir"),
          envOpt("徹底洗手與消毒", "受創・－", "e_ngi_1b", -18, "vir"),
          envOpt("乾燥久置", "緩慢下降", "e_ngi_1c", -10, "vir")
        ]},
        e_ngi_1a: { prompt: "進入腸道示意：", options: [
          envOpt("順利抵達腸上皮", "複製", "e_ngi_2ok", 14, "vir"),
          envOpt("胃酸／膽汁壓力大", "受阻", "e_ngi_2bad", -14, "vir"),
          envOpt("少量通過", "持平", "e_ngi_2mid", 2, "vir")
        ]},
        e_ngi_1b: { prompt: "清潔後：", options: [
          envOpt("縫隙殘存", "中線", "e_ngi_2mid", 6, "vir"),
          envOpt("清除乾淨", "衰退", "e_ngi_die", -26, "vir")
        ]},
        e_ngi_1c: { prompt: "乾燥後：", options: [
          envOpt("再潤濕傳遞", "回到潮濕路徑", "e_ngi_1a", 10, "vir"),
          envOpt("失活", "衰退", "e_ngi_die", -22, "vir")
        ]},
        e_ngi_2ok: { prompt: "腸道內：", options: [
          envOpt("大量釋出", "繁盛", "e_ngi_thrive", 18, "vir"),
          envOpt("腸蠕動加速排出", "回落", "e_ngi_2mid", -12, "vir")
        ]},
        e_ngi_2mid: { prompt: "衛生條件：", options: [
          envOpt("衛生鬆散", "繁盛", "e_ngi_thrive", 16, "vir"),
          envOpt("嚴格洗手消毒", "衰退", "e_ngi_die", -20, "vir"),
          envOpt("低度殘存", "持平", "e_ngi_steady", 0, "vir")
        ]},
        e_ngi_2bad: { prompt: "消化液壓力：", options: [
          envOpt("耐酸少數通過", "中線", "e_ngi_2mid", 8, "vir"),
          envOpt("全滅示意", "衰退", "e_ngi_die", -24, "vir")
        ]},
        e_ngi_thrive: envEnd("e_ngi_thrive", "thrive", "裸殼腸胃向・環境堅韌繁盛", "潮濕表面與傳遞條件合適時擴張（簡化）。非醫療。"),
        e_ngi_steady: envEnd("e_ngi_steady", "steady", "低度殘存・持平", "未清除也未擴張。休閒探索・非醫療。"),
        e_ngi_die: envEnd("e_ngi_die", "decline", "洗手消毒・柔和清除", "衛生措施使粒子消退。可再玩。非醫療。")
      }
    },
    naked_resp: {
      start: "e_nresp_0",
      nodes: {
        e_nresp_0: { prompt: "鼻腔最適：溫度與濕度？", options: [
          envOpt("稍涼潮濕", "最適・＋", "e_nresp_1a", 14, "vir"),
          envOpt("過熱乾燥", "不利・－", "e_nresp_1b", -12, "vir"),
          envOpt("強通風稀釋", "濃度下降", "e_nresp_1c", -14, "vir")
        ]},
        e_nresp_1a: { prompt: "上皮複製：", options: [
          envOpt("順利出芽／裂解示意", "擴張", "e_nresp_2ok", 14, "vir"),
          envOpt("黏液纖毛清除", "受阻", "e_nresp_2bad", -14, "vir"),
          envOpt("低度複製", "持平", "e_nresp_2mid", 2, "vir")
        ]},
        e_nresp_1b: { prompt: "過熱後：", options: [
          envOpt("回到涼爽區", "中線", "e_nresp_2mid", 10, "vir"),
          envOpt("失活", "衰退", "e_nresp_die", -22, "vir")
        ]},
        e_nresp_1c: { prompt: "稀釋後：", options: [
          envOpt("密閉角落再積聚", "中線", "e_nresp_2mid", 8, "vir"),
          envOpt("濃度過低", "衰退", "e_nresp_die", -20, "vir")
        ]},
        e_nresp_2ok: { prompt: "釋放：", options: [
          envOpt("打噴嚏／飛沫擴散", "繁盛", "e_nresp_thrive", 16, "vir"),
          envOpt("宿主休息少外出", "回落", "e_nresp_2mid", -10, "vir")
        ]},
        e_nresp_2mid: { prompt: "氣候：", options: [
          envOpt("回涼季", "繁盛", "e_nresp_thrive", 16, "vir"),
          envOpt("炎熱乾燥", "衰退", "e_nresp_die", -18, "vir"),
          envOpt("低度存在", "持平", "e_nresp_steady", 0, "vir")
        ]},
        e_nresp_2bad: { prompt: "纖毛壓力：", options: [
          envOpt("躲過一輪", "中線", "e_nresp_2mid", 8, "vir"),
          envOpt("被清走", "衰退", "e_nresp_die", -24, "vir")
        ]},
        e_nresp_thrive: envEnd("e_nresp_thrive", "thrive", "鼻腔最適・繁盛", "溫度濕度合適時複製擴張（簡化）。非醫療。"),
        e_nresp_steady: envEnd("e_nresp_steady", "steady", "低度存在・持平", "休閒探索・非醫療。"),
        e_nresp_die: envEnd("e_nresp_die", "decline", "過熱通風・衰退", "柔和消退。可再玩。非醫療。")
      }
    },
    dna: {
      start: "e_dna_0",
      nodes: {
        e_dna_0: { prompt: "飛沫／接觸／物表：", options: [
          envOpt("黏膜接觸", "進入機會・＋", "e_dna_1a", 12, "vir"),
          envOpt("乾燥物表久置", "部分失活・－", "e_dna_1b", -10, "vir"),
          envOpt("消毒劑", "明顯受創", "e_dna_1c", -18, "vir")
        ]},
        e_dna_1a: { prompt: "核內複製示意：", options: [
          envOpt("早期基因順利", "擴張", "e_dna_2ok", 14, "vir"),
          envOpt("細胞防衛偏強", "受阻", "e_dna_2bad", -14, "vir"),
          envOpt("低度複製", "持平", "e_dna_2mid", 2, "vir")
        ]},
        e_dna_1b: { prompt: "物表後：", options: [
          envOpt("再傳遞至黏膜", "進入", "e_dna_1a", 10, "vir"),
          envOpt("失活", "衰退", "e_dna_die", -22, "vir")
        ]},
        e_dna_1c: { prompt: "消毒後：", options: [
          envOpt("縫隙殘存", "中線", "e_dna_2mid", 6, "vir"),
          envOpt("清除", "衰退", "e_dna_die", -26, "vir")
        ]},
        e_dna_2ok: { prompt: "釋出：", options: [
          envOpt("粒子產量高", "繁盛", "e_dna_thrive", 16, "vir"),
          envOpt("免疫壓力上升", "回落", "e_dna_2mid", -12, "vir")
        ]},
        e_dna_2mid: { prompt: "後續環境：", options: [
          envOpt("密集聚會", "繁盛", "e_dna_thrive", 16, "vir"),
          envOpt("通風消毒", "衰退", "e_dna_die", -20, "vir"),
          envOpt("低度循環", "持平", "e_dna_steady", 0, "vir")
        ]},
        e_dna_2bad: { prompt: "防衛後：", options: [
          envOpt("殘存複製", "中線", "e_dna_2mid", 8, "vir"),
          envOpt("中斷", "衰退", "e_dna_die", -24, "vir")
        ]},
        e_dna_thrive: envEnd("e_dna_thrive", "thrive", "DNA 殼・複製繁盛", "核內複製路徑順利時擴張（簡化）。非醫療。"),
        e_dna_steady: envEnd("e_dna_steady", "steady", "低度循環・持平", "休閒探索・非醫療。"),
        e_dna_die: envEnd("e_dna_die", "decline", "消毒通風・衰退", "柔和消退。可再玩。非醫療。")
      }
    },
    dna_lat: {
      start: "e_dlat_0",
      nodes: {
        e_dlat_0: { prompt: "初遇後的生活史分叉：", options: [
          envOpt("進入潛伏樣狀態", "低調持存・微＋", "e_dlat_1a", 8, "vir"),
          envOpt("裂解樣活躍複製", "短期擴張・也易觸發清除", "e_dlat_1b", 12, "vir"),
          envOpt("環境失活為主", "衰退風險", "e_dlat_1c", -16, "vir")
        ]},
        e_dlat_1a: { prompt: "潛伏期波動：", options: [
          envOpt("偶發再激活示意", "局部擴張", "e_dlat_2ok", 12, "vir"),
          envOpt("持續靜默", "持平路徑", "e_dlat_2mid", 0, "vir"),
          envOpt("防衛清除潛伏庫", "衰退", "e_dlat_2bad", -18, "vir")
        ]},
        e_dlat_1b: { prompt: "活躍複製後：", options: [
          envOpt("部分轉入潛伏", "中線", "e_dlat_2mid", 6, "vir"),
          envOpt("被強力壓制", "衰退", "e_dlat_die", -22, "vir"),
          envOpt("持續擴散", "繁盛", "e_dlat_thrive", 14, "vir")
        ]},
        e_dlat_1c: { prompt: "環境壓力：", options: [
          envOpt("進入宿主潛伏庫", "潛伏路徑", "e_dlat_1a", 10, "vir"),
          envOpt("失活", "衰退", "e_dlat_die", -24, "vir")
        ]},
        e_dlat_2ok: { prompt: "再激活後：", options: [
          envOpt("短暫繁盛後再潛伏", "繁盛／適應", "e_dlat_thrive", 14, "vir"),
          envOpt("激活被迅速壓下", "持平", "e_dlat_steady", -8, "vir")
        ]},
        e_dlat_2mid: { prompt: "長年：", options: [
          envOpt("穩定潛伏適應", "繁盛／適應", "e_dlat_thrive", 10, "vir"),
          envOpt("庫被清空示意", "衰退", "e_dlat_die", -20, "vir"),
          envOpt("終身低調", "持平", "e_dlat_steady", 0, "vir")
        ]},
        e_dlat_2bad: { prompt: "清除壓力：", options: [
          envOpt("極少數殘存", "持平", "e_dlat_steady", 4, "vir"),
          envOpt("清空", "衰退", "e_dlat_die", -26, "vir")
        ]},
        e_dlat_thrive: envEnd("e_dlat_thrive", "thrive", "潛伏策略・長期適應", "潛伏／再激活的簡化隱喻。非病程模擬・非醫療。"),
        e_dlat_steady: envEnd("e_dlat_steady", "steady", "靜默潛伏・持平", "低調存在。休閒探索・非醫療。"),
        e_dlat_die: envEnd("e_dlat_die", "decline", "潛伏庫清空・衰退", "柔和消退示意。可再玩。非醫療。")
      }
    },
    retro: {
      start: "e_retro_0",
      nodes: {
        e_retro_0: { prompt: "進入易感細胞前後：", options: [
          envOpt("受體接合順利", "進入・＋", "e_retro_1a", 12, "vir"),
          envOpt("阻斷／無適受體", "難進入・－", "e_retro_1b", -14, "vir"),
          envOpt("體外乾燥久置", "失活風險", "e_retro_1c", -18, "vir")
        ]},
        e_retro_1a: { prompt: "反轉錄→整合示意：", options: [
          envOpt("整合成功", "長期存在基礎", "e_retro_2ok", 14, "vir"),
          envOpt("複製中途出錯", "受挫", "e_retro_2bad", -14, "vir"),
          envOpt("低效整合", "持平", "e_retro_2mid", 2, "vir")
        ]},
        e_retro_1b: { prompt: "進不去時：", options: [
          envOpt("改遇少數適細胞", "中線", "e_retro_2mid", 8, "vir"),
          envOpt("完全無適位", "衰退", "e_retro_die", -22, "vir")
        ]},
        e_retro_1c: { prompt: "體外：", options: [
          envOpt("迅速進入體液保護", "進入路徑", "e_retro_1a", 10, "vir"),
          envOpt("失活", "衰退", "e_retro_die", -26, "vir")
        ]},
        e_retro_2ok: { prompt: "整合後：", options: [
          envOpt("穩定低度複製", "繁盛／適應", "e_retro_thrive", 14, "vir"),
          envOpt("複製被壓得很低", "回落持平", "e_retro_2mid", -8, "vir")
        ]},
        e_retro_2mid: { prompt: "長期：", options: [
          envOpt("條件允許擴張", "繁盛", "e_retro_thrive", 12, "vir"),
          envOpt("持續高壓抑制", "衰退", "e_retro_die", -18, "vir"),
          envOpt("極低度持存", "持平", "e_retro_steady", 0, "vir")
        ]},
        e_retro_2bad: { prompt: "出錯後：", options: [
          envOpt("少數完整基因組倖存", "中線", "e_retro_2mid", 8, "vir"),
          envOpt("鏈斷", "衰退", "e_retro_die", -24, "vir")
        ]},
        e_retro_thrive: envEnd("e_retro_thrive", "thrive", "反轉錄整合・長期適應示意", "分子生活史簡化隱喻。非診斷／非醫療／非恐嚇。"),
        e_retro_steady: envEnd("e_retro_steady", "steady", "極低度持存・持平", "休閒探索・非醫療。"),
        e_retro_die: envEnd("e_retro_die", "decline", "無適位或失活・衰退", "柔和消退。可再玩。非醫療。")
      }
    }
  };

  var ENV_NOTES = {
    thrive: {
      cocci: "曾在潮濕微環境中繁盛定植。",
      rod: "曾在養分充足的微位繁盛。",
      myco: "曾以持存策略適應微環境。",
      spore: "曾以芽孢／萌發策略繁盛。",
      spiral: "曾以螺旋／弧形運動適應定植。",
      env_rna: "曾在適宜季節飛沫條件下繁盛。",
      neuro: "曾沿神經嗜性路徑示意適應。",
      arbo: "曾在蟲媒活躍季節循環繁盛。",
      naked_gi: "曾在潮濕傳遞條件下繁盛。",
      naked_resp: "曾在鼻腔最適溫濕下繁盛。",
      dna: "曾在黏膜傳播條件下繁盛。",
      dna_lat: "曾以潛伏策略長期適應。",
      retro: "曾完成整合後低度適應示意。"
    }
  };

  function getEnvPoolId(formId) {
    return ENV_POOL_OF[formId] || (DEX[formId] && DEX[formId].kind === "vir" ? "env_rna" : "cocci");
  }
  function getEnvNodes(formId) {
    var poolId = getEnvPoolId(formId);
    var pool = ENV_POOLS[poolId];
    return pool ? pool.nodes : null;
  }
  function getEnvStartId(formId) {
    var poolId = getEnvPoolId(formId);
    var pool = ENV_POOLS[poolId];
    return pool ? pool.start : null;
  }
  function getEnvBasePop(formId) {
    return ENV_BASE_POP[formId] != null ? ENV_BASE_POP[formId] : 52;
  }
