import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import portraitImage from '@/assets/works/butler-01.jpg';
import wideImage from '@/assets/works/riviera-01.jpg';

const values = [
  {
    title: 'Быстро',
    text: 'Серия из трёх-четырёх кадров — за день. Дедлайн для меня часть задачи, а не пожелание.',
  },
  {
    title: 'Точно',
    text: 'Промпт собираю под референс: нужный кадр выходит за две-три генерации, а не за тридцать.',
  },
  {
    title: 'Чисто',
    text: 'Руки, текст, пропорции и артефакты проверяю до сдачи — а не после правок от клиента.',
  },
];

const engineering = [
  {
    title: 'Своя модель под стиль',
    text: 'Дообучил LoRA поверх Stable Diffusion на портфолио агентства. Генерация сразу выходит в фирменной палитре и подаче — стиль не приходится вытягивать промптом.',
  },
  {
    title: 'Отбор без ручного перебора',
    text: 'Отдельная модель-судья оценивает варианты по цвету, композиции и симметрии и отсеивает слабые до того, как я их увижу. Остаётся выбрать лучший из нескольких, а не листать сотню.',
  },
  {
    title: 'Референсы по стилю',
    text: 'Классификатор на CLIP раскладывает базу референсов по категориям — минимализм, luxury, playful, corporate. Сортировка под проект вместо трёх часов занимает около пятидесяти минут.',
  },
];

const tools = [
  ['Midjourney', 'Ключевые кадры и сцены'],
  ['Stable Diffusion', 'Своя LoRA под фирменный стиль'],
  ['Nano Banana', 'Правки и замена объектов'],
  ['Flux', 'Мелкая пластика и детали'],
  ['Kling', 'Оживление кадров в видео'],
  ['Higgsfield', 'Движение камеры и эффекты'],
  ['Runway', 'Доработка и расширение кадра'],
  ['Topaz', 'Апскейл под печать и баннеры'],
  ['Photoshop', 'Ретушь, логотип, типографика'],
  ['CapCut · Premiere', 'Монтаж и цвет'],
  ['Figma', 'Раскладка под форматы'],
  ['Claude', 'Сценарии и разбор промптов'],
];

const About = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <header className="pt-40 pb-24">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Galymbek Amanzhan — AI Designer
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9]">
              From prompt<br />to campaign.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:pt-32">
            <p className="text-base text-muted-foreground leading-relaxed">
              Собираю визуал там, где съёмка была бы слишком долгой или дорогой:
              нейросети дают сцену, я довожу её до состояния, в котором кадр
              не стыдно поставить в ленту бренда.
            </p>
          </div>
        </div>
      </header>

      {/* Editorial image + text */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={portraitImage}
                alt="Кадр подарочной линейки NOT ONLY TEA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              По ТЗ и внутри брендбука.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Нейросеть охотно выдаёт красивую картинку «вообще» — и почти никогда
              нужную. Поэтому начинаю с палитры, шрифта и правил бренда, а дальше
              подгоняю сцену, свет и ракурс под них.
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              — Астана, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16">
            — Три принципа
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {values.map((v, i) => (
              <div key={v.title} className={`space-y-6 ${i === 1 ? 'md:translate-y-16' : ''}`}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  0{i + 1}
                </p>
                <h3 className="text-5xl md:text-6xl font-light">{v.title}.</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              — Опыт
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight sticky top-32">
              Где и над<br />чем работаю.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-10">
            <div className="border-t border-border pt-8 space-y-4">
              <h4 className="text-2xl font-light">Дизайн-агентство Nerd</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Отвечаю за генеративный визуал в брендинг-проектах агентства.
                Начинал с подбора и оценки референсов, дальше собрал под задачи
                агентства свою связку инструментов: дообученную модель под
                фирменные стили, отбор удачных вариантов и финальную доводку
                кадров руками.
              </p>
            </div>
            <div className="border-t border-border pt-8 space-y-4">
              <h4 className="text-2xl font-light">NOT ONLY TEA, Гонконг</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Контент для социальных сетей гонконгского чайного бренда.
                Задача звучала просто — эстетика: чай должен выглядеть дорого
                и спокойно. Собрал четыре сезонные серии — гольф-клуб, зима,
                теннисный сезон и Ривьера. Кроме генерации делал монтаж
                вертикальных роликов и вставлял логотип бренда в кадр.
              </p>
            </div>
            <div className="border-t border-border pt-8 space-y-4">
              <h4 className="text-2xl font-light">Промо и веб</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Горизонтальные ролики под рекламные плейсменты и YouTube:
                сценарий, раскадровка, монтаж и типографика в кадре.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative h-[90vh] overflow-hidden">
        <img
          src={wideImage}
          alt="Кадр летней кампании Riviera"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/60 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-warm-white">
            <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80">О подходе</p>
            <p className="text-2xl md:text-4xl font-light leading-snug">
              «Промпт — это не заклинание, а техническое задание. Чем точнее
              задание, тем меньше генераций до нужного кадра.»
            </p>
            <p className="mt-6 text-sm tracking-[0.25em] uppercase opacity-80">
              — Galymbek Amanzhan
            </p>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-6xl font-light mb-16">Инструменты.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {tools.map(([tool, role], i) => (
              <div
                key={tool}
                className={`border-t border-foreground/30 pt-6 ${i % 2 === 1 ? 'md:translate-y-12' : ''}`}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-3xl md:text-4xl font-light mb-2">{tool}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-20">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                — Под капотом
              </p>
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Почему выходит<br />за две-три генерации.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-24">
              <p className="text-base text-muted-foreground leading-relaxed">
                Кроме дизайна занимаюсь ML: собрал под задачи агентства
                инструменты, которые сокращают перебор вариантов.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {engineering.map((e, i) => (
              <div
                key={e.title}
                className={`border-t border-foreground/30 pt-6 space-y-4 ${
                  i % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl md:text-3xl font-light leading-tight">{e.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-24 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Помимо этого пишу код — веб и мобильные приложения. Для дизайна это
            значит, что нужный инструмент под задачу я могу собрать сам, а не ждать,
            пока он появится.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
