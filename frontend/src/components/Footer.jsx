import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import whitelogo from '../assets/images/whitelogo.png';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/shakirwaheed037" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/shakir-waheed-2s" },
        { icon: Twitter, href: "https://twitter.com/shakirwaheed" },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect border-t border-border mt-20"
        >
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-white">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src={whitelogo}
                            alt="CodeByShakir Logo"
                            className="w-[9rem] h-[6rem] object-contain"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                whileHover={{
                                    scale: 1.2,
                                    color: '#3b82f6',
                                    filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.6))'
                                }}
                                whileTap={{ scale: 0.9 }}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 transition-colors"
                            >
                                <social.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border pt-8">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        &copy; 2026 CodeByShakir. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
