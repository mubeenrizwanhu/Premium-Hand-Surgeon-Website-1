import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleConsultationClick = () => {
    scrollToSection('contact');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-card border-none rounded-none shadow-sm"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              Elite Hand Surgery
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Procedures', 'Outcomes', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-primary/70 hover:text-primary transition-colors font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={handleConsultationClick}
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20 min-h-[44px]"
            >
              Request Your Consultation
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-6 border-t border-primary/5 mt-2"
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {['About', 'Procedures', 'Outcomes', 'Reviews', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-primary/70 hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleConsultationClick}
                className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors min-h-[44px] text-center"
              >
                Request Your Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
