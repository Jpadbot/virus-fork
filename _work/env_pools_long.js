  var ENV_POOLS = {
    cocci: {
      start: "e_cocci_0",
      nodes: {
        e_cocci_0: { prompt: "剛離開實驗室，你落在何處？", options: [
          envOpt("繁忙市區捷運車廂", "人群摩肩・空調循環", "e_cocci_1_ok", 10, "bact"),
          envOpt("近郊住宅陽台", "陽光與風較多", "e_cocci_1_mid", -6, "bact"),
          envOpt("醫院門診等候區", "消毒氣味隱約", "e_cocci_1_bad", -10, "bact")
        ]},
        e_cocci_1_ok: { prompt: "下一個棲身之處？", options: [
          envOpt("寄生在人的手部皮膚", "皮脂與微汗", "e_cocci_2_ok", 8, "bact"),
          envOpt("寄生在家貓皮毛", "溫暖但常被梳洗", "e_cocci_2_mid", 2, "bact"),
          envOpt("落在金屬扶手表面", "乾燥偏涼", "e_cocci_2_bad", -12, "bact")
        ]},
        e_cocci_1_mid: { prompt: "下一個棲身之處？", options: [
          envOpt("寄生在人的手部皮膚", "皮脂與微汗", "e_cocci_2_ok", 8, "bact"),
          envOpt("寄生在家貓皮毛", "溫暖但常被梳洗", "e_cocci_2_mid", 2, "bact"),
          envOpt("落在金屬扶手表面", "乾燥偏涼", "e_cocci_2_bad", -12, "bact")
        ]},
        e_cocci_1_bad: { prompt: "下一個棲身之處？", options: [
          envOpt("寄生在人的手部皮膚", "皮脂與微汗", "e_cocci_2_ok", 8, "bact"),
          envOpt("寄生在家貓皮毛", "溫暖但常被梳洗", "e_cocci_2_mid", 2, "bact"),
          envOpt("落在金屬扶手表面", "乾燥偏涼", "e_cocci_2_bad", -12, "bact")
        ]},
        e_cocci_2_ok: { prompt: "白天的活動場景？", options: [
          envOpt("學校教室課桌", "多人碰觸", "e_cocci_3_ok", 9, "bact"),
          envOpt("公園長椅午後", "日曬間歇", "e_cocci_3_mid", -4, "bact"),
          envOpt("剛用過酒精的櫃檯", "殘留刺激", "e_cocci_3_bad", -14, "bact")
        ]},
        e_cocci_2_mid: { prompt: "白天的活動場景？", options: [
          envOpt("學校教室課桌", "多人碰觸", "e_cocci_3_ok", 9, "bact"),
          envOpt("公園長椅午後", "日曬間歇", "e_cocci_3_mid", -4, "bact"),
          envOpt("剛用過酒精的櫃檯", "殘留刺激", "e_cocci_3_bad", -14, "bact")
        ]},
        e_cocci_2_bad: { prompt: "白天的活動場景？", options: [
          envOpt("學校教室課桌", "多人碰觸", "e_cocci_3_ok", 9, "bact"),
          envOpt("公園長椅午後", "日曬間歇", "e_cocci_3_mid", -4, "bact"),
          envOpt("剛用過酒精的櫃檯", "殘留刺激", "e_cocci_3_bad", -14, "bact")
        ]},
        e_cocci_3_ok: { prompt: "夜間宿主作息？", options: [
          envOpt("待在未徹底清潔的床單縫", "微濕溫暖", "e_cocci_4_ok", 11, "bact"),
          envOpt("浴室磁磚接縫", "潮而不穩", "e_cocci_4_mid", 3, "bact"),
          envOpt("窗外冷風直吹的窗台", "水分散失", "e_cocci_4_bad", -11, "bact")
        ]},
        e_cocci_3_mid: { prompt: "夜間宿主作息？", options: [
          envOpt("待在未徹底清潔的床單縫", "微濕溫暖", "e_cocci_4_ok", 11, "bact"),
          envOpt("浴室磁磚接縫", "潮而不穩", "e_cocci_4_mid", 3, "bact"),
          envOpt("窗外冷風直吹的窗台", "水分散失", "e_cocci_4_bad", -11, "bact")
        ]},
        e_cocci_3_bad: { prompt: "夜間宿主作息？", options: [
          envOpt("待在未徹底清潔的床單縫", "微濕溫暖", "e_cocci_4_ok", 11, "bact"),
          envOpt("浴室磁磚接縫", "潮而不穩", "e_cocci_4_mid", 3, "bact"),
          envOpt("窗外冷風直吹的窗台", "水分散失", "e_cocci_4_bad", -11, "bact")
        ]},
        e_cocci_4_ok: { prompt: "遇到清潔習慣？", options: [
          envOpt("主人只是清水沖手", "壓力較輕", "e_cocci_5_ok", 7, "bact"),
          envOpt("偶爾用肥皂短洗", "局部沖刷", "e_cocci_5_mid", -2, "bact"),
          envOpt("出入都用乾洗手", "反覆受挫", "e_cocci_5_bad", -15, "bact")
        ]},
        e_cocci_4_mid: { prompt: "遇到清潔習慣？", options: [
          envOpt("主人只是清水沖手", "壓力較輕", "e_cocci_5_ok", 7, "bact"),
          envOpt("偶爾用肥皂短洗", "局部沖刷", "e_cocci_5_mid", -2, "bact"),
          envOpt("出入都用乾洗手", "反覆受挫", "e_cocci_5_bad", -15, "bact")
        ]},
        e_cocci_4_bad: { prompt: "遇到清潔習慣？", options: [
          envOpt("主人只是清水沖手", "壓力較輕", "e_cocci_5_ok", 7, "bact"),
          envOpt("偶爾用肥皂短洗", "局部沖刷", "e_cocci_5_mid", -2, "bact"),
          envOpt("出入都用乾洗手", "反覆受挫", "e_cocci_5_bad", -15, "bact")
        ]},
        e_cocci_5_ok: { prompt: "季節轉換？", options: [
          envOpt("潮濕悶熱的夏日", "汗水與密閉空間", "e_cocci_6_ok", 12, "bact"),
          envOpt("春末忽晴忽雨", "條件來回", "e_cocci_6_mid", 1, "bact"),
          envOpt("乾燥冷氣房整日", "表皮乾裂感", "e_cocci_6_bad", -13, "bact")
        ]},
        e_cocci_5_mid: { prompt: "季節轉換？", options: [
          envOpt("潮濕悶熱的夏日", "汗水與密閉空間", "e_cocci_6_ok", 12, "bact"),
          envOpt("春末忽晴忽雨", "條件來回", "e_cocci_6_mid", 1, "bact"),
          envOpt("乾燥冷氣房整日", "表皮乾裂感", "e_cocci_6_bad", -13, "bact")
        ]},
        e_cocci_5_bad: { prompt: "季節轉換？", options: [
          envOpt("潮濕悶熱的夏日", "汗水與密閉空間", "e_cocci_6_ok", 12, "bact"),
          envOpt("春末忽晴忽雨", "條件來回", "e_cocci_6_mid", 1, "bact"),
          envOpt("乾燥冷氣房整日", "表皮乾裂感", "e_cocci_6_bad", -13, "bact")
        ]},
        e_cocci_6_ok: { prompt: "傳播契機？", options: [
          envOpt("握手與共用毛巾", "接觸傳遞", "e_cocci_7_ok", 10, "bact"),
          envOpt("隔著衣物短暫貼近", "機會有限", "e_cocci_7_mid", 0, "bact"),
          envOpt("被隔離在密封包裝外", "難以擴散", "e_cocci_7_bad", -12, "bact")
        ]},
        e_cocci_6_mid: { prompt: "傳播契機？", options: [
          envOpt("握手與共用毛巾", "接觸傳遞", "e_cocci_7_ok", 10, "bact"),
          envOpt("隔著衣物短暫貼近", "機會有限", "e_cocci_7_mid", 0, "bact"),
          envOpt("被隔離在密封包裝外", "難以擴散", "e_cocci_7_bad", -12, "bact")
        ]},
        e_cocci_6_bad: { prompt: "傳播契機？", options: [
          envOpt("握手與共用毛巾", "接觸傳遞", "e_cocci_7_ok", 10, "bact"),
          envOpt("隔著衣物短暫貼近", "機會有限", "e_cocci_7_mid", 0, "bact"),
          envOpt("被隔離在密封包裝外", "難以擴散", "e_cocci_7_bad", -12, "bact")
        ]},
        e_cocci_7_ok: { prompt: "社區環境？", options: [
          envOpt("菜市場人潮與濕氣", "熱鬧微生境", "e_cocci_8_ok", 9, "bact"),
          envOpt("郊外露營營地", "泥土與露水", "e_cocci_8_mid", 2, "bact"),
          envOpt("高頻紫外消毒的實驗室廊", "苛刻表面", "e_cocci_die", -16, "bact")
        ]},
        e_cocci_7_mid: { prompt: "社區環境？", options: [
          envOpt("菜市場人潮與濕氣", "熱鬧微生境", "e_cocci_8_ok", 9, "bact"),
          envOpt("郊外露營營地", "泥土與露水", "e_cocci_8_mid", 2, "bact"),
          envOpt("高頻紫外消毒的實驗室廊", "苛刻表面", "e_cocci_die", -16, "bact")
        ]},
        e_cocci_7_bad: { prompt: "社區環境？", options: [
          envOpt("菜市場人潮與濕氣", "熱鬧微生境", "e_cocci_8_ok", 9, "bact"),
          envOpt("郊外露營營地", "泥土與露水", "e_cocci_8_mid", 2, "bact"),
          envOpt("高頻紫外消毒的實驗室廊", "苛刻表面", "e_cocci_die", -16, "bact")
        ]},
        e_cocci_8_ok: { prompt: "宿主防衛靠近時？", options: [
          envOpt("躲進皮膚微裂縫", "暫時庇護", "e_cocci_9_ok", 8, "bact"),
          envOpt("留在表面觀望", "風險與機會各半", "e_cocci_9_mid", -1, "bact"),
          envOpt("正面暴露在沖洗下", "大量被帶走", "e_cocci_9_bad", -14, "bact")
        ]},
        e_cocci_8_mid: { prompt: "宿主防衛靠近時？", options: [
          envOpt("躲進皮膚微裂縫", "暫時庇護", "e_cocci_9_ok", 8, "bact"),
          envOpt("留在表面觀望", "風險與機會各半", "e_cocci_9_mid", -1, "bact"),
          envOpt("正面暴露在沖洗下", "大量被帶走", "e_cocci_9_bad", -14, "bact")
        ]},
        e_cocci_8_bad: { prompt: "宿主防衛靠近時？", options: [
          envOpt("躲進皮膚微裂縫", "暫時庇護", "e_cocci_9_ok", 8, "bact"),
          envOpt("留在表面觀望", "風險與機會各半", "e_cocci_9_mid", -1, "bact"),
          envOpt("正面暴露在沖洗下", "大量被帶走", "e_cocci_9_bad", -14, "bact")
        ]},
        e_cocci_9_ok: { prompt: "一段日子之後？", options: [
          envOpt("隨通勤網絡擴散到更多皮膚", "都市節奏", "e_cocci_ext0", 14, "bact"),
          envOpt("只在同一家庭成員間徘徊", "小圈子", "e_cocci_steady", 2, "bact"),
          envOpt("反覆消毒讓據點消失", "場所清空", "e_cocci_die", -18, "bact")
        ]},
        e_cocci_9_mid: { prompt: "一段日子之後？", options: [
          envOpt("隨通勤網絡擴散到更多皮膚", "都市節奏", "e_cocci_ext0", 14, "bact"),
          envOpt("只在同一家庭成員間徘徊", "小圈子", "e_cocci_steady", 2, "bact"),
          envOpt("反覆消毒讓據點消失", "場所清空", "e_cocci_die", -18, "bact")
        ]},
        e_cocci_9_bad: { prompt: "一段日子之後？", options: [
          envOpt("隨通勤網絡擴散到更多皮膚", "都市節奏", "e_cocci_ext0", 14, "bact"),
          envOpt("只在同一家庭成員間徘徊", "小圈子", "e_cocci_steady", 2, "bact"),
          envOpt("反覆消毒讓據點消失", "場所清空", "e_cocci_die", -18, "bact")
        ]},
        e_cocci_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_cocci_ext1", 8, "bact"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_cocci_steady", 2, "bact"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_cocci_die", -12, "bact")
        ]},
        e_cocci_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_cocci_thrive", 12, "bact"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_cocci_steady", 0, "bact"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_cocci_die", -14, "bact")
        ]},
        e_cocci_thrive: envEnd("e_cocci_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_cocci_steady: envEnd("e_cocci_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_cocci_die: envEnd("e_cocci_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    rod: {
      start: "e_rod_0",
      nodes: {
        e_rod_0: { prompt: "出實驗室後，第一站？", options: [
          envOpt("市區小吃街廚房角落", "油煙與殘渣", "e_rod_1_ok", 11, "bact"),
          envOpt("郊外農家水溝邊", "有機碎屑", "e_rod_1_mid", 4, "bact"),
          envOpt("冰冷的超市冷凍櫃外壁", "低溫乾燥", "e_rod_1_bad", -12, "bact")
        ]},
        e_rod_1_ok: { prompt: "宿主選擇？", options: [
          envOpt("進入人的腸道示意環境", "溫暖流動", "e_rod_2_ok", 12, "bact"),
          envOpt("落在伴侶動物食碗", "間歇餵食", "e_rod_2_mid", 3, "bact"),
          envOpt("停在消毒過的砧板", "表面乾淨", "e_rod_2_bad", -14, "bact")
        ]},
        e_rod_1_mid: { prompt: "宿主選擇？", options: [
          envOpt("進入人的腸道示意環境", "溫暖流動", "e_rod_2_ok", 12, "bact"),
          envOpt("落在伴侶動物食碗", "間歇餵食", "e_rod_2_mid", 3, "bact"),
          envOpt("停在消毒過的砧板", "表面乾淨", "e_rod_2_bad", -14, "bact")
        ]},
        e_rod_1_bad: { prompt: "宿主選擇？", options: [
          envOpt("進入人的腸道示意環境", "溫暖流動", "e_rod_2_ok", 12, "bact"),
          envOpt("落在伴侶動物食碗", "間歇餵食", "e_rod_2_mid", 3, "bact"),
          envOpt("停在消毒過的砧板", "表面乾淨", "e_rod_2_bad", -14, "bact")
        ]},
        e_rod_2_ok: { prompt: "飲食場景？", options: [
          envOpt("未澈底加熱的剩菜", "養分殘留", "e_rod_3_ok", 10, "bact"),
          envOpt("洗過但仍潮的生菜", "薄水膜", "e_rod_3_mid", 2, "bact"),
          envOpt("剛煮沸的湯面蒸汽散盡後仍燙", "高熱餘溫", "e_rod_3_bad", -15, "bact")
        ]},
        e_rod_2_mid: { prompt: "飲食場景？", options: [
          envOpt("未澈底加熱的剩菜", "養分殘留", "e_rod_3_ok", 10, "bact"),
          envOpt("洗過但仍潮的生菜", "薄水膜", "e_rod_3_mid", 2, "bact"),
          envOpt("剛煮沸的湯面蒸汽散盡後仍燙", "高熱餘溫", "e_rod_3_bad", -15, "bact")
        ]},
        e_rod_2_bad: { prompt: "飲食場景？", options: [
          envOpt("未澈底加熱的剩菜", "養分殘留", "e_rod_3_ok", 10, "bact"),
          envOpt("洗過但仍潮的生菜", "薄水膜", "e_rod_3_mid", 2, "bact"),
          envOpt("剛煮沸的湯面蒸汽散盡後仍燙", "高熱餘溫", "e_rod_3_bad", -15, "bact")
        ]},
        e_rod_3_ok: { prompt: "水系環境？", options: [
          envOpt("緩流的灌溉渠", "有機懸浮", "e_rod_4_ok", 9, "bact"),
          envOpt("間歇積水的輪胎坑", "時有時無", "e_rod_4_mid", 0, "bact"),
          envOpt("加氯的泳池邊緣", "刺激殘留", "e_rod_4_bad", -13, "bact")
        ]},
        e_rod_3_mid: { prompt: "水系環境？", options: [
          envOpt("緩流的灌溉渠", "有機懸浮", "e_rod_4_ok", 9, "bact"),
          envOpt("間歇積水的輪胎坑", "時有時無", "e_rod_4_mid", 0, "bact"),
          envOpt("加氯的泳池邊緣", "刺激殘留", "e_rod_4_bad", -13, "bact")
        ]},
        e_rod_3_bad: { prompt: "水系環境？", options: [
          envOpt("緩流的灌溉渠", "有機懸浮", "e_rod_4_ok", 9, "bact"),
          envOpt("間歇積水的輪胎坑", "時有時無", "e_rod_4_mid", 0, "bact"),
          envOpt("加氯的泳池邊緣", "刺激殘留", "e_rod_4_bad", -13, "bact")
        ]},
        e_rod_4_ok: { prompt: "人群移動？", options: [
          envOpt("夜市共用餐具傳遞", "接觸鏈", "e_rod_5_ok", 11, "bact"),
          envOpt("一人一份外帶盒", "封閉短暫", "e_rod_5_mid", -2, "bact"),
          envOpt("醫院營養室嚴格分裝", "管控嚴", "e_rod_5_bad", -12, "bact")
        ]},
        e_rod_4_mid: { prompt: "人群移動？", options: [
          envOpt("夜市共用餐具傳遞", "接觸鏈", "e_rod_5_ok", 11, "bact"),
          envOpt("一人一份外帶盒", "封閉短暫", "e_rod_5_mid", -2, "bact"),
          envOpt("醫院營養室嚴格分裝", "管控嚴", "e_rod_5_bad", -12, "bact")
        ]},
        e_rod_4_bad: { prompt: "人群移動？", options: [
          envOpt("夜市共用餐具傳遞", "接觸鏈", "e_rod_5_ok", 11, "bact"),
          envOpt("一人一份外帶盒", "封閉短暫", "e_rod_5_mid", -2, "bact"),
          envOpt("醫院營養室嚴格分裝", "管控嚴", "e_rod_5_bad", -12, "bact")
        ]},
        e_rod_5_ok: { prompt: "季節與儲存？", options: [
          envOpt("悶熱無冷藏的午後", "易腐敗微境", "e_rod_6_ok", 10, "bact"),
          envOpt("陰涼通風的食品櫃", "緩慢變化", "e_rod_6_mid", 1, "bact"),
          envOpt("長時間冷凍再解凍反覆", "結構受挫", "e_rod_6_bad", -14, "bact")
        ]},
        e_rod_5_mid: { prompt: "季節與儲存？", options: [
          envOpt("悶熱無冷藏的午後", "易腐敗微境", "e_rod_6_ok", 10, "bact"),
          envOpt("陰涼通風的食品櫃", "緩慢變化", "e_rod_6_mid", 1, "bact"),
          envOpt("長時間冷凍再解凍反覆", "結構受挫", "e_rod_6_bad", -14, "bact")
        ]},
        e_rod_5_bad: { prompt: "季節與儲存？", options: [
          envOpt("悶熱無冷藏的午後", "易腐敗微境", "e_rod_6_ok", 10, "bact"),
          envOpt("陰涼通風的食品櫃", "緩慢變化", "e_rod_6_mid", 1, "bact"),
          envOpt("長時間冷凍再解凍反覆", "結構受挫", "e_rod_6_bad", -14, "bact")
        ]},
        e_rod_6_ok: { prompt: "農場或市區？", options: [
          envOpt("家畜欄舍潮熱角落", "動物與糞肥氣息", "e_rod_7_ok", 9, "bact"),
          envOpt("市區公寓流理台縫", "殘渣微濕", "e_rod_7_mid", 5, "bact"),
          envOpt("紫外線食品加工燈下", "持續照射", "e_rod_7_bad", -16, "bact")
        ]},
        e_rod_6_mid: { prompt: "農場或市區？", options: [
          envOpt("家畜欄舍潮熱角落", "動物與糞肥氣息", "e_rod_7_ok", 9, "bact"),
          envOpt("市區公寓流理台縫", "殘渣微濕", "e_rod_7_mid", 5, "bact"),
          envOpt("紫外線食品加工燈下", "持續照射", "e_rod_7_bad", -16, "bact")
        ]},
        e_rod_6_bad: { prompt: "農場或市區？", options: [
          envOpt("家畜欄舍潮熱角落", "動物與糞肥氣息", "e_rod_7_ok", 9, "bact"),
          envOpt("市區公寓流理台縫", "殘渣微濕", "e_rod_7_mid", 5, "bact"),
          envOpt("紫外線食品加工燈下", "持續照射", "e_rod_7_bad", -16, "bact")
        ]},
        e_rod_7_ok: { prompt: "清潔風暴？", options: [
          envOpt("只擦一遍桌面", "縫隙仍在", "e_rod_8_ok", 6, "bact"),
          envOpt("熱水沖洗餐具", "大半沖走", "e_rod_8_mid", -5, "bact"),
          envOpt("漂白水浸泡砧板", "苛刻衝擊", "e_rod_die", -17, "bact")
        ]},
        e_rod_7_mid: { prompt: "清潔風暴？", options: [
          envOpt("只擦一遍桌面", "縫隙仍在", "e_rod_8_ok", 6, "bact"),
          envOpt("熱水沖洗餐具", "大半沖走", "e_rod_8_mid", -5, "bact"),
          envOpt("漂白水浸泡砧板", "苛刻衝擊", "e_rod_die", -17, "bact")
        ]},
        e_rod_7_bad: { prompt: "清潔風暴？", options: [
          envOpt("只擦一遍桌面", "縫隙仍在", "e_rod_8_ok", 6, "bact"),
          envOpt("熱水沖洗餐具", "大半沖走", "e_rod_8_mid", -5, "bact"),
          envOpt("漂白水浸泡砧板", "苛刻衝擊", "e_rod_die", -17, "bact")
        ]},
        e_rod_8_ok: { prompt: "鄰近微生物？", options: [
          envOpt("與其他腸道菌共存", "複雜小生態", "e_rod_9_ok", 7, "bact"),
          envOpt("落單在幾乎無菌的包材內", "資源稀", "e_rod_9_mid", -3, "bact"),
          envOpt("被益生菌製劑大量排擠", "空間壓縮", "e_rod_9_bad", -12, "bact")
        ]},
        e_rod_8_mid: { prompt: "鄰近微生物？", options: [
          envOpt("與其他腸道菌共存", "複雜小生態", "e_rod_9_ok", 7, "bact"),
          envOpt("落單在幾乎無菌的包材內", "資源稀", "e_rod_9_mid", -3, "bact"),
          envOpt("被益生菌製劑大量排擠", "空間壓縮", "e_rod_9_bad", -12, "bact")
        ]},
        e_rod_8_bad: { prompt: "鄰近微生物？", options: [
          envOpt("與其他腸道菌共存", "複雜小生態", "e_rod_9_ok", 7, "bact"),
          envOpt("落單在幾乎無菌的包材內", "資源稀", "e_rod_9_mid", -3, "bact"),
          envOpt("被益生菌製劑大量排擠", "空間壓縮", "e_rod_9_bad", -12, "bact")
        ]},
        e_rod_9_ok: { prompt: "收束前的走向？", options: [
          envOpt("隨食物鏈在社區循環", "廣域流動", "e_rod_ext0", 13, "bact"),
          envOpt("只在單一廚房殘存", "局部", "e_rod_steady", 1, "bact"),
          envOpt("整批食材被召回銷毀", "據點清空", "e_rod_die", -18, "bact")
        ]},
        e_rod_9_mid: { prompt: "收束前的走向？", options: [
          envOpt("隨食物鏈在社區循環", "廣域流動", "e_rod_ext0", 13, "bact"),
          envOpt("只在單一廚房殘存", "局部", "e_rod_steady", 1, "bact"),
          envOpt("整批食材被召回銷毀", "據點清空", "e_rod_die", -18, "bact")
        ]},
        e_rod_9_bad: { prompt: "收束前的走向？", options: [
          envOpt("隨食物鏈在社區循環", "廣域流動", "e_rod_ext0", 13, "bact"),
          envOpt("只在單一廚房殘存", "局部", "e_rod_steady", 1, "bact"),
          envOpt("整批食材被召回銷毀", "據點清空", "e_rod_die", -18, "bact")
        ]},
        e_rod_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_rod_ext1", 8, "bact"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_rod_steady", 2, "bact"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_rod_die", -12, "bact")
        ]},
        e_rod_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_rod_thrive", 12, "bact"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_rod_steady", 0, "bact"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_rod_die", -14, "bact")
        ]},
        e_rod_thrive: envEnd("e_rod_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_rod_steady: envEnd("e_rod_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_rod_die: envEnd("e_rod_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    myco: {
      start: "e_myco_0",
      nodes: {
        e_myco_0: { prompt: "落點？", options: [
          envOpt("擁擠市區地下街", "通風差", "e_myco_1_ok", 9, "bact"),
          envOpt("郊外開闊草原風", "稀釋快", "e_myco_1_mid", -5, "bact"),
          envOpt("醫院負壓隔離走廊外", "管控區邊緣", "e_myco_1_bad", -11, "bact")
        ]},
        e_myco_1_ok: { prompt: "宿主？", options: [
          envOpt("寄生於人的呼吸道黏膜示意", "溫濕", "e_myco_2_ok", 10, "bact"),
          envOpt("野生小型哺乳動物巢穴", "偶遇", "e_myco_2_mid", 3, "bact"),
          envOpt("乾燥塵埃長時間懸浮後落地", "養分少", "e_myco_2_bad", -12, "bact")
        ]},
        e_myco_1_mid: { prompt: "宿主？", options: [
          envOpt("寄生於人的呼吸道黏膜示意", "溫濕", "e_myco_2_ok", 10, "bact"),
          envOpt("野生小型哺乳動物巢穴", "偶遇", "e_myco_2_mid", 3, "bact"),
          envOpt("乾燥塵埃長時間懸浮後落地", "養分少", "e_myco_2_bad", -12, "bact")
        ]},
        e_myco_1_bad: { prompt: "宿主？", options: [
          envOpt("寄生於人的呼吸道黏膜示意", "溫濕", "e_myco_2_ok", 10, "bact"),
          envOpt("野生小型哺乳動物巢穴", "偶遇", "e_myco_2_mid", 3, "bact"),
          envOpt("乾燥塵埃長時間懸浮後落地", "養分少", "e_myco_2_bad", -12, "bact")
        ]},
        e_myco_2_ok: { prompt: "空氣條件？", options: [
          envOpt("密閉冷氣公車", "反覆循環", "e_myco_3_ok", 11, "bact"),
          envOpt("半開窗的客廳", "換氣中等", "e_myco_3_mid", 1, "bact"),
          envOpt("強風山脊", "快速吹散", "e_myco_3_bad", -14, "bact")
        ]},
        e_myco_2_mid: { prompt: "空氣條件？", options: [
          envOpt("密閉冷氣公車", "反覆循環", "e_myco_3_ok", 11, "bact"),
          envOpt("半開窗的客廳", "換氣中等", "e_myco_3_mid", 1, "bact"),
          envOpt("強風山脊", "快速吹散", "e_myco_3_bad", -14, "bact")
        ]},
        e_myco_2_bad: { prompt: "空氣條件？", options: [
          envOpt("密閉冷氣公車", "反覆循環", "e_myco_3_ok", 11, "bact"),
          envOpt("半開窗的客廳", "換氣中等", "e_myco_3_mid", 1, "bact"),
          envOpt("強風山脊", "快速吹散", "e_myco_3_bad", -14, "bact")
        ]},
        e_myco_3_ok: { prompt: "時間尺度？", options: [
          envOpt("緩慢沉潛數週的微環境", "適合持存", "e_myco_4_ok", 8, "bact"),
          envOpt("短暫停留又換場所", "不穩", "e_myco_4_mid", -2, "bact"),
          envOpt("反覆高溫蒸氣消毒", "結構壓力", "e_myco_4_bad", -15, "bact")
        ]},
        e_myco_3_mid: { prompt: "時間尺度？", options: [
          envOpt("緩慢沉潛數週的微環境", "適合持存", "e_myco_4_ok", 8, "bact"),
          envOpt("短暫停留又換場所", "不穩", "e_myco_4_mid", -2, "bact"),
          envOpt("反覆高溫蒸氣消毒", "結構壓力", "e_myco_4_bad", -15, "bact")
        ]},
        e_myco_3_bad: { prompt: "時間尺度？", options: [
          envOpt("緩慢沉潛數週的微環境", "適合持存", "e_myco_4_ok", 8, "bact"),
          envOpt("短暫停留又換場所", "不穩", "e_myco_4_mid", -2, "bact"),
          envOpt("反覆高溫蒸氣消毒", "結構壓力", "e_myco_4_bad", -15, "bact")
        ]},
        e_myco_4_ok: { prompt: "社交距離？", options: [
          envOpt("家庭同住長時間共處", "近距", "e_myco_5_ok", 9, "bact"),
          envOpt("偶而聚餐後離開", "短接觸", "e_myco_5_mid", 0, "bact"),
          envOpt("全程戴口罩且分房", "阻隔多", "e_myco_5_bad", -13, "bact")
        ]},
        e_myco_4_mid: { prompt: "社交距離？", options: [
          envOpt("家庭同住長時間共處", "近距", "e_myco_5_ok", 9, "bact"),
          envOpt("偶而聚餐後離開", "短接觸", "e_myco_5_mid", 0, "bact"),
          envOpt("全程戴口罩且分房", "阻隔多", "e_myco_5_bad", -13, "bact")
        ]},
        e_myco_4_bad: { prompt: "社交距離？", options: [
          envOpt("家庭同住長時間共處", "近距", "e_myco_5_ok", 9, "bact"),
          envOpt("偶而聚餐後離開", "短接觸", "e_myco_5_mid", 0, "bact"),
          envOpt("全程戴口罩且分房", "阻隔多", "e_myco_5_bad", -13, "bact")
        ]},
        e_myco_5_ok: { prompt: "營養與脂質？", options: [
          envOpt("富脂質的微環境示意", "外層保護感", "e_myco_6_ok", 10, "bact"),
          envOpt("普通灰塵有機質", "一般", "e_myco_6_mid", 2, "bact"),
          envOpt("強力去脂清潔劑殘留", "外層受挫", "e_myco_6_bad", -14, "bact")
        ]},
        e_myco_5_mid: { prompt: "營養與脂質？", options: [
          envOpt("富脂質的微環境示意", "外層保護感", "e_myco_6_ok", 10, "bact"),
          envOpt("普通灰塵有機質", "一般", "e_myco_6_mid", 2, "bact"),
          envOpt("強力去脂清潔劑殘留", "外層受挫", "e_myco_6_bad", -14, "bact")
        ]},
        e_myco_5_bad: { prompt: "營養與脂質？", options: [
          envOpt("富脂質的微環境示意", "外層保護感", "e_myco_6_ok", 10, "bact"),
          envOpt("普通灰塵有機質", "一般", "e_myco_6_mid", 2, "bact"),
          envOpt("強力去脂清潔劑殘留", "外層受挫", "e_myco_6_bad", -14, "bact")
        ]},
        e_myco_6_ok: { prompt: "陽光？", options: [
          envOpt("長期陰影室內角落", "避光", "e_myco_7_ok", 7, "bact"),
          envOpt("晨間斜射窗台", "間歇", "e_myco_7_mid", -3, "bact"),
          envOpt("正午直射陽台水泥", "乾熱", "e_myco_7_bad", -16, "bact")
        ]},
        e_myco_6_mid: { prompt: "陽光？", options: [
          envOpt("長期陰影室內角落", "避光", "e_myco_7_ok", 7, "bact"),
          envOpt("晨間斜射窗台", "間歇", "e_myco_7_mid", -3, "bact"),
          envOpt("正午直射陽台水泥", "乾熱", "e_myco_7_bad", -16, "bact")
        ]},
        e_myco_6_bad: { prompt: "陽光？", options: [
          envOpt("長期陰影室內角落", "避光", "e_myco_7_ok", 7, "bact"),
          envOpt("晨間斜射窗台", "間歇", "e_myco_7_mid", -3, "bact"),
          envOpt("正午直射陽台水泥", "乾熱", "e_myco_7_bad", -16, "bact")
        ]},
        e_myco_7_ok: { prompt: "醫療場域邊緣？", options: [
          envOpt("社區診所候診椅縫", "人流", "e_myco_8_ok", 6, "bact"),
          envOpt("藥房櫃檯外側", "短暫", "e_myco_8_mid", -1, "bact"),
          envOpt("手術室外周消毒通道", "高標準", "e_myco_die", -17, "bact")
        ]},
        e_myco_7_mid: { prompt: "醫療場域邊緣？", options: [
          envOpt("社區診所候診椅縫", "人流", "e_myco_8_ok", 6, "bact"),
          envOpt("藥房櫃檯外側", "短暫", "e_myco_8_mid", -1, "bact"),
          envOpt("手術室外周消毒通道", "高標準", "e_myco_die", -17, "bact")
        ]},
        e_myco_7_bad: { prompt: "醫療場域邊緣？", options: [
          envOpt("社區診所候診椅縫", "人流", "e_myco_8_ok", 6, "bact"),
          envOpt("藥房櫃檯外側", "短暫", "e_myco_8_mid", -1, "bact"),
          envOpt("手術室外周消毒通道", "高標準", "e_myco_die", -17, "bact")
        ]},
        e_myco_8_ok: { prompt: "遷移？", options: [
          envOpt("隨衣物旅行箱到另一城市", "遠距帶原", "e_myco_9_ok", 8, "bact"),
          envOpt("只在同棟大樓移動", "局部", "e_myco_9_mid", 2, "bact"),
          envOpt("行李經過高溫烘乾", "受挫", "e_myco_9_bad", -12, "bact")
        ]},
        e_myco_8_mid: { prompt: "遷移？", options: [
          envOpt("隨衣物旅行箱到另一城市", "遠距帶原", "e_myco_9_ok", 8, "bact"),
          envOpt("只在同棟大樓移動", "局部", "e_myco_9_mid", 2, "bact"),
          envOpt("行李經過高溫烘乾", "受挫", "e_myco_9_bad", -12, "bact")
        ]},
        e_myco_8_bad: { prompt: "遷移？", options: [
          envOpt("隨衣物旅行箱到另一城市", "遠距帶原", "e_myco_9_ok", 8, "bact"),
          envOpt("只在同棟大樓移動", "局部", "e_myco_9_mid", 2, "bact"),
          envOpt("行李經過高溫烘乾", "受挫", "e_myco_9_bad", -12, "bact")
        ]},
        e_myco_9_ok: { prompt: "長期之後？", options: [
          envOpt("在家族微環境中低調持存", "世代感", "e_myco_ext0", 12, "bact"),
          envOpt("數量不多但未消失", "隱約", "e_myco_steady", 1, "bact"),
          envOpt("環境改造後無處依附", "消退", "e_myco_die", -18, "bact")
        ]},
        e_myco_9_mid: { prompt: "長期之後？", options: [
          envOpt("在家族微環境中低調持存", "世代感", "e_myco_ext0", 12, "bact"),
          envOpt("數量不多但未消失", "隱約", "e_myco_steady", 1, "bact"),
          envOpt("環境改造後無處依附", "消退", "e_myco_die", -18, "bact")
        ]},
        e_myco_9_bad: { prompt: "長期之後？", options: [
          envOpt("在家族微環境中低調持存", "世代感", "e_myco_ext0", 12, "bact"),
          envOpt("數量不多但未消失", "隱約", "e_myco_steady", 1, "bact"),
          envOpt("環境改造後無處依附", "消退", "e_myco_die", -18, "bact")
        ]},
        e_myco_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_myco_ext1", 8, "bact"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_myco_steady", 2, "bact"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_myco_die", -12, "bact")
        ]},
        e_myco_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_myco_thrive", 12, "bact"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_myco_steady", 0, "bact"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_myco_die", -14, "bact")
        ]},
        e_myco_thrive: envEnd("e_myco_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_myco_steady: envEnd("e_myco_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_myco_die: envEnd("e_myco_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    spore: {
      start: "e_spore_0",
      nodes: {
        e_spore_0: { prompt: "落地？", options: [
          envOpt("郊外農田土壤縫", "有機質", "e_spore_1_ok", 10, "bact"),
          envOpt("市區花盆泥土", "有限", "e_spore_1_mid", 3, "bact"),
          envOpt("醫院拋棄式敷料密封袋外", "乾燥潔淨", "e_spore_1_bad", -12, "bact")
        ]},
        e_spore_1_ok: { prompt: "形態？", options: [
          envOpt("以休眠芽孢挨過乾季", "忍耐", "e_spore_2_ok", 8, "bact"),
          envOpt("嘗試萌發成營養體", "需要水分", "e_spore_2_mid", 2, "bact"),
          envOpt("在強酸廢液邊緣", "苛刻", "e_spore_2_bad", -15, "bact")
        ]},
        e_spore_1_mid: { prompt: "形態？", options: [
          envOpt("以休眠芽孢挨過乾季", "忍耐", "e_spore_2_ok", 8, "bact"),
          envOpt("嘗試萌發成營養體", "需要水分", "e_spore_2_mid", 2, "bact"),
          envOpt("在強酸廢液邊緣", "苛刻", "e_spore_2_bad", -15, "bact")
        ]},
        e_spore_1_bad: { prompt: "形態？", options: [
          envOpt("以休眠芽孢挨過乾季", "忍耐", "e_spore_2_ok", 8, "bact"),
          envOpt("嘗試萌發成營養體", "需要水分", "e_spore_2_mid", 2, "bact"),
          envOpt("在強酸廢液邊緣", "苛刻", "e_spore_2_bad", -15, "bact")
        ]},
        e_spore_2_ok: { prompt: "傷口或土壤？", options: [
          envOpt("接觸到園藝造成的小傷口周邊土壤", "土壤－皮膚交界", "e_spore_3_ok", 11, "bact"),
          envOpt("只黏在鞋底溝紋", "間接", "e_spore_3_mid", 1, "bact"),
          envOpt("掉進酒精棉片堆", "刺激", "e_spore_3_bad", -14, "bact")
        ]},
        e_spore_2_mid: { prompt: "傷口或土壤？", options: [
          envOpt("接觸到園藝造成的小傷口周邊土壤", "土壤－皮膚交界", "e_spore_3_ok", 11, "bact"),
          envOpt("只黏在鞋底溝紋", "間接", "e_spore_3_mid", 1, "bact"),
          envOpt("掉進酒精棉片堆", "刺激", "e_spore_3_bad", -14, "bact")
        ]},
        e_spore_2_bad: { prompt: "傷口或土壤？", options: [
          envOpt("接觸到園藝造成的小傷口周邊土壤", "土壤－皮膚交界", "e_spore_3_ok", 11, "bact"),
          envOpt("只黏在鞋底溝紋", "間接", "e_spore_3_mid", 1, "bact"),
          envOpt("掉進酒精棉片堆", "刺激", "e_spore_3_bad", -14, "bact")
        ]},
        e_spore_3_ok: { prompt: "動物？", options: [
          envOpt("草食動物腸道外周環境示意", "糞肥", "e_spore_4_ok", 9, "bact"),
          envOpt("寵物兔籠角落", "局部", "e_spore_4_mid", 3, "bact"),
          envOpt("高溫堆肥中心", "過熱", "e_spore_4_bad", -16, "bact")
        ]},
        e_spore_3_mid: { prompt: "動物？", options: [
          envOpt("草食動物腸道外周環境示意", "糞肥", "e_spore_4_ok", 9, "bact"),
          envOpt("寵物兔籠角落", "局部", "e_spore_4_mid", 3, "bact"),
          envOpt("高溫堆肥中心", "過熱", "e_spore_4_bad", -16, "bact")
        ]},
        e_spore_3_bad: { prompt: "動物？", options: [
          envOpt("草食動物腸道外周環境示意", "糞肥", "e_spore_4_ok", 9, "bact"),
          envOpt("寵物兔籠角落", "局部", "e_spore_4_mid", 3, "bact"),
          envOpt("高溫堆肥中心", "過熱", "e_spore_4_bad", -16, "bact")
        ]},
        e_spore_4_ok: { prompt: "食品相關？", options: [
          envOpt("真空包裝前的低氧縫隙示意", "特殊微境", "e_spore_5_ok", 7, "bact"),
          envOpt("普通冰箱蔬果層", "冷涼", "e_spore_5_mid", -2, "bact"),
          envOpt("壓力鍋長時間滅菌後", "幾乎清空", "e_spore_5_bad", -18, "bact")
        ]},
        e_spore_4_mid: { prompt: "食品相關？", options: [
          envOpt("真空包裝前的低氧縫隙示意", "特殊微境", "e_spore_5_ok", 7, "bact"),
          envOpt("普通冰箱蔬果層", "冷涼", "e_spore_5_mid", -2, "bact"),
          envOpt("壓力鍋長時間滅菌後", "幾乎清空", "e_spore_5_bad", -18, "bact")
        ]},
        e_spore_4_bad: { prompt: "食品相關？", options: [
          envOpt("真空包裝前的低氧縫隙示意", "特殊微境", "e_spore_5_ok", 7, "bact"),
          envOpt("普通冰箱蔬果層", "冷涼", "e_spore_5_mid", -2, "bact"),
          envOpt("壓力鍋長時間滅菌後", "幾乎清空", "e_spore_5_bad", -18, "bact")
        ]},
        e_spore_5_ok: { prompt: "天候？", options: [
          envOpt("雨後泥濘", "甦醒契機", "e_spore_6_ok", 10, "bact"),
          envOpt("陰乾的泥塊", "半休眠", "e_spore_6_mid", 2, "bact"),
          envOpt("沙漠般乾熱風", "長期休眠壓力", "e_spore_6_bad", -11, "bact")
        ]},
        e_spore_5_mid: { prompt: "天候？", options: [
          envOpt("雨後泥濘", "甦醒契機", "e_spore_6_ok", 10, "bact"),
          envOpt("陰乾的泥塊", "半休眠", "e_spore_6_mid", 2, "bact"),
          envOpt("沙漠般乾熱風", "長期休眠壓力", "e_spore_6_bad", -11, "bact")
        ]},
        e_spore_5_bad: { prompt: "天候？", options: [
          envOpt("雨後泥濘", "甦醒契機", "e_spore_6_ok", 10, "bact"),
          envOpt("陰乾的泥塊", "半休眠", "e_spore_6_mid", 2, "bact"),
          envOpt("沙漠般乾熱風", "長期休眠壓力", "e_spore_6_bad", -11, "bact")
        ]},
        e_spore_6_ok: { prompt: "人為干擾？", options: [
          envOpt("翻土但未消毒", "重新分布", "e_spore_7_ok", 6, "bact"),
          envOpt("鋪上新鮮木屑覆蓋", "改變表層", "e_spore_7_mid", -1, "bact"),
          envOpt("噴灑廣效土壤處理劑", "強烈衝擊", "e_spore_7_bad", -15, "bact")
        ]},
        e_spore_6_mid: { prompt: "人為干擾？", options: [
          envOpt("翻土但未消毒", "重新分布", "e_spore_7_ok", 6, "bact"),
          envOpt("鋪上新鮮木屑覆蓋", "改變表層", "e_spore_7_mid", -1, "bact"),
          envOpt("噴灑廣效土壤處理劑", "強烈衝擊", "e_spore_7_bad", -15, "bact")
        ]},
        e_spore_6_bad: { prompt: "人為干擾？", options: [
          envOpt("翻土但未消毒", "重新分布", "e_spore_7_ok", 6, "bact"),
          envOpt("鋪上新鮮木屑覆蓋", "改變表層", "e_spore_7_mid", -1, "bact"),
          envOpt("噴灑廣效土壤處理劑", "強烈衝擊", "e_spore_7_bad", -15, "bact")
        ]},
        e_spore_7_ok: { prompt: "移動？", options: [
          envOpt("黏在農具運到另一田", "擴散", "e_spore_8_ok", 9, "bact"),
          envOpt("留在同一壟溝", "固著", "e_spore_8_mid", 1, "bact"),
          envOpt("被沖進氯化污水廠", "終點站", "e_spore_die", -17, "bact")
        ]},
        e_spore_7_mid: { prompt: "移動？", options: [
          envOpt("黏在農具運到另一田", "擴散", "e_spore_8_ok", 9, "bact"),
          envOpt("留在同一壟溝", "固著", "e_spore_8_mid", 1, "bact"),
          envOpt("被沖進氯化污水廠", "終點站", "e_spore_die", -17, "bact")
        ]},
        e_spore_7_bad: { prompt: "移動？", options: [
          envOpt("黏在農具運到另一田", "擴散", "e_spore_8_ok", 9, "bact"),
          envOpt("留在同一壟溝", "固著", "e_spore_8_mid", 1, "bact"),
          envOpt("被沖進氯化污水廠", "終點站", "e_spore_die", -17, "bact")
        ]},
        e_spore_8_ok: { prompt: "萌發窗口？", options: [
          envOpt("溫濕且有機碎屑充足", "甦醒擴張", "e_spore_9_ok", 12, "bact"),
          envOpt("條件普通勉強維持", "不上不下", "e_spore_9_mid", 0, "bact"),
          envOpt("萌發後立刻暴晒乾死", "挫折", "e_spore_9_bad", -14, "bact")
        ]},
        e_spore_8_mid: { prompt: "萌發窗口？", options: [
          envOpt("溫濕且有機碎屑充足", "甦醒擴張", "e_spore_9_ok", 12, "bact"),
          envOpt("條件普通勉強維持", "不上不下", "e_spore_9_mid", 0, "bact"),
          envOpt("萌發後立刻暴晒乾死", "挫折", "e_spore_9_bad", -14, "bact")
        ]},
        e_spore_8_bad: { prompt: "萌發窗口？", options: [
          envOpt("溫濕且有機碎屑充足", "甦醒擴張", "e_spore_9_ok", 12, "bact"),
          envOpt("條件普通勉強維持", "不上不下", "e_spore_9_mid", 0, "bact"),
          envOpt("萌發後立刻暴晒乾死", "挫折", "e_spore_9_bad", -14, "bact")
        ]},
        e_spore_9_ok: { prompt: "結局前？", options: [
          envOpt("在土壤庫中長期保種", "安靜繁盛感", "e_spore_ext0", 13, "bact"),
          envOpt("稀稀疏疏殘存", "低調", "e_spore_steady", 2, "bact"),
          envOpt("整片田改水泥地", "棲地消失", "e_spore_die", -18, "bact")
        ]},
        e_spore_9_mid: { prompt: "結局前？", options: [
          envOpt("在土壤庫中長期保種", "安靜繁盛感", "e_spore_ext0", 13, "bact"),
          envOpt("稀稀疏疏殘存", "低調", "e_spore_steady", 2, "bact"),
          envOpt("整片田改水泥地", "棲地消失", "e_spore_die", -18, "bact")
        ]},
        e_spore_9_bad: { prompt: "結局前？", options: [
          envOpt("在土壤庫中長期保種", "安靜繁盛感", "e_spore_ext0", 13, "bact"),
          envOpt("稀稀疏疏殘存", "低調", "e_spore_steady", 2, "bact"),
          envOpt("整片田改水泥地", "棲地消失", "e_spore_die", -18, "bact")
        ]},
        e_spore_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_spore_ext1", 8, "bact"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_spore_steady", 2, "bact"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_spore_die", -12, "bact")
        ]},
        e_spore_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_spore_thrive", 12, "bact"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_spore_steady", 0, "bact"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_spore_die", -14, "bact")
        ]},
        e_spore_thrive: envEnd("e_spore_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_spore_steady: envEnd("e_spore_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_spore_die: envEnd("e_spore_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    spiral: {
      start: "e_spiral_0",
      nodes: {
        e_spiral_0: { prompt: "落點？", options: [
          envOpt("市區海鮮攤水槽邊", "鹹濕", "e_spiral_1_ok", 10, "bact"),
          envOpt("郊外溪流石縫", "流動淡水", "e_spiral_1_mid", 3, "bact"),
          envOpt("乾爽辦公大樓飲水機托盤", "少養分", "e_spiral_1_bad", -12, "bact")
        ]},
        e_spiral_1_ok: { prompt: "宿主黏膜？", options: [
          envOpt("進入人的胃黏膜微環境示意", "特殊酸鹼", "e_spiral_2_ok", 11, "bact"),
          envOpt("貝類外套膜附近", "水生宿主", "e_spiral_2_mid", 5, "bact"),
          envOpt("完全乾燥的紙巾表面", "無水", "e_spiral_2_bad", -15, "bact")
        ]},
        e_spiral_1_mid: { prompt: "宿主黏膜？", options: [
          envOpt("進入人的胃黏膜微環境示意", "特殊酸鹼", "e_spiral_2_ok", 11, "bact"),
          envOpt("貝類外套膜附近", "水生宿主", "e_spiral_2_mid", 5, "bact"),
          envOpt("完全乾燥的紙巾表面", "無水", "e_spiral_2_bad", -15, "bact")
        ]},
        e_spiral_1_bad: { prompt: "宿主黏膜？", options: [
          envOpt("進入人的胃黏膜微環境示意", "特殊酸鹼", "e_spiral_2_ok", 11, "bact"),
          envOpt("貝類外套膜附近", "水生宿主", "e_spiral_2_mid", 5, "bact"),
          envOpt("完全乾燥的紙巾表面", "無水", "e_spiral_2_bad", -15, "bact")
        ]},
        e_spiral_2_ok: { prompt: "飲食路徑？", options: [
          envOpt("生食海鮮的餐桌", "短鏈傳遞", "e_spiral_3_ok", 12, "bact"),
          envOpt("充分煮熟後的湯碗外壁", "間接潮氣", "e_spiral_3_mid", -4, "bact"),
          envOpt("高溫油炸鍋旁蒸氣散盡", "過熱", "e_spiral_3_bad", -14, "bact")
        ]},
        e_spiral_2_mid: { prompt: "飲食路徑？", options: [
          envOpt("生食海鮮的餐桌", "短鏈傳遞", "e_spiral_3_ok", 12, "bact"),
          envOpt("充分煮熟後的湯碗外壁", "間接潮氣", "e_spiral_3_mid", -4, "bact"),
          envOpt("高溫油炸鍋旁蒸氣散盡", "過熱", "e_spiral_3_bad", -14, "bact")
        ]},
        e_spiral_2_bad: { prompt: "飲食路徑？", options: [
          envOpt("生食海鮮的餐桌", "短鏈傳遞", "e_spiral_3_ok", 12, "bact"),
          envOpt("充分煮熟後的湯碗外壁", "間接潮氣", "e_spiral_3_mid", -4, "bact"),
          envOpt("高溫油炸鍋旁蒸氣散盡", "過熱", "e_spiral_3_bad", -14, "bact")
        ]},
        e_spiral_3_ok: { prompt: "水域？", options: [
          envOpt("河口半鹹水", "適合弧形一族", "e_spiral_4_ok", 10, "bact"),
          envOpt("山泉冷水", "養分薄", "e_spiral_4_mid", -3, "bact"),
          envOpt("工業廢水出口", "毒素壓力", "e_spiral_4_bad", -16, "bact")
        ]},
        e_spiral_3_mid: { prompt: "水域？", options: [
          envOpt("河口半鹹水", "適合弧形一族", "e_spiral_4_ok", 10, "bact"),
          envOpt("山泉冷水", "養分薄", "e_spiral_4_mid", -3, "bact"),
          envOpt("工業廢水出口", "毒素壓力", "e_spiral_4_bad", -16, "bact")
        ]},
        e_spiral_3_bad: { prompt: "水域？", options: [
          envOpt("河口半鹹水", "適合弧形一族", "e_spiral_4_ok", 10, "bact"),
          envOpt("山泉冷水", "養分薄", "e_spiral_4_mid", -3, "bact"),
          envOpt("工業廢水出口", "毒素壓力", "e_spiral_4_bad", -16, "bact")
        ]},
        e_spiral_4_ok: { prompt: "季節？", options: [
          envOpt("夏日沿海觀光潮", "人與水交錯", "e_spiral_5_ok", 9, "bact"),
          envOpt("春秋交替", "中等", "e_spiral_5_mid", 1, "bact"),
          envOpt("寒冬近乎冰點的水面", "代謝緩", "e_spiral_5_bad", -12, "bact")
        ]},
        e_spiral_4_mid: { prompt: "季節？", options: [
          envOpt("夏日沿海觀光潮", "人與水交錯", "e_spiral_5_ok", 9, "bact"),
          envOpt("春秋交替", "中等", "e_spiral_5_mid", 1, "bact"),
          envOpt("寒冬近乎冰點的水面", "代謝緩", "e_spiral_5_bad", -12, "bact")
        ]},
        e_spiral_4_bad: { prompt: "季節？", options: [
          envOpt("夏日沿海觀光潮", "人與水交錯", "e_spiral_5_ok", 9, "bact"),
          envOpt("春秋交替", "中等", "e_spiral_5_mid", 1, "bact"),
          envOpt("寒冬近乎冰點的水面", "代謝緩", "e_spiral_5_bad", -12, "bact")
        ]},
        e_spiral_5_ok: { prompt: "清潔？", options: [
          envOpt("砧板只擦一次布", "殘留水膜", "e_spiral_6_ok", 7, "bact"),
          envOpt("熱水燙過餐具", "大半離開", "e_spiral_6_mid", -6, "bact"),
          envOpt("含氯消毒液浸泡", "強烈", "e_spiral_6_bad", -17, "bact")
        ]},
        e_spiral_5_mid: { prompt: "清潔？", options: [
          envOpt("砧板只擦一次布", "殘留水膜", "e_spiral_6_ok", 7, "bact"),
          envOpt("熱水燙過餐具", "大半離開", "e_spiral_6_mid", -6, "bact"),
          envOpt("含氯消毒液浸泡", "強烈", "e_spiral_6_bad", -17, "bact")
        ]},
        e_spiral_5_bad: { prompt: "清潔？", options: [
          envOpt("砧板只擦一次布", "殘留水膜", "e_spiral_6_ok", 7, "bact"),
          envOpt("熱水燙過餐具", "大半離開", "e_spiral_6_mid", -6, "bact"),
          envOpt("含氯消毒液浸泡", "強烈", "e_spiral_6_bad", -17, "bact")
        ]},
        e_spiral_6_ok: { prompt: "動物宿主？", options: [
          envOpt("寄生於鳥類排泄週邊", "擴散點", "e_spiral_7_ok", 8, "bact"),
          envOpt("家畜飲水槽", "共享", "e_spiral_7_mid", 3, "bact"),
          envOpt("無動物的封閉水族館過濾芯外乾區", "不利", "e_spiral_7_bad", -13, "bact")
        ]},
        e_spiral_6_mid: { prompt: "動物宿主？", options: [
          envOpt("寄生於鳥類排泄週邊", "擴散點", "e_spiral_7_ok", 8, "bact"),
          envOpt("家畜飲水槽", "共享", "e_spiral_7_mid", 3, "bact"),
          envOpt("無動物的封閉水族館過濾芯外乾區", "不利", "e_spiral_7_bad", -13, "bact")
        ]},
        e_spiral_6_bad: { prompt: "動物宿主？", options: [
          envOpt("寄生於鳥類排泄週邊", "擴散點", "e_spiral_7_ok", 8, "bact"),
          envOpt("家畜飲水槽", "共享", "e_spiral_7_mid", 3, "bact"),
          envOpt("無動物的封閉水族館過濾芯外乾區", "不利", "e_spiral_7_bad", -13, "bact")
        ]},
        e_spiral_7_ok: { prompt: "移動方式？", options: [
          envOpt("螺旋鑽進黏液層", "定位", "e_spiral_8_ok", 10, "bact"),
          envOpt("隨水流漂", "被動", "e_spiral_8_mid", 0, "bact"),
          envOpt("被濾膜攔截扔掉", "出路斷", "e_spiral_die", -15, "bact")
        ]},
        e_spiral_7_mid: { prompt: "移動方式？", options: [
          envOpt("螺旋鑽進黏液層", "定位", "e_spiral_8_ok", 10, "bact"),
          envOpt("隨水流漂", "被動", "e_spiral_8_mid", 0, "bact"),
          envOpt("被濾膜攔截扔掉", "出路斷", "e_spiral_die", -15, "bact")
        ]},
        e_spiral_7_bad: { prompt: "移動方式？", options: [
          envOpt("螺旋鑽進黏液層", "定位", "e_spiral_8_ok", 10, "bact"),
          envOpt("隨水流漂", "被動", "e_spiral_8_mid", 0, "bact"),
          envOpt("被濾膜攔截扔掉", "出路斷", "e_spiral_die", -15, "bact")
        ]},
        e_spiral_8_ok: { prompt: "酸性挑戰？", options: [
          envOpt("找到較中性的微區躲", "緩衝", "e_spiral_9_ok", 8, "bact"),
          envOpt("硬扛一陣", "勉強", "e_spiral_9_mid", -2, "bact"),
          envOpt("長時間強酸無庇護", "消退", "e_spiral_9_bad", -16, "bact")
        ]},
        e_spiral_8_mid: { prompt: "酸性挑戰？", options: [
          envOpt("找到較中性的微區躲", "緩衝", "e_spiral_9_ok", 8, "bact"),
          envOpt("硬扛一陣", "勉強", "e_spiral_9_mid", -2, "bact"),
          envOpt("長時間強酸無庇護", "消退", "e_spiral_9_bad", -16, "bact")
        ]},
        e_spiral_8_bad: { prompt: "酸性挑戰？", options: [
          envOpt("找到較中性的微區躲", "緩衝", "e_spiral_9_ok", 8, "bact"),
          envOpt("硬扛一陣", "勉強", "e_spiral_9_mid", -2, "bact"),
          envOpt("長時間強酸無庇護", "消退", "e_spiral_9_bad", -16, "bact")
        ]},
        e_spiral_9_ok: { prompt: "收束？", options: [
          envOpt("在沿海飲食文化圈循環", "地域繁盛感", "e_spiral_ext0", 14, "bact"),
          envOpt("只在單一水產市場殘跡", "局部", "e_spiral_steady", 2, "bact"),
          envOpt("海域被整治後難以立足", "衰退", "e_spiral_die", -18, "bact")
        ]},
        e_spiral_9_mid: { prompt: "收束？", options: [
          envOpt("在沿海飲食文化圈循環", "地域繁盛感", "e_spiral_ext0", 14, "bact"),
          envOpt("只在單一水產市場殘跡", "局部", "e_spiral_steady", 2, "bact"),
          envOpt("海域被整治後難以立足", "衰退", "e_spiral_die", -18, "bact")
        ]},
        e_spiral_9_bad: { prompt: "收束？", options: [
          envOpt("在沿海飲食文化圈循環", "地域繁盛感", "e_spiral_ext0", 14, "bact"),
          envOpt("只在單一水產市場殘跡", "局部", "e_spiral_steady", 2, "bact"),
          envOpt("海域被整治後難以立足", "衰退", "e_spiral_die", -18, "bact")
        ]},
        e_spiral_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_spiral_ext1", 8, "bact"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_spiral_steady", 2, "bact"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_spiral_die", -12, "bact")
        ]},
        e_spiral_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_spiral_thrive", 12, "bact"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_spiral_steady", 0, "bact"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_spiral_die", -14, "bact")
        ]},
        e_spiral_thrive: envEnd("e_spiral_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_spiral_steady: envEnd("e_spiral_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_spiral_die: envEnd("e_spiral_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    env_rna: {
      start: "e_env_rna_0",
      nodes: {
        e_env_rna_0: { prompt: "離開培養條件後？", options: [
          envOpt("塞進尖峰時刻的捷運車廂", "飛沫與空調", "e_env_rna_1_ok", 11, "vir"),
          envOpt("郊外登山步道休息亭", "風大空間開", "e_env_rna_1_mid", -5, "vir"),
          envOpt("紫外線消毒通道傳送帶", "照射", "e_env_rna_1_bad", -14, "vir")
        ]},
        e_env_rna_1_ok: { prompt: "宿主？", options: [
          envOpt("寄生於人的上呼吸道黏膜", "溫濕", "e_env_rna_2_ok", 12, "vir"),
          envOpt("家禽飼育場邊緣空氣", "動物呼吸道", "e_env_rna_2_mid", 4, "vir"),
          envOpt("乾冷的不鏽鋼扶手過夜", "膜脆弱", "e_env_rna_2_bad", -13, "vir")
        ]},
        e_env_rna_1_mid: { prompt: "宿主？", options: [
          envOpt("寄生於人的上呼吸道黏膜", "溫濕", "e_env_rna_2_ok", 12, "vir"),
          envOpt("家禽飼育場邊緣空氣", "動物呼吸道", "e_env_rna_2_mid", 4, "vir"),
          envOpt("乾冷的不鏽鋼扶手過夜", "膜脆弱", "e_env_rna_2_bad", -13, "vir")
        ]},
        e_env_rna_1_bad: { prompt: "宿主？", options: [
          envOpt("寄生於人的上呼吸道黏膜", "溫濕", "e_env_rna_2_ok", 12, "vir"),
          envOpt("家禽飼育場邊緣空氣", "動物呼吸道", "e_env_rna_2_mid", 4, "vir"),
          envOpt("乾冷的不鏽鋼扶手過夜", "膜脆弱", "e_env_rna_2_bad", -13, "vir")
        ]},
        e_env_rna_2_ok: { prompt: "傳播姿態？", options: [
          envOpt("近距離交談飛沫", "短距有效", "e_env_rna_3_ok", 10, "vir"),
          envOpt("隔著口罩的低語", "阻隔一半", "e_env_rna_3_mid", -3, "vir"),
          envOpt("戶外大風對吹", "迅速稀釋", "e_env_rna_3_bad", -12, "vir")
        ]},
        e_env_rna_2_mid: { prompt: "傳播姿態？", options: [
          envOpt("近距離交談飛沫", "短距有效", "e_env_rna_3_ok", 10, "vir"),
          envOpt("隔著口罩的低語", "阻隔一半", "e_env_rna_3_mid", -3, "vir"),
          envOpt("戶外大風對吹", "迅速稀釋", "e_env_rna_3_bad", -12, "vir")
        ]},
        e_env_rna_2_bad: { prompt: "傳播姿態？", options: [
          envOpt("近距離交談飛沫", "短距有效", "e_env_rna_3_ok", 10, "vir"),
          envOpt("隔著口罩的低語", "阻隔一半", "e_env_rna_3_mid", -3, "vir"),
          envOpt("戶外大風對吹", "迅速稀釋", "e_env_rna_3_bad", -12, "vir")
        ]},
        e_env_rna_3_ok: { prompt: "季節？", options: [
          envOpt("秋冬密閉室內聚會", "經典窗口", "e_env_rna_4_ok", 13, "vir"),
          envOpt("春日半開窗教室", "換氣尚可", "e_env_rna_4_mid", 1, "vir"),
          envOpt("盛夏戶外陽光直晒", "膜易傷", "e_env_rna_4_bad", -15, "vir")
        ]},
        e_env_rna_3_mid: { prompt: "季節？", options: [
          envOpt("秋冬密閉室內聚會", "經典窗口", "e_env_rna_4_ok", 13, "vir"),
          envOpt("春日半開窗教室", "換氣尚可", "e_env_rna_4_mid", 1, "vir"),
          envOpt("盛夏戶外陽光直晒", "膜易傷", "e_env_rna_4_bad", -15, "vir")
        ]},
        e_env_rna_3_bad: { prompt: "季節？", options: [
          envOpt("秋冬密閉室內聚會", "經典窗口", "e_env_rna_4_ok", 13, "vir"),
          envOpt("春日半開窗教室", "換氣尚可", "e_env_rna_4_mid", 1, "vir"),
          envOpt("盛夏戶外陽光直晒", "膜易傷", "e_env_rna_4_bad", -15, "vir")
        ]},
        e_env_rna_4_ok: { prompt: "家庭場景？", options: [
          envOpt("共用一盤熱湯的團圓桌", "近距共餐", "e_env_rna_5_ok", 9, "vir"),
          envOpt("各自房間視訊拜年", "遠距", "e_env_rna_5_mid", -4, "vir"),
          envOpt("病人專用隔離客房外走廊", "管控", "e_env_rna_5_bad", -11, "vir")
        ]},
        e_env_rna_4_mid: { prompt: "家庭場景？", options: [
          envOpt("共用一盤熱湯的團圓桌", "近距共餐", "e_env_rna_5_ok", 9, "vir"),
          envOpt("各自房間視訊拜年", "遠距", "e_env_rna_5_mid", -4, "vir"),
          envOpt("病人專用隔離客房外走廊", "管控", "e_env_rna_5_bad", -11, "vir")
        ]},
        e_env_rna_4_bad: { prompt: "家庭場景？", options: [
          envOpt("共用一盤熱湯的團圓桌", "近距共餐", "e_env_rna_5_ok", 9, "vir"),
          envOpt("各自房間視訊拜年", "遠距", "e_env_rna_5_mid", -4, "vir"),
          envOpt("病人專用隔離客房外走廊", "管控", "e_env_rna_5_bad", -11, "vir")
        ]},
        e_env_rna_5_ok: { prompt: "交通？", options: [
          envOpt("長途客運空調循環", "長時間共乘", "e_env_rna_6_ok", 10, "vir"),
          envOpt("單車通勤迎風", "開放", "e_env_rna_6_mid", -6, "vir"),
          envOpt("高鐵座位消毒剛完成", "殘留刺激", "e_env_rna_6_bad", -12, "vir")
        ]},
        e_env_rna_5_mid: { prompt: "交通？", options: [
          envOpt("長途客運空調循環", "長時間共乘", "e_env_rna_6_ok", 10, "vir"),
          envOpt("單車通勤迎風", "開放", "e_env_rna_6_mid", -6, "vir"),
          envOpt("高鐵座位消毒剛完成", "殘留刺激", "e_env_rna_6_bad", -12, "vir")
        ]},
        e_env_rna_5_bad: { prompt: "交通？", options: [
          envOpt("長途客運空調循環", "長時間共乘", "e_env_rna_6_ok", 10, "vir"),
          envOpt("單車通勤迎風", "開放", "e_env_rna_6_mid", -6, "vir"),
          envOpt("高鐵座位消毒剛完成", "殘留刺激", "e_env_rna_6_bad", -12, "vir")
        ]},
        e_env_rna_6_ok: { prompt: "動物介面？", options: [
          envOpt("活禽市場走道空氣", "動物－人交界", "e_env_rna_7_ok", 8, "vir"),
          envOpt("寵物鳥籠 transient 靠近", "偶發", "e_env_rna_7_mid", 2, "vir"),
          envOpt("無動物的無塵室更衣室", "過淨", "e_env_rna_7_bad", -14, "vir")
        ]},
        e_env_rna_6_mid: { prompt: "動物介面？", options: [
          envOpt("活禽市場走道空氣", "動物－人交界", "e_env_rna_7_ok", 8, "vir"),
          envOpt("寵物鳥籠 transient 靠近", "偶發", "e_env_rna_7_mid", 2, "vir"),
          envOpt("無動物的無塵室更衣室", "過淨", "e_env_rna_7_bad", -14, "vir")
        ]},
        e_env_rna_6_bad: { prompt: "動物介面？", options: [
          envOpt("活禽市場走道空氣", "動物－人交界", "e_env_rna_7_ok", 8, "vir"),
          envOpt("寵物鳥籠 transient 靠近", "偶發", "e_env_rna_7_mid", 2, "vir"),
          envOpt("無動物的無塵室更衣室", "過淨", "e_env_rna_7_bad", -14, "vir")
        ]},
        e_env_rna_7_ok: { prompt: "宿主作息？", options: [
          envOpt("連續熬夜免疫節奏紊亂的示意週", "機會窗", "e_env_rna_8_ok", 7, "vir"),
          envOpt("規律睡眠的一週", "中性", "e_env_rna_8_mid", 0, "vir"),
          envOpt("剛接種相關疫苗後的社區氛圍示意", "群體門檻升高", "e_env_rna_die", -10, "vir")
        ]},
        e_env_rna_7_mid: { prompt: "宿主作息？", options: [
          envOpt("連續熬夜免疫節奏紊亂的示意週", "機會窗", "e_env_rna_8_ok", 7, "vir"),
          envOpt("規律睡眠的一週", "中性", "e_env_rna_8_mid", 0, "vir"),
          envOpt("剛接種相關疫苗後的社區氛圍示意", "群體門檻升高", "e_env_rna_die", -10, "vir")
        ]},
        e_env_rna_7_bad: { prompt: "宿主作息？", options: [
          envOpt("連續熬夜免疫節奏紊亂的示意週", "機會窗", "e_env_rna_8_ok", 7, "vir"),
          envOpt("規律睡眠的一週", "中性", "e_env_rna_8_mid", 0, "vir"),
          envOpt("剛接種相關疫苗後的社區氛圍示意", "群體門檻升高", "e_env_rna_die", -10, "vir")
        ]},
        e_env_rna_8_ok: { prompt: "表面殘存？", options: [
          envOpt("潮紙巾未乾就共用", "短暫橋接", "e_env_rna_9_ok", 6, "vir"),
          envOpt("乾紙鈔短暫接觸", "機會低", "e_env_rna_9_mid", -5, "vir"),
          envOpt("酒精擦過的手機螢幕", "膜受挫", "e_env_rna_9_bad", -13, "vir")
        ]},
        e_env_rna_8_mid: { prompt: "表面殘存？", options: [
          envOpt("潮紙巾未乾就共用", "短暫橋接", "e_env_rna_9_ok", 6, "vir"),
          envOpt("乾紙鈔短暫接觸", "機會低", "e_env_rna_9_mid", -5, "vir"),
          envOpt("酒精擦過的手機螢幕", "膜受挫", "e_env_rna_9_bad", -13, "vir")
        ]},
        e_env_rna_8_bad: { prompt: "表面殘存？", options: [
          envOpt("潮紙巾未乾就共用", "短暫橋接", "e_env_rna_9_ok", 6, "vir"),
          envOpt("乾紙鈔短暫接觸", "機會低", "e_env_rna_9_mid", -5, "vir"),
          envOpt("酒精擦過的手機螢幕", "膜受挫", "e_env_rna_9_bad", -13, "vir")
        ]},
        e_env_rna_9_ok: { prompt: "流行曲線示意末端？", options: [
          envOpt("學校開學潮再度聚集", "新一波機會", "e_env_rna_ext0", 14, "vir"),
          envOpt("社區自發減少聚會", "平緩", "e_env_rna_steady", 1, "vir"),
          envOpt("整季戶外化活動為主", "飛沫鏈斷", "e_env_rna_die", -17, "vir")
        ]},
        e_env_rna_9_mid: { prompt: "流行曲線示意末端？", options: [
          envOpt("學校開學潮再度聚集", "新一波機會", "e_env_rna_ext0", 14, "vir"),
          envOpt("社區自發減少聚會", "平緩", "e_env_rna_steady", 1, "vir"),
          envOpt("整季戶外化活動為主", "飛沫鏈斷", "e_env_rna_die", -17, "vir")
        ]},
        e_env_rna_9_bad: { prompt: "流行曲線示意末端？", options: [
          envOpt("學校開學潮再度聚集", "新一波機會", "e_env_rna_ext0", 14, "vir"),
          envOpt("社區自發減少聚會", "平緩", "e_env_rna_steady", 1, "vir"),
          envOpt("整季戶外化活動為主", "飛沫鏈斷", "e_env_rna_die", -17, "vir")
        ]},
        e_env_rna_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_env_rna_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_env_rna_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_env_rna_die", -12, "vir")
        ]},
        e_env_rna_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_env_rna_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_env_rna_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_env_rna_die", -14, "vir")
        ]},
        e_env_rna_thrive: envEnd("e_env_rna_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_env_rna_steady: envEnd("e_env_rna_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_env_rna_die: envEnd("e_env_rna_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    neuro: {
      start: "e_neuro_0",
      nodes: {
        e_neuro_0: { prompt: "落地？", options: [
          envOpt("郊外蝙蝠棲息洞穴附近泥土", "野生循環", "e_neuro_1_ok", 9, "vir"),
          envOpt("市區公園流浪犬出沒處", "伴侶動物邊緣", "e_neuro_1_mid", 4, "vir"),
          envOpt("徹底消毒的寵物醫院手術台", "潔淨", "e_neuro_1_bad", -14, "vir")
        ]},
        e_neuro_1_ok: { prompt: "接觸？", options: [
          envOpt("野生動物咬傷周邊組織示意", "神經路徑隱喻", "e_neuro_2_ok", 12, "vir"),
          envOpt("完好皮膚上的唾液痕跡隨即擦掉", "短暫", "e_neuro_2_mid", -6, "vir"),
          envOpt("厚手套與護目鏡全程", "幾乎無接觸", "e_neuro_2_bad", -15, "vir")
        ]},
        e_neuro_1_mid: { prompt: "接觸？", options: [
          envOpt("野生動物咬傷周邊組織示意", "神經路徑隱喻", "e_neuro_2_ok", 12, "vir"),
          envOpt("完好皮膚上的唾液痕跡隨即擦掉", "短暫", "e_neuro_2_mid", -6, "vir"),
          envOpt("厚手套與護目鏡全程", "幾乎無接觸", "e_neuro_2_bad", -15, "vir")
        ]},
        e_neuro_1_bad: { prompt: "接觸？", options: [
          envOpt("野生動物咬傷周邊組織示意", "神經路徑隱喻", "e_neuro_2_ok", 12, "vir"),
          envOpt("完好皮膚上的唾液痕跡隨即擦掉", "短暫", "e_neuro_2_mid", -6, "vir"),
          envOpt("厚手套與護目鏡全程", "幾乎無接觸", "e_neuro_2_bad", -15, "vir")
        ]},
        e_neuro_2_ok: { prompt: "宿主種？", options: [
          envOpt("犬科動物唾液微環境", "經典帶原意象", "e_neuro_3_ok", 10, "vir"),
          envOpt("偶蹄類家畜欄", "較少見路徑", "e_neuro_3_mid", 2, "vir"),
          envOpt("無脊椎昆蟲表面", "不適宿主", "e_neuro_3_bad", -16, "vir")
        ]},
        e_neuro_2_mid: { prompt: "宿主種？", options: [
          envOpt("犬科動物唾液微環境", "經典帶原意象", "e_neuro_3_ok", 10, "vir"),
          envOpt("偶蹄類家畜欄", "較少見路徑", "e_neuro_3_mid", 2, "vir"),
          envOpt("無脊椎昆蟲表面", "不適宿主", "e_neuro_3_bad", -16, "vir")
        ]},
        e_neuro_2_bad: { prompt: "宿主種？", options: [
          envOpt("犬科動物唾液微環境", "經典帶原意象", "e_neuro_3_ok", 10, "vir"),
          envOpt("偶蹄類家畜欄", "較少見路徑", "e_neuro_3_mid", 2, "vir"),
          envOpt("無脊椎昆蟲表面", "不適宿主", "e_neuro_3_bad", -16, "vir")
        ]},
        e_neuro_3_ok: { prompt: "人為活動？", options: [
          envOpt("野外露營未處理的小傷口", "暴露", "e_neuro_4_ok", 8, "vir"),
          envOpt("市區牽繩遛狗但距野犬遠", "風險低", "e_neuro_4_mid", -2, "vir"),
          envOpt("疫苗與免疫球蛋白就緒的旅遊門診", "門檻高", "e_neuro_4_bad", -12, "vir")
        ]},
        e_neuro_3_mid: { prompt: "人為活動？", options: [
          envOpt("野外露營未處理的小傷口", "暴露", "e_neuro_4_ok", 8, "vir"),
          envOpt("市區牽繩遛狗但距野犬遠", "風險低", "e_neuro_4_mid", -2, "vir"),
          envOpt("疫苗與免疫球蛋白就緒的旅遊門診", "門檻高", "e_neuro_4_bad", -12, "vir")
        ]},
        e_neuro_3_bad: { prompt: "人為活動？", options: [
          envOpt("野外露營未處理的小傷口", "暴露", "e_neuro_4_ok", 8, "vir"),
          envOpt("市區牽繩遛狗但距野犬遠", "風險低", "e_neuro_4_mid", -2, "vir"),
          envOpt("疫苗與免疫球蛋白就緒的旅遊門診", "門檻高", "e_neuro_4_bad", -12, "vir")
        ]},
        e_neuro_4_ok: { prompt: "溫度？", options: [
          envOpt("溫暖的組織微環境", "沿路徑移動隱喻", "e_neuro_5_ok", 11, "vir"),
          envOpt("體外乾唾液 overnight", "活力下降感", "e_neuro_5_mid", -8, "vir"),
          envOpt("高溫焚化動物屍體處理場", "終結", "e_neuro_5_bad", -18, "vir")
        ]},
        e_neuro_4_mid: { prompt: "溫度？", options: [
          envOpt("溫暖的組織微環境", "沿路徑移動隱喻", "e_neuro_5_ok", 11, "vir"),
          envOpt("體外乾唾液 overnight", "活力下降感", "e_neuro_5_mid", -8, "vir"),
          envOpt("高溫焚化動物屍體處理場", "終結", "e_neuro_5_bad", -18, "vir")
        ]},
        e_neuro_4_bad: { prompt: "溫度？", options: [
          envOpt("溫暖的組織微環境", "沿路徑移動隱喻", "e_neuro_5_ok", 11, "vir"),
          envOpt("體外乾唾液 overnight", "活力下降感", "e_neuro_5_mid", -8, "vir"),
          envOpt("高溫焚化動物屍體處理場", "終結", "e_neuro_5_bad", -18, "vir")
        ]},
        e_neuro_5_ok: { prompt: "地理？", options: [
          envOpt("人畜交界的山區聚落", "接觸面大", "e_neuro_6_ok", 9, "vir"),
          envOpt("高密度但寵物管控嚴的市區", "中等", "e_neuro_6_mid", 0, "vir"),
          envOpt("無犬無野生食肉目的離島實驗室", "幾乎無循環", "e_neuro_6_bad", -14, "vir")
        ]},
        e_neuro_5_mid: { prompt: "地理？", options: [
          envOpt("人畜交界的山區聚落", "接觸面大", "e_neuro_6_ok", 9, "vir"),
          envOpt("高密度但寵物管控嚴的市區", "中等", "e_neuro_6_mid", 0, "vir"),
          envOpt("無犬無野生食肉目的離島實驗室", "幾乎無循環", "e_neuro_6_bad", -14, "vir")
        ]},
        e_neuro_5_bad: { prompt: "地理？", options: [
          envOpt("人畜交界的山區聚落", "接觸面大", "e_neuro_6_ok", 9, "vir"),
          envOpt("高密度但寵物管控嚴的市區", "中等", "e_neuro_6_mid", 0, "vir"),
          envOpt("無犬無野生食肉目的離島實驗室", "幾乎無循環", "e_neuro_6_bad", -14, "vir")
        ]},
        e_neuro_6_ok: { prompt: "時間？", options: [
          envOpt("潛伏期隱喻的安靜長週", "緩慢推進", "e_neuro_7_ok", 7, "vir"),
          envOpt("很快被清創與清洗", "中斷", "e_neuro_7_mid", -7, "vir"),
          envOpt("傷口立即徹底醫療處理示意", "路徑斷", "e_neuro_7_bad", -15, "vir")
        ]},
        e_neuro_6_mid: { prompt: "時間？", options: [
          envOpt("潛伏期隱喻的安靜長週", "緩慢推進", "e_neuro_7_ok", 7, "vir"),
          envOpt("很快被清創與清洗", "中斷", "e_neuro_7_mid", -7, "vir"),
          envOpt("傷口立即徹底醫療處理示意", "路徑斷", "e_neuro_7_bad", -15, "vir")
        ]},
        e_neuro_6_bad: { prompt: "時間？", options: [
          envOpt("潛伏期隱喻的安靜長週", "緩慢推進", "e_neuro_7_ok", 7, "vir"),
          envOpt("很快被清創與清洗", "中斷", "e_neuro_7_mid", -7, "vir"),
          envOpt("傷口立即徹底醫療處理示意", "路徑斷", "e_neuro_7_bad", -15, "vir")
        ]},
        e_neuro_7_ok: { prompt: "教育宣導？", options: [
          envOpt("社區少有狂犬病認知活動的年代感", "縫隙", "e_neuro_8_ok", 5, "vir"),
          envOpt("偶有海報提醒", "中性", "e_neuro_8_mid", -1, "vir"),
          envOpt("全面寵物接種運動", "循環壓縮", "e_neuro_die", -13, "vir")
        ]},
        e_neuro_7_mid: { prompt: "教育宣導？", options: [
          envOpt("社區少有狂犬病認知活動的年代感", "縫隙", "e_neuro_8_ok", 5, "vir"),
          envOpt("偶有海報提醒", "中性", "e_neuro_8_mid", -1, "vir"),
          envOpt("全面寵物接種運動", "循環壓縮", "e_neuro_die", -13, "vir")
        ]},
        e_neuro_7_bad: { prompt: "教育宣導？", options: [
          envOpt("社區少有狂犬病認知活動的年代感", "縫隙", "e_neuro_8_ok", 5, "vir"),
          envOpt("偶有海報提醒", "中性", "e_neuro_8_mid", -1, "vir"),
          envOpt("全面寵物接種運動", "循環壓縮", "e_neuro_die", -13, "vir")
        ]},
        e_neuro_8_ok: { prompt: "跨區？", options: [
          envOpt("非法寵物走私箱潮熱密閉", "遠距風險", "e_neuro_9_ok", 10, "vir"),
          envOpt("合法檢疫通過的運輸", "管控", "e_neuro_9_mid", -4, "vir"),
          envOpt("邊境攔檢後退回", "路徑失敗", "e_neuro_9_bad", -12, "vir")
        ]},
        e_neuro_8_mid: { prompt: "跨區？", options: [
          envOpt("非法寵物走私箱潮熱密閉", "遠距風險", "e_neuro_9_ok", 10, "vir"),
          envOpt("合法檢疫通過的運輸", "管控", "e_neuro_9_mid", -4, "vir"),
          envOpt("邊境攔檢後退回", "路徑失敗", "e_neuro_9_bad", -12, "vir")
        ]},
        e_neuro_8_bad: { prompt: "跨區？", options: [
          envOpt("非法寵物走私箱潮熱密閉", "遠距風險", "e_neuro_9_ok", 10, "vir"),
          envOpt("合法檢疫通過的運輸", "管控", "e_neuro_9_mid", -4, "vir"),
          envOpt("邊境攔檢後退回", "路徑失敗", "e_neuro_9_bad", -12, "vir")
        ]},
        e_neuro_9_ok: { prompt: "收束？", options: [
          envOpt("在野生－家養交界維持循環", "生態位感", "e_neuro_ext0", 13, "vir"),
          envOpt("極罕見個案級殘存", "低調", "e_neuro_steady", 1, "vir"),
          envOpt("地區宣布相關循環中斷示意", "消退", "e_neuro_die", -18, "vir")
        ]},
        e_neuro_9_mid: { prompt: "收束？", options: [
          envOpt("在野生－家養交界維持循環", "生態位感", "e_neuro_ext0", 13, "vir"),
          envOpt("極罕見個案級殘存", "低調", "e_neuro_steady", 1, "vir"),
          envOpt("地區宣布相關循環中斷示意", "消退", "e_neuro_die", -18, "vir")
        ]},
        e_neuro_9_bad: { prompt: "收束？", options: [
          envOpt("在野生－家養交界維持循環", "生態位感", "e_neuro_ext0", 13, "vir"),
          envOpt("極罕見個案級殘存", "低調", "e_neuro_steady", 1, "vir"),
          envOpt("地區宣布相關循環中斷示意", "消退", "e_neuro_die", -18, "vir")
        ]},
        e_neuro_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_neuro_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_neuro_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_neuro_die", -12, "vir")
        ]},
        e_neuro_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_neuro_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_neuro_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_neuro_die", -14, "vir")
        ]},
        e_neuro_thrive: envEnd("e_neuro_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_neuro_steady: envEnd("e_neuro_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_neuro_die: envEnd("e_neuro_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    arbo: {
      start: "e_arbo_0",
      nodes: {
        e_arbo_0: { prompt: "季節開頭？", options: [
          envOpt("雨季後市區巷弄積水容器", "蚊蟲滋生", "e_arbo_1_ok", 12, "vir"),
          envOpt("郊外山風強的稜線", "蚊少", "e_arbo_1_mid", -6, "vir"),
          envOpt("室內全年空調且紗窗完好", "難叮咬", "e_arbo_1_bad", -13, "vir")
        ]},
        e_arbo_1_ok: { prompt: "媒介？", options: [
          envOpt("埃及斑蚊活躍的黃昏", "叮咬窗", "e_arbo_2_ok", 13, "vir"),
          envOpt("偶有蚊子但密度低", "機會薄", "e_arbo_2_mid", 1, "vir"),
          envOpt("無蚊的高海拔營地", "無媒介", "e_arbo_2_bad", -16, "vir")
        ]},
        e_arbo_1_mid: { prompt: "媒介？", options: [
          envOpt("埃及斑蚊活躍的黃昏", "叮咬窗", "e_arbo_2_ok", 13, "vir"),
          envOpt("偶有蚊子但密度低", "機會薄", "e_arbo_2_mid", 1, "vir"),
          envOpt("無蚊的高海拔營地", "無媒介", "e_arbo_2_bad", -16, "vir")
        ]},
        e_arbo_1_bad: { prompt: "媒介？", options: [
          envOpt("埃及斑蚊活躍的黃昏", "叮咬窗", "e_arbo_2_ok", 13, "vir"),
          envOpt("偶有蚊子但密度低", "機會薄", "e_arbo_2_mid", 1, "vir"),
          envOpt("無蚊的高海拔營地", "無媒介", "e_arbo_2_bad", -16, "vir")
        ]},
        e_arbo_2_ok: { prompt: "宿主？", options: [
          envOpt("人的血液餐示意循環", "都市宿主", "e_arbo_3_ok", 11, "vir"),
          envOpt("猴子等森林循環邊緣", "叢林意象", "e_arbo_3_mid", 5, "vir"),
          envOpt("無法被叮的密閉車內", "中斷", "e_arbo_3_bad", -14, "vir")
        ]},
        e_arbo_2_mid: { prompt: "宿主？", options: [
          envOpt("人的血液餐示意循環", "都市宿主", "e_arbo_3_ok", 11, "vir"),
          envOpt("猴子等森林循環邊緣", "叢林意象", "e_arbo_3_mid", 5, "vir"),
          envOpt("無法被叮的密閉車內", "中斷", "e_arbo_3_bad", -14, "vir")
        ]},
        e_arbo_2_bad: { prompt: "宿主？", options: [
          envOpt("人的血液餐示意循環", "都市宿主", "e_arbo_3_ok", 11, "vir"),
          envOpt("猴子等森林循環邊緣", "叢林意象", "e_arbo_3_mid", 5, "vir"),
          envOpt("無法被叮的密閉車內", "中斷", "e_arbo_3_bad", -14, "vir")
        ]},
        e_arbo_3_ok: { prompt: "旅遊？", options: [
          envOpt("熱帶海島度假村無紗網", "輸入風險", "e_arbo_4_ok", 10, "vir"),
          envOpt("溫帶城市短遊", "媒介弱", "e_arbo_4_mid", -3, "vir"),
          envOpt("寒冬極地觀光", "無蚊", "e_arbo_4_bad", -15, "vir")
        ]},
        e_arbo_3_mid: { prompt: "旅遊？", options: [
          envOpt("熱帶海島度假村無紗網", "輸入風險", "e_arbo_4_ok", 10, "vir"),
          envOpt("溫帶城市短遊", "媒介弱", "e_arbo_4_mid", -3, "vir"),
          envOpt("寒冬極地觀光", "無蚊", "e_arbo_4_bad", -15, "vir")
        ]},
        e_arbo_3_bad: { prompt: "旅遊？", options: [
          envOpt("熱帶海島度假村無紗網", "輸入風險", "e_arbo_4_ok", 10, "vir"),
          envOpt("溫帶城市短遊", "媒介弱", "e_arbo_4_mid", -3, "vir"),
          envOpt("寒冬極地觀光", "無蚊", "e_arbo_4_bad", -15, "vir")
        ]},
        e_arbo_4_ok: { prompt: "社區防治？", options: [
          envOpt("里民少積水但不徹底", "縫隙仍在", "e_arbo_5_ok", 6, "vir"),
          envOpt("定期噴藥的公園", "密度下降", "e_arbo_5_mid", -5, "vir"),
          envOpt("大規模孳生源清除週", "媒介大減", "e_arbo_5_bad", -14, "vir")
        ]},
        e_arbo_4_mid: { prompt: "社區防治？", options: [
          envOpt("里民少積水但不徹底", "縫隙仍在", "e_arbo_5_ok", 6, "vir"),
          envOpt("定期噴藥的公園", "密度下降", "e_arbo_5_mid", -5, "vir"),
          envOpt("大規模孳生源清除週", "媒介大減", "e_arbo_5_bad", -14, "vir")
        ]},
        e_arbo_4_bad: { prompt: "社區防治？", options: [
          envOpt("里民少積水但不徹底", "縫隙仍在", "e_arbo_5_ok", 6, "vir"),
          envOpt("定期噴藥的公園", "密度下降", "e_arbo_5_mid", -5, "vir"),
          envOpt("大規模孳生源清除週", "媒介大減", "e_arbo_5_bad", -14, "vir")
        ]},
        e_arbo_5_ok: { prompt: "日夜？", options: [
          envOpt("黃昏庭院烤肉赤臂", "暴露", "e_arbo_6_ok", 9, "vir"),
          envOpt("長袖長褲夜跑", "遮擋", "e_arbo_6_mid", -2, "vir"),
          envOpt("全室捕蚊燈與電蚊拍", "艱難", "e_arbo_6_bad", -11, "vir")
        ]},
        e_arbo_5_mid: { prompt: "日夜？", options: [
          envOpt("黃昏庭院烤肉赤臂", "暴露", "e_arbo_6_ok", 9, "vir"),
          envOpt("長袖長褲夜跑", "遮擋", "e_arbo_6_mid", -2, "vir"),
          envOpt("全室捕蚊燈與電蚊拍", "艱難", "e_arbo_6_bad", -11, "vir")
        ]},
        e_arbo_5_bad: { prompt: "日夜？", options: [
          envOpt("黃昏庭院烤肉赤臂", "暴露", "e_arbo_6_ok", 9, "vir"),
          envOpt("長袖長褲夜跑", "遮擋", "e_arbo_6_mid", -2, "vir"),
          envOpt("全室捕蚊燈與電蚊拍", "艱難", "e_arbo_6_bad", -11, "vir")
        ]},
        e_arbo_6_ok: { prompt: "跨區物流？", options: [
          envOpt("二手輪胎堆置場進口", "卵隨貨", "e_arbo_7_ok", 8, "vir"),
          envOpt("普通快遞紙箱乾燥", "難存活卵", "e_arbo_7_mid", -4, "vir"),
          envOpt("貨物強制燻蒸", "中斷", "e_arbo_7_bad", -15, "vir")
        ]},
        e_arbo_6_mid: { prompt: "跨區物流？", options: [
          envOpt("二手輪胎堆置場進口", "卵隨貨", "e_arbo_7_ok", 8, "vir"),
          envOpt("普通快遞紙箱乾燥", "難存活卵", "e_arbo_7_mid", -4, "vir"),
          envOpt("貨物強制燻蒸", "中斷", "e_arbo_7_bad", -15, "vir")
        ]},
        e_arbo_6_bad: { prompt: "跨區物流？", options: [
          envOpt("二手輪胎堆置場進口", "卵隨貨", "e_arbo_7_ok", 8, "vir"),
          envOpt("普通快遞紙箱乾燥", "難存活卵", "e_arbo_7_mid", -4, "vir"),
          envOpt("貨物強制燻蒸", "中斷", "e_arbo_7_bad", -15, "vir")
        ]},
        e_arbo_7_ok: { prompt: "雨量？", options: [
          envOpt("連續午後雷陣雨", "積水刷新", "e_arbo_8_ok", 10, "vir"),
          envOpt("偶爾小雨", "中等", "e_arbo_8_mid", 2, "vir"),
          envOpt("長期乾旱", "孑孓無水", "e_arbo_die", -13, "vir")
        ]},
        e_arbo_7_mid: { prompt: "雨量？", options: [
          envOpt("連續午後雷陣雨", "積水刷新", "e_arbo_8_ok", 10, "vir"),
          envOpt("偶爾小雨", "中等", "e_arbo_8_mid", 2, "vir"),
          envOpt("長期乾旱", "孑孓無水", "e_arbo_die", -13, "vir")
        ]},
        e_arbo_7_bad: { prompt: "雨量？", options: [
          envOpt("連續午後雷陣雨", "積水刷新", "e_arbo_8_ok", 10, "vir"),
          envOpt("偶爾小雨", "中等", "e_arbo_8_mid", 2, "vir"),
          envOpt("長期乾旱", "孑孓無水", "e_arbo_die", -13, "vir")
        ]},
        e_arbo_8_ok: { prompt: "醫院周邊？", options: [
          envOpt("急診戶外等候無驅蚊", "脆弱點", "e_arbo_9_ok", 7, "vir"),
          envOpt("有風扇驅趕", "半阻", "e_arbo_9_mid", -1, "vir"),
          envOpt("密閉候診且紗窗雙層", "難進入", "e_arbo_9_bad", -12, "vir")
        ]},
        e_arbo_8_mid: { prompt: "醫院周邊？", options: [
          envOpt("急診戶外等候無驅蚊", "脆弱點", "e_arbo_9_ok", 7, "vir"),
          envOpt("有風扇驅趕", "半阻", "e_arbo_9_mid", -1, "vir"),
          envOpt("密閉候診且紗窗雙層", "難進入", "e_arbo_9_bad", -12, "vir")
        ]},
        e_arbo_8_bad: { prompt: "醫院周邊？", options: [
          envOpt("急診戶外等候無驅蚊", "脆弱點", "e_arbo_9_ok", 7, "vir"),
          envOpt("有風扇驅趕", "半阻", "e_arbo_9_mid", -1, "vir"),
          envOpt("密閉候診且紗窗雙層", "難進入", "e_arbo_9_bad", -12, "vir")
        ]},
        e_arbo_9_ok: { prompt: "流行年末？", options: [
          envOpt("雨季延尾與群聚活動重疊", "再起", "e_arbo_ext0", 14, "vir"),
          envOpt("天氣轉乾活動減少", "平緩", "e_arbo_steady", 1, "vir"),
          envOpt("媒介幾乎消滅的冬季", "循環斷", "e_arbo_die", -18, "vir")
        ]},
        e_arbo_9_mid: { prompt: "流行年末？", options: [
          envOpt("雨季延尾與群聚活動重疊", "再起", "e_arbo_ext0", 14, "vir"),
          envOpt("天氣轉乾活動減少", "平緩", "e_arbo_steady", 1, "vir"),
          envOpt("媒介幾乎消滅的冬季", "循環斷", "e_arbo_die", -18, "vir")
        ]},
        e_arbo_9_bad: { prompt: "流行年末？", options: [
          envOpt("雨季延尾與群聚活動重疊", "再起", "e_arbo_ext0", 14, "vir"),
          envOpt("天氣轉乾活動減少", "平緩", "e_arbo_steady", 1, "vir"),
          envOpt("媒介幾乎消滅的冬季", "循環斷", "e_arbo_die", -18, "vir")
        ]},
        e_arbo_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_arbo_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_arbo_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_arbo_die", -12, "vir")
        ]},
        e_arbo_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_arbo_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_arbo_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_arbo_die", -14, "vir")
        ]},
        e_arbo_thrive: envEnd("e_arbo_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_arbo_steady: envEnd("e_arbo_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_arbo_die: envEnd("e_arbo_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    naked_gi: {
      start: "e_naked_gi_0",
      nodes: {
        e_naked_gi_0: { prompt: "落點？", options: [
          envOpt("幼稚園盥洗室門把", "小手高頻", "e_naked_gi_1_ok", 12, "vir"),
          envOpt("郊外野餐墊", "偶發", "e_naked_gi_1_mid", 2, "vir"),
          envOpt("剛用漂白水擦過的餐車", "殘留氯", "e_naked_gi_1_bad", -14, "vir")
        ]},
        e_naked_gi_1_ok: { prompt: "路徑？", options: [
          envOpt("糞口途徑示意的未洗手抓零食", "經典", "e_naked_gi_2_ok", 13, "vir"),
          envOpt("短暫碰觸後立刻潔手", "機會短", "e_naked_gi_2_mid", -5, "vir"),
          envOpt("全自動感應設備零觸控餐廳", "難傳遞", "e_naked_gi_2_bad", -13, "vir")
        ]},
        e_naked_gi_1_mid: { prompt: "路徑？", options: [
          envOpt("糞口途徑示意的未洗手抓零食", "經典", "e_naked_gi_2_ok", 13, "vir"),
          envOpt("短暫碰觸後立刻潔手", "機會短", "e_naked_gi_2_mid", -5, "vir"),
          envOpt("全自動感應設備零觸控餐廳", "難傳遞", "e_naked_gi_2_bad", -13, "vir")
        ]},
        e_naked_gi_1_bad: { prompt: "路徑？", options: [
          envOpt("糞口途徑示意的未洗手抓零食", "經典", "e_naked_gi_2_ok", 13, "vir"),
          envOpt("短暫碰觸後立刻潔手", "機會短", "e_naked_gi_2_mid", -5, "vir"),
          envOpt("全自動感應設備零觸控餐廳", "難傳遞", "e_naked_gi_2_bad", -13, "vir")
        ]},
        e_naked_gi_2_ok: { prompt: "食物？", options: [
          envOpt("生蠔或冷盤共用夾", "高風險意象", "e_naked_gi_3_ok", 11, "vir"),
          envOpt("各自密封包裝零食", "分隔", "e_naked_gi_3_mid", -3, "vir"),
          envOpt("高溫烘烤剛出爐封閉包裝", "不利", "e_naked_gi_3_bad", -12, "vir")
        ]},
        e_naked_gi_2_mid: { prompt: "食物？", options: [
          envOpt("生蠔或冷盤共用夾", "高風險意象", "e_naked_gi_3_ok", 11, "vir"),
          envOpt("各自密封包裝零食", "分隔", "e_naked_gi_3_mid", -3, "vir"),
          envOpt("高溫烘烤剛出爐封閉包裝", "不利", "e_naked_gi_3_bad", -12, "vir")
        ]},
        e_naked_gi_2_bad: { prompt: "食物？", options: [
          envOpt("生蠔或冷盤共用夾", "高風險意象", "e_naked_gi_3_ok", 11, "vir"),
          envOpt("各自密封包裝零食", "分隔", "e_naked_gi_3_mid", -3, "vir"),
          envOpt("高溫烘烤剛出爐封閉包裝", "不利", "e_naked_gi_3_bad", -12, "vir")
        ]},
        e_naked_gi_3_ok: { prompt: "耐乾？", options: [
          envOpt("乾燥門把上殘存數日示意", "無膜仍頑強", "e_naked_gi_4_ok", 9, "vir"),
          envOpt("潮溼但常被擦拭的桌面", "中等", "e_naked_gi_4_mid", 1, "vir"),
          envOpt("蒸氣清洗機反覆通過", "清除", "e_naked_gi_4_bad", -15, "vir")
        ]},
        e_naked_gi_3_mid: { prompt: "耐乾？", options: [
          envOpt("乾燥門把上殘存數日示意", "無膜仍頑強", "e_naked_gi_4_ok", 9, "vir"),
          envOpt("潮溼但常被擦拭的桌面", "中等", "e_naked_gi_4_mid", 1, "vir"),
          envOpt("蒸氣清洗機反覆通過", "清除", "e_naked_gi_4_bad", -15, "vir")
        ]},
        e_naked_gi_3_bad: { prompt: "耐乾？", options: [
          envOpt("乾燥門把上殘存數日示意", "無膜仍頑強", "e_naked_gi_4_ok", 9, "vir"),
          envOpt("潮溼但常被擦拭的桌面", "中等", "e_naked_gi_4_mid", 1, "vir"),
          envOpt("蒸氣清洗機反覆通過", "清除", "e_naked_gi_4_bad", -15, "vir")
        ]},
        e_naked_gi_4_ok: { prompt: "人群？", options: [
          envOpt("郵輪密閉餐廳", "聚集", "e_naked_gi_5_ok", 12, "vir"),
          envOpt("家庭四人餐桌", "小圈", "e_naked_gi_5_mid", 3, "vir"),
          envOpt("單人隔間用餐", "難擴散", "e_naked_gi_5_bad", -10, "vir")
        ]},
        e_naked_gi_4_mid: { prompt: "人群？", options: [
          envOpt("郵輪密閉餐廳", "聚集", "e_naked_gi_5_ok", 12, "vir"),
          envOpt("家庭四人餐桌", "小圈", "e_naked_gi_5_mid", 3, "vir"),
          envOpt("單人隔間用餐", "難擴散", "e_naked_gi_5_bad", -10, "vir")
        ]},
        e_naked_gi_4_bad: { prompt: "人群？", options: [
          envOpt("郵輪密閉餐廳", "聚集", "e_naked_gi_5_ok", 12, "vir"),
          envOpt("家庭四人餐桌", "小圈", "e_naked_gi_5_mid", 3, "vir"),
          envOpt("單人隔間用餐", "難擴散", "e_naked_gi_5_bad", -10, "vir")
        ]},
        e_naked_gi_5_ok: { prompt: "季節？", options: [
          envOpt("涼季室內聚會多", "窗口", "e_naked_gi_6_ok", 8, "vir"),
          envOpt("炎夏戶外分開吃", "分散", "e_naked_gi_6_mid", -2, "vir"),
          envOpt("校園因故全面停課居家", "接觸少", "e_naked_gi_6_bad", -11, "vir")
        ]},
        e_naked_gi_5_mid: { prompt: "季節？", options: [
          envOpt("涼季室內聚會多", "窗口", "e_naked_gi_6_ok", 8, "vir"),
          envOpt("炎夏戶外分開吃", "分散", "e_naked_gi_6_mid", -2, "vir"),
          envOpt("校園因故全面停課居家", "接觸少", "e_naked_gi_6_bad", -11, "vir")
        ]},
        e_naked_gi_5_bad: { prompt: "季節？", options: [
          envOpt("涼季室內聚會多", "窗口", "e_naked_gi_6_ok", 8, "vir"),
          envOpt("炎夏戶外分開吃", "分散", "e_naked_gi_6_mid", -2, "vir"),
          envOpt("校園因故全面停課居家", "接觸少", "e_naked_gi_6_bad", -11, "vir")
        ]},
        e_naked_gi_6_ok: { prompt: "清潔劑？", options: [
          envOpt("只用清水抹桌", "許多仍在", "e_naked_gi_7_ok", 7, "vir"),
          envOpt("普通肥皂洗", "減少一些", "e_naked_gi_7_mid", -4, "vir"),
          envOpt("含氯消毒液按規範擦拭", "大量離開", "e_naked_gi_7_bad", -16, "vir")
        ]},
        e_naked_gi_6_mid: { prompt: "清潔劑？", options: [
          envOpt("只用清水抹桌", "許多仍在", "e_naked_gi_7_ok", 7, "vir"),
          envOpt("普通肥皂洗", "減少一些", "e_naked_gi_7_mid", -4, "vir"),
          envOpt("含氯消毒液按規範擦拭", "大量離開", "e_naked_gi_7_bad", -16, "vir")
        ]},
        e_naked_gi_6_bad: { prompt: "清潔劑？", options: [
          envOpt("只用清水抹桌", "許多仍在", "e_naked_gi_7_ok", 7, "vir"),
          envOpt("普通肥皂洗", "減少一些", "e_naked_gi_7_mid", -4, "vir"),
          envOpt("含氯消毒液按規範擦拭", "大量離開", "e_naked_gi_7_bad", -16, "vir")
        ]},
        e_naked_gi_7_ok: { prompt: "水？", options: [
          envOpt("受污染的冰塊機內壁", "冷鏈隱患", "e_naked_gi_8_ok", 10, "vir"),
          envOpt("瓶裝水封口完好", "安全", "e_naked_gi_8_mid", -6, "vir"),
          envOpt("沸騰後的熱茶壺", "高溫", "e_naked_gi_die", -14, "vir")
        ]},
        e_naked_gi_7_mid: { prompt: "水？", options: [
          envOpt("受污染的冰塊機內壁", "冷鏈隱患", "e_naked_gi_8_ok", 10, "vir"),
          envOpt("瓶裝水封口完好", "安全", "e_naked_gi_8_mid", -6, "vir"),
          envOpt("沸騰後的熱茶壺", "高溫", "e_naked_gi_die", -14, "vir")
        ]},
        e_naked_gi_7_bad: { prompt: "水？", options: [
          envOpt("受污染的冰塊機內壁", "冷鏈隱患", "e_naked_gi_8_ok", 10, "vir"),
          envOpt("瓶裝水封口完好", "安全", "e_naked_gi_8_mid", -6, "vir"),
          envOpt("沸騰後的熱茶壺", "高溫", "e_naked_gi_die", -14, "vir")
        ]},
        e_naked_gi_8_ok: { prompt: "照護機構？", options: [
          envOpt("長照機構活動室桌面", "共用", "e_naked_gi_9_ok", 9, "vir"),
          envOpt("訪客少的單人房", "侷限", "e_naked_gi_9_mid", 0, "vir"),
          envOpt("嚴格腸胃隔離病房流程", "阻斷", "e_naked_gi_9_bad", -15, "vir")
        ]},
        e_naked_gi_8_mid: { prompt: "照護機構？", options: [
          envOpt("長照機構活動室桌面", "共用", "e_naked_gi_9_ok", 9, "vir"),
          envOpt("訪客少的單人房", "侷限", "e_naked_gi_9_mid", 0, "vir"),
          envOpt("嚴格腸胃隔離病房流程", "阻斷", "e_naked_gi_9_bad", -15, "vir")
        ]},
        e_naked_gi_8_bad: { prompt: "照護機構？", options: [
          envOpt("長照機構活動室桌面", "共用", "e_naked_gi_9_ok", 9, "vir"),
          envOpt("訪客少的單人房", "侷限", "e_naked_gi_9_mid", 0, "vir"),
          envOpt("嚴格腸胃隔離病房流程", "阻斷", "e_naked_gi_9_bad", -15, "vir")
        ]},
        e_naked_gi_9_ok: { prompt: "收束？", options: [
          envOpt("在幼教與家庭網絡間循環", "季節性繁盛感", "e_naked_gi_ext0", 14, "vir"),
          envOpt("零星家庭自限", "低調", "e_naked_gi_steady", 2, "vir"),
          envOpt("爆發後徹底終末消毒", "消退", "e_naked_gi_die", -18, "vir")
        ]},
        e_naked_gi_9_mid: { prompt: "收束？", options: [
          envOpt("在幼教與家庭網絡間循環", "季節性繁盛感", "e_naked_gi_ext0", 14, "vir"),
          envOpt("零星家庭自限", "低調", "e_naked_gi_steady", 2, "vir"),
          envOpt("爆發後徹底終末消毒", "消退", "e_naked_gi_die", -18, "vir")
        ]},
        e_naked_gi_9_bad: { prompt: "收束？", options: [
          envOpt("在幼教與家庭網絡間循環", "季節性繁盛感", "e_naked_gi_ext0", 14, "vir"),
          envOpt("零星家庭自限", "低調", "e_naked_gi_steady", 2, "vir"),
          envOpt("爆發後徹底終末消毒", "消退", "e_naked_gi_die", -18, "vir")
        ]},
        e_naked_gi_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_naked_gi_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_naked_gi_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_naked_gi_die", -12, "vir")
        ]},
        e_naked_gi_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_naked_gi_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_naked_gi_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_naked_gi_die", -14, "vir")
        ]},
        e_naked_gi_thrive: envEnd("e_naked_gi_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_naked_gi_steady: envEnd("e_naked_gi_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_naked_gi_die: envEnd("e_naked_gi_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    naked_resp: {
      start: "e_naked_resp_0",
      nodes: {
        e_naked_resp_0: { prompt: "落點？", options: [
          envOpt("辦公室中央空調開放座位", "近距", "e_naked_resp_1_ok", 11, "vir"),
          envOpt("郊外單車道", "風散", "e_naked_resp_1_mid", -5, "vir"),
          envOpt("負壓採檢亭外壁", "管控", "e_naked_resp_1_bad", -12, "vir")
        ]},
        e_naked_resp_1_ok: { prompt: "宿主？", options: [
          envOpt("人的鼻腔最適溫濕", "經典位", "e_naked_resp_2_ok", 12, "vir"),
          envOpt("偶進家貓鼻腔附近又離開", "短暫", "e_naked_resp_2_mid", -2, "vir"),
          envOpt("完全乾燥的口罩外層 overnight", "不利", "e_naked_resp_2_bad", -13, "vir")
        ]},
        e_naked_resp_1_mid: { prompt: "宿主？", options: [
          envOpt("人的鼻腔最適溫濕", "經典位", "e_naked_resp_2_ok", 12, "vir"),
          envOpt("偶進家貓鼻腔附近又離開", "短暫", "e_naked_resp_2_mid", -2, "vir"),
          envOpt("完全乾燥的口罩外層 overnight", "不利", "e_naked_resp_2_bad", -13, "vir")
        ]},
        e_naked_resp_1_bad: { prompt: "宿主？", options: [
          envOpt("人的鼻腔最適溫濕", "經典位", "e_naked_resp_2_ok", 12, "vir"),
          envOpt("偶進家貓鼻腔附近又離開", "短暫", "e_naked_resp_2_mid", -2, "vir"),
          envOpt("完全乾燥的口罩外層 overnight", "不利", "e_naked_resp_2_bad", -13, "vir")
        ]},
        e_naked_resp_2_ok: { prompt: "距離？", options: [
          envOpt("面對面開會無隔板", "飛沫／氣溶膠意象", "e_naked_resp_3_ok", 10, "vir"),
          envOpt("視訊會議各自家中", "無共享空氣", "e_naked_resp_3_mid", -8, "vir"),
          envOpt("全員 N95 且換氣高", "難突破", "e_naked_resp_3_bad", -14, "vir")
        ]},
        e_naked_resp_2_mid: { prompt: "距離？", options: [
          envOpt("面對面開會無隔板", "飛沫／氣溶膠意象", "e_naked_resp_3_ok", 10, "vir"),
          envOpt("視訊會議各自家中", "無共享空氣", "e_naked_resp_3_mid", -8, "vir"),
          envOpt("全員 N95 且換氣高", "難突破", "e_naked_resp_3_bad", -14, "vir")
        ]},
        e_naked_resp_2_bad: { prompt: "距離？", options: [
          envOpt("面對面開會無隔板", "飛沫／氣溶膠意象", "e_naked_resp_3_ok", 10, "vir"),
          envOpt("視訊會議各自家中", "無共享空氣", "e_naked_resp_3_mid", -8, "vir"),
          envOpt("全員 N95 且換氣高", "難突破", "e_naked_resp_3_bad", -14, "vir")
        ]},
        e_naked_resp_3_ok: { prompt: "季節？", options: [
          envOpt("換季溫差大的一週", "黏膜敏感意象", "e_naked_resp_4_ok", 9, "vir"),
          envOpt("氣候穩定溫和", "中性", "e_naked_resp_4_mid", 1, "vir"),
          envOpt("極端乾冷加加濕器仍低濕", "黏膜乾", "e_naked_resp_4_bad", -11, "vir")
        ]},
        e_naked_resp_3_mid: { prompt: "季節？", options: [
          envOpt("換季溫差大的一週", "黏膜敏感意象", "e_naked_resp_4_ok", 9, "vir"),
          envOpt("氣候穩定溫和", "中性", "e_naked_resp_4_mid", 1, "vir"),
          envOpt("極端乾冷加加濕器仍低濕", "黏膜乾", "e_naked_resp_4_bad", -11, "vir")
        ]},
        e_naked_resp_3_bad: { prompt: "季節？", options: [
          envOpt("換季溫差大的一週", "黏膜敏感意象", "e_naked_resp_4_ok", 9, "vir"),
          envOpt("氣候穩定溫和", "中性", "e_naked_resp_4_mid", 1, "vir"),
          envOpt("極端乾冷加加濕器仍低濕", "黏膜乾", "e_naked_resp_4_bad", -11, "vir")
        ]},
        e_naked_resp_4_ok: { prompt: "表面？", options: [
          envOpt("共用鍵盤未擦", "手－口鼻", "e_naked_resp_5_ok", 7, "vir"),
          envOpt("個人手機偶爾碰臉", "有限", "e_naked_resp_5_mid", 0, "vir"),
          envOpt("每次使用前酒精擦設備", "減少", "e_naked_resp_5_bad", -12, "vir")
        ]},
        e_naked_resp_4_mid: { prompt: "表面？", options: [
          envOpt("共用鍵盤未擦", "手－口鼻", "e_naked_resp_5_ok", 7, "vir"),
          envOpt("個人手機偶爾碰臉", "有限", "e_naked_resp_5_mid", 0, "vir"),
          envOpt("每次使用前酒精擦設備", "減少", "e_naked_resp_5_bad", -12, "vir")
        ]},
        e_naked_resp_4_bad: { prompt: "表面？", options: [
          envOpt("共用鍵盤未擦", "手－口鼻", "e_naked_resp_5_ok", 7, "vir"),
          envOpt("個人手機偶爾碰臉", "有限", "e_naked_resp_5_mid", 0, "vir"),
          envOpt("每次使用前酒精擦設備", "減少", "e_naked_resp_5_bad", -12, "vir")
        ]},
        e_naked_resp_5_ok: { prompt: "孩童場景？", options: [
          envOpt("安親班唱歌圍圈", "近距飛沫", "e_naked_resp_6_ok", 11, "vir"),
          envOpt("戶外體能課分散", "稀釋", "e_naked_resp_6_mid", -3, "vir"),
          envOpt("生病孩童留在家", "點減少", "e_naked_resp_6_bad", -10, "vir")
        ]},
        e_naked_resp_5_mid: { prompt: "孩童場景？", options: [
          envOpt("安親班唱歌圍圈", "近距飛沫", "e_naked_resp_6_ok", 11, "vir"),
          envOpt("戶外體能課分散", "稀釋", "e_naked_resp_6_mid", -3, "vir"),
          envOpt("生病孩童留在家", "點減少", "e_naked_resp_6_bad", -10, "vir")
        ]},
        e_naked_resp_5_bad: { prompt: "孩童場景？", options: [
          envOpt("安親班唱歌圍圈", "近距飛沫", "e_naked_resp_6_ok", 11, "vir"),
          envOpt("戶外體能課分散", "稀釋", "e_naked_resp_6_mid", -3, "vir"),
          envOpt("生病孩童留在家", "點減少", "e_naked_resp_6_bad", -10, "vir")
        ]},
        e_naked_resp_6_ok: { prompt: "交通？", options: [
          envOpt("塞車窗閉的共乘", "久共處", "e_naked_resp_7_ok", 8, "vir"),
          envOpt("開窗機車通勤", "開放", "e_naked_resp_7_mid", -6, "vir"),
          envOpt("座位消毒且空車率高", "難傳", "e_naked_resp_7_bad", -13, "vir")
        ]},
        e_naked_resp_6_mid: { prompt: "交通？", options: [
          envOpt("塞車窗閉的共乘", "久共處", "e_naked_resp_7_ok", 8, "vir"),
          envOpt("開窗機車通勤", "開放", "e_naked_resp_7_mid", -6, "vir"),
          envOpt("座位消毒且空車率高", "難傳", "e_naked_resp_7_bad", -13, "vir")
        ]},
        e_naked_resp_6_bad: { prompt: "交通？", options: [
          envOpt("塞車窗閉的共乘", "久共處", "e_naked_resp_7_ok", 8, "vir"),
          envOpt("開窗機車通勤", "開放", "e_naked_resp_7_mid", -6, "vir"),
          envOpt("座位消毒且空車率高", "難傳", "e_naked_resp_7_bad", -13, "vir")
        ]},
        e_naked_resp_7_ok: { prompt: "免疫節奏示意？", options: [
          envOpt("睡眠不足的專案週", "門戶鬆", "e_naked_resp_8_ok", 6, "vir"),
          envOpt("作息正常", "中性", "e_naked_resp_8_mid", 0, "vir"),
          envOpt("剛度過相關疫苗接種宣導氛圍的社區", "門檻", "e_naked_resp_die", -9, "vir")
        ]},
        e_naked_resp_7_mid: { prompt: "免疫節奏示意？", options: [
          envOpt("睡眠不足的專案週", "門戶鬆", "e_naked_resp_8_ok", 6, "vir"),
          envOpt("作息正常", "中性", "e_naked_resp_8_mid", 0, "vir"),
          envOpt("剛度過相關疫苗接種宣導氛圍的社區", "門檻", "e_naked_resp_die", -9, "vir")
        ]},
        e_naked_resp_7_bad: { prompt: "免疫節奏示意？", options: [
          envOpt("睡眠不足的專案週", "門戶鬆", "e_naked_resp_8_ok", 6, "vir"),
          envOpt("作息正常", "中性", "e_naked_resp_8_mid", 0, "vir"),
          envOpt("剛度過相關疫苗接種宣導氛圍的社區", "門檻", "e_naked_resp_die", -9, "vir")
        ]},
        e_naked_resp_8_ok: { prompt: "長遠？", options: [
          envOpt("進入常年循環的「感冒季」意象", "反覆", "e_naked_resp_9_ok", 10, "vir"),
          envOpt("偶爾一兩波", "稀疏", "e_naked_resp_9_mid", 2, "vir"),
          envOpt("長期遠距與高換氣成為常態", "生態位縮", "e_naked_resp_9_bad", -15, "vir")
        ]},
        e_naked_resp_8_mid: { prompt: "長遠？", options: [
          envOpt("進入常年循環的「感冒季」意象", "反覆", "e_naked_resp_9_ok", 10, "vir"),
          envOpt("偶爾一兩波", "稀疏", "e_naked_resp_9_mid", 2, "vir"),
          envOpt("長期遠距與高換氣成為常態", "生態位縮", "e_naked_resp_9_bad", -15, "vir")
        ]},
        e_naked_resp_8_bad: { prompt: "長遠？", options: [
          envOpt("進入常年循環的「感冒季」意象", "反覆", "e_naked_resp_9_ok", 10, "vir"),
          envOpt("偶爾一兩波", "稀疏", "e_naked_resp_9_mid", 2, "vir"),
          envOpt("長期遠距與高換氣成為常態", "生態位縮", "e_naked_resp_9_bad", -15, "vir")
        ]},
        e_naked_resp_9_ok: { prompt: "結尾氛圍？", options: [
          envOpt("新學期教室再度擁擠", "再起", "e_naked_resp_ext0", 13, "vir"),
          envOpt("大家自覺有症狀就休息", "平緩", "e_naked_resp_steady", 1, "vir"),
          envOpt("整季幾乎無密閉群聚", "消退", "e_naked_resp_die", -17, "vir")
        ]},
        e_naked_resp_9_mid: { prompt: "結尾氛圍？", options: [
          envOpt("新學期教室再度擁擠", "再起", "e_naked_resp_ext0", 13, "vir"),
          envOpt("大家自覺有症狀就休息", "平緩", "e_naked_resp_steady", 1, "vir"),
          envOpt("整季幾乎無密閉群聚", "消退", "e_naked_resp_die", -17, "vir")
        ]},
        e_naked_resp_9_bad: { prompt: "結尾氛圍？", options: [
          envOpt("新學期教室再度擁擠", "再起", "e_naked_resp_ext0", 13, "vir"),
          envOpt("大家自覺有症狀就休息", "平緩", "e_naked_resp_steady", 1, "vir"),
          envOpt("整季幾乎無密閉群聚", "消退", "e_naked_resp_die", -17, "vir")
        ]},
        e_naked_resp_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_naked_resp_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_naked_resp_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_naked_resp_die", -12, "vir")
        ]},
        e_naked_resp_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_naked_resp_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_naked_resp_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_naked_resp_die", -14, "vir")
        ]},
        e_naked_resp_thrive: envEnd("e_naked_resp_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_naked_resp_steady: envEnd("e_naked_resp_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_naked_resp_die: envEnd("e_naked_resp_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    dna: {
      start: "e_dna_0",
      nodes: {
        e_dna_0: { prompt: "落點？", options: [
          envOpt("游泳池更衣室長椅", "潮・皮膚接觸", "e_dna_1_ok", 10, "vir"),
          envOpt("郊外乾草垛", "少人", "e_dna_1_mid", -4, "vir"),
          envOpt("單一使用拋棄式診間紙巾", "用完即棄", "e_dna_1_bad", -12, "vir")
        ]},
        e_dna_1_ok: { prompt: "宿主？", options: [
          envOpt("人的黏膜或皮膚微傷", "進入點意象", "e_dna_2_ok", 11, "vir"),
          envOpt("毛巾與刮鬍刀共用", "器具橋", "e_dna_2_mid", 5, "vir"),
          envOpt("無破損的完整屏障且個人用具", "難入", "e_dna_2_bad", -14, "vir")
        ]},
        e_dna_1_mid: { prompt: "宿主？", options: [
          envOpt("人的黏膜或皮膚微傷", "進入點意象", "e_dna_2_ok", 11, "vir"),
          envOpt("毛巾與刮鬍刀共用", "器具橋", "e_dna_2_mid", 5, "vir"),
          envOpt("無破損的完整屏障且個人用具", "難入", "e_dna_2_bad", -14, "vir")
        ]},
        e_dna_1_bad: { prompt: "宿主？", options: [
          envOpt("人的黏膜或皮膚微傷", "進入點意象", "e_dna_2_ok", 11, "vir"),
          envOpt("毛巾與刮鬍刀共用", "器具橋", "e_dna_2_mid", 5, "vir"),
          envOpt("無破損的完整屏障且個人用具", "難入", "e_dna_2_bad", -14, "vir")
        ]},
        e_dna_2_ok: { prompt: "場所？", options: [
          envOpt("市區共用更衣室", "高頻接觸", "e_dna_3_ok", 9, "vir"),
          envOpt("自家浴室單人", "侷限", "e_dna_3_mid", 0, "vir"),
          envOpt("醫療級消毒後的治療椅", "苛刻", "e_dna_3_bad", -15, "vir")
        ]},
        e_dna_2_mid: { prompt: "場所？", options: [
          envOpt("市區共用更衣室", "高頻接觸", "e_dna_3_ok", 9, "vir"),
          envOpt("自家浴室單人", "侷限", "e_dna_3_mid", 0, "vir"),
          envOpt("醫療級消毒後的治療椅", "苛刻", "e_dna_3_bad", -15, "vir")
        ]},
        e_dna_2_bad: { prompt: "場所？", options: [
          envOpt("市區共用更衣室", "高頻接觸", "e_dna_3_ok", 9, "vir"),
          envOpt("自家浴室單人", "侷限", "e_dna_3_mid", 0, "vir"),
          envOpt("醫療級消毒後的治療椅", "苛刻", "e_dna_3_bad", -15, "vir")
        ]},
        e_dna_3_ok: { prompt: "親密距離？", options: [
          envOpt("家庭成員共用杯緣", "近", "e_dna_4_ok", 8, "vir"),
          envOpt("分杯分巾", "阻隔", "e_dna_4_mid", -3, "vir"),
          envOpt("全程手套口罩的護理流程", "低暴露", "e_dna_4_bad", -12, "vir")
        ]},
        e_dna_3_mid: { prompt: "親密距離？", options: [
          envOpt("家庭成員共用杯緣", "近", "e_dna_4_ok", 8, "vir"),
          envOpt("分杯分巾", "阻隔", "e_dna_4_mid", -3, "vir"),
          envOpt("全程手套口罩的護理流程", "低暴露", "e_dna_4_bad", -12, "vir")
        ]},
        e_dna_3_bad: { prompt: "親密距離？", options: [
          envOpt("家庭成員共用杯緣", "近", "e_dna_4_ok", 8, "vir"),
          envOpt("分杯分巾", "阻隔", "e_dna_4_mid", -3, "vir"),
          envOpt("全程手套口罩的護理流程", "低暴露", "e_dna_4_bad", -12, "vir")
        ]},
        e_dna_4_ok: { prompt: "環境耐受？", options: [
          envOpt("潮溼塑膠表面殘存", "尚可", "e_dna_5_ok", 7, "vir"),
          envOpt("乾燥紙面短暫", "較弱", "e_dna_5_mid", -2, "vir"),
          envOpt("高階滅菌包內", "出局", "e_dna_5_bad", -16, "vir")
        ]},
        e_dna_4_mid: { prompt: "環境耐受？", options: [
          envOpt("潮溼塑膠表面殘存", "尚可", "e_dna_5_ok", 7, "vir"),
          envOpt("乾燥紙面短暫", "較弱", "e_dna_5_mid", -2, "vir"),
          envOpt("高階滅菌包內", "出局", "e_dna_5_bad", -16, "vir")
        ]},
        e_dna_4_bad: { prompt: "環境耐受？", options: [
          envOpt("潮溼塑膠表面殘存", "尚可", "e_dna_5_ok", 7, "vir"),
          envOpt("乾燥紙面短暫", "較弱", "e_dna_5_mid", -2, "vir"),
          envOpt("高階滅菌包內", "出局", "e_dna_5_bad", -16, "vir")
        ]},
        e_dna_5_ok: { prompt: "季節活動？", options: [
          envOpt("夏日泳池派對", "經典場景", "e_dna_6_ok", 10, "vir"),
          envOpt("冬季少共用水域", "機會少", "e_dna_6_mid", -5, "vir"),
          envOpt("私人溫泉一人包場", "幾乎獨用", "e_dna_6_bad", -11, "vir")
        ]},
        e_dna_5_mid: { prompt: "季節活動？", options: [
          envOpt("夏日泳池派對", "經典場景", "e_dna_6_ok", 10, "vir"),
          envOpt("冬季少共用水域", "機會少", "e_dna_6_mid", -5, "vir"),
          envOpt("私人溫泉一人包場", "幾乎獨用", "e_dna_6_bad", -11, "vir")
        ]},
        e_dna_5_bad: { prompt: "季節活動？", options: [
          envOpt("夏日泳池派對", "經典場景", "e_dna_6_ok", 10, "vir"),
          envOpt("冬季少共用水域", "機會少", "e_dna_6_mid", -5, "vir"),
          envOpt("私人溫泉一人包場", "幾乎獨用", "e_dna_6_bad", -11, "vir")
        ]},
        e_dna_6_ok: { prompt: "兒童？", options: [
          envOpt("安親班玩具口慾期傳遞", "高頻", "e_dna_7_ok", 9, "vir"),
          envOpt("玩具每日酒精擦", "減少", "e_dna_7_mid", -4, "vir"),
          envOpt("個別袋裝玩具不共用", "阻斷", "e_dna_7_bad", -13, "vir")
        ]},
        e_dna_6_mid: { prompt: "兒童？", options: [
          envOpt("安親班玩具口慾期傳遞", "高頻", "e_dna_7_ok", 9, "vir"),
          envOpt("玩具每日酒精擦", "減少", "e_dna_7_mid", -4, "vir"),
          envOpt("個別袋裝玩具不共用", "阻斷", "e_dna_7_bad", -13, "vir")
        ]},
        e_dna_6_bad: { prompt: "兒童？", options: [
          envOpt("安親班玩具口慾期傳遞", "高頻", "e_dna_7_ok", 9, "vir"),
          envOpt("玩具每日酒精擦", "減少", "e_dna_7_mid", -4, "vir"),
          envOpt("個別袋裝玩具不共用", "阻斷", "e_dna_7_bad", -13, "vir")
        ]},
        e_dna_7_ok: { prompt: "旅遊？", options: [
          envOpt("背包客棧通鋪", "密集", "e_dna_8_ok", 8, "vir"),
          envOpt("商務旅館單人房", "分隔", "e_dna_8_mid", -1, "vir"),
          envOpt("每次更換的拋棄式備品全套", "低殘留", "e_dna_die", -12, "vir")
        ]},
        e_dna_7_mid: { prompt: "旅遊？", options: [
          envOpt("背包客棧通鋪", "密集", "e_dna_8_ok", 8, "vir"),
          envOpt("商務旅館單人房", "分隔", "e_dna_8_mid", -1, "vir"),
          envOpt("每次更換的拋棄式備品全套", "低殘留", "e_dna_die", -12, "vir")
        ]},
        e_dna_7_bad: { prompt: "旅遊？", options: [
          envOpt("背包客棧通鋪", "密集", "e_dna_8_ok", 8, "vir"),
          envOpt("商務旅館單人房", "分隔", "e_dna_8_mid", -1, "vir"),
          envOpt("每次更換的拋棄式備品全套", "低殘留", "e_dna_die", -12, "vir")
        ]},
        e_dna_8_ok: { prompt: "醫療美容邊緣？", options: [
          envOpt("消毒不確實的共用器具意象", "風險縫", "e_dna_9_ok", 7, "vir"),
          envOpt("正規診所單次耗材", "規範", "e_dna_9_mid", -6, "vir"),
          envOpt("高壓滅菌全程追蹤", "極難存活", "e_dna_9_bad", -15, "vir")
        ]},
        e_dna_8_mid: { prompt: "醫療美容邊緣？", options: [
          envOpt("消毒不確實的共用器具意象", "風險縫", "e_dna_9_ok", 7, "vir"),
          envOpt("正規診所單次耗材", "規範", "e_dna_9_mid", -6, "vir"),
          envOpt("高壓滅菌全程追蹤", "極難存活", "e_dna_9_bad", -15, "vir")
        ]},
        e_dna_8_bad: { prompt: "醫療美容邊緣？", options: [
          envOpt("消毒不確實的共用器具意象", "風險縫", "e_dna_9_ok", 7, "vir"),
          envOpt("正規診所單次耗材", "規範", "e_dna_9_mid", -6, "vir"),
          envOpt("高壓滅菌全程追蹤", "極難存活", "e_dna_9_bad", -15, "vir")
        ]},
        e_dna_9_ok: { prompt: "收束？", options: [
          envOpt("在社區接觸網絡中穩定現身", "適應感", "e_dna_ext0", 13, "vir"),
          envOpt("偶發個案級", "低調", "e_dna_steady", 2, "vir"),
          envOpt("接觸預防成為生活習慣後難見", "消退", "e_dna_die", -17, "vir")
        ]},
        e_dna_9_mid: { prompt: "收束？", options: [
          envOpt("在社區接觸網絡中穩定現身", "適應感", "e_dna_ext0", 13, "vir"),
          envOpt("偶發個案級", "低調", "e_dna_steady", 2, "vir"),
          envOpt("接觸預防成為生活習慣後難見", "消退", "e_dna_die", -17, "vir")
        ]},
        e_dna_9_bad: { prompt: "收束？", options: [
          envOpt("在社區接觸網絡中穩定現身", "適應感", "e_dna_ext0", 13, "vir"),
          envOpt("偶發個案級", "低調", "e_dna_steady", 2, "vir"),
          envOpt("接觸預防成為生活習慣後難見", "消退", "e_dna_die", -17, "vir")
        ]},
        e_dna_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_dna_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_dna_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_dna_die", -12, "vir")
        ]},
        e_dna_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_dna_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_dna_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_dna_die", -14, "vir")
        ]},
        e_dna_thrive: envEnd("e_dna_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_dna_steady: envEnd("e_dna_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_dna_die: envEnd("e_dna_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    dna_lat: {
      start: "e_dna_lat_0",
      nodes: {
        e_dna_lat_0: { prompt: "進入？", options: [
          envOpt("童年時期的近距家庭接觸示意", "早發隱喻", "e_dna_lat_1_ok", 10, "vir"),
          envOpt("成年後偶發暴露", "較晚", "e_dna_lat_1_mid", 2, "vir"),
          envOpt("嚴格屏障下的醫療照護", "難建立", "e_dna_lat_1_bad", -14, "vir")
        ]},
        e_dna_lat_1_ok: { prompt: "策略？", options: [
          envOpt("潛入神經節靜靜待著的隱喻", "潛伏", "e_dna_lat_2_ok", 9, "vir"),
          envOpt("偶爾出來探探黏膜", "間歇", "e_dna_lat_2_mid", 3, "vir"),
          envOpt("宿主強烈清除壓力下無庇護", "難潛", "e_dna_lat_2_bad", -13, "vir")
        ]},
        e_dna_lat_1_mid: { prompt: "策略？", options: [
          envOpt("潛入神經節靜靜待著的隱喻", "潛伏", "e_dna_lat_2_ok", 9, "vir"),
          envOpt("偶爾出來探探黏膜", "間歇", "e_dna_lat_2_mid", 3, "vir"),
          envOpt("宿主強烈清除壓力下無庇護", "難潛", "e_dna_lat_2_bad", -13, "vir")
        ]},
        e_dna_lat_1_bad: { prompt: "策略？", options: [
          envOpt("潛入神經節靜靜待著的隱喻", "潛伏", "e_dna_lat_2_ok", 9, "vir"),
          envOpt("偶爾出來探探黏膜", "間歇", "e_dna_lat_2_mid", 3, "vir"),
          envOpt("宿主強烈清除壓力下無庇護", "難潛", "e_dna_lat_2_bad", -13, "vir")
        ]},
        e_dna_lat_2_ok: { prompt: "再活化契機？", options: [
          envOpt("壓力大與睡眠差的示意週", "門戶", "e_dna_lat_3_ok", 8, "vir"),
          envOpt("生活平穩", "少動靜", "e_dna_lat_3_mid", -2, "vir"),
          envOpt("長期良好作息與屏障習慣", "少機會", "e_dna_lat_3_bad", -11, "vir")
        ]},
        e_dna_lat_2_mid: { prompt: "再活化契機？", options: [
          envOpt("壓力大與睡眠差的示意週", "門戶", "e_dna_lat_3_ok", 8, "vir"),
          envOpt("生活平穩", "少動靜", "e_dna_lat_3_mid", -2, "vir"),
          envOpt("長期良好作息與屏障習慣", "少機會", "e_dna_lat_3_bad", -11, "vir")
        ]},
        e_dna_lat_2_bad: { prompt: "再活化契機？", options: [
          envOpt("壓力大與睡眠差的示意週", "門戶", "e_dna_lat_3_ok", 8, "vir"),
          envOpt("生活平穩", "少動靜", "e_dna_lat_3_mid", -2, "vir"),
          envOpt("長期良好作息與屏障習慣", "少機會", "e_dna_lat_3_bad", -11, "vir")
        ]},
        e_dna_lat_3_ok: { prompt: "場所？", options: [
          envOpt("都市高壓職場密閉辦公", "壓力源", "e_dna_lat_4_ok", 7, "vir"),
          envOpt("郊外慢生活", "緩和", "e_dna_lat_4_mid", 0, "vir"),
          envOpt("休養院規律作息", "穩定抑制感", "e_dna_lat_4_bad", -10, "vir")
        ]},
        e_dna_lat_3_mid: { prompt: "場所？", options: [
          envOpt("都市高壓職場密閉辦公", "壓力源", "e_dna_lat_4_ok", 7, "vir"),
          envOpt("郊外慢生活", "緩和", "e_dna_lat_4_mid", 0, "vir"),
          envOpt("休養院規律作息", "穩定抑制感", "e_dna_lat_4_bad", -10, "vir")
        ]},
        e_dna_lat_3_bad: { prompt: "場所？", options: [
          envOpt("都市高壓職場密閉辦公", "壓力源", "e_dna_lat_4_ok", 7, "vir"),
          envOpt("郊外慢生活", "緩和", "e_dna_lat_4_mid", 0, "vir"),
          envOpt("休養院規律作息", "穩定抑制感", "e_dna_lat_4_bad", -10, "vir")
        ]},
        e_dna_lat_4_ok: { prompt: "傳遞？", options: [
          envOpt("親密接觸的家庭圈", "有限網絡", "e_dna_lat_5_ok", 8, "vir"),
          envOpt("社交距離拉開的一年", "少傳", "e_dna_lat_5_mid", -4, "vir"),
          envOpt("完全無接觸的遠距生活實驗", "斷鏈", "e_dna_lat_5_bad", -14, "vir")
        ]},
        e_dna_lat_4_mid: { prompt: "傳遞？", options: [
          envOpt("親密接觸的家庭圈", "有限網絡", "e_dna_lat_5_ok", 8, "vir"),
          envOpt("社交距離拉開的一年", "少傳", "e_dna_lat_5_mid", -4, "vir"),
          envOpt("完全無接觸的遠距生活實驗", "斷鏈", "e_dna_lat_5_bad", -14, "vir")
        ]},
        e_dna_lat_4_bad: { prompt: "傳遞？", options: [
          envOpt("親密接觸的家庭圈", "有限網絡", "e_dna_lat_5_ok", 8, "vir"),
          envOpt("社交距離拉開的一年", "少傳", "e_dna_lat_5_mid", -4, "vir"),
          envOpt("完全無接觸的遠距生活實驗", "斷鏈", "e_dna_lat_5_bad", -14, "vir")
        ]},
        e_dna_lat_5_ok: { prompt: "陽光與皮膚？", options: [
          envOpt("適度戶外但未暴晒黏膜", "中性偏可", "e_dna_lat_6_ok", 5, "vir"),
          envOpt("過度暴晒後的皮膚壓力", "複雜", "e_dna_lat_6_mid", -1, "vir"),
          envOpt("黏膜區嚴防刺激的護理", "不利再現", "e_dna_lat_6_bad", -9, "vir")
        ]},
        e_dna_lat_5_mid: { prompt: "陽光與皮膚？", options: [
          envOpt("適度戶外但未暴晒黏膜", "中性偏可", "e_dna_lat_6_ok", 5, "vir"),
          envOpt("過度暴晒後的皮膚壓力", "複雜", "e_dna_lat_6_mid", -1, "vir"),
          envOpt("黏膜區嚴防刺激的護理", "不利再現", "e_dna_lat_6_bad", -9, "vir")
        ]},
        e_dna_lat_5_bad: { prompt: "陽光與皮膚？", options: [
          envOpt("適度戶外但未暴晒黏膜", "中性偏可", "e_dna_lat_6_ok", 5, "vir"),
          envOpt("過度暴晒後的皮膚壓力", "複雜", "e_dna_lat_6_mid", -1, "vir"),
          envOpt("黏膜區嚴防刺激的護理", "不利再現", "e_dna_lat_6_bad", -9, "vir")
        ]},
        e_dna_lat_6_ok: { prompt: "年齡尺度？", options: [
          envOpt("伴隨多年的低調同住隱喻", "長期", "e_dna_lat_7_ok", 9, "vir"),
          envOpt("短暫出現後少見", "間歇", "e_dna_lat_7_mid", 1, "vir"),
          envOpt("從未真正建立據點", "失敗", "e_dna_lat_7_bad", -15, "vir")
        ]},
        e_dna_lat_6_mid: { prompt: "年齡尺度？", options: [
          envOpt("伴隨多年的低調同住隱喻", "長期", "e_dna_lat_7_ok", 9, "vir"),
          envOpt("短暫出現後少見", "間歇", "e_dna_lat_7_mid", 1, "vir"),
          envOpt("從未真正建立據點", "失敗", "e_dna_lat_7_bad", -15, "vir")
        ]},
        e_dna_lat_6_bad: { prompt: "年齡尺度？", options: [
          envOpt("伴隨多年的低調同住隱喻", "長期", "e_dna_lat_7_ok", 9, "vir"),
          envOpt("短暫出現後少見", "間歇", "e_dna_lat_7_mid", 1, "vir"),
          envOpt("從未真正建立據點", "失敗", "e_dna_lat_7_bad", -15, "vir")
        ]},
        e_dna_lat_7_ok: { prompt: "共病壓力示意？", options: [
          envOpt("另一場小感冒讓節奏亂", "窗口", "e_dna_lat_8_ok", 6, "vir"),
          envOpt("健康平穩期", "平", "e_dna_lat_8_mid", -1, "vir"),
          envOpt("全面防護與充足休息期", "少縫隙", "e_dna_lat_die", -12, "vir")
        ]},
        e_dna_lat_7_mid: { prompt: "共病壓力示意？", options: [
          envOpt("另一場小感冒讓節奏亂", "窗口", "e_dna_lat_8_ok", 6, "vir"),
          envOpt("健康平穩期", "平", "e_dna_lat_8_mid", -1, "vir"),
          envOpt("全面防護與充足休息期", "少縫隙", "e_dna_lat_die", -12, "vir")
        ]},
        e_dna_lat_7_bad: { prompt: "共病壓力示意？", options: [
          envOpt("另一場小感冒讓節奏亂", "窗口", "e_dna_lat_8_ok", 6, "vir"),
          envOpt("健康平穩期", "平", "e_dna_lat_8_mid", -1, "vir"),
          envOpt("全面防護與充足休息期", "少縫隙", "e_dna_lat_die", -12, "vir")
        ]},
        e_dna_lat_8_ok: { prompt: "社會？", options: [
          envOpt("密集都會家庭同住", "接觸面", "e_dna_lat_9_ok", 7, "vir"),
          envOpt("獨居且少探訪", "窄", "e_dna_lat_9_mid", -3, "vir"),
          envOpt("長期隔離式居住實驗", "極窄", "e_dna_lat_9_bad", -13, "vir")
        ]},
        e_dna_lat_8_mid: { prompt: "社會？", options: [
          envOpt("密集都會家庭同住", "接觸面", "e_dna_lat_9_ok", 7, "vir"),
          envOpt("獨居且少探訪", "窄", "e_dna_lat_9_mid", -3, "vir"),
          envOpt("長期隔離式居住實驗", "極窄", "e_dna_lat_9_bad", -13, "vir")
        ]},
        e_dna_lat_8_bad: { prompt: "社會？", options: [
          envOpt("密集都會家庭同住", "接觸面", "e_dna_lat_9_ok", 7, "vir"),
          envOpt("獨居且少探訪", "窄", "e_dna_lat_9_mid", -3, "vir"),
          envOpt("長期隔離式居住實驗", "極窄", "e_dna_lat_9_bad", -13, "vir")
        ]},
        e_dna_lat_9_ok: { prompt: "收束敘事？", options: [
          envOpt("成為生命史裡安靜的共居者意象", "適應", "e_dna_lat_ext0", 12, "vir"),
          envOpt("極少再探出頭", "持平", "e_dna_lat_steady", 2, "vir"),
          envOpt("據點未成便消散", "衰退", "e_dna_lat_die", -16, "vir")
        ]},
        e_dna_lat_9_mid: { prompt: "收束敘事？", options: [
          envOpt("成為生命史裡安靜的共居者意象", "適應", "e_dna_lat_ext0", 12, "vir"),
          envOpt("極少再探出頭", "持平", "e_dna_lat_steady", 2, "vir"),
          envOpt("據點未成便消散", "衰退", "e_dna_lat_die", -16, "vir")
        ]},
        e_dna_lat_9_bad: { prompt: "收束敘事？", options: [
          envOpt("成為生命史裡安靜的共居者意象", "適應", "e_dna_lat_ext0", 12, "vir"),
          envOpt("極少再探出頭", "持平", "e_dna_lat_steady", 2, "vir"),
          envOpt("據點未成便消散", "衰退", "e_dna_lat_die", -16, "vir")
        ]},
        e_dna_lat_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_dna_lat_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_dna_lat_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_dna_lat_die", -12, "vir")
        ]},
        e_dna_lat_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_dna_lat_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_dna_lat_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_dna_lat_die", -14, "vir")
        ]},
        e_dna_lat_thrive: envEnd("e_dna_lat_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_dna_lat_steady: envEnd("e_dna_lat_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_dna_lat_die: envEnd("e_dna_lat_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    },
    retro: {
      start: "e_retro_0",
      nodes: {
        e_retro_0: { prompt: "體液／細胞路徑示意起點？", options: [
          envOpt("未防護的親密接觸網絡", "經典路徑意象", "e_retro_1_ok", 11, "vir"),
          envOpt("完好屏障下的日常社交", "機會極低", "e_retro_1_mid", -8, "vir"),
          envOpt("全程防護的醫療採血流程", "規範阻斷", "e_retro_1_bad", -15, "vir")
        ]},
        e_retro_1_ok: { prompt: "進入細胞隱喻？", options: [
          envOpt("找到相符的受體門牌", "進入", "e_retro_2_ok", 12, "vir"),
          envOpt("門牌不對又離開", "徒勞", "e_retro_2_mid", -10, "vir"),
          envOpt("體外乾燥太久失去外套", "失活感", "e_retro_2_bad", -14, "vir")
        ]},
        e_retro_1_mid: { prompt: "進入細胞隱喻？", options: [
          envOpt("找到相符的受體門牌", "進入", "e_retro_2_ok", 12, "vir"),
          envOpt("門牌不對又離開", "徒勞", "e_retro_2_mid", -10, "vir"),
          envOpt("體外乾燥太久失去外套", "失活感", "e_retro_2_bad", -14, "vir")
        ]},
        e_retro_1_bad: { prompt: "進入細胞隱喻？", options: [
          envOpt("找到相符的受體門牌", "進入", "e_retro_2_ok", 12, "vir"),
          envOpt("門牌不對又離開", "徒勞", "e_retro_2_mid", -10, "vir"),
          envOpt("體外乾燥太久失去外套", "失活感", "e_retro_2_bad", -14, "vir")
        ]},
        e_retro_2_ok: { prompt: "整合隱喻？", options: [
          envOpt("悄悄把故事寫進細胞圖書館", "長期", "e_retro_3_ok", 10, "vir"),
          envOpt("寫到一半被校對打斷", "不完整", "e_retro_3_mid", -6, "vir"),
          envOpt("圖書館門禁森嚴進不去", "失敗", "e_retro_3_bad", -13, "vir")
        ]},
        e_retro_2_mid: { prompt: "整合隱喻？", options: [
          envOpt("悄悄把故事寫進細胞圖書館", "長期", "e_retro_3_ok", 10, "vir"),
          envOpt("寫到一半被校對打斷", "不完整", "e_retro_3_mid", -6, "vir"),
          envOpt("圖書館門禁森嚴進不去", "失敗", "e_retro_3_bad", -13, "vir")
        ]},
        e_retro_2_bad: { prompt: "整合隱喻？", options: [
          envOpt("悄悄把故事寫進細胞圖書館", "長期", "e_retro_3_ok", 10, "vir"),
          envOpt("寫到一半被校對打斷", "不完整", "e_retro_3_mid", -6, "vir"),
          envOpt("圖書館門禁森嚴進不去", "失敗", "e_retro_3_bad", -13, "vir")
        ]},
        e_retro_3_ok: { prompt: "城市與資訊？", options: [
          envOpt("宣導不足的年代感社區", "縫隙", "e_retro_4_ok", 7, "vir"),
          envOpt("衛教海報隨處可見", "警覺", "e_retro_4_mid", -3, "vir"),
          envOpt("高覆蓋篩檢與預防氣氛", "門檻", "e_retro_4_bad", -12, "vir")
        ]},
        e_retro_3_mid: { prompt: "城市與資訊？", options: [
          envOpt("宣導不足的年代感社區", "縫隙", "e_retro_4_ok", 7, "vir"),
          envOpt("衛教海報隨處可見", "警覺", "e_retro_4_mid", -3, "vir"),
          envOpt("高覆蓋篩檢與預防氣氛", "門檻", "e_retro_4_bad", -12, "vir")
        ]},
        e_retro_3_bad: { prompt: "城市與資訊？", options: [
          envOpt("宣導不足的年代感社區", "縫隙", "e_retro_4_ok", 7, "vir"),
          envOpt("衛教海報隨處可見", "警覺", "e_retro_4_mid", -3, "vir"),
          envOpt("高覆蓋篩檢與預防氣氛", "門檻", "e_retro_4_bad", -12, "vir")
        ]},
        e_retro_4_ok: { prompt: "醫療？", options: [
          envOpt("可及性低的遠鄉", "治療距離遠的意象", "e_retro_5_ok", 5, "vir"),
          envOpt("定期追蹤的市區診所", "受控", "e_retro_5_mid", -4, "vir"),
          envOpt("穩定藥物循環使複製極低的示意", "壓制", "e_retro_5_bad", -14, "vir")
        ]},
        e_retro_4_mid: { prompt: "醫療？", options: [
          envOpt("可及性低的遠鄉", "治療距離遠的意象", "e_retro_5_ok", 5, "vir"),
          envOpt("定期追蹤的市區診所", "受控", "e_retro_5_mid", -4, "vir"),
          envOpt("穩定藥物循環使複製極低的示意", "壓制", "e_retro_5_bad", -14, "vir")
        ]},
        e_retro_4_bad: { prompt: "醫療？", options: [
          envOpt("可及性低的遠鄉", "治療距離遠的意象", "e_retro_5_ok", 5, "vir"),
          envOpt("定期追蹤的市區診所", "受控", "e_retro_5_mid", -4, "vir"),
          envOpt("穩定藥物循環使複製極低的示意", "壓制", "e_retro_5_bad", -14, "vir")
        ]},
        e_retro_5_ok: { prompt: "共享器具？", options: [
          envOpt("未滅菌的共用針具意象（歷史風險教育）", "高風險路徑", "e_retro_6_ok", 9, "vir"),
          envOpt("單次拋棄式", "阻斷", "e_retro_6_mid", -7, "vir"),
          envOpt("醫療級一次性全程", "幾乎無此路徑", "e_retro_6_bad", -15, "vir")
        ]},
        e_retro_5_mid: { prompt: "共享器具？", options: [
          envOpt("未滅菌的共用針具意象（歷史風險教育）", "高風險路徑", "e_retro_6_ok", 9, "vir"),
          envOpt("單次拋棄式", "阻斷", "e_retro_6_mid", -7, "vir"),
          envOpt("醫療級一次性全程", "幾乎無此路徑", "e_retro_6_bad", -15, "vir")
        ]},
        e_retro_5_bad: { prompt: "共享器具？", options: [
          envOpt("未滅菌的共用針具意象（歷史風險教育）", "高風險路徑", "e_retro_6_ok", 9, "vir"),
          envOpt("單次拋棄式", "阻斷", "e_retro_6_mid", -7, "vir"),
          envOpt("醫療級一次性全程", "幾乎無此路徑", "e_retro_6_bad", -15, "vir")
        ]},
        e_retro_6_ok: { prompt: "母嬰／家庭？", options: [
          envOpt("衛教資源不足的孕期照護縫隙示意", "預防缺口", "e_retro_7_ok", 6, "vir"),
          envOpt("常規產檢與衛教到位", "風險降", "e_retro_7_mid", -5, "vir"),
          envOpt("完整阻断流程示意", "路徑閉", "e_retro_7_bad", -13, "vir")
        ]},
        e_retro_6_mid: { prompt: "母嬰／家庭？", options: [
          envOpt("衛教資源不足的孕期照護縫隙示意", "預防缺口", "e_retro_7_ok", 6, "vir"),
          envOpt("常規產檢與衛教到位", "風險降", "e_retro_7_mid", -5, "vir"),
          envOpt("完整阻断流程示意", "路徑閉", "e_retro_7_bad", -13, "vir")
        ]},
        e_retro_6_bad: { prompt: "母嬰／家庭？", options: [
          envOpt("衛教資源不足的孕期照護縫隙示意", "預防缺口", "e_retro_7_ok", 6, "vir"),
          envOpt("常規產檢與衛教到位", "風險降", "e_retro_7_mid", -5, "vir"),
          envOpt("完整阻断流程示意", "路徑閉", "e_retro_7_bad", -13, "vir")
        ]},
        e_retro_7_ok: { prompt: "社會接納？", options: [
          envOpt("污名讓人不敢求助的氣氛", "隱匿傳播縫", "e_retro_8_ok", 4, "vir"),
          envOpt("友善篩檢日", "早發現", "e_retro_8_mid", -2, "vir"),
          envOpt("無歧視且預防工具易得", "循環縮", "e_retro_die", -11, "vir")
        ]},
        e_retro_7_mid: { prompt: "社會接納？", options: [
          envOpt("污名讓人不敢求助的氣氛", "隱匿傳播縫", "e_retro_8_ok", 4, "vir"),
          envOpt("友善篩檢日", "早發現", "e_retro_8_mid", -2, "vir"),
          envOpt("無歧視且預防工具易得", "循環縮", "e_retro_die", -11, "vir")
        ]},
        e_retro_7_bad: { prompt: "社會接納？", options: [
          envOpt("污名讓人不敢求助的氣氛", "隱匿傳播縫", "e_retro_8_ok", 4, "vir"),
          envOpt("友善篩檢日", "早發現", "e_retro_8_mid", -2, "vir"),
          envOpt("無歧視且預防工具易得", "循環縮", "e_retro_die", -11, "vir")
        ]},
        e_retro_8_ok: { prompt: "時間？", options: [
          envOpt("多年低調存在於群體中的示意", "慢性", "e_retro_9_ok", 8, "vir"),
          envOpt("短期暴露後無後續", "未立基", "e_retro_9_mid", -6, "vir"),
          envOpt("暴露後立即規範處理示意", "未建立", "e_retro_9_bad", -14, "vir")
        ]},
        e_retro_8_mid: { prompt: "時間？", options: [
          envOpt("多年低調存在於群體中的示意", "慢性", "e_retro_9_ok", 8, "vir"),
          envOpt("短期暴露後無後續", "未立基", "e_retro_9_mid", -6, "vir"),
          envOpt("暴露後立即規範處理示意", "未建立", "e_retro_9_bad", -14, "vir")
        ]},
        e_retro_8_bad: { prompt: "時間？", options: [
          envOpt("多年低調存在於群體中的示意", "慢性", "e_retro_9_ok", 8, "vir"),
          envOpt("短期暴露後無後續", "未立基", "e_retro_9_mid", -6, "vir"),
          envOpt("暴露後立即規範處理示意", "未建立", "e_retro_9_bad", -14, "vir")
        ]},
        e_retro_9_ok: { prompt: "敘事結尾？", options: [
          envOpt("在預防與治療交織下仍有生態位的複雜現實簡化", "長期適應隱喻", "e_retro_ext0", 10, "vir"),
          envOpt("極低度、幾乎靜默", "持平", "e_retro_steady", 1, "vir"),
          envOpt("路徑全面被社會工具封閉的示意", "衰退", "e_retro_die", -16, "vir")
        ]},
        e_retro_9_mid: { prompt: "敘事結尾？", options: [
          envOpt("在預防與治療交織下仍有生態位的複雜現實簡化", "長期適應隱喻", "e_retro_ext0", 10, "vir"),
          envOpt("極低度、幾乎靜默", "持平", "e_retro_steady", 1, "vir"),
          envOpt("路徑全面被社會工具封閉的示意", "衰退", "e_retro_die", -16, "vir")
        ]},
        e_retro_9_bad: { prompt: "敘事結尾？", options: [
          envOpt("在預防與治療交織下仍有生態位的複雜現實簡化", "長期適應隱喻", "e_retro_ext0", 10, "vir"),
          envOpt("極低度、幾乎靜默", "持平", "e_retro_steady", 1, "vir"),
          envOpt("路徑全面被社會工具封閉的示意", "衰退", "e_retro_die", -16, "vir")
        ]},
        e_retro_ext0: { prompt: "夜深了，環境還在變化……", options: [
          envOpt("繼續跟著人潮移動", "都市未眠", "e_retro_ext1", 8, "vir"),
          envOpt("找個角落安靜待著", "放慢節奏", "e_retro_steady", 2, "vir"),
          envOpt("遇到徹底大掃除", "場所翻新", "e_retro_die", -12, "vir")
        ]},
        e_retro_ext1: { prompt: "黎明前的最後選擇？", options: [
          envOpt("融入日常循環", "成為風景的一部分", "e_retro_thrive", 12, "vir"),
          envOpt("維持極低度存在", "幾乎不被注意", "e_retro_steady", 0, "vir"),
          envOpt("晨間清掃把痕跡抹去", "據點消失", "e_retro_die", -14, "vir")
        ]},
        e_retro_thrive: envEnd("e_retro_thrive", "thrive", "在現實環境中繁盛適應", "經過一連串場所與宿主處境，這一支系在簡化示意裡站穩腳跟。休閒探索・非醫療。"),
        e_retro_steady: envEnd("e_retro_steady", "steady", "低調存在・不成不敗", "既未大繁盛也未被完全抹去，像城市縫隙裡安靜的痕跡。休閒探索・非醫療。"),
        e_retro_die: envEnd("e_retro_die", "decline", "逐漸消退・場所改換", "清潔、季節或阻隔讓據點柔和散去。可再玩或回圖鑑。非懲罰・非醫療。"),
      }
    }
  };
