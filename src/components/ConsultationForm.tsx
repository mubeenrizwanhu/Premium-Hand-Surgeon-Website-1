import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ConsultationFormProps {
  onOpenModal: () => void;
}

export default function ConsultationForm({ onOpenModal }: ConsultationFormProps) {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
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
      }, 3000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit. Please try again or call us directly.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F7F9FB] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              Take the first step toward recovery. Fill out this form and our team will contact you within one business day to confirm your appointment time.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-[#2E8C82] font-bold text-lg mt-1">✓</span>
                <span className="text-[#6B7280]">Same-week appointments available</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2E8C82] font-bold text-lg mt-1">✓</span>
                <span className="text-[#6B7280]">Comprehensive evaluation and treatment planning</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2E8C82] font-bold text-lg mt-1">✓</span>
                <span className="text-[#6B7280]">Direct communication with Dr. Sarah Mitchell</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#111827] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all"
                  placeholder="(617) 555-0000"
                />
              </div>

              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-[#111827] mb-1">
                  Condition or Concern *
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a condition...</option>
                  <option value="Carpal Tunnel">Carpal Tunnel Syndrome</option>
                  <option value="Trigger Finger">Trigger Finger</option>
                  <option value="Tendon Injury">Tendon Injury or Repair</option>
                  <option value="Fracture">Hand or Wrist Fracture</option>
                  <option value="Arthritis">Arthritis Treatment</option>
                  <option value="Other">Other Condition</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[#111827] mb-1">
                  Preferred Consultation Date (optional)
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-1">
                  Additional Information (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8C82] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your condition or any questions you have..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you! We'll be in touch within one business day.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2E8C82] hover:bg-[#247570] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-6"
              >
                {isSubmitting ? 'Submitting...' : 'Request Your Consultation'}
              </button>

              <p className="text-xs text-[#6B7280] text-center">
                We respect your privacy. Your information will only be used to contact you about your consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
