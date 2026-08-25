import golfPack1 from '@/assets/works/golf-pack-01.jpg';
import golfPack2 from '@/assets/works/golf-pack-02.jpg';
import golfPack3 from '@/assets/works/golf-pack-03.jpg';
import golfPack4 from '@/assets/works/golf-pack-04.jpg';
import butler1 from '@/assets/works/butler-01.jpg';
import butler2 from '@/assets/works/butler-02.jpg';
import winter1 from '@/assets/works/winter-01.jpg';
import winter2 from '@/assets/works/winter-02.jpg';
import winter3 from '@/assets/works/winter-03.jpg';
import christmas1 from '@/assets/works/christmas-01.jpg';
import christmas2 from '@/assets/works/christmas-02.jpg';
import christmas3 from '@/assets/works/christmas-03.jpg';
import clay1 from '@/assets/works/tennis-court-01.jpg';
import clay2 from '@/assets/works/tennis-court-02.jpg';
import clay3 from '@/assets/works/tennis-court-03.jpg';
import club1 from '@/assets/works/tennis-club-01.jpg';
import club2 from '@/assets/works/tennis-club-02.jpg';
import club3 from '@/assets/works/tennis-club-03.jpg';
import riviera1 from '@/assets/works/riviera-01.jpg';
import riviera2 from '@/assets/works/riviera-02.jpg';
import riviera3 from '@/assets/works/riviera-03.jpg';
import riviera4 from '@/assets/works/riviera-04.jpg';
import terrace1 from '@/assets/works/terrace-01.jpg';
import terrace2 from '@/assets/works/terrace-02.jpg';
import terrace3 from '@/assets/works/terrace-03.jpg';

import posterGolf from '@/assets/works/poster-golf.jpg';
import posterButler from '@/assets/works/poster-butler.jpg';
import posterWinter from '@/assets/works/poster-winter.jpg';
import posterTennis from '@/assets/works/poster-tennis.jpg';
import posterSea from '@/assets/works/poster-sea.jpg';
import posterWebdesign from '@/assets/works/poster-webdesign.jpg';

export type MediaItem =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster: string };

export type Work = {
  id: string;
  title: string;
  category: string;
  campaign: string;
  meta: string;
  orientation: 'portrait' | 'landscape';
  cover: string;
  media: MediaItem[];
  description: string;
  highlights: string[];
  tools: string;
  client: string;
  formats: string[];
  platforms: string[];
};

const img = (src: string): MediaItem => ({ type: 'image', src });
const vid = (src: string, poster: string): MediaItem => ({ type: 'video', src, poster });

const TEA = 'NOT ONLY TEA, Гонконг';

export const works: Work[] = [
  {
    id: 'aqua-fairy-green',
    title: 'Aqua Fairy on the Green',
    category: 'Carousel',
    campaign: 'Golf Club',
    meta: '4 кадра',
    orientation: 'portrait',
    cover: golfPack1,
    media: [img(golfPack1), img(golfPack2), img(golfPack3), img(golfPack4)],
    description:
      'Запуск улуна Aqua Fairy. Задача — показать упаковку в мире клиента бренда, а не на белом фоне студии. Поле для гольфа даёт нужную ассоциацию: неспешность, статус, свежесть утра.',
    highlights: [
      'Упаковка вписана в сцену по свету и теням — без ощущения коллажа',
      'Золотая линия русалки читается на каждом кадре карусели',
      'Мягкий боке-фон, чтобы текст на пачке оставался главным',
      'Логотип и кегль набраны заново поверх генерации',
    ],
    tools: 'Midjourney · Nano Banana · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5', '1:1'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'riviera-escape',
    title: 'Riviera Escape',
    category: 'Carousel',
    campaign: 'Riviera',
    meta: '4 кадра',
    orientation: 'portrait',
    cover: riviera1,
    media: [img(riviera1), img(riviera2), img(riviera3), img(riviera4)],
    description:
      'Летняя серия для соцсетей. Открывающий кадр — катер сверху на глубокой синей воде: он задаёт настроение всей карусели и хорошо тормозит скролл в ленте.',
    highlights: [
      'Единая цветовая температура по всем четырём кадрам',
      'Композиция по правилу третей, объект уходит из центра',
      'Проверка воды и следа от катера на артефакты генерации',
      'Апскейл до размера, пригодного под баннер',
    ],
    tools: 'Midjourney · Flux · Topaz · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5'],
    platforms: ['Instagram', 'TikTok'],
  },
  {
    id: 'nutcracker-table',
    title: 'Nutcracker Table',
    category: 'Carousel',
    campaign: 'Winter Drop',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: christmas1,
    media: [img(christmas1), img(christmas2), img(christmas3)],
    description:
      'Новогодняя серия под подарочный сезон. Щелкунчик держит коробку Pearl Elixir — приём, который делает статичную упаковку частью сцены и добавляет ей характер.',
    highlights: [
      'Тёплый боке новогодней ёлки против холодного оливкового пака',
      'Контроль пальцев и кисти — типовая слабая зона генерации',
      'Золотая ракушка на упаковке сохранена без размытия',
      'Глубина кадра рассчитана под вертикальные Stories',
    ],
    tools: 'Midjourney · Nano Banana · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5', '1:1'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'fairway-aerial',
    title: 'Fairway Aerial',
    category: 'Reels',
    campaign: 'Golf Club',
    meta: '0:28',
    orientation: 'portrait',
    cover: posterGolf,
    media: [vid('/media/reel-golf.mp4', posterGolf)],
    description:
      'Ключевой ролик кампании: облёт поля сверху и монограмма бренда поверх кадра. Съёмки не было — движение камеры, трава и бункеры сгенерированы, дальше монтаж и вывод логотипа.',
    highlights: [
      'Плавное движение камеры без рывков на склейках',
      'Монограмма бренда выведена поверх кадра и держится в центре',
      'Цветокоррекция зелени под фирменную палитру',
      'Тайминг и ритм собраны под ленту Reels',
    ],
    tools: 'Kling · Midjourney · Premiere · Photoshop',
    client: TEA,
    formats: ['9:16'],
    platforms: ['Reels', 'TikTok'],
  },
  {
    id: 'the-butler',
    title: 'The Butler',
    category: 'Carousel',
    campaign: 'Gifting',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: butler1,
    media: [img(butler1), img(butler2), vid('/media/reel-butler.mp4', posterButler)],
    description:
      'Подарочная линейка. Дворецкий в зелёном бархате несёт стопку коробок — сцена продаёт не чай, а сервис и уровень бренда. В карусель встроен короткий видеокадр.',
    highlights: [
      'Стопка коробок выстроена по перспективе, без плавающих граней',
      'Белые перчатки — отдельная проверка на пальцы и складки',
      'Интерьер держит цвет упаковки, а не спорит с ним',
      'Логотип на верхней коробке набран заново поверх генерации',
    ],
    tools: 'Midjourney · Nano Banana · Kling · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'pearl-in-snow',
    title: 'Pearl in the Snow',
    category: 'Carousel',
    campaign: 'Winter Drop',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: winter1,
    media: [img(winter1), img(winter2), img(winter3)],
    description:
      'Зимний дроп белого чая Pearl Elixir. Снег, мох и карамельные трости дают контраст красного и оливкового — пачка читается в ленте с первого взгляда.',
    highlights: [
      'Матовая фактура саше сохранена, без пластикового блика',
      'Снег проработан крупой, а не однородным белым пятном',
      'Тиснение и год «2014» на упаковке остаются разборчивыми',
      'Холодный верх кадра — запас под интерфейс Stories',
    ],
    tools: 'Midjourney · Stable Diffusion (LoRA) · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'first-snow',
    title: 'First Snow',
    category: 'Reels',
    campaign: 'Winter Drop',
    meta: '0:06',
    orientation: 'portrait',
    cover: posterWinter,
    media: [vid('/media/reel-winter.mp4', posterWinter)],
    description:
      'Короткая вертикальная перебивка для зимней серии. Задача — один читаемый акцент за шесть секунд, чтобы ролик работал и без звука.',
    highlights: [
      'Один смысловой акцент на весь хронометраж',
      'Читается без звука — расчёт на беззвучный просмотр',
      'Зацикливается без видимого стыка',
    ],
    tools: 'Kling · Midjourney · CapCut',
    client: TEA,
    formats: ['9:16'],
    platforms: ['Reels', 'Stories'],
  },
  {
    id: 'clay-court',
    title: 'Clay Court',
    category: 'Carousel',
    campaign: 'Clay Season',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: clay1,
    media: [img(clay1), img(clay2), img(clay3)],
    description:
      'Серия к теннисному сезону. Верхний ракурс на грунт: терракота против белой разметки — готовый фирменный кадр, который держит ленту как единое полотно.',
    highlights: [
      'Разметка корта ровная, без волн и разрывов линий',
      'Фигуры в движении: проверка рук, ракеток и теней',
      'Терракотовый фон оставляет место под текст поста',
      'Кадр работает и как обложка, и как фон под баннер',
    ],
    tools: 'Midjourney · Higgsfield · Topaz',
    client: TEA,
    formats: ['9:16', '4:5'],
    platforms: ['Instagram', 'TikTok'],
  },
  {
    id: 'match-point',
    title: 'Match Point',
    category: 'Carousel',
    campaign: 'Clay Season',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: club1,
    media: [img(club1), img(club2), img(club3)],
    description:
      'Вторая часть теннисной серии — крупные планы клубной эстетики: деревянная ракетка, бокалы, корт. Кадры на уровне земли дают ощущение присутствия.',
    highlights: [
      'Струны ракетки прорисованы сеткой, без каши в текстуре',
      'Кисть руки и пальцы отдельно проверены и подчищены',
      'Стекло и жидкость в бокалах с корректными бликами',
      'Тёплый свет как связка с летней серией Riviera',
    ],
    tools: 'Midjourney · Nano Banana · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'baseline',
    title: 'Baseline',
    category: 'Reels',
    campaign: 'Clay Season',
    meta: '0:14',
    orientation: 'portrait',
    cover: posterTennis,
    media: [vid('/media/reel-tennis.mp4', posterTennis)],
    description:
      'Видео для теннисной серии. Движение на грунте — самый сложный сюжет по артефактам, поэтому кадры отбирались по чистоте рук и ракетки, а стыки правились на монтаже.',
    highlights: [
      'Отбор дублей по чистоте рук и корпуса в движении',
      'Стабильная разметка корта от кадра к кадру',
      'Монтаж под 14 секунд без провисаний',
      'Логотип бренда на финальном кадре',
    ],
    tools: 'Kling · Runway · Premiere · Photoshop',
    client: TEA,
    formats: ['9:16'],
    platforms: ['Reels', 'TikTok'],
  },
  {
    id: 'open-water',
    title: 'Open Water',
    category: 'Reels',
    campaign: 'Riviera',
    meta: '0:14',
    orientation: 'portrait',
    cover: posterSea,
    media: [vid('/media/reel-sea.mp4', posterSea)],
    description:
      'Флагманский ролик летней кампании. Открытая вода сверху: масштаб, движение и глубокий синий, который отлично работает как full-screen баннер.',
    highlights: [
      'Вода и пена без повторяющегося паттерна',
      'Равномерное движение камеры на всей длине',
      'Синий выведен под фирменную палитру',
      'Первая секунда сразу даёт полный кадр',
    ],
    tools: 'Kling · Higgsfield · Runway · CapCut',
    client: TEA,
    formats: ['9:16', '16:9'],
    platforms: ['Reels', 'TikTok'],
  },
  {
    id: 'table-by-the-sea',
    title: 'Table by the Sea',
    category: 'Carousel',
    campaign: 'Riviera',
    meta: '3 кадра',
    orientation: 'portrait',
    cover: terrace1,
    media: [img(terrace1), img(terrace2), img(terrace3)],
    description:
      'Финал летней серии — сервировка на террасе над морем. Минимум объектов, много воздуха: кадр под цитату или оффер в посте.',
    highlights: [
      'Композиция с запасом воздуха под текст и логотип',
      'Инжир, лайм и лимоны как акцент в холодной гамме',
      'Ткань скатерти без искажения сетки и складок',
      'Линия горизонта строго по уровню',
    ],
    tools: 'Midjourney · Flux · Photoshop',
    client: TEA,
    formats: ['9:16', '4:5', '1:1'],
    platforms: ['Instagram', 'Stories'],
  },
  {
    id: 'redesign-promo',
    title: 'Redesign Promo',
    category: 'Motion',
    campaign: 'Web Promo',
    meta: '0:22',
    orientation: 'landscape',
    cover: posterWebdesign,
    media: [vid('/media/reel-webdesign.mp4', posterWebdesign)],
    description:
      'Промо-ролик о редизайне сайта: «до» — типовая серая вёрстка, «после» — чистая типографика и сетка. Горизонтальный формат под YouTube и рекламные плейсменты.',
    highlights: [
      'Сценарий по схеме «проблема — сдвиг — результат»',
      'Крупная типографика, читаемая на телефоне',
      'Склейки в ритм, ключевой посыл в первые три секунды',
      'Отдельная сборка под 16:9',
    ],
    tools: 'After Effects · Premiere · Figma · Photoshop',
    client: 'Nerd',
    formats: ['16:9'],
    platforms: ['YouTube', 'Реклама'],
  },
];

export const categories = ['All', 'Carousel', 'Reels', 'Motion'];
