import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaFrame from '@/components/MediaFrame';
import type { MediaItem } from '@/data/works';
import posterGolf from '@/assets/works/poster-golf.jpg';
import clayCourt from '@/assets/works/tennis-court-01.jpg';
import christmas from '@/assets/works/christmas-01.jpg';
import terrace from '@/assets/works/terrace-01.jpg';

gsap.registerPlugin(ScrollTrigger);

const slides: { id: number; item: MediaItem; alt: string }[] = [
  { id: 1, item: { type: 'video', src: '/media/reel-golf.mp4', poster: posterGolf }, alt: 'Ролик Fairway Aerial' },
  { id: 2, item: { type: 'image', src: clayCourt }, alt: 'Кадр серии Clay Court' },
  { id: 3, item: { type: 'image', src: christmas }, alt: 'Кадр новогодней серии' },
  { id: 4, item: { type: 'image', src: terrace }, alt: 'Кадр серии Table by the Sea' },
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;

    if (!section || !gallery) return;

    const ctx = gsap.context(() => {
      const scrollWidth = gallery.scrollWidth - window.innerWidth;

      gsap.to(gallery, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="lookbook" className="h-screen overflow-hidden bg-background">
      <div className="h-full flex items-center">
        <div ref={galleryRef} className="flex gap-8 px-6 lg:px-12">
          <div className="flex-shrink-0 w-screen flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-center">
              Gallery
            </h2>
          </div>

          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[70vh] overflow-hidden">
                <MediaFrame
                  item={slide.item}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-screen flex items-center justify-center">
            <div className="text-center max-w-md">
              <p className="text-xl font-light text-muted-foreground">
                Каждый кадр собран под конкретный формат ленты — от Stories
                до горизонтального баннера
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
