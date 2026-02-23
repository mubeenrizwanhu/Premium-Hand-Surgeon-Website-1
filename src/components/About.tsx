import { motion } from 'framer-motion';
import { GraduationCap, Award, Microscope } from 'lucide-react';

export default function About() {
  const credentials = [
    { icon: GraduationCap, title: 'Education', detail: 'Johns Hopkins Medicine' },
    { icon: Award, title: 'Fellowship', detail: 'Hospital for Special Surgery' },
    { icon: Microscope, title: 'Research', detail: '40+ Peer-Reviewed Articles' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Sarah Mitchell"
                className="w-full h-[600px] object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Meet the Surgeon</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Dr. Sarah Mitchell
              </h2>
            </div>

            <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
              <p>
                Dr. Sarah Mitchell is a board-certified orthopedic surgeon specializing exclusively in hand and upper extremity surgery. With over 15 years of experience, she has dedicated her career to helping patients regain full hand function.
              </p>
              <p>
                After graduating from <span className="text-primary font-bold">Johns Hopkins School of Medicine</span>, she completed her fellowship at the Hospital for Special Surgery in New York, consistently ranked #1 in orthopedics.
              </p>

              <div className="pl-6 border-l-4 border-accent/30 py-2">
                <p className="text-primary font-heading italic text-xl leading-relaxed">
                  "My approach combines surgical precision with a deep understanding of each patient's lifestyle. We don't just fix hands; we restore lives."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {credentials.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-primary/5 group hover:border-accent/20 transition-colors">
                  <item.icon className="text-accent mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-primary/40 leading-tight">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
