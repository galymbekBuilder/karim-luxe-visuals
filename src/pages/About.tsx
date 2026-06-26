import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AtelierStats from '@/components/AtelierStats';
import hero1 from '@/assets/hero-1.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero6 from '@/assets/hero-6.jpg';

const timeline = [
  { year: '1952', title: 'A small atelier in Florence', text: 'Karim Rossi opens a one-room tailoring studio on Via dei Servi.' },
  { year: '1978', title: 'The first camel coat', text: 'A silhouette that becomes the house signature for decades.' },
  { year: '1996', title: 'Paris, Rue Saint-Honoré', text: 'A second atelier, a second city. The house becomes European.' },
  { year: '2018', title: 'The slow turn', text: 'We end seasonal restocks. Every piece is a limited series.' },
  { year: '2025', title: 'A new chapter', text: 'A reissue of the archive, made for a new generation.' },
];

const values = [
  { title: 'Slow', text: 'Two collections a year. No restocks. Pieces designed to last decades, not seasons.' },
  { title: 'Honest', text: 'Every label tells you where the piece was made, by whom, and from what.' },
  { title: 'Quiet', text: 'No logos on the outside. The recognition is in the cut, the cloth, the hand.' },
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
              The House — Est. 1952
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9]">
              A quiet<br />European house.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:pt-32">
            <p className="text-base text-muted-foreground leading-relaxed">
              Three generations. Seven ateliers. One belief: that clothing
              should outlive the season in which it was made.
            </p>
          </div>
        </div>
      </header>

      {/* Editorial image + text */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={hero1} alt="Karim atelier" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-6">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              The hand, before the machine.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every coat passes through the hands of at least four artisans —
              a cutter, a tailor, a finisher, and a presser. We measure work
              in hours, not units.
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              — Atelier Firenze, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16">
            — Three principles
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

      {/* Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              — Heritage
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight sticky top-32">
              Seventy years,<br />in chapters.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-16">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-4 gap-6 border-t border-border pt-8">
                <p className="col-span-1 text-2xl font-light">{t.year}</p>
                <div className="col-span-3 space-y-3">
                  <h4 className="text-2xl font-light">{t.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative h-[90vh] overflow-hidden">
        <img src={hero6} alt="Karim AW25" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/60 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-warm-white">
            <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80">A note from the atelier</p>
            <p className="text-2xl md:text-4xl font-light leading-snug">
              "We are not in the business of fashion. We are in the business
              of making a coat your daughter will still want to wear."
            </p>
            <p className="mt-6 text-sm tracking-[0.25em] uppercase opacity-80">
              — Sofia Rossi, Creative Director
            </p>
          </div>
        </div>
      </section>

      <AtelierStats />

      {/* Ateliers grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-6xl font-light mb-16">Our ateliers.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {[
              ['Firenze', 'Tailoring · 1952'],
              ['Milano', 'Outerwear · 1968'],
              ['Paris', 'Trench & rainwear · 1996'],
              ['Como', 'Silk & prints · 2003'],
              ['Napoli', 'Soft jackets · 2009'],
              ['Biella', 'Wool sourcing · 2014'],
            ].map(([city, role], i) => (
              <div
                key={city}
                className={`border-t border-foreground/30 pt-6 ${i % 2 === 1 ? 'md:translate-y-12' : ''}`}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-3xl md:text-4xl font-light mb-2">{city}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
