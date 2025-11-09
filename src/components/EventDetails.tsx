import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from './ui/card';

export function EventDetails() {
  return (
    <section id="event-details" className="py-20 px-4 bg-white">
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
            Reception Details
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E8D5D8]"></div>
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2 border-[#E8D5D8] hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-[#FFF5F5]">
              <div className="space-y-6">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9B8BB] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#8B7B7E]" />
                  </div>
                  <div>
                    <h3 className="text-[#2C1810] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Date
                    </h3>
                    <p className="text-[#6B5744]">Tuesday, December 30th, 2025</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9B8BB] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#8B7B7E]" />
                  </div>
                  <div>
                    <h3 className="text-[#2C1810] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Time
                    </h3>
                    <p className="text-[#6B5744]">3:00 PM - 7:00 PM</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9B8BB] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#8B7B7E]" />
                  </div>
                  <div>
                    <h3 className="text-[#2C1810] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Venue
                    </h3>
                    <p className="text-[#6B5744]">
                      GK Event Centre<br />
                      Anakotta Road, Mammiyoor<br />
                      Guruvayur, 680101, Kerala, India
                    </p>
                    
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px]"
          >
            <Card className="p-4 border-2 border-[#E8D5D8] h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.728791540432!2d76.03172587428551!3d10.60387816235429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79598c04136bd%3A0xd4569b161144027a!2z8J2XmvCdl54g8J2XmPCdmIPwnZey8J2Xu_CdmIEg8J2XlvCdl7LwnZe78J2YgfCdl7_wnZeyIChBIHZlbnVlIGZvciBhbGwgb2NjYXNpb25zKQ!5e1!3m2!1sen!2sin!4v1762713395544!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
