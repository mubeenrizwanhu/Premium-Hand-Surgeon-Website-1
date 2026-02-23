import { Calendar, Stethoscope, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Expert Consultation',
      description:
        'Comprehensive evaluation including physical examination and personalized treatment planning.',
    },
    {
      icon: Stethoscope,
      number: '02',
      title: 'Precision Treatment',
      description:
        'Minimally invasive surgical procedures performed at state-of-the-art facilities.',
    },
    {
      icon: Heart,
      number: '03',
      title: 'Guided Recovery',
      description:
        'Personalized rehabilitation program with close follow-up care to ensure optimal healing.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Your Path to Healing
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            A seamless, patient-centered journey designed for recovery and long-term joint health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-primary/5 -z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent/30"
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white border border-primary/5 shadow-xl rounded-[2rem] flex items-center justify-center mx-auto group-hover:bg-accent group-hover:scale-110 transition-all duration-500 z-10 relative">
                    <Icon className="text-accent group-hover:text-white transition-colors" size={36} />
                  </div>
                  <span className="absolute -top-4 -right-4 text-7xl font-bold text-primary/5 select-none transition-colors group-hover:text-accent/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-primary/60 leading-relaxed font-medium">
                  {step.description}
                </p>

                {index < 2 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <ArrowRight className="text-primary/10 rotate-90" size={32} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
