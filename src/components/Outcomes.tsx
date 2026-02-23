import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Outcomes() {
  const cases = [
    {
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Professional Athlete',
      condition: 'Scaphoid Fracture',
      outcome: 'Returned to competitive play in 8 weeks with full strength and range of motion',
      recovery: '8 weeks',
      satisfaction: 5,
    },
    {
      image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Concert Pianist',
      condition: 'Severe Trigger Finger',
      outcome: 'Complete resolution of symptoms with no limitations on performance or practice',
      recovery: '6 weeks',
      satisfaction: 5,
    },
    {
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Business Executive',
      condition: 'Bilateral Carpal Tunnel',
      outcome: 'Complete elimination of numbness and pain, returned to full work capacity',
      recovery: '4 weeks',
      satisfaction: 5,
    },
  ];

  return (
    <section id="outcomes" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-center mb-16 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Real Results, <br />
              <span className="text-accent">Exceptional</span> Recovery
            </h2>
            <p className="text-lg text-primary/60">
              Our patients' success is our greatest achievement. See how we've helped others return to what they love.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-xl">
                <img
                  src={caseStudy.image}
                  alt={`${caseStudy.role} success story`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80" />

                {/* Overlapping Info Card */}
                <div className="absolute inset-x-4 bottom-4 glass-card p-6 rounded-[2rem] border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(caseStudy.satisfaction)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-accent fill-accent"
                        size={14}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {caseStudy.role}
                  </h3>
                  <p className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">
                    {caseStudy.condition}
                  </p>
                  <p className="text-primary/70 text-sm leading-relaxed line-clamp-2">
                    {caseStudy.outcome}
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/5 flex justify-between items-center">
                    <span className="text-xs font-bold text-primary/40 uppercase">Recovery</span>
                    <span className="text-sm font-bold text-primary">{caseStudy.recovery}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
