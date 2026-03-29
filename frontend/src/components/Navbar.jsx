import { useState } from 'react';
import whitelogo from '../assets/images/whitelogo.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

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

    return (
        <nav className="navbar">
            <div className="navbar__container glass-effect nav-gradient-border">
                <div className="navbar__inner">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo-link">
                        <img
                            src={whitelogo}
                            alt="CodeByShakir Logo"
                            className="navbar__logo-img"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="navbar__desktop-menu">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="navbar__item"
                            >
                                <span
                                    className={`navbar__link ${location.pathname === link.path
                                        ? 'navbar__link--active'
                                        : 'navbar__link--inactive'
                                        }`}
                                >
                                    {link.name}
                                </span>

                                {location.pathname === link.path && (
                                    <div
                                        className="navbar__active-indicator"
                                    />
                                )}
                            </Link>
                        ))}

                        {/* get in touch Button */}
                        <Link to="/contact">
                            <button
                                className="navbar__contact-btn hover-scale"
                            >
                                Get In Touch
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="navbar__mobile-btn-container">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="navbar__mobile-btn"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="navbar__mobile-menu">
                    <div className="navbar__mobile-inner">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="navbar__mobile-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="navbar__mobile-hire-btn">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;