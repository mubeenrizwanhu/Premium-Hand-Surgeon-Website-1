interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="bg-[#0B1F3A] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Take the First Step Toward Pain-Free Hands
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Same-week consultations available. Start your journey to complete recovery with expert hand surgery care.
        </p>
        <button
          onClick={onOpenModal}
          className="bg-[#2E8C82] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#267269] transition-colors min-h-[44px] text-lg"
        >
          Request Your Consultation
        </button>
      </div>
    </section>
  );
}
