import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Summer Elegance',
    category: 'Dresses',
    price: '€890',
    image: hero2,
  },
  {
    id: 2,
    name: 'Urban Motion',
    category: 'Outerwear',
    price: '€1,240',
    image: hero3,
  },
  {
    id: 3,
    name: 'Flowing Grace',
    category: 'Coats',
    price: '€1,560',
    image: hero4,
  },
];

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
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
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
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
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
          <h2 ref={titleRef} className="text-6xl md:text-8xl font-light">
            Featured
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Discover our handpicked selection of timeless pieces that define contemporary luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card group cursor-pointer ${
                index === 1 ? 'lg:translate-y-24' : ''
              }`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-widest uppercase text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="text-2xl font-light">{product.name}</h3>
                <p className="text-lg text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
