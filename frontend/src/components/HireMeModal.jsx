import { X, Send, User, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/HireMeModal.css';

const HireMeModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Form submitted:', formData);
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });

            // Auto close after success
            setTimeout(() => {
                onClose();
                setStatus({ type: '', message: '' });
            }, 3000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="modal-backdrop"
            />

            {/* Modal Content */}
            <div
                className="modal-content"
            >
                {/* Header */}
                <div className="modal-header">
                    <div className="modal-header-bg"></div>
                    <div className="modal-header-text-container">
                        <h2 className="modal-title">Let's Work Together</h2>
                        <p className="modal-subtitle">Tell me about your project</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label className="form-label">
                            <User size={14} className="form-label-icon" />
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Shakir Waheed"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <Mail size={14} className="form-label-icon" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="cbs@gmail.com"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <MessageSquare size={14} className="form-label-icon" />
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Can you help me with..."
                            className="form-input"
                            required
                        />
                    </div>

                    {status.message && (
                        <div
                            className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}
                        >
                            {status.message}
                        </div>
                    )}

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="form-submit-btn hover-scale"
                    >
                        {isSubmitting ? (
                            <div className="spinner" />
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HireMeModal;
