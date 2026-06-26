import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { to: '/catalog', label: 'Catalog' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/about', label: 'About' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-light tracking-[0.2em] text-foreground">
            KARIM
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs tracking-[0.25em] uppercase transition-colors ${
                  location.pathname.startsWith(l.to)
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-transparent hidden sm:inline-flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-8 space-y-6 pb-8 border-t border-border pt-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-2xl font-light hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
