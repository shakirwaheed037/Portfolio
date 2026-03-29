import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import whitelogo from '../assets/images/whitelogo.png';
import '../styles/Footer.css';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/shakirwaheed037" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/shakir-waheed-2s" },
        { icon: Twitter, href: "https://twitter.com/shakirwaheed" },
    ];

    return (
        <footer className="footer glass-effect">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__logo-container">
                        <img
                            src={whitelogo}
                            alt="CodeByShakir Logo"
                            className="footer__logo-img"
                        />
                    </div>

                    <div className="footer__socials">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="footer__social-link"
                            >
                                <social.icon className="footer__social-icon" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; 2026 CodeByShakir. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <Link to="#" className="footer__legal-link">Privacy Policy</Link>
                        <Link to="#" className="footer__legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
