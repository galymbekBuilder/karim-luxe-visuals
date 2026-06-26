import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lenis from 'lenis';
import { ArrowLeft, Minus, Plus, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) ?? products[0];
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState(product.colorways[0]);
  const [qty, setQty] = useState(1);

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
    setActiveImg(0);
    setSize(null);
    setColor(product.colorways[0]);
  }, [id, product.colorways]);

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 container mx-auto px-6 lg:px-12">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to catalog
        </Link>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
          {/* Gallery */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4">
            <div className="hidden lg:flex col-span-1 flex-col gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[3/4] overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="col-span-6 lg:col-span-5">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-32 lg:self-start space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {product.category} · {product.season}
              </p>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-light">{product.price}</p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Color */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Colour — {color}
              </p>
              <div className="flex gap-2">
                {product.colorways.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border transition-colors ${
                      color === c
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Size
                </p>
                <button className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground underline underline-offset-4">
                  Size guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 text-xs tracking-[0.2em] uppercase border transition-colors ${
                      size === s
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + CTA */}
            <div className="flex gap-3">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-3 hover:bg-muted"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-3 hover:bg-muted">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <Button
                size="lg"
                className="flex-1 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-[0.25em] uppercase py-6"
              >
                Add to bag
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none border-border hover:border-foreground px-4"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            {/* Details */}
            <div className="border-t border-border pt-8 space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Details
                </p>
                <ul className="space-y-2 text-sm">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="text-muted-foreground">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Composition
                  </p>
                  <p>{product.composition}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Origin
                  </p>
                  <p>{product.origin}</p>
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
            <h2 className="text-3xl md:text-5xl font-light">You may also like</h2>
            <Link
              to="/catalog"
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link to={`/product/${r.id}`} key={r.id} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {r.category}
                </p>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-light">{r.name}</h3>
                  <p className="text-sm text-muted-foreground">{r.price}</p>
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

export default ProductDetail;
