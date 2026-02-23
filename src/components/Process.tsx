import { Calendar, Stethoscope, Heart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Calendar,
      number: '1',
      title: 'Consultation',
      description:
        'Comprehensive evaluation including physical examination, imaging review, and discussion of your symptoms, lifestyle, and goals. We will develop a personalized treatment plan together.',
    },
    {
      icon: Stethoscope,
      number: '2',
      title: 'Treatment',
      description:
        'Minimally invasive surgical procedures performed at state-of-the-art surgical facilities. Most procedures are outpatient with minimal downtime and rapid recovery protocols.',
    },
    {
      icon: Heart,
      number: '3',
      title: 'Recovery',
      description:
        'Personalized rehabilitation program with close follow-up care. Our dedicated team ensures optimal healing and guides you safely back to full function and the activities you love.',
    },
  ];

  return (
    <section className="bg-[#F7F9FB] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Your Journey to Recovery
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            A clear, straightforward process designed to get you back to full function as quickly as possible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#2E8C82] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-[#3E6FA8] bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#3E6FA8]" size={32} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
