export default function TrustBar() {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Patients Treated' },
    { number: '3', label: 'Board Certifications' },
    { number: '2', label: 'Hospital Affiliations' },
  ];

  return (
    <section className="bg-[#F7F9FB] py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-2">
                {stat.number}
              </div>
              <div className="text-[#6B7280] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
