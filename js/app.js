/* Мой Город — PWA */

const CITIES = [
  { id: 'moscow', name: 'Москва', img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=200&q=80' },
  { id: 'spb', name: 'Санкт-Петербург', img: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=200&q=80' },
  { id: 'kazan', name: 'Казань', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=200&q=80' },
  { id: 'ekb', name: 'Екатеринбург', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=80' },
];

const PLACES = {
  moscow: [
    { title: 'Красная площадь', img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80', meta: 'Центр' },
    { title: 'ВДНХ', img: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&q=80', meta: 'Останкинский' },
    { title: 'Парк Зарядье', img: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&q=80', meta: 'Китай-город' },
    { title: 'Третьяковка', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80', meta: 'Якиманка' },
  ],
  spb: [
    { title: 'Эрмитаж', img: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=400&q=80', meta: 'Дворцовая' },
    { title: 'Исаакиевский собор', img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80', meta: 'Адмиралтейский' },
    { title: 'Петергоф', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80', meta: 'Петергоф' },
  ],
  kazan: [
    { title: 'Казанский кремль', img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&q=80', meta: 'Кремль' },
    { title: 'Улица Баумана', img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80', meta: 'Центр' },
  ],
  ekb: [
    { title: 'Плотинка', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80', meta: 'Центр' },
    { title: 'Храм-на-Крови', img: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=400&q=80', meta: 'Центр' },
  ],
};

const EVENTS = [
  { title: 'Фестиваль огней', img: 'https://images.unsplash.com/photo-1533174072416-d5c3c1f3c3e0?w=400&q=80', meta: '15–17 ноя · бесплатно' },
  { title: 'Концерт в парке', img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dfb24b4?w=400&q=80', meta: '20 ноя · от 1500 ₽' },
  { title: 'Выставка современного искусства', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80', meta: 'до 30 ноя · 500 ₽' },
];

const NEWS = [
  { title: 'В городе открыли новый парк с детскими площадками и зонами отдыха', img: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=600&q=80', date: 'Сегодня', source: 'Городские новости' },
  { title: 'Изменения в расписании общественного транспорта с 10 ноября', img: 'https://images.unsplash.com/photo-1544620341-9c5e4b3c1e0f?w=600&q=80', date: 'Вчера', source: 'Транспорт' },
  { title: 'Плановые отключения горячей воды в нескольких районах', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', date: '2 дня назад', source: 'ЖКХ' },
  { title: 'Бесплатные экскурсии по историческому центру в выходные', img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80', date: '3 дня назад', source: 'Культура' },
];

const STATS = {
  moscow: [{ value: '13.1 млн', label: 'Население' }, { value: '2511 км²', label: 'Площадь' }, { value: '16°C', label: 'Сейчас' }],
  spb: [{ value: '5.6 млн', label: 'Население' }, { value: '1439 км²', label: 'Площадь' }, { value: '12°C', label: 'Сейчас' }],
  kazan: [{ value: '1.3 млн', label: 'Население' }, { value: '425 км²', label: 'Площадь' }, { value: '14°C', label: 'Сейчас' }],
  ekb: [{ value: '1.5 млн', label: 'Население' }, { value: '468 км²', label: 'Площадь' }, { value: '8°C', label: 'Сейчас' }],
};

const SERVICES = {
  transport: { title: 'Транспорт', items: [{ name: 'Метро', desc: 'Схема и расписание' }, { name: 'Автобусы', desc: 'Маршруты и остановки' }, { name: 'Такси', desc: 'Вызов рядом' }, { name: 'Парковки', desc: 'Свободные места' }] },
  housing: { title: 'ЖКХ', items: [{ name: 'Оплата ЖКУ', desc: 'Текущие начисления' }, { name: 'Заявки в УК', desc: 'Подать обращение' }, { name: 'Отключения', desc: 'График работ' }, { name: 'Показания счётчиков', desc: 'Передать данные' }] },
  clinics: { title: 'Клиники', items: [{ name: 'Запись к врачу', desc: 'Онлайн-запись' }, { name: 'Поликлиники рядом', desc: 'Карта и адреса' }, { name: 'Анализы', desc: 'Результаты' }, { name: 'Скорая помощь', desc: '103' }] },
  education: { title: 'Образование', items: [{ name: 'Школы', desc: 'Рейтинг и запись' }, { name: 'Детские сады', desc: 'Очередь' }, { name: 'Кружки', desc: 'Секции для детей' }, { name: 'Вузы', desc: 'Приёмная кампания' }] },
  jobs: { title: 'Работа', items: [{ name: 'Вакансии', desc: 'Актуальные предложения' }, { name: 'Резюме', desc: 'Создать / обновить' }, { name: 'Центры занятости', desc: 'Адреса' }] },
  payments: { title: 'Платежи', items: [{ name: 'ЖКХ', desc: 'Оплата коммунальных' }, { name: 'Штрафы', desc: 'ГИБДД и парковки' }, { name: 'Налоги', desc: 'Проверка задолженности' }] },
  events: { title: 'Мероприятия', items: [{ name: 'Концерты', desc: 'Афиша' }, { name: 'Выставки', desc: 'Музеи и галереи' }, { name: 'Спорт', desc: 'Матчи и турниры' }, { name: 'Для детей', desc: 'Семейные события' }] },
  other: { title: 'Прочее', items: [{ name: 'Справочник', desc: 'Телефоны служб' }, { name: 'Обратная связь', desc: 'Сообщить о проблеме' }, { name: 'О приложении', desc: 'Версия и лицензии' }] },
};

let currentCity = localStorage.getItem('mycity_city') || 'moscow';
let currentTheme = localStorage.getItem('mycity_theme') || 'system';
let currentScreen = 'home';

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  setCity(currentCity, false);
  renderPlaces();
  renderEvents();
  renderNews();
  renderStats();
  renderCityList();
  registerSW();
  maybeShowInstallBanner();
});

function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${screen}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.screen === screen);
  });
  currentScreen = screen;
  document.getElementById(`screen-${screen}`).scrollTop = 0;
}

function setCity(id, close = true) {
  currentCity = id;
  localStorage.setItem('mycity_city', id);
  const city = CITIES.find(c => c.id === id);
  document.getElementById('current-city-name').textContent = city.name;
  document.getElementById('city-hero-title').textContent = city.name;
  document.getElementById('profile-city').textContent = city.name;
  const hero = document.getElementById('city-hero-bg');
  hero.style.backgroundImage = `url(${city.img}&w=800)`;
  renderPlaces();
  renderStats();
  renderCityList();
  if (close) hideCityPicker();
}

function showCityPicker() { document.getElementById('city-picker').classList.remove('hidden'); }
function hideCityPicker() { document.getElementById('city-picker').classList.add('hidden'); }

function renderCityList() {
  const list = document.getElementById('city-list');
  list.innerHTML = CITIES.map(c => `
    <button class="city-option ${c.id === currentCity ? 'active' : ''}" onclick="setCity('${c.id}')">
      <img class="city-img" src="${c.img}" alt="${c.name}" loading="lazy" />
      <span>${c.name}</span>
      <span class="check">✓</span>
    </button>
  `).join('');
}

function renderPlaces() {
  const places = PLACES[currentCity] || PLACES.moscow;
  const html = places.map(p => `
    <div class="place-card" onclick="showToast('${p.title}')">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="info"><strong>${p.title}</strong><span>${p.meta}</span></div>
    </div>
  `).join('');
  document.getElementById('places-scroll').innerHTML = html;
  const popular = document.getElementById('popular-scroll');
  if (popular) popular.innerHTML = html;
}

function renderEvents() {
  document.getElementById('events-scroll').innerHTML = EVENTS.map(e => `
    <div class="event-card" onclick="showToast('${e.title}')">
      <img src="${e.img}" alt="${e.title}" loading="lazy" />
      <div class="info"><strong>${e.title}</strong><span>${e.meta}</span></div>
    </div>
  `).join('');
}

function renderNews() {
  document.getElementById('news-list').innerHTML = NEWS.map(n => `
    <article class="news-card" onclick="showToast('${n.title.slice(0, 40)}…')">
      <img src="${n.img}" alt="" loading="lazy" />
      <div class="body"><strong>${n.title}</strong><div class="meta">${n.date} · ${n.source}</div></div>
    </article>
  `).join('');
}

function renderStats() {
  const stats = STATS[currentCity] || STATS.moscow;
  document.getElementById('stats-scroll').innerHTML = stats.map(s => `
    <div class="stat-card"><div class="value">${s.value}</div><div class="label">${s.label}</div></div>
  `).join('');
}

function openService(key) {
  const svc = SERVICES[key];
  if (!svc) return;
  document.getElementById('detail-content').innerHTML = `
    <h2>${svc.title}</h2><p>Выберите нужный раздел</p>
    <div class="service-list">${svc.items.map(i => `
      <div class="service-row" onclick="showToast('${i.name}')"><div><strong>${i.name}</strong><span>${i.desc}</span></div></div>
    `).join('')}</div>`;
  document.getElementById('detail-modal').classList.remove('hidden');
}

function openPlace(id) {
  const titles = {
    izmaylovo: { title: 'Усадьба Измайлово', desc: 'Исторический архитектурный ансамбль XVII века и большой парк для прогулок.' },
    gorky: { title: 'Парк Горького', desc: 'Главный парк Москвы с набережной, музеями и культурной программой.' },
  };
  const p = titles[id] || { title: 'Место', desc: 'Описание скоро появится.' };
  document.getElementById('detail-content').innerHTML = `
    <h2>${p.title}</h2><p>${p.desc}</p>
    <button class="btn-secondary full" onclick="showToast('Маршрут построен'); hideDetail()">Построить маршрут</button>`;
  document.getElementById('detail-modal').classList.remove('hidden');
}

function hideDetail() { document.getElementById('detail-modal').classList.add('hidden'); }

function applyTheme() {
  const root = document.documentElement;
  if (currentTheme === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', currentTheme);
  const labels = { system: 'Системная', light: 'Светлая', dark: 'Тёмная' };
  const el = document.getElementById('theme-label');
  if (el) el.textContent = labels[currentTheme] || 'Системная';
}

function toggleTheme() {
  const order = ['system', 'light', 'dark'];
  currentTheme = order[(order.indexOf(currentTheme) + 1) % order.length];
  localStorage.setItem('mycity_theme', currentTheme);
  applyTheme();
  showToast(`Тема: ${document.getElementById('theme-label').textContent}`);
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 2200);
}

function maybeShowInstallBanner() {
  const dismissed = localStorage.getItem('mycity_install_dismissed');
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (!dismissed && !isStandalone && isIOS()) {
    setTimeout(() => document.getElementById('install-banner').classList.remove('hidden'), 2500);
  }
}

function dismissInstall() {
  localStorage.setItem('mycity_install_dismissed', '1');
  document.getElementById('install-banner').classList.add('hidden');
}

function showInstallHint() {
  if (isIOS()) showToast('Нажмите «Поделиться» → «На экран «Домой»»');
  else showToast('Добавьте сайт на главный экран через меню браузера');
  document.getElementById('install-banner').classList.remove('hidden');
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}
