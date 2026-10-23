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
document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => {
  const draft = drafts[button.dataset.note];
  document.querySelector('#dialog-title').textContent = draft.title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren(...draft.paragraphs.map(text => { const p = document.createElement('p'); p.textContent = text; return p; }));
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
