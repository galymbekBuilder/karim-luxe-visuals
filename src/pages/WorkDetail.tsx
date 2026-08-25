import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lenis from 'lenis';
import { ArrowLeft, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MediaFrame from '@/components/MediaFrame';
import { Button } from '@/components/ui/button';
import { works } from '@/data/works';

const WorkDetail = () => {
  const { id } = useParams();
  const work = works.find((w) => w.id === id) ?? works[0];
  const [activeMedia, setActiveMedia] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveMedia(0);
  }, [id]);

  const related = works.filter((w) => w.id !== work.id).slice(0, 3);
  const frameAspect =
    work.orientation === 'landscape'
      ? 'aspect-[16/9]'
      : work.category === 'Reels'
      ? 'aspect-[9/16]'
      : 'aspect-[3/4]';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 container mx-auto px-6 lg:px-12">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Ко всем работам
        </Link>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          {/* Gallery */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4">
            {work.media.length > 1 && (
              <div className="hidden lg:flex col-span-1 flex-col gap-3">
                {work.media.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMedia(i)}
                    className={`aspect-[3/4] overflow-hidden border-2 transition-colors ${
                      activeMedia === i
                        ? 'border-foreground'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={m.type === 'video' ? m.poster : m.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className={work.media.length > 1 ? 'col-span-6 lg:col-span-5' : 'col-span-6'}>
              <div className={`${frameAspect} overflow-hidden bg-muted`}>
                <MediaFrame
                  item={work.media[activeMedia]}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-32 lg:self-start space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {work.category} · {work.campaign}
              </p>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
                {work.title}
              </h1>
              <p className="text-2xl font-light">{work.meta}</p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {work.description}
            </p>

            {/* Platforms */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Платформы
              </p>
              <div className="flex flex-wrap gap-2">
                {work.platforms.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 text-xs tracking-[0.2em] uppercase border border-foreground bg-foreground text-background"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Formats */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Форматы сдачи
              </p>
              <div className="flex flex-wrap gap-2">
                {work.formats.map((f) => (
                  <span
                    key={f}
                    className="px-5 py-3 text-xs tracking-[0.2em] uppercase border border-border text-center"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Button
                asChild
                size="lg"
                className="flex-1 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-[0.25em] uppercase py-6"
              >
                <a href="https://t.me/weesy10" target="_blank" rel="noreferrer">
                  Обсудить проект
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-border hover:border-foreground px-4"
              >
                <a href="mailto:amanzhangalymbek4@gmail.com" aria-label="Написать на почту">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Details */}
            <div className="border-t border-border pt-8 space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Что важно в кадре
                </p>
                <ul className="space-y-2 text-sm">
                  {work.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="text-muted-foreground">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Инструменты
                  </p>
                  <p>{work.tools}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Клиент
                  </p>
                  <p>{work.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-light">Смотрите также</h2>
            <Link
              to="/works"
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground"
            >
              Все работы →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link to={`/work/${r.id}`} key={r.id} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {r.category}
                </p>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-light">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkDetail;
