import { Award, Users, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Decorative floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[10%] w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-wide mb-4">
                BOARD-CERTIFIED EXCELLENCE
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] tracking-tight">
                Expert Hand <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-8">Surgery</span> Care
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl text-primary/60 leading-relaxed max-w-lg">
              Restore function, eliminate pain, and return to the activities you love with specialized hand surgery care.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              {[
                { icon: Award, text: "Fellowship trained specialist" },
                { icon: Users, text: "5,000+ successful procedures" },
                { icon: Clock, text: "Same-week consultations" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 group">
                  <div className="p-2 rounded-lg bg-white shadow-sm border border-primary/5 group-hover:scale-110 transition-transform">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <span className="text-primary/80 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-primary text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all shadow-2xl shadow-primary/20"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Request Your Consultation</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl -z-10 animate-pulse" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/20">
              <img
                src="https://images.pexels.com/photos/3985168/pexels-photo-3985168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dr. Sarah Mitchell - Clinical Precision"
                className="w-full h-[600px] object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
