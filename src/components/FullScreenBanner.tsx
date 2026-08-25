import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import bannerPoster from '@/assets/works/poster-sea.jpg';

gsap.registerPlugin(ScrollTrigger);

const FullScreenBanner = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.banner-img',
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        '.banner-text > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden">
      <video
        src="/media/reel-sea.mp4"
        poster={bannerPoster}
        aria-label="Видео летней кампании Riviera"
        className="banner-img absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-soft-black/20 to-transparent" />

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
        <div className="banner-text max-w-3xl text-warm-white">
          <p className="text-xs tracking-[0.4em] uppercase mb-8 opacity-80">
            Riviera — летняя кампания
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] mb-10">
            Prompt in.<br />Campaign out.
          </h2>
          <Link
            to="/works"
            className="inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase border-b border-warm-white/40 pb-2 hover:border-warm-white transition-colors"
          >
            Смотреть все работы
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullScreenBanner;
