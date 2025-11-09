import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToDetails = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF5F5] via-[#FAF3E0] to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#E8D5D8] blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#D4AF37] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#E8D5D8] blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Floral Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20C50 15 55 10 60 15C65 20 60 25 50 20Z" fill="#E8D5D8" opacity="0.6"/>
            <path d="M50 20C50 15 45 10 40 15C35 20 40 25 50 20Z" fill="#E8D5D8" opacity="0.6"/>
            <circle cx="50" cy="20" r="3" fill="#D4AF37"/>
            <path d="M30 25C30 22 33 20 35 22C37 24 35 26 30 25Z" fill="#E8D5D8" opacity="0.4"/>
            <path d="M70 25C70 22 67 20 65 22C63 24 65 26 70 25Z" fill="#E8D5D8" opacity="0.4"/>
          </svg>
        </motion.div>

        {/* You're Invited */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4AF37] tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          You're Invited to Reception of
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 
            className="text-[#2C1810] mb-4"
            style={{ 
              fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              lineHeight: '1.2',
              fontWeight: '700'
            }}
          >
            Ashith & Aparna
          </h1>
        </motion.div>

        {/* Heart Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <Heart className="w-6 h-6 text-[#E8D5D8] fill-[#E8D5D8]" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#6B5744] mb-12"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            letterSpacing: '0.05em'
          }}
        >
          Tuesday, December 30th, 2025
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            onClick={scrollToDetails}
            className="bg-[#D4AF37] hover:bg-[#C4A137] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.1em' }}
          >
            Save the Date
          </Button>
        </motion.div>

        {/* Decorative Floral Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex justify-center"
        >
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 15C28 10 25 8 22 10C19 12 20 15 30 15Z" fill="#E8D5D8" opacity="0.5"/>
            <path d="M30 15C32 10 35 8 38 10C41 12 40 15 30 15Z" fill="#E8D5D8" opacity="0.5"/>
            <circle cx="30" cy="15" r="2" fill="#D4AF37"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
