import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    {
      name: 'Michael Thompson',
      condition: 'Carpal Tunnel Surgery',
      date: 'Jan 2024',
      text: "After struggling with numbness and pain for two years, I finally decided to see Dr. Mitchell. She was thorough, explained everything clearly, and the surgery was far easier than I expected.",
      rating: 5,
    },
    {
      name: 'Jennifer Rodriguez',
      condition: 'Trigger Finger Release',
      date: 'Nov 2023',
      text: 'As a dental hygienist, my hands are my livelihood. Dr. Mitchell understood the urgency and scheduled me quickly. The procedure was straightforward, and her follow-up care was exceptional.',
      rating: 5,
    },
    {
      name: 'David Chen',
      condition: 'Tendon Repair',
      date: 'Sep 2023',
      text: "I injured my hand in a cycling accident and was told by another surgeon that full recovery was unlikely. Dr. Mitchell performed a complex tendon repair, and after her rehabilitation program, I regained 100% function.",
      rating: 5,
    },
    {
      name: 'Patricia Williams',
      condition: 'Thumb Arthritis',
      date: 'Jun 2023',
      text: 'The arthritis in my thumb had become unbearable. Dr. Mitchell recommended joint replacement, which I was nervous about, but she walked me through everything. The surgery went perfectly.',
      rating: 5,
    },
    {
      name: 'Robert Anderson',
      condition: 'Wrist Fracture Repair',
      date: 'Mar 2024',
      text: 'I fractured my wrist in three places and needed immediate surgical intervention. Dr. Mitchell and her team were professional, reassuring, and skilled. The surgery was successful.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Voices of Recovery
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            Experience the difference of specialized care through the stories of those who have regained their strength.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] border-white/40 shadow-2xl relative group hover:-translate-y-2 transition-transform duration-500 bg-white/60 flex flex-col justify-between h-full"
            >
              <Quote className="text-accent/10 absolute top-8 right-8 group-hover:text-accent/20 transition-colors" size={60} />

              <div>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-accent fill-accent"
                      size={14}
                    />
                  ))}
                </div>

                <p className="text-primary italic leading-relaxed mb-8 text-lg font-medium relative z-10">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider">{review.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
