import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-3xl font-light tracking-wider text-foreground">
            KARIM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#collections" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#lookbook" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              Lookbook
            </a>
            <a href="#about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
              About
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <ShoppingBag className="w-5 h-5" />
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 space-y-6 pb-8 border-t border-border pt-8">
            <a
              href="#collections"
              className="block text-2xl font-light hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#lookbook"
              className="block text-2xl font-light hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lookbook
            </a>
            <a
              href="#about"
              className="block text-2xl font-light hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
