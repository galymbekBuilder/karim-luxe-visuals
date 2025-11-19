import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero1 from '@/assets/hero-1.jpg';

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
                src={hero1}
                alt="About Karim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-foreground/20" />
          </div>

          <div ref={contentRef} className="space-y-8">
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              Est. 2025
            </p>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Defining Modern Luxury
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                KARIM represents a new generation of European luxury fashion, where traditional
                craftsmanship meets contemporary design sensibility.
              </p>
              <p>
                Each piece is carefully selected from independent ateliers across Europe,
                ensuring uncompromising quality and unique character. We believe in slow
                fashion—timeless designs that transcend fleeting trends.
              </p>
              <p>
                Our philosophy is simple: invest in pieces that tell your story, that age
                beautifully, and that bring joy for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
