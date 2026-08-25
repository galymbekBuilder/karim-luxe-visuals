import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '@/assets/works/christmas-01.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="Кадр новогодней кампании"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-foreground/20" />
          </div>

          <div ref={contentRef} className="space-y-8">
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              Galymbek Amanzhan — AI Designer
            </p>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Промпт как инструмент дизайна
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Год веду соцсети гонконгского чайного бренда NOT ONLY TEA. Задача
                была одна — эстетика: чай должен выглядеть дорого, спокойно
                и узнаваемо в каждом кадре.
              </p>
              <p>
                Промпт для меня не лотерея, а способ попасть в референс с двух-трёх
                попыток: сначала сцена и палитра, потом продукт, потом подчистка
                деталей. Дальше — монтаж роликов и логотип в кадре.
              </p>
              <p>
                Веду проект целиком: от раскадровки серии до готовых файлов под
                каждый формат ленты.
              </p>
              <p>
                Отдельно занимаюсь ML: дообучил модель под фирменный стиль агентства
                и настроил автоотбор вариантов — поэтому нужный кадр выходит быстрее,
                чем перебором.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
