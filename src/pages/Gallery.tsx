import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HorizontalGallery from '@/components/HorizontalGallery';
import MediaFrame from '@/components/MediaFrame';
import type { MediaItem } from '@/data/works';
import golfPack from '@/assets/works/golf-pack-01.jpg';
import winter from '@/assets/works/winter-01.jpg';
import butler from '@/assets/works/butler-02.jpg';
import terrace from '@/assets/works/terrace-02.jpg';
import riviera from '@/assets/works/riviera-03.jpg';
import christmas from '@/assets/works/christmas-02.jpg';
import posterTennis from '@/assets/works/poster-tennis.jpg';
import posterWebdesign from '@/assets/works/poster-webdesign.jpg';

type Frame = {
  item: MediaItem;
  title: string;
  campaign: string;
  span: string;
  aspect: string;
};

const frames: Frame[] = [
  {
    item: { type: 'image', src: golfPack },
    title: 'Aqua Fairy on the Green',
    campaign: 'Golf Club',
    span: 'col-span-12 md:col-span-7',
    aspect: 'aspect-[4/5]',
  },
  {
    item: { type: 'video', src: '/media/reel-tennis.mp4', poster: posterTennis },
    title: 'Baseline',
    campaign: 'Clay Season',
    span: 'col-span-12 md:col-span-4 md:col-start-9 md:translate-y-32',
    aspect: 'aspect-[3/4]',
  },
  {
    item: { type: 'image', src: winter },
    title: 'Pearl in the Snow',
    campaign: 'Winter Drop',
    span: 'col-span-12 md:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    item: { type: 'image', src: butler },
    title: 'The Butler',
    campaign: 'Gifting',
    span: 'col-span-12 md:col-span-6 md:col-start-7',
    aspect: 'aspect-[4/5]',
  },
  {
    item: { type: 'video', src: '/media/reel-webdesign.mp4', poster: posterWebdesign },
    title: 'Redesign Promo',
    campaign: 'Web Promo',
    span: 'col-span-12 md:col-span-8',
    aspect: 'aspect-[16/10]',
  },
  {
    item: { type: 'image', src: christmas },
    title: 'Nutcracker Table',
    campaign: 'Winter Drop',
    span: 'col-span-12 md:col-span-4 md:col-start-9 md:-translate-y-16',
    aspect: 'aspect-[3/4]',
  },
  {
    item: { type: 'image', src: riviera },
    title: 'Riviera Escape',
    campaign: 'Riviera',
    span: 'col-span-12 md:col-span-7 md:col-start-3',
    aspect: 'aspect-[4/5]',
  },
  {
    item: { type: 'image', src: terrace },
    title: 'Table by the Sea',
    campaign: 'Riviera',
    span: 'col-span-12 md:col-span-4 md:translate-y-16',
    aspect: 'aspect-[3/4]',
  },
];

const Gallery = () => {
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
          Gallery — кадры из кампаний
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] max-w-5xl">
          Every frame,<br />generated.
        </h1>
        <p className="mt-10 max-w-md text-base text-muted-foreground leading-relaxed">
          Четыре сезонные серии для гонконгского бренда NOT ONLY TEA — гольф,
          зима, теннис и Ривьера — и промо-ролик редизайна сайта. Съёмки не было
          ни одной: сцены, свет и продукт собраны с нуля.
        </p>
      </header>

      {/* Asymmetric editorial grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-20">
            {frames.map((f) => (
              <figure key={f.title} className={f.span}>
                <div className={`relative overflow-hidden bg-muted ${f.aspect}`}>
                  <MediaFrame
                    item={f.item}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <p className="text-sm font-light">{f.title}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {f.campaign}
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

export default Gallery;
