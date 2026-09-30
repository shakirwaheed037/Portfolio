import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Terminal, CheckCircle2, Cpu } from 'lucide-react';
import whitelogo from '../assets/images/whitelogo.png';
import '../styles/Footer.css';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/shakirwaheed037", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/shakir-waheed-2s", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/shakirwaheed", label: "Twitter" },
    ];

    return (
        <footer className="footer-status glass-effect">
            <div className="footer-status__container">
                <div className="footer-status__grid">
                    {/* Brand / Logo */}
                    <div className="footer-status__brand">
                        <img src={whitelogo} alt="CodeByShakir" className="footer-status__logo" />
                        <div className="footer-status__connection">
                            <span className="status-dot pulse-green"></span>
                            <span className="status-text font-mono">CONNECTION ESTABLISHED</span>
                        </div>
                    </div>

                    {/* System Status Metrics */}
                    <div className="footer-status__metrics font-mono">
                        <div className="metric-row">
                            <CheckCircle2 size={14} className="text-green" />
                            <span>SYSTEM.STATUS:</span>
                            <span className="text-green">ONLINE</span>
                        </div>
                        <div className="metric-row">
                            <Cpu size={14} className="text-blue" />
                            <span>PORTFOLIO.CORE:</span>
                            <span className="text-blue">v2.0.4</span>
                        </div>
                        <div className="metric-row">
                            <Terminal size={14} className="text-gray" />
                            <span>TERMINAL:</span>
                            <span className="terminal-cursor">READY_</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer-status__socials">
                        <span className="social-label font-mono">INITIALIZE_CONNECTIVITY:</span>
                        <div className="social-links-wrapper">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label={social.label}>
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-status__bottom font-mono">
                    <p className="copyright-text">
                        <span className="terminal-prompt">$</span> echo "© 2024 - {new Date().getFullYear()} CodeByShakir. All rights reserved."
                    </p>
                    <div className="legal-links">
                        <Link to="#">./privacy-policy</Link>
                        <Link to="#">./terms-of-service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
