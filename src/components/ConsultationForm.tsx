import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Send } from 'lucide-react';

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    condition: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 2) {
      nextStep();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { error } = await supabase.from('consultations').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          condition: formData.condition,
          preferred_date: formData.preferredDate || null,
          message: formData.message || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        condition: '',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
        setStep(1);
      }, 3000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit. Please try again or call us directly.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full px-6 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-primary/30 text-primary font-medium";
  const labelStyles = "block text-sm font-bold text-primary/60 mb-2 ml-1 uppercase tracking-wider text-[10px]";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-wide mb-6">
              CONCIERGE CARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Begin Your Journey <br /> to <span className="text-accent">Full Recovery</span>
            </h2>
            <p className="text-xl text-primary/60 mb-10 leading-relaxed">
              We provide a boutique experience with personalized attention from your first contact.
            </p>

            <div className="space-y-6">
              {[
                "Priority same-week scheduling",
                "Personalized treatment roadmaps",
                "Direct surgical team communication"
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="text-accent" size={18} />
                  </div>
                  <span className="text-primary/80 font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-1 pb-1 rounded-[3rem] border-white/40 shadow-2xl relative"
          >
            <div className="bg-white rounded-[2.8rem] p-8 md:p-12">
              {/* Progress Bar */}
              <div className="flex justify-between mb-12 relative px-2">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/5 -translate-y-1/2" />
                <div
                  className="absolute top-1/2 left-0 h-0.5 bg-accent -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${(step - 1) * 100}%` }}
                />
                {[1, 2].map(i => (
                  <div
                    key={i}
                    className={cn(
                      "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500",
                      step >= i ? "bg-accent text-white shadow-lg shadow-accent/20" : "bg-primary/5 text-primary/40"
                    )}
                  >
                    {step > i ? <Check size={20} /> : i}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="fullName" className={labelStyles}>Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className={labelStyles}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputStyles}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelStyles}>Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={inputStyles}
                            placeholder="(617) 555-0000"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="condition" className={labelStyles}>Medical Concern</label>
                        <select
                          id="condition"
                          name="condition"
                          value={formData.condition}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                        >
                          <option value="">Select a condition...</option>
                          <option value="Carpal Tunnel">Carpal Tunnel Syndrome</option>
                          <option value="Trigger Finger">Trigger Finger</option>
                          <option value="Tendon Injury">Tendon Injury</option>
                          <option value="Fracture">Hand or Wrist Fracture</option>
                          <option value="Arthritis">Arthritis Treatment</option>
                          <option value="Other">Other Condition</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className={labelStyles}>How can we help?</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className={cn(inputStyles, "resize-none")}
                          placeholder="Briefly describe your symptoms..."
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 rounded-2xl text-red-700 text-sm font-medium">
                    {errorMessage}
                  </motion.div>
                )}

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-50 rounded-2xl text-green-700 text-sm font-medium">
                    Thank you! We'll be in touch very soon.
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="p-4 rounded-2xl border border-primary/10 text-primary hover:bg-primary/5 transition-colors"
                    >
                      <ChevronLeft />
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary text-white font-bold py-4 px-8 rounded-2xl transition-all hover:bg-primary-light disabled:bg-primary/20 flex items-center justify-center space-x-2 shadow-xl shadow-primary/10"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : step === 1 ? (
                      <><span>Next Step</span> <ChevronRight size={20} /></>
                    ) : (
                      <><span>Confirm Consultation</span> <Send size={20} /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
