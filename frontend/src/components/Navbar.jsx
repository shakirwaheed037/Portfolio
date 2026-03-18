import { useState } from 'react';
import whitelogo from '../assets/images/whitelogo.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HireMeModal from './HireMeModal';
import Contact from '../pages/Contact';

const Navbar = ({ onHireMeClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Experience', path: '/experience' },
    ];

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.6
            }
        }
    };


    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >

                <div className="w-full max-w-7xl glass-effect nav-gradient-border rounded-2xl shadow-2xl px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={whitelogo}
                                alt="CodeByShakir Logo"
                                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">

                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative group py-2"
                                >
                                    <span
                                        className={`${location.pathname === link.path
                                            ? 'text-white font-semibold'
                                            : 'text-gray-400 group-hover:text-white'
                                            } transition-colors duration-200 text-sm`}
                                    >
                                        {link.name}
                                    </span>

                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full blur-[2px]"
                                        />
                                    )}
                                </Link>
                            ))}

                            {/* get in touch Button */}
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors ml-4 shadow-lg"
                                >
                                    Get In Touch
                                </motion.button>
                            </Link>

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-400 hover:text-white p-2"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>

                        </div>

                    </div>

                </div>

                {/* Mobile Menu */}
                <AnimatePresence>

                    {isOpen && (

                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden glass-effect border-b border-border absolute w-full overflow-hidden"
                        >

                            <div className="px-2 pt-2 pb-3 space-y-1">

                                {links.map((link) => (

                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 rounded-md text-base text-gray-400 hover:text-white hover:bg-white/5"
                                    >
                                        {link.name}
                                    </Link>

                                ))}

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        onHireMeClick();
                                    }}
                                    className="block text-primary font-medium px-3 py-2"
                                >
                                    Hire Me
                                </button>

                            </div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </motion.nav>

            {/* Hire Me Modal rendering is handled in App.jsx */}
        </>
    );
};

export default Navbar;