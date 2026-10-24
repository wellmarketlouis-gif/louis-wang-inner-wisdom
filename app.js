const lifeFilter = document.createElement('button');
lifeFilter.dataset.filter = '人生智慧';
lifeFilter.setAttribute('aria-pressed', 'false');
lifeFilter.textContent = '人生智慧';
document.querySelector('.filters').append(lifeFilter);
const travelFilter = document.createElement('button');
travelFilter.dataset.filter = '信仰行腳';
travelFilter.setAttribute('aria-pressed', 'false');
travelFilter.textContent = '信仰行腳';
document.querySelector('.filters').append(travelFilter);
const filterButtons = [...document.querySelectorAll('[data-filter]')];
function filterNotes(category) {
  let count = 0;
  document.querySelectorAll('.note').forEach(note => {
    note.hidden = category !== '全部' && note.dataset.category !== category;
    if (!note.hidden) count++;
  });
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#filter-status').textContent = `顯示${category} ${count} 篇札記`;
}
filterButtons.forEach(button => button.addEventListener('click', () => filterNotes(button.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => filterNotes(link.dataset.filterLink)));
const drafts = {
  ...approvedNotes,
  ...approvedBatch3,
  ...approvedBatch4,
  ...approvedBatch5,
  ...approvedBatch6,
  ...approvedBatch7,
  ...approvedBatch8,
  ...approvedBatch9,
  ...approvedBatch10,
  ...approvedBatch11,
  ...approvedBatch12,
  ...approvedBatch13,
  ...approvedBatch14,
  ...approvedBatch15,
  ...approvedBatch16,
  ...approvedBatch17,
  ...approvedBatch18,
  ...approvedBatch19,
  ...approvedBatch20,
  compassion: { title: '先放下反擊，不是放下原則。', paragraphs: [
    '有些話，聽進心裡只要一秒；想把傷人的話收回來，卻可能需要很久。',
    '當我們覺得被誤解、被忽略，第一個念頭常是立刻證明自己。可是，說得更快，不一定更接近事情的真相。',
    '這篇札記想練習的，不是叫人忍下所有委屈，而是把「看見情緒」和「決定行動」分開。可以承認自己生氣，也可以選擇不在最生氣的時候下判斷。',
    '理解一個人的處境，不等於答應他每個要求；願意把語氣放柔，也不代表放棄應該守住的原則。慈悲若能落在日常，也許就從不急著傷害彼此開始。',
    '下一次衝突出現，先問自己：我想讓對方知道事實，還是只是想讓他感受到我的憤怒？兩個目的，會帶來完全不同的說法。',
    '先把心放穩，再把話說清楚。柔軟，不必以失去界線為代價。'
  ]},
  leadership: { title: '心可以柔軟，責任不能模糊。', paragraphs: [
    '一個團隊需要溫度，也需要知道：事情交到誰手上，最後會有回音。',
    '有時候，我們怕傷感情，便不把問題說清楚；怕讓夥伴有壓力，便把該由他完成的工作一併接下來。眼前看似和諧，久了卻可能讓疲憊累積、責任失去方向。',
    '善待一個人，不只是替他擋住困難。也可以是陪他把困難拆開，給他資源、練習與回饋，讓他慢慢有能力自己站穩。',
    '可以體諒辛苦，但仍約定下一步；可以允許修正，但不省略完成標準。把界線說清楚，不是變得冷漠，而是讓彼此不必靠猜測來合作。',
    '今天挑一件還沒有結果的事，問清楚三個問題：誰負責？何時回覆？做到什麼才算完成？',
    '真正的善意，不是讓所有人都沒有壓力，而是讓每個人知道：有人願意支持，也有人認真期待自己成長。'
  ]}
};
const dialog = document.querySelector('#article-dialog');
const articlePhotos = {
  "compassion": {
    "src": "assets/article-compassion-v001.png",
    "alt": "王光耀本人形象，呼應〈先放下反擊，不是放下原則。〉"
  },
  "leadership": {
    "src": "assets/article-leadership-v001.png",
    "alt": "王光耀本人形象，呼應〈心可以柔軟，責任不能模糊。〉"
  },
  "batch2-b1": {
    "src": "assets/article-batch2-b1-v001.png",
    "alt": "王光耀本人形象，呼應〈看見自己的心，比急著找到答案更重要〉"
  },
  "batch2-b2": {
    "src": "assets/article-batch2-b2-v001.png",
    "alt": "王光耀本人形象，呼應〈求一個答案之前，先安頓自己的心〉"
  },
  "batch2-b3": {
    "src": "assets/article-batch2-b3-v001.png",
    "alt": "王光耀本人形象，呼應〈入玄門，登覺路：把初心找回來〉"
  },
  "batch2-c1": {
    "src": "assets/article-batch2-c1-v001.png",
    "alt": "王光耀本人形象，呼應〈善良要有底氣，不必帶著敵意〉"
  },
  "batch2-c2": {
    "src": "assets/article-batch2-c2-v001.png",
    "alt": "王光耀本人形象，呼應〈修心，不是向世界交換成功〉"
  },
  "batch3-01": {
    "src": "assets/article-batch3-01-v001.png",
    "alt": "王光耀本人形象，呼應〈修行不必離開生活〉"
  },
  "batch3-02": {
    "src": "assets/article-batch3-02-v001.png",
    "alt": "王光耀本人形象，呼應〈看見因緣，先把能做的事做好〉"
  },
  "batch3-03": {
    "src": "assets/article-batch3-03-v001.png",
    "alt": "王光耀本人形象，呼應〈別把珍惜，留給有空的那一天〉"
  },
  "batch3-04": {
    "src": "assets/article-batch3-04-v001.png",
    "alt": "王光耀本人形象，呼應〈話慢一點，讓行動先走〉"
  },
  "batch3-05": {
    "src": "assets/article-batch3-05-v001.png",
    "alt": "王光耀本人形象，呼應〈別只記得付出，也看見被善待〉"
  },
  "batch3-06": {
    "src": "assets/article-batch3-06-v001.png",
    "alt": "王光耀本人形象，呼應〈得理，也替人留一條路〉"
  },
  "batch4-01": {
    "src": "assets/note-tea-v001.png",
    "alt": "王光耀本人形象，呼應〈留一點空，事情才有轉圜〉"
  },
  "batch4-02": {
    "src": "assets/article-batch4-02-v001.png",
    "alt": "王光耀本人形象，呼應〈成全一個人，不必讓他永遠需要你〉"
  },
  "batch4-03": {
    "src": "assets/article-batch4-03-v001.png",
    "alt": "王光耀本人形象，呼應〈方法是渡河的船，不是背上的重量〉"
  },
  "batch4-04": {
    "src": "assets/article-batch4-04-v001.png",
    "alt": "王光耀本人形象，呼應〈事情已經難了，別再用自責為難自己〉"
  },
  "batch5-01": {
    "src": "assets/article-batch5-01-v001.png",
    "alt": "王光耀本人形象，呼應〈敢說還不知道，才有機會真正知道〉"
  },
  "batch5-02": {
    "src": "assets/article-batch5-02-v001.png",
    "alt": "王光耀本人形象，呼應〈別等小問題，長成彼此的委屈〉"
  },
  "batch5-03": {
    "src": "assets/article-batch5-03-v001.png",
    "alt": "王光耀本人形象，呼應〈說真話，不必把人說倒〉"
  },
  "batch5-04": {
    "src": "assets/article-batch5-04-v001.png",
    "alt": "王光耀本人形象，呼應〈好的同行，不是只說你愛聽的話〉"
  },
  "batch6-01": {
    "src": "assets/article-batch6-01-v001.png",
    "alt": "王光耀本人形象，呼應〈不是每一次評價，都能替你定義一生〉"
  },
  "batch6-02": {
    "src": "assets/article-batch6-02-v001.png",
    "alt": "王光耀本人形象，呼應〈別用一把尺，量完所有人的路〉"
  },
  "batch6-03": {
    "src": "assets/article-batch6-03-v001.png",
    "alt": "王光耀本人形象，呼應〈把事情做好，也把結束做好〉"
  },
  "batch7-01": {
    "src": "assets/article-batch7-01-v001.png",
    "alt": "王光耀本人形象，呼應〈先陪一個人難過，再陪他往前走〉"
  },
  "batch7-02": {
    "src": "assets/article-batch7-02-v001.png",
    "alt": "王光耀本人形象，呼應〈想幫忙，也要讓善意走得長〉"
  },
  "batch7-03": {
    "src": "assets/article-batch7-03-v001.png",
    "alt": "王光耀本人形象，呼應〈位置高一點，姿態可以低一點〉"
  },
  "batch8-01": {
    "src": "assets/article-batch8-01-v001.png",
    "alt": "王光耀本人形象，呼應〈別人的好，不必成為你的不好〉"
  },
  "batch8-02": {
    "src": "assets/article-batch8-02-v001.png",
    "alt": "王光耀本人形象，呼應〈不是每一份信任，都適合拿來分享〉"
  },
  "batch8-03": {
    "src": "assets/article-batch8-03-v001.png",
    "alt": "王光耀本人形象，呼應〈別把自己的方便，留成別人的麻煩〉"
  },
  "batch9-01": {
    "src": "assets/article-batch9-01-v001.png",
    "alt": "王光耀本人形象，呼應〈有些體會，不能請別人代走〉"
  },
  "batch9-02": {
    "src": "assets/article-batch9-02-v001.png",
    "alt": "王光耀本人形象，呼應〈扛起的，不只是轎，也是責任〉"
  },
  "batch9-03": {
    "src": "assets/article-batch9-03-v001.png",
    "alt": "王光耀本人形象，呼應〈別讓熱鬧，替你決定生活〉"
  },
  "batch10-01": {
    "src": "assets/article-batch10-01-v001.png",
    "alt": "王光耀本人形象，呼應〈道歉，不是把對不起說完〉"
  },
  "batch10-02": {
    "src": "assets/article-batch10-02-v001.png",
    "alt": "王光耀本人形象，呼應〈你希望別人做到的，自己有沒有做到？〉"
  },
  "batch10-03": {
    "src": "assets/article-batch10-03-v001.png",
    "alt": "王光耀本人形象，呼應〈再親近，也別把照顧當成理所當然〉"
  },
  "batch11-01": {
    "src": "assets/article-batch11-01-v001.png",
    "alt": "王光耀本人形象，呼應〈有耐心，不只是再多等一下〉"
  },
  "batch11-02": {
    "src": "assets/article-batch11-02-v001.png",
    "alt": "王光耀本人形象，呼應〈答應慢一點，讓承諾穩一點〉"
  },
  "batch12-01": {
    "src": "assets/article-batch12-01-v001.png",
    "alt": "王光耀本人形象，呼應〈可以享受獨處，也可以開口求助〉"
  },
  "batch12-02": {
    "src": "assets/article-batch12-02-v001.png",
    "alt": "王光耀本人形象，呼應〈生活的安定，也藏在平常的開銷裡〉"
  },
  "batch13-01": {
    "src": "assets/article-batch13-01-v001.png",
    "alt": "王光耀本人形象，呼應〈好的幽默，不必有人難堪〉"
  },
  "batch13-02": {
    "src": "assets/article-batch13-02-v001.png",
    "alt": "王光耀本人形象，呼應〈小小的善意，也值得一直做下去〉"
  },
  "batch14-01": {
    "src": "assets/article-batch14-01-v001.png",
    "alt": "王光耀本人形象，呼應〈別把別人的苦，說成他應得的〉"
  },
  "batch14-02": {
    "src": "assets/article-batch14-02-v001.png",
    "alt": "王光耀本人形象，呼應〈信仰不同，不必把彼此推遠〉"
  },
  "batch15-01": {
    "src": "assets/article-batch15-01-v001.png",
    "alt": "王光耀本人形象，呼應〈成果被看見，也別讓功勞看漏了人〉"
  },
  "batch15-02": {
    "src": "assets/article-batch15-02-v001.png",
    "alt": "王光耀本人形象，呼應〈轉傳之前，先替真實留一道關〉"
  },
  "batch16-01": {
    "src": "assets/article-batch16-01-v001.png",
    "alt": "王光耀本人形象，呼應〈認識一個人，別先替他的出身下結論〉"
  },
  "batch16-02": {
    "src": "assets/article-batch16-02-v001.png",
    "alt": "王光耀本人形象，呼應〈慈悲，也留給不會向你道謝的生命〉"
  },
  "batch17-01": {
    "src": "assets/article-batch17-01-v001.png",
    "alt": "王光耀本人形象，呼應〈喜歡一個人，也別替他改了標準〉"
  },
  "batch18-01": {
    "src": "assets/note-path-v001.png",
    "alt": "王光耀本人形象，呼應〈順利的時候，也替變化留個位置〉"
  },
  "batch19-01": {
    "src": "assets/article-batch19-01-v001.png",
    "alt": "王光耀本人形象，呼應〈別把神奇，當成值得信任的全部〉"
  },
  "batch20-01": {
    "src": "assets/note-window-v001.png",
    "alt": "王光耀本人形象，呼應〈事情談妥了，心也需要慢慢跟上〉"
  }
};
document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => {
  const draft = drafts[button.dataset.note];
  document.querySelector('#dialog-title').textContent = draft.title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren(...draft.paragraphs.map(text => { const p = document.createElement('p'); p.textContent = text; return p; }));
  const photo = articlePhotos[button.dataset.note];
  if (photo) {
    const figure = document.createElement('figure'), img = document.createElement('img');
    figure.className = 'article-photo';
    const photoBase = photo.src.replace(/\.png$/, '');
    img.src = `${photoBase}-w1536.webp`;
    img.srcset = [480, 800, 1536].map(width => `${photoBase}-w${width}.webp ${width}w`).join(', ');
    img.sizes = '(max-width: 700px) calc(100vw - 88px), 720px';
    img.decoding = 'async'; img.alt = photo.alt;
    img.width = 1536; img.height = 1024;
    figure.append(img); content.prepend(figure);
  }
  if (draft.tags) { const p = document.createElement('p'); p.className = 'small-note'; p.textContent = draft.tags; content.append(p); }
  if (draft.revision) { const p = document.createElement('p'); p.className = 'small-note'; p.textContent = draft.revision; content.append(p); }
  if (draft.sourceNote) { const p = document.createElement('p'); p.className = 'small-note'; p.textContent = draft.sourceNote; content.append(p); }
  for (const source of draft.sources || []) {
    const p = document.createElement('p'), link = document.createElement('a');
    link.href = source.url; link.textContent = source.label + ' ↗';
    link.target = '_blank'; link.rel = 'noopener noreferrer';
    p.append(link); content.append(p);
  }
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
let remaining = 60, ticker = null, targetTime = 0;
const timer = document.querySelector('#timer'), start = document.querySelector('#start-timer'), circle = document.querySelector('#breathing-circle'), message = document.querySelector('#practice-message');
function stop() { clearInterval(ticker); ticker = null; circle.classList.remove('running'); }
function update() {
  remaining = Math.max(0, Math.ceil((targetTime - Date.now()) / 1000)); timer.textContent = remaining;
  if (!remaining) { stop(); start.textContent = '再留一分鐘'; message.textContent = '謝謝你停下來。帶著清明，做一件眼前能做的小事。'; }
}
start.addEventListener('click', () => {
  if (ticker) { update(); stop(); start.textContent = '繼續靜心'; message.textContent = '已暫停，照自己的步調就好。'; return; }
  if (!remaining) remaining = 60;
  targetTime = Date.now() + remaining * 1000; start.textContent = '暫停練習'; circle.classList.add('running'); message.textContent = '感受自然的呼吸，不需要刻意控制。'; ticker = setInterval(update, 200); update();
});
document.querySelector('#reset-timer').addEventListener('click', () => { stop(); remaining = 60; timer.textContent = '60'; start.textContent = '開始一分鐘'; message.textContent = '不必追趕，先回到當下。'; });
