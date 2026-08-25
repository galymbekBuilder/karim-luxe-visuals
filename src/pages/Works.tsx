import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { works, categories } from '@/data/works';

const Works = () => {
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const filtered =
    filter === 'All' ? works : works.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <header className="pt-40 pb-16 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Портфолио — AI-генерации
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9]">
              Selected<br />works.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Карусели, вертикальные ролики и промо для брендов. У каждой работы
              указаны формат, платформа и инструменты, которыми она сделана.
            </p>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="border-y border-border bg-cream/50 sticky top-0 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs tracking-[0.25em] uppercase transition-colors ${
                  filter === c
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {filtered.length} работ
          </p>
        </div>
      </div>

      {/* Asymmetric work grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-24">
            {filtered.map((w, i) => {
              // Asymmetric layout pattern
              const pattern = i % 6;
              const layout =
                pattern === 0
                  ? 'col-span-12 md:col-span-7'
                  : pattern === 1
                  ? 'col-span-12 md:col-span-4 md:col-start-9 md:translate-y-24'
                  : pattern === 2
                  ? 'col-span-12 md:col-span-5'
                  : pattern === 3
                  ? 'col-span-12 md:col-span-6 md:col-start-7'
                  : pattern === 4
                  ? 'col-span-12 md:col-span-8 md:translate-y-12'
                  : 'col-span-12 md:col-span-4 md:col-start-9';

              const aspect =
                w.orientation === 'landscape'
                  ? 'aspect-[4/3]'
                  : pattern % 2 === 0
                  ? 'aspect-[3/4]'
                  : 'aspect-[4/5]';

              return (
                <Link to={`/work/${w.id}`} key={w.id} className={`group ${layout}`}>
                  <div className={`relative overflow-hidden ${aspect} mb-5 bg-muted`}>
                    <img
                      src={w.cover}
                      alt={w.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-warm-white bg-soft-black/40 backdrop-blur-sm px-3 py-1">
                      {w.campaign}
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                        {w.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-light leading-tight">
                        {w.title}
                      </h3>
                    </div>
                    <p className="text-base text-foreground/80 whitespace-nowrap pt-1">
                      {w.meta}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Works;
