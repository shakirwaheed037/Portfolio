import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, AtSign, Globe } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulated submission - EmailJS logic would go here
            console.log('Form submitted:', formData);
            setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'shakir03748@gmail.com',
            link: 'mailto:shakir03748@gmail.com'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Location',
            value: 'Peshawar, Pakistan',
            link: '#'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            label: 'Work',
            value: 'Available for Remote',
            link: '#'
        }
    ];

    return (
        <div className="pt-20 min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto py-12 lg:py-20">
                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Me</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
                        Get In <span className="text-primary">Touch.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to new opportunities and creative collaborations.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <AnimatedSection direction="left" delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.link}
                                    whileHover={{ x: 10 }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-6 group hover:border-primary/50 transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{info.label}</p>
                                        <p className="text-lg font-semibold text-white">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.4}>
                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <AtSign size={120} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Social Presence</h3>
                                <p className="text-gray-400 mb-6">Follow me for more updates on my projects and journey.</p>
                                <div className="flex gap-4">
                                    {[
                                        { name: 'Github', url: 'https://github.com/shakirwaheed037' },
                                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shakir-waheed-2s' },
                                        { name: 'Twitter', url: 'https://twitter.com/shakir03748' },
                                        { name: 'WhatsApp', url: 'https://wa.me/+923316708756?text=Hello%20Shakir%I%am%link%from%your%CBS%Portfolio' }
                                    ].map((social) => (
                                        <Magnetic key={social.name}>
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-primary hover:border-primary transition-all duration-300 inline-block"
                                            >
                                                {social.name}
                                            </a>
                                        </Magnetic>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <AnimatedSection direction="right" delay={0.3} className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
                                            <User size={14} className="mr-2 text-primary" />
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
                                            <AtSign size={14} className="mr-2 text-primary" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
                                        <Globe size={14} className="mr-2 text-primary" />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
                                        <MessageSquare size={14} className="mr-2 text-primary" />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                                        placeholder="Your project details..."
                                        required
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success'
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                            }`}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span className="text-lg">Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
