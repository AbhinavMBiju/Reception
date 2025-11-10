import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-[#FAF3E0] to-[#FFF5F5]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Top Border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <Heart className="w-5 h-5 text-[#E8D5D8] fill-[#E8D5D8]" />
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 
            className="text-[#2C1810] mb-4"
            style={{ 
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2rem, 5vw, 3rem)'
            }}
          >
            Thank You
          </h3>
          <p 
            className="text-[#6B5744] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We are so grateful to have you in our lives and can't wait to celebrate this special day with you. 
            Your presence means the world to us and will make our reception truly unforgettable.
          </p>
        </motion.div>

        {/* Decorative Floral Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 25C48 18 44 15 40 17C36 19 37 24 50 25Z" fill="#E8D5D8" opacity="0.5"/>
            <path d="M50 25C52 18 56 15 60 17C64 19 63 24 50 25Z" fill="#E8D5D8" opacity="0.5"/>
            <circle cx="50" cy="25" r="3" fill="#D4AF37"/>
            <path d="M30 30C29 26 26 24 24 26C22 28 23 30 30 30Z" fill="#E8D5D8" opacity="0.4"/>
            <path d="M70 30C71 26 74 24 76 26C78 28 77 30 70 30Z" fill="#E8D5D8" opacity="0.4"/>
            <circle cx="30" cy="30" r="1.5" fill="#D4AF37" opacity="0.6"/>
            <circle cx="70" cy="30" r="1.5" fill="#D4AF37" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#6B5744]"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.875rem' }}
        >
          Ashith & Aparna • December 2025
        </motion.p>
        
        
      </div>
    </footer>
  );
}
