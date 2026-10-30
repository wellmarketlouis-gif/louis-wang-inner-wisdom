// 本週唯一識別：2026-W44；僅新增本輪文章，不重製既有圖文。
(() => {
  const article = {
  "id": "weekly-2026-W44",
  "date": "2026-10-30",
  "title": "陪孩子讀書，大人也重新學一次",
  "paragraphs": [
    "一本孩子看過三遍的書，大人還願意陪他讀第四遍嗎？我們很容易把重複當成沒有進度，卻忘了，同一頁故事，換一個年紀、換一段心情，可能就會讀出不同的意思。",
    "十月二十九日，桃園市立圖書館埔頂分館與大溪埔頂親子館聯合開幕。圖書館與親子空間相連，讓閱讀與相處有機會發生在同一處。這則消息讓我想到：我們替孩子安排了許多學習，大人自己，還願不願意坐下來重新學？",
    "談到陪讀，常見的畫面是大人指著文字問問題，孩子負責回答。讀完幾本、認識幾個字，都容易算；至於故事裡哪個地方讓他停住，為什麼偏偏喜歡那個不太起眼的角色，反而可能沒有被問起。",
    "《論語・為政》有一句：「溫故而知新，可以為師矣。」原文談的是重溫所學、獲得新的理解。帶回生活，我想延伸的不是把每位家長變成老師，而是提醒自己：熟悉，不代表已經讀完；年紀較長，也不代表每次都得先給答案。",
    "假如孩子說，故事裡那個做錯事的人看起來很孤單，可以先問：「你從哪裡看出來的？」不急著把話轉成應不應該，也不忙著訂正他的感受。聽完以後，再一起分辨：理解一個人的孤單，和認同他的做法，並不是同一件事。",
    "這時候，大人也許會發現，自己以前讀這本書只留意輸贏，現在卻看見了等待、害怕，或一句沒有說出口的道歉。不是孩子一定比大人懂，而是兩個人的目光，能讓同一個故事多開一扇窗。",
    "共同閱讀也不必變成另一張家庭成績單。有人今天累了，就讀一頁；有人不想回答，就容許安靜看看圖。不拿別家的閱讀量來催促，也不把一次沒有興趣，解釋成孩子不愛學習。",
    "這個週末，不妨找一本家裡已有的書，留十五分鐘，把手機放遠一點。讓孩子挑一頁，也讓自己挑一頁，各說一個這次才注意到的地方。沒有孩子在身邊，也可以重讀一段舊文字，寫下自己現在不同意、或終於讀懂的一句。",
    "書不一定要買新的，理解卻可以是新的。陪伴最可貴的時候，也許不是我們終於把孩子教會，而是他還願意邀請我們看看他的世界，我們也肯放下熟練，重新做一次學生。",
    "——王光耀"
  ],
  "tags": "#共同閱讀 #溫故知新 #王光耀思維 #LouisWang筆記",
  "revision": "經典取材・生活改編，王光耀心情分享。2026-10-30",
  "sourceNote": "時事與改編說明：事件日期為2026-10-29；桃園市立圖書館官方活動頁列出當日09:30–12:00聯合開幕，桃園市政府同日新聞亦報導開幕。本文不表示王光耀曾到場；親子對話為生活假設，不是真實個案。《論語・為政》2.11短引，依教育部《成語典》2020版「溫故知新」典源核對；原典為重溫所學而獲新知，共讀方式與十五分鐘練習為現代生活延伸，非孔子提出的親職程序，不保證教育效果。本文依本人既有授權整理上架，非宣稱本人逐字審閱。",
  "sources": [
    {
      "url": "https://www.typl.gov.tw/zh-tw/Activity/Content/10254",
      "label": "桃園市立圖書館：埔頂分館暨親子館聯合開幕（事件2026-10-29）"
    },
    {
      "url": "https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=1010&la=0&webMd=2",
      "label": "教育部《成語典》2020版：溫故知新，《論語・為政》典源"
    }
  ]
};
  const id = article.id;
  if (document.getElementById('note-' + id)) return;
  drafts[id] = article;
  articlePhotos[id] = {src:'assets/article-weekly-2026-W44-v001.png',alt:'王光耀在自然光閱讀空間翻閱圖畫書，呼應重新閱讀與共同學習的主題'};
  const card = document.createElement('article');
  card.className = 'note'; card.id = 'note-' + id; card.dataset.category = '人生智慧';
  card.innerHTML = '<figure class="note-photo"><img src="assets/article-weekly-2026-W44-v001-w1536.webp" srcset="assets/article-weekly-2026-W44-v001-w480.webp 480w, assets/article-weekly-2026-W44-v001-w800.webp 800w, assets/article-weekly-2026-W44-v001-w1536.webp 1536w" sizes="(max-width:700px) calc(100vw - 44px),408px" width="1536" height="1024" alt="王光耀在自然光閱讀空間翻閱圖畫書，呼應重新閱讀與共同學習的主題" loading="lazy" decoding="async"></figure><div class="note-body"><p class="category">人生智慧 <span>每週時事札記・2026-10-30</span></p><h3></h3><p>從埔頂圖書館與親子館開幕，回看共同閱讀：不只教孩子，也讓大人從熟悉的故事讀出新理解。</p><button class="read-note" data-note="weekly-2026-W44">閱讀全文與來源說明 ↗</button></div>';
  card.querySelector('h3').textContent = article.title;
  document.querySelector('.note').parentElement.prepend(card);
  filterNotes('全部');
  function openWeeklyHash() {
    if (location.hash === '#note-' + id && !dialog.open) card.querySelector('button').click();
  }
  window.addEventListener('hashchange', openWeeklyHash);
  openWeeklyHash();
})();

