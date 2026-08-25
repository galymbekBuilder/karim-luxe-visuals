import { useEffect } from 'react';
import Lenis from 'lenis';
import WebGLBackground from '@/components/WebGLBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import FeaturedSection from '@/components/FeaturedSection';
import StorytellingSection from '@/components/StorytellingSection';
import FullScreenBanner from '@/components/FullScreenBanner';
import HorizontalGallery from '@/components/HorizontalGallery';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <WebGLBackground />
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <FeaturedSection />
        <StorytellingSection />
        <FullScreenBanner />
        <HorizontalGallery />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
