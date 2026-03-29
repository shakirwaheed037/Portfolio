import { Mail, Phone, MapPin, Send, User, MessageSquare, AtSign, Globe } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

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
        <div className="contact-page">
            {/* Background elements */}
            <div className="contact-page__bg-glow-1"></div>
            <div className="contact-page__bg-glow-2"></div>

            <div className="contact-page__container">
                <AnimatedSection className="contact__header">
                    <div className="contact__header-badge hover-scale">
                        <div className="contact__header-line"></div>
                        <span className="contact__header-label">Contact Me</span>
                    </div>
                    <h1 className="contact__header-title">
                        Get In <span className="text-primary">Touch.</span>
                    </h1>
                    <p className="contact__header-desc">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to new opportunities and creative collaborations.
                    </p>
                </AnimatedSection>

                <div className="contact__grid">
                    {/* Contact Info */}
                    <div className="contact__info-col">
                        <AnimatedSection className="contact__info-blocks">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={info.label}
                                    href={info.link}
                                    className="contact__info-card hover-scale"
                                >
                                    <div className="contact__info-icon-wrapper">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="contact__info-label">{info.label}</p>
                                        <p className="contact__info-value">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </AnimatedSection>

                        <AnimatedSection>
                            <div className="contact__social-card hover-scale">
                                <div className="contact__social-bg-icon">
                                    <AtSign size={120} />
                                </div>
                                <h3 className="contact__social-title">Social Presence</h3>
                                <p className="contact__social-desc">Follow me for more updates on my projects and journey.</p>
                                <div className="contact__social-links">
                                    {[
                                        { name: 'Github', url: 'https://github.com/shakirwaheed037' },
                                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shakir-waheed-2s' },
                                        { name: 'Twitter', url: 'https://twitter.com/shakir03748' },
                                        { name: 'WhatsApp', url: 'https://wa.me/923316708756?text=Hello%20Shakir,%20I%20am%20contacting%20you%20from%20your%20portfolio.' }
                                    ].map((social) => (
                                        <Magnetic key={social.name}>
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="contact__social-link"
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
                    <div className="contact__form-col">
                        <AnimatedSection className="contact__form-wrapper hover-scale">
                            <form onSubmit={handleSubmit} className="contact__form">
                                <div className="contact__form-row">
                                    <div className="contact__form-group">
                                        <label className="contact__form-label">
                                            <User className="contact__form-label-icon" />
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="contact__form-input"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="contact__form-group">
                                        <label className="contact__form-label">
                                            <AtSign className="contact__form-label-icon" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="contact__form-input"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact__form-group">
                                    <label className="contact__form-label">
                                        <Globe className="contact__form-label-icon" />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="contact__form-input"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label className="contact__form-label">
                                        <MessageSquare className="contact__form-label-icon" />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="contact__form-input contact__form-textarea"
                                        placeholder="Your project details..."
                                        required
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div
                                        className={`contact__form-status ${status.type === 'success' ? 'contact__form-status--success' : 'contact__form-status--error'}`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="contact__form-submit hover-scale"
                                >
                                    {isSubmitting ? (
                                        <div className="contact__form-spinner"></div>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
