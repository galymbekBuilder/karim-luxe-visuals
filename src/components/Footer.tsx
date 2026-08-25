import { Link } from 'react-router-dom';
import { Instagram, Send, Mail, Github } from 'lucide-react';

const sections = [
  { to: '/works', label: 'Works' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const formats = [
  'Обложки и баннеры',
  'Карточки маркетплейсов',
  'Посты и Stories',
  'Reels и промо-ролики',
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6">GALYMBEK</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              AI-дизайнер. Генерация, монтаж и финальная доводка визуала
              для брендов.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Разделы</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {sections.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:text-primary-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Форматы</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {formats.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Связаться</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="https://t.me/weesy10"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Telegram — @weesy10
                </a>
              </li>
              <li>
                <a
                  href="mailto:amanzhangalymbek4@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  amanzhangalymbek4@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+77780843788"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +7 778 084 37 88
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/galymbekBuilder"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  github.com/galymbekBuilder
                </a>
              </li>
              <li>Астана, Казахстан</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Galymbek Amanzhan. Все работы созданы с помощью AI.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://t.me/weesy10"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="mailto:amanzhangalymbek4@gmail.com"
              aria-label="Email"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/galymbekBuilder"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
