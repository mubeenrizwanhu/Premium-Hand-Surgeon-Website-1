import { Hand, Activity, Wrench, Bone, Stethoscope } from 'lucide-react';

export default function Procedures() {
  const procedures = [
    {
      icon: Hand,
      title: 'Carpal Tunnel Release',
      description: 'Minimally invasive endoscopic procedure to relieve nerve compression and restore sensation.',
    },
    {
      icon: Activity,
      title: 'Trigger Finger Surgery',
      description: 'Precise release of the constricted tendon sheath to eliminate catching and restore smooth motion.',
    },
    {
      icon: Wrench,
      title: 'Tendon Repair',
      description: 'Advanced microsurgical techniques to restore full strength and function after tendon injuries.',
    },
    {
      icon: Bone,
      title: 'Fracture Treatment',
      description: 'Expert fixation of hand and wrist fractures using the latest surgical techniques for optimal healing.',
    },
    {
      icon: Stethoscope,
      title: 'Arthritis Treatment',
      description: 'Comprehensive surgical options including joint replacement and fusion to eliminate pain and restore function.',
    },
  ];

  return (
    <section id="procedures" className="bg-[#F7F9FB] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Specialized Hand Procedures
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Expert surgical treatment for a comprehensive range of hand and upper extremity conditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => {
            const Icon = procedure.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#3E6FA8] bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#3E6FA8]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3">
                  {procedure.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {procedure.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
