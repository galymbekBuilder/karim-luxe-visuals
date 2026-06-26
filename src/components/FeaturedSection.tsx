import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

const featured = products.slice(0, 3);

const FeaturedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
        }
      );

      const cards = sectionRef.current?.querySelectorAll('.product-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              — Edit 01
            </p>
            <h2 ref={titleRef} className="text-6xl md:text-8xl font-light">
              Featured.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Three pieces from the new season — hand-picked by the atelier
            for the way they hold their shape, season after season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featured.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className={`product-card group cursor-pointer block ${
                index === 1 ? 'lg:translate-y-24' : ''
              }`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-soft-black/0 group-hover:bg-soft-black/10 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {product.category}
                </p>
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="text-2xl font-light">{product.name}</h3>
                  <p className="text-base text-muted-foreground whitespace-nowrap">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/catalog"
            className="inline-block text-xs tracking-[0.3em] uppercase border-b border-foreground pb-2 hover:opacity-60 transition-opacity"
          >
            View the full catalog →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
