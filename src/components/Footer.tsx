import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6">KARIM</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              European luxury fashion curated for the discerning individual.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe for exclusive updates and offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm focus:outline-none focus:border-primary-foreground/40"
              />
              <button className="bg-primary-foreground text-primary px-6 py-2 text-sm hover:bg-primary-foreground/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-foreground/50">
            © 2025 KARIM. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
