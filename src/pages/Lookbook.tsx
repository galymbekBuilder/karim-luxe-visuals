import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HorizontalGallery from '@/components/HorizontalGallery';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';
import hero7 from '@/assets/hero-7.jpg';
import hero8 from '@/assets/hero-8.jpg';

type LookEntry = {
  src: string;
  title: string;
  location: string;
  span: string;
  aspect: string;
};

const looks: LookEntry[] = [
  { src: hero1, title: 'Look 01 — La Piazza', location: 'Firenze', span: 'col-span-12 md:col-span-7', aspect: 'aspect-[4/5]' },
  { src: hero4, title: 'Look 02 — Les Tuileries', location: 'Paris', span: 'col-span-12 md:col-span-4 md:col-start-9 md:translate-y-32', aspect: 'aspect-[3/4]' },
  { src: hero2, title: 'Look 03 — Rooftops', location: 'Roma', span: 'col-span-12 md:col-span-5', aspect: 'aspect-[3/4]' },
  { src: hero7, title: 'Look 04 — La Galleria', location: 'Milano', span: 'col-span-12 md:col-span-6 md:col-start-7', aspect: 'aspect-[4/5]' },
  { src: hero3, title: 'Look 05 — Soho Morning', location: 'New York', span: 'col-span-12 md:col-span-8', aspect: 'aspect-[16/10]' },
  { src: hero6, title: 'Look 06 — Montmartre', location: 'Paris', span: 'col-span-12 md:col-span-4 md:col-start-9 md:-translate-y-16', aspect: 'aspect-[3/4]' },
  { src: hero8, title: 'Look 07 — Navigli', location: 'Milano', span: 'col-span-12 md:col-span-7 md:col-start-3', aspect: 'aspect-[4/5]' },
  { src: hero5, title: 'Look 08 — San Lorenzo', location: 'Firenze', span: 'col-span-12 md:col-span-4 md:translate-y-16', aspect: 'aspect-[3/4]' },
];

const Lookbook = () => {
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <header className="pt-40 pb-24 container mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Lookbook — Autumn / Winter 25
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] max-w-5xl">
          Eight cities,<br />one wardrobe.
        </h1>
        <p className="mt-10 max-w-md text-base text-muted-foreground leading-relaxed">
          Shot on 35mm by Léa Ferrante across Europe between March and June.
          A diary of the season in the streets we love.
        </p>
      </header>

      {/* Asymmetric editorial grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-20">
            {looks.map((l) => (
              <figure key={l.title} className={l.span}>
                <div className={`relative overflow-hidden bg-muted ${l.aspect}`}>
                  <img src={l.src} alt={l.title} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <p className="text-sm font-light">{l.title}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {l.location}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse horizontal gallery */}
      <HorizontalGallery />

      <Footer />
    </div>
  );
};

export default Lookbook;
