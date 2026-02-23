import { Star } from 'lucide-react';

export default function Outcomes() {
  const cases = [
    {
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Professional Athlete',
      condition: 'Scaphoid Fracture',
      outcome: 'Returned to competitive play in 8 weeks with full strength and range of motion',
      recovery: '8 weeks',
      satisfaction: 5,
    },
    {
      image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Concert Pianist',
      condition: 'Severe Trigger Finger',
      outcome: 'Complete resolution of symptoms with no limitations on performance or practice',
      recovery: '6 weeks',
      satisfaction: 5,
    },
    {
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      role: 'Business Executive',
      condition: 'Bilateral Carpal Tunnel',
      outcome: 'Complete elimination of numbness and pain, returned to full work capacity',
      recovery: '4 weeks',
      satisfaction: 5,
    },
  ];

  return (
    <section id="outcomes" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Patient Outcomes
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Real results from patients who have regained full function and returned to their passions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <img
                src={caseStudy.image}
                alt={`${caseStudy.role} success story`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(caseStudy.satisfaction)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#2E8C82] fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
                  {caseStudy.role}
                </h3>
                <p className="text-sm text-[#3E6FA8] font-medium mb-3">
                  {caseStudy.condition}
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  {caseStudy.outcome}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-[#111827]">
                    <span className="font-medium">Recovery Time:</span> {caseStudy.recovery}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
