import { motion } from 'framer-motion';

export default function FinalCTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Restore Your <span className="text-accent-glow">Hand Health?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
            Join the hundreds of patients who have reclaimed their lifestyle through expert precision and compassionate care.
          </p>

          <div className="flex justify-center">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-primary px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all shadow-2xl"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Request Your Consultation</span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
          </div>

          <p className="mt-8 text-white/40 font-bold uppercase tracking-widest text-xs">
            Priority Scheduling Available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
