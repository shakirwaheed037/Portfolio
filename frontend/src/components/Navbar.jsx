import whitelogo from '../assets/images/whitelogo.png';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FolderCode, Trophy, Briefcase, GraduationCap, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = ({ onHireMeClick }) => {
    const location = useLocation();

    const leftLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: User },
        { name: 'Projects', path: '/projects', icon: FolderCode },
        { name: 'Achievements', path: '/achievements', icon: Trophy },
    ];

    const rightLinks = [
        { name: 'Experience', path: '/experience', icon: Briefcase },
        { name: 'Education', path: '/education', icon: GraduationCap },
        { name: 'Contact', path: '/contact', icon: Mail },
    ];

    const NavIcon = ({ link }) => {
        const isActive = location.pathname === link.path;
        const IconComponent = link.icon;
        return (
            <Link
                to={link.path}
                className={`navbar__icon-link ${isActive ? 'navbar__icon-link--active' : ''}`}
                aria-label={link.name}
                data-tooltip={link.name === 'Contact' ? 'Get In Touch' : link.name}
            >
                <IconComponent size={19} strokeWidth={isActive ? 2.3 : 1.8} />
            </Link>
        );
    };

    return (
        <nav className="navbar" aria-label="Main Navigation">
            {/* Floating Bottom App Navigation Dock */}
            <div className="navbar__dock">
                <div className="navbar__dock-inner">
                    {/* Left 4 Navigation Icons */}
                    <div className="navbar__group navbar__group--left">
                        {leftLinks.map((link) => (
                            <NavIcon key={link.name} link={link} />
                        ))}
                    </div>

                    {/* Centered CBS Logo */}
                    <Link to="/" className="navbar__logo-link" aria-label="CodeByShakir Home">
                        <img
                            src={whitelogo}
                            alt="CBS Logo"
                            className="navbar__logo-img"
                        />
                    </Link>

                    {/* Right 4 Navigation Actions (3 Page Icons + Theme Toggle) */}
                    <div className="navbar__group navbar__group--right">
                        {rightLinks.map((link) => (
                            <NavIcon key={link.name} link={link} />
                        ))}
                        <div className="navbar__theme-wrapper" data-tooltip="Theme Mode">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;