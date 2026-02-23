import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Procedures from './components/Procedures';
import Outcomes from './components/Outcomes';
import Process from './components/Process';
import Reviews from './components/Reviews';
import FinalCTA from './components/FinalCTA';
import ConsultationForm from './components/ConsultationForm';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <TrustBar />
        <About />
        <Procedures />
        <Outcomes />
        <Process />
        <Reviews />
        <FinalCTA onOpenModal={openModal} />
        <ConsultationForm onOpenModal={openModal} />
      </main>
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
