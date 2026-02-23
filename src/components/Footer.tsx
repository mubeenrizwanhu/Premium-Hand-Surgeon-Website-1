import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F7F9FB] py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
              Elite Hand Surgery
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Expert hand surgery care with a focus on complete recovery and personalized treatment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0B1F3A] mb-4">Location</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#3E6FA8] flex-shrink-0 mt-1" size={20} />
              <div className="text-[#6B7280]">
                <p>123 Medical Plaza, Suite 450</p>
                <p>Boston, MA 02115</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#0B1F3A] mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#3E6FA8]" size={20} />
                <a href="tel:617-555-0123" className="text-[#6B7280] hover:text-[#3E6FA8] transition-colors">
                  (617) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#3E6FA8]" size={20} />
                <a href="mailto:info@elitehandsurgery.com" className="text-[#6B7280] hover:text-[#3E6FA8] transition-colors">
                  info@elitehandsurgery.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#0B1F3A] mb-4">Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock className="text-[#3E6FA8] flex-shrink-0 mt-1" size={20} />
              <div className="text-[#6B7280]">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-[#6B7280] text-sm">
              © 2024 Elite Hand Surgery. All rights reserved.
            </div>
            <div className="text-[#6B7280] text-sm md:text-right space-x-6">
              <a href="#" className="hover:text-[#3E6FA8] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3E6FA8] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#3E6FA8] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-[#6B7280] text-center">
            <strong className="text-[#111827]">Important:</strong> This website provides general information about hand surgery services.
            It is not intended as medical advice. Please consult with Dr. Mitchell directly for diagnosis and treatment recommendations
            specific to your condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
