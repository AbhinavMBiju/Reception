import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

export function Countdown() {
  const targetDate = new Date('2025-12-30T15:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FAF3E0]">
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
            Counting Down
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E8D5D8]"></div>
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
          </div>
          <p className="text-[#6B5744] mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Until we celebrate together
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 border-2 border-[#E8D5D8] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                    className="text-[#D4AF37] mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 'bold'
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>
                  <p 
                    className="text-[#6B5744] tracking-wider uppercase"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(0.75rem, 2vw, 1rem)'
                    }}
                  >
                    {unit.label}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 17.5C10 17.5 2.5 13 2.5 7.5C2.5 5.5 4 4 6 4C7.5 4 9 5 10 6C11 5 12.5 4 14 4C16 4 17.5 5.5 17.5 7.5C17.5 13 10 17.5 10 17.5Z"
                  fill="#E8D5D8"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
