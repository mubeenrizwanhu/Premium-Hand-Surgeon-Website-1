import { Award, Users, Clock } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
              Expert Hand Surgery for Complete Recovery
            </h2>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Restore function, eliminate pain, and return to the activities you love with specialized hand surgery care.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <Award className="text-[#3E6FA8] flex-shrink-0" size={24} />
                <span className="text-[#111827]">Board-certified hand surgeon with fellowship training</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-[#3E6FA8] flex-shrink-0" size={24} />
                <span className="text-[#111827]">Over 5,000 successful hand procedures performed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-[#3E6FA8] flex-shrink-0" size={24} />
                <span className="text-[#111827]">Same-week consultations available</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="bg-[#2E8C82] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#267269] transition-colors min-h-[44px] text-lg mt-6"
            >
              Request Your Consultation
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional hand surgeon in medical setting"
              className="rounded-xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
