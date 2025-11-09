import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: '/cardnew1.jpg',
    alt: 'Romantic couple photo'
  },
  {
    url: '/Cardimg2.png',
    alt: 'Elegant engagement photo'
  },
  {
    url: '/card3new.jpg',
    alt: 'Beautiful wedding flowers'
  },
  {
    url: '/cover1.png',
    alt: 'Elegant reception setup'
  },
  {
    url: '/Cardimg4.png',
    alt: 'Couple at sunset'
  },
  {
    url: '/Cardimg5.png',
    alt: 'Beautiful outdoor venue'
  }
];

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-[#FFF5F5] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[#2C1810] mb-4"
            style={{ 
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)'
            }}
          >
            Our Journey
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E8D5D8]"></div>
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              style={{
                aspectRatio: '4/5'
              }}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-2"></div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 20C58 12 52 8 48 12C44 16 46 22 60 20Z" fill="#E8D5D8" opacity="0.4"/>
            <path d="M60 20C62 12 68 8 72 12C76 16 74 22 60 20Z" fill="#E8D5D8" opacity="0.4"/>
            <circle cx="60" cy="20" r="3" fill="#D4AF37"/>
            <path d="M35 25C34 20 30 18 28 20C26 22 27 25 35 25Z" fill="#E8D5D8" opacity="0.3"/>
            <path d="M85 25C86 20 90 18 92 20C94 22 93 25 85 25Z" fill="#E8D5D8" opacity="0.3"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
