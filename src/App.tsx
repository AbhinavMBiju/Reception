import { HeroSection } from './components/HeroSection';
import { EventDetails } from './components/EventDetails';
import { Gallery } from './components/Gallery';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Allura&display=swap" 
        rel="stylesheet" 
      />

      {/* Main Content */}
      <HeroSection />
      <EventDetails />
      <Gallery />
      <Countdown />
      <Footer />

      {/* Smooth Scroll Behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
