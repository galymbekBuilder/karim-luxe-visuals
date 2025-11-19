import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';
import hero7 from '@/assets/hero-7.jpg';
import hero8 from '@/assets/hero-8.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, src: hero5, alt: 'Street Style 1' },
  { id: 2, src: hero6, alt: 'Street Style 2' },
  { id: 3, src: hero7, alt: 'Street Style 3' },
  { id: 4, src: hero8, alt: 'Street Style 4' },
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
              Lookbook
            </h2>
          </div>

          {images.map((image) => (
            <div key={image.id} className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]">
              <div className="relative h-[70vh] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-screen flex items-center justify-center">
            <div className="text-center max-w-md">
              <p className="text-xl font-light text-muted-foreground">
                Every piece tells a story of craftsmanship and timeless design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
