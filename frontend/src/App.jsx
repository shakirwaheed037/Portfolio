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
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import TechBackground from './components/TechBackground';
import Loader from './components/Loader';


function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <div className="min-h-screen flex flex-col text-slate-50 relative">
      <TechBackground />
      {/* <CursorGlow /> */}
      <ScrollToTop />
      <Navbar onHireMeClick={openModal} />
      <HireMeModal isOpen={isModalOpen} onClose={closeModal} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow pt-20 flex flex-col min-h-screen"
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<><Home onHireMeClick={openModal} /><Footer /></>} />
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/projects" element={<><Projects /><Footer /></>} />
            <Route path="/achievements" element={<><Achievements /><Footer /></>} />
            <Route path="/experience" element={<><Experience /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
          </Routes>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

export default App;
