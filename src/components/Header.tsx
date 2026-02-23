import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleConsultationClick = () => {
    setIsMenuOpen(false);
    onOpenModal();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#0B1F3A]">
              Elite Hand Surgery
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('procedures')}
              className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium"
            >
              Procedures
            </button>
            <button
              onClick={() => scrollToSection('outcomes')}
              className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium"
            >
              Outcomes
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={handleConsultationClick}
              className="bg-[#2E8C82] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#267269] transition-colors min-h-[44px]"
            >
              Request Your Consultation
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0B1F3A]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('procedures')}
                className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium text-left py-2"
              >
                Procedures
              </button>
              <button
                onClick={() => scrollToSection('outcomes')}
                className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium text-left py-2"
              >
                Outcomes
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium text-left py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#111827] hover:text-[#3E6FA8] transition-colors font-medium text-left py-2"
              >
                Contact
              </button>
              <button
                onClick={handleConsultationClick}
                className="bg-[#2E8C82] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#267269] transition-colors min-h-[44px] text-center"
              >
                Request Your Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
