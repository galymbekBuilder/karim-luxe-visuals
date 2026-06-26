import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero4 from '@/assets/hero-4.jpg';
import hero6 from '@/assets/hero-6.jpg';

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
                src={hero4}
                alt="Autumn in Paris"
                className="parallax-img w-full h-[120%] object-cover absolute inset-0"
              />
            </div>
            <p className="story-reveal mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Chapter 01 — Le Marais, Paris · October
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 space-y-6 story-reveal">
            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              A coat that remembers the rain.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Each piece carries the patina of the cities it was made for —
              the soft grey of a Parisian morning, the gold of a Tuscan
              afternoon. We design for a life that is lived outside.
            </p>
          </div>
        </div>

        {/* Row 2 — narrow text + wide photo (shifted) */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-3 lg:pt-32 space-y-6 story-reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Chapter 02 — Brera, Milano · Dawn
            </p>
            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              The icon, in baby camel hair.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Forty hours of hand-tailoring. One horn button. A silhouette
              that has not aged in seventy years — and will not.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={hero6}
                alt="Camel coat in Milan"
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
