import { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit. Please try again or call us directly.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">Request Your Consultation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-lg font-semibold text-[#0B1F3A] mb-2">
                Thank you for requesting a consultation!
              </p>
              <p className="text-[#6B7280]">
                We'll be in touch within one business day to confirm your appointment.
              </p>
            </div>
          ) : (
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2E8C82] hover:bg-[#247570] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-6"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
              </button>

              <p className="text-xs text-[#6B7280] text-center">
                We respect your privacy. Your information will only be used to contact you about your consultation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
