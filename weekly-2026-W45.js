// 本週唯一識別：2026-W45；本人2026-11-06明確要求回補，保留既有內容。
(() => {
  const article = {
  "id": "weekly-2026-W45",
  "date": "2026-11-06",
  "title": "珍惜，不必等到剩下才開始",
  "paragraphs": [
    "推著購物車，看到第二件優惠，手已經伸出去，才想起家裡好像還有一包。最難拒絕的，有時不是需要，而是那句「不拿，好像有點可惜」。可是，帶回家之後，真的有地方、有時間好好用它嗎？",
    "十一月六日，環境部舉辦「美好食光．盛食跨域交流論壇」，邀請餐飲、飯店、零售業者與民間團體交流減少食物浪費的做法。官方新聞把重點往前移：不只處理最後剩下的東西，也從備餐、庫存與取用方式減少浪費。",
    "這個往前移的提醒，很值得帶回家。以前談珍惜，容易想到餐桌最後那幾口；但有些浪費，在菜還沒煮、袋子還沒拆時，就已經慢慢形成。買的時候沒有看見已有的，準備的時候沒有問清需要的，最後才靠捨不得，收拾前面的多。",
    "《道德經》第二十七章說：「常善救物，故無棄物。」原章連著善救人、善救物來談，不是現代廚房管理手冊。我從這裡讀到的生活提醒是：珍惜，不只是東西快被丟掉時伸手挽救，也是在它還能被好好使用時，多看它一眼。",
    "一顆菜背後，有人種、有人運、有人洗切。看見這些付出，不必每餐都懷著沉重的虧欠；只是下次選購時，可以把「買得划算」再問完整一點：這些分量，真的用得上嗎？便宜是價格，用得上才是價值。",
    "這個週末，出門買菜前，先花幾分鐘看看冰箱和櫥櫃。挑出仍適合食用、也確實想吃的食材，再列缺少的幾樣。煮飯前問一句：「今天有幾個人在家吃？」少猜一次，就少一點用滿桌菜證明心意的壓力。",
    "當然，惜食不是把身體當成收尾工具。不勉強自己或家人吃到不舒服，也不為了不浪費而吃下安全有疑慮的食物。這次來不及用完，就誠實看見原因，讓下次的分量更合適；不拿責罵代替調整。",
    "生活忙亂、臨時改行程，都可能打亂準備，不能用一袋廚餘替一個人的品格打分數。我們能練習的，是在下一次決定之前，讓手慢一點，讓眼睛先回到家裡已經擁有的東西。",
    "下一次打開冰箱，你願意先讓哪一樣已有的食材，成為今天的主角？把眼前這一份用心對待，珍惜就不必總等到最後，才匆忙登場。",
    "——王光耀"
  ],
  "tags": "#惜食生活 #善救物 #王光耀思維 #LouisWang筆記",
  "revision": "經典取材・生活改編，王光耀心情分享。2026-11-06",
  "sourceNote": "時事與改編說明：事件與新聞發布日期均為2026-11-06，依環境部資源循環署官方新聞核對論壇及源頭減量作法；《道德經》第二十七章短引依Project Gutenberg電子本#7337（2020-12-30更新版）核對；原章包含善救人、善救物及師資關係，不等同現代食安或環境政策。採買前盤點、詢問用餐人數及不以浪費定罪等為現代生活延伸，不是原典逐字教導。本文依本人授權整理上架，不宣稱本人逐字審閱。",
  "sources": [
    {
      "url": "https://enews.moenv.gov.tw/moenv-news/zh-tw/News/14439",
      "label": "環境部資源循環署：惜食論壇與源頭減量（2026-11-06）"
    },
    {
      "url": "https://www.gutenberg.org/cache/epub/7337/pg7337-images.html",
      "label": "《道德經》第二十七章：善救物原文（Project Gutenberg #7337）"
    }
  ]
};
  const id = article.id;
  if (document.getElementById('note-' + id)) return;
  drafts[id] = article;
  articlePhotos[id] = {src:'assets/article-weekly-2026-W45-v001.png',alt:'王光耀在自然光廚房整理少量蔬菜，呼應採買前盤點與珍惜已有食材'};
  const card = document.createElement('article');
  card.className = 'note'; card.id = 'note-' + id; card.dataset.category = '人生智慧';
  card.innerHTML = '<figure class="note-photo"><img src="assets/article-weekly-2026-W45-v001-w1536.webp" srcset="assets/article-weekly-2026-W45-v001-w480.webp 480w, assets/article-weekly-2026-W45-v001-w800.webp 800w, assets/article-weekly-2026-W45-v001-w1536.webp 1536w" sizes="(max-width:700px) calc(100vw - 44px),408px" width="1536" height="1024" alt="王光耀在自然光廚房整理少量蔬菜，呼應採買前盤點與珍惜已有食材" loading="lazy" decoding="async"></figure><div class="note-body"><p class="category">人生智慧 <span>每週時事札記・2026-11-06</span></p><h3></h3><p>從本週惜食論壇與《道德經》善救物的提醒，讓珍惜往前一步：先看已有的，再決定需要多少。</p><button class="read-note" data-note="weekly-2026-W45">閱讀全文與來源說明 ↗</button></div>';
  card.querySelector('h3').textContent = article.title;
  document.querySelector('.note').parentElement.prepend(card);
  filterNotes('全部');
  function openWeeklyHash() {
    if (location.hash === '#note-' + id && !dialog.open) card.querySelector('button').click();
  }
  window.addEventListener('hashchange', openWeeklyHash);
  openWeeklyHash();
})();

