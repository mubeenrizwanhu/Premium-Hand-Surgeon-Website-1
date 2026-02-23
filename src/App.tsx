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
import Footer from './components/Footer';
import BackgroundMesh from './components/BackgroundMesh';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundMesh />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Procedures />
        <Outcomes />
        <Process />
        <Reviews />
        <FinalCTA />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
