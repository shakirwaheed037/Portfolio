import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import HireMeModal from './components/HireMeModal';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import TechBackground from './components/TechBackground';
import Loader from './components/Loader';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial site load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <TechBackground />
      <ScrollToTop />
      <Navbar onHireMeClick={() => setIsModalOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<Home onHireMeClick={() => setIsModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
