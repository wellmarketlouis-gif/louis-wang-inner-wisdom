(() => {
  const article = {
  "title": "有些手感，要一起做過才會懂",
  "category": "人生智慧",
  "date": "2026-11-13",
  "tag": "王光耀・每週心道",
  "summary": "傳下去的不只是步驟，還有遇到不同情況時，知道該怎麼調整的眼光。",
  "paragraphs": [
    "同一把刨刀，沿著木紋走，刨下來的是一片薄薄的木屑；方向不對，木面可能就起了毛邊。老師傅說一句「手放輕一點」，聽起來很容易。可第一次握刀的人，往往連自己用了多少力都不知道。",
    "11 月 11 日，文化部公布「2026 臺灣工藝獎」得獎名單，把創新與協作放在同一個主題裡。這則消息讓我想到，傳承最難的，未必是把做法留下來，而是把那些熟手已經不用想、新手卻根本看不見的地方，指給他看。",
    "我很喜歡《論語・衛靈公》的一句話：「工欲善其事，必先利其器。」原文是孔子回答子貢怎麼實踐仁，借工匠備好工具作比，接著談親近賢者、結交仁者。放回今天的生活，我想借它提醒自己：教人做事，除了給他一件工具，也要讓他有機會在別人的示範裡，看懂工具什麼時候該怎麼用。",
    "這種差別，家裡也有。長輩教煮一鍋湯，食譜可以寫得很細，卻不容易寫出他怎麼看出火太旺。與其在旁邊一直說「你照我講的做就好」，不如讓對方在同一鍋湯裡，看一回大滾，再看一回小火，問他：「這兩種泡泡，有哪裡不一樣？」那個看見差別的瞬間，可能比再抄一遍食譜有用。",
    "我們有時急著把事情做好，手一伸就接了過去。接得越快，對方越難知道自己是在哪一刻偏掉的。當然，有危險的事要先叫停；能安全重來的事，不妨讓他多試一下。等他真的摸到那個差別，再說你看到了什麼，而不是先說他哪裡不行。",
    "如果這週剛好有人向你請教一件熟悉的事，可以試一個小動作：挑一個你平常不會特別說的細節，先做給他看，再做一次不同的版本。別急著揭曉答案，問問他看見、聽見，或者摸到什麼。最後讓他自己試一回。也許他會說出一個你做了多年，卻從沒想過要說出口的理由。",
    "手感不是一句「熟了就知道」。有人肯等你試一下，也肯把差別說明白，那份本事才有機會走到另一雙手上。下次你想伸手替人做完之前，能不能先留一小步，讓他自己看懂？",
    "——王光耀"
  ],
  "sources": [
    {
      "label": "時事來源｜文化部：2026 臺灣工藝獎公布得獎名單（2026-11-11）",
      "url": "https://www.moc.gov.tw/News_Content.aspx?n=105&s=265046"
    },
    {
      "label": "經典原文｜《論語・衛靈公》第十五，子貢問為仁章（維基文庫）",
      "url": "https://zh.wikisource.org/wiki/%E8%AB%96%E8%AA%9E/%E8%A1%9B%E9%9D%88%E5%85%AC%E7%AC%AC%E5%8D%81%E4%BA%94"
    }
  ],
  "alt": "工坊木桌上的刨刀、捲起的木屑，以及表面一平一粗的兩塊木料",
  "id": "weekly-2026-W46",
  "tags": "#工藝傳承 #生活練習 #王光耀思維 #LouisWang筆記",
  "revision": "經典取材・生活改編，王光耀心情分享。2026-11-13",
  "sourceNote": "時事與改編說明：得獎名單公布及文化部發布日期均為 2026-11-11。引文取自維基文庫所載《論語・衛靈公》第十五「子貢問為仁」章；刨木、煮湯與對照練習是本文的生活延伸，不是原典教法，也不是得獎團隊的活動紀錄。本文依本人授權整理上架。"
};
  const id = article.id;
  if (document.getElementById('note-' + id)) return;
  drafts[id] = article;
  articlePhotos[id] = {src:'assets/article-weekly-2026-W46-v001.png',alt:'工坊木桌上的刨刀、捲起的木屑，以及表面一平一粗的兩塊木料'};
  const card = document.createElement('article');
  card.className = 'note'; card.id = 'note-' + id; card.dataset.category = '人生智慧';
  card.innerHTML = '<figure class="note-photo"><img src="assets/article-weekly-2026-W46-v001-w1536.webp" srcset="assets/article-weekly-2026-W46-v001-w480.webp 480w, assets/article-weekly-2026-W46-v001-w800.webp 800w, assets/article-weekly-2026-W46-v001-w1536.webp 1536w" sizes="(max-width:700px) calc(100vw - 44px),408px" width="1536" height="1024" alt="工坊木桌上的刨刀、捲起的木屑，以及表面一平一粗的兩塊木料" loading="lazy" decoding="async"></figure><div class="note-body"><p class="category">人生智慧 <span>每週時事札記・2026-11-13</span></p><h3></h3><p>傳下去的不只是步驟，還有遇到不同情況時，知道該怎麼調整的眼光。</p><button class="read-note" data-note="weekly-2026-W46">閱讀全文與來源說明 ↗</button></div>';
  card.querySelector('h3').textContent = article.title;
  document.querySelector('.note').parentElement.prepend(card);
  filterNotes('全部');
  function openWeeklyHash() {
    if (location.hash === '#note-' + id && !dialog.open) card.querySelector('button').click();
  }
  window.addEventListener('hashchange', openWeeklyHash);
  openWeeklyHash();
})();
