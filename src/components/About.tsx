export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6 text-center">
            About Dr. Sarah Mitchell
          </h2>
          <div className="space-y-4 text-lg text-[#111827] leading-relaxed">
            <p>
              Dr. Sarah Mitchell is a board-certified orthopedic surgeon specializing exclusively in hand and upper extremity surgery. With over 15 years of experience, she has dedicated her career to helping patients regain full hand function and return to their daily activities pain-free.
            </p>
            <p>
              After completing her medical degree at Johns Hopkins School of Medicine, Dr. Mitchell pursued specialized fellowship training in hand surgery at the renowned Hospital for Special Surgery in New York. She is triple board-certified in Orthopedic Surgery, Hand Surgery, and Sports Medicine.
            </p>
            <p>
              Dr. Mitchell maintains active surgical privileges at Massachusetts General Hospital and Boston Medical Center, where she serves as the director of the Hand Surgery Fellowship Program. She has published over 40 peer-reviewed articles on hand surgery techniques and outcomes, and regularly lectures at national conferences.
            </p>
            <p className="text-[#6B7280] italic">
              "My approach combines the latest surgical techniques with personalized care. Every patient deserves a treatment plan tailored to their specific condition, lifestyle, and goals."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2">Education</h3>
              <p className="text-[#6B7280]">Johns Hopkins School of Medicine</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2">Fellowship</h3>
              <p className="text-[#6B7280]">Hospital for Special Surgery</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2">Certifications</h3>
              <p className="text-[#6B7280]">Triple Board-Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
