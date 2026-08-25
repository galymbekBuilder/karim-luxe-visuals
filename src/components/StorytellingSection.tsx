import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sceneWide from '@/assets/works/riviera-01.jpg';
import sceneTall from '@/assets/works/butler-01.jpg';

gsap.registerPlugin(ScrollTrigger);

const StorytellingSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.story-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((el) => {
        gsap.fromTo(
          el,
          { y: -40 },
          {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Row 1 — wide photo + narrow text */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end mb-40">
          <div className="col-span-12 lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={sceneWide}
                alt="Кадр летней кампании Riviera"
                className="parallax-img w-full h-[120%] object-cover absolute inset-0"
              />
            </div>
            <p className="story-reveal mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Процесс 01 — Промпт и сцена
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 space-y-6 story-reveal">
            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              Не картинка, а сцена бренда.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Упаковка всегда живёт в контексте: поле для гольфа, первый снег,
              терраса над морем. Сначала собираю сцену, свет и палитру, и только
              потом ставлю в неё продукт — так кадр не выглядит коллажем.
            </p>
          </div>
        </div>

        {/* Row 2 — narrow text + wide photo (shifted) */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-3 lg:pt-32 space-y-6 story-reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Процесс 02 — Контроль деталей
            </p>
            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              Руки, текст, пропорции.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Слабые места генерации известны заранее. Пальцы, надписи на
              упаковке, стекло и отражения — это то, что проверяю до того, как
              показать кадр. Финальная подчистка в Photoshop.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={sceneTall}
                alt="Кадр подарочной линейки с дворецким"
                className="parallax-img w-full h-[120%] object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
