import { Hand, Activity, Wrench, Bone, Stethoscope, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Procedures() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const procedures = [
    {
      icon: Hand,
      title: 'Carpal Tunnel Release',
      description: 'Minimally invasive endoscopic nerve decompression.',
      details: 'Our endoscopic technique uses a single 1cm incision. Patients often return to keyboard work within 48 hours. We focus on neuroprotection and rapid recovery of sensation.',
      className: 'md:col-span-2 md:row-span-1',
      bg: 'bg-primary/5'
    },
    {
      icon: Activity,
      title: 'Trigger Finger',
      description: 'Total resolution of finger clicking and locking.',
      details: 'Same-day surgical release performed under local anesthesia. We ensure 100% resolution of symptoms, restoring smooth tendon gliding immediately.',
      className: 'md:col-span-1 md:row-span-1',
      bg: 'bg-accent/5'
    },
    {
      icon: Wrench,
      title: 'Tendon Repair',
      description: 'Expert restoration of hand strength and motion.',
      details: 'Utilizing multi-strand repair techniques for early active motion. Our protocols reduce scarring and prevent post-operative stiffness.',
      className: 'md:col-span-1 md:row-span-1',
      bg: 'bg-surface-dark'
    },
    {
      icon: Bone,
      title: 'Fracture Treatment',
      description: 'Expert fixation of specialized hand fractures.',
      details: 'Anatomic reduction using low-profile titanium plates and screws. We prioritize early mobilization to ensure you return to activities faster.',
      className: 'md:col-span-1 md:row-span-1',
      bg: 'bg-accent/5'
    },
    {
      icon: Stethoscope,
      title: 'Arthritis Care',
      description: 'Advanced relief for chronic hand and wrist pain.',
      details: 'From CMC joint arthroplasty to small joint replacements. We offer the latest biomaterials to maintain joint motion while removing arthritic pain.',
      className: 'md:col-span-1 md:row-span-1',
      bg: 'bg-primary/5'
    },
  ];

  return (
    <section id="procedures" className="py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Specialized Care for Your Hands
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            Combining surgical precision with aesthetic outcomes to restore your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {procedures.map((proc, index) => {
            const Icon = proc.icon;
            const isActive = activeTab === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
                className={`${proc.className} ${proc.bg} group relative rounded-[2rem] border border-primary/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5`}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="bg-white p-4 w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {proc.title}
                    </h3>
                    <p className="text-primary/60 leading-relaxed font-medium">
                      {proc.description}
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveTab(index)}
                    className="mt-8 flex items-center text-accent font-bold group/link cursor-pointer relative z-10"
                  >
                    <span className="mr-2">Learn more</span>
                    <ChevronRight className="group-hover/link:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>

                {/* Detail Overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-primary/95 backdrop-blur-xl p-8 z-20 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <Icon className="text-accent-glow" size={32} />
                          <button
                            onClick={(e) => { e.stopPropagation(); setActiveTab(null); }}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                          >
                            <X className="text-white" size={20} />
                          </button>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {proc.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed font-medium text-sm md:text-base">
                          {proc.details}
                        </p>
                      </div>

                      <div className="flex items-center text-accent-glow font-bold text-sm uppercase tracking-widest">
                        Clinical Excellence
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative glow */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
