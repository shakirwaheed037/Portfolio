import { useState } from 'react';
import { Link } from 'react-router-dom';
import pscodercertificate from '../assets/certificates/pscodercertificate.jpg'
import courserabootstrap from '../assets/certificates/courserabootstrap.jpg'
import courseragithub from '../assets/certificates/courseragithub.jpg'
import courseraintrohtmlcssjs from '../assets/certificates/courseraintrohtmlcssjs.jpg'
import DEP from '../assets/certificates/DEP.jpg'
import courserareact from '../assets/certificates/courserareact.jpg'
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';
import '../styles/Achievements.css';

const Achievements = () => {
    const [activeCategory, setActiveCategory] = useState("All Categories");

    // Certificate data reflecting the image
    const certificates = [
        {
            id: 1,
            title: "Frontend Development",
            issuer: "PS Coders",
            date: "11st Oct 2024",
            badge: "PS CODER VERIFIED",
            category: "Frontend",
            image: pscodercertificate,
            link: pscodercertificate
        },
        {
            id: 2,
            title: "Backend Devlopment",
            issuer: "Brandora Software House - kohat pak",
            date: "Aug 2023",
            badge: "Brandora",
            category: "Backend",
            image: DEP,
            link: DEP
        },
        {
            id: 3,
            title: "Bootstrap 5 ",
            issuer: "Coursera",
            date: "Jun 2023",
            badge: "Coursera IBM",
            category: "Frontend",
            image: courserabootstrap,
            link: courserabootstrap
        },
        {
            id: 4,
            title: "Git & GitHub Workflow",
            issuer: "Coursera",
            date: "31st May 2025",
            badge: "Coursera IBM",
            category: "Frontend",
            image: courseragithub,
            link: courseragithub
        },
        {
            id: 5,
            title: "Frontend Development",
            issuer: "DEP digital empowernment pakistan",
            date: "31st Aug 2024",
            badge: "DEP",
            category: "Frontend",
            image: DEP,
            link: DEP
        },
        {
            id: 6,
            title: "React",
            issuer: "Coursera",
            date: "29th Jan 2025",
            badge: "Board Infinity",
            category: "Frontend",
            image: courserareact,
            link: courserareact
        },
        {
            id: 7,
            title: "HTML & CSS & JavaScript",
            issuer: "Coursera",
            date: "4th May 2025",
            badge: "IBM",
            category: "Frontend",
            image: courseraintrohtmlcssjs,
            link: courseraintrohtmlcssjs
        }
    ];

    const categories = ["All Categories", "Frontend", "Backend", "N8N Automation", "Data Analytics"];

    const filteredCertificates = activeCategory === "All Categories"
        ? certificates
        : certificates.filter(cert => cert.category === activeCategory);

    return (
        <div className="achievements-page">
            <div className="achievements-page__container">

                {/* Header Section */}
                <AnimatedSection className="achievements__header">
                    <div className="achievements__header-content">
                        <div className="achievements__header-badge">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                            VERIFIED MILESTONES
                        </div>
                        <h1 className="achievements__header-title">
                            Achievements &<br />
                            <span className="text-primary">Certifications</span>
                        </h1>
                        <p className="achievements__header-desc">
                            A curated collection of professional credentials, academic awards, and certifications reflecting my journey in modern web development, MERN stack mastery, and AI-driven automation.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Category Filters */}
                <AnimatedSection className="achievements__categories">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`achievements__category-btn ${activeCategory === category
                                ? "achievements__category-btn--active"
                                : "achievements__category-btn--inactive"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </AnimatedSection>

                {/* Certificates Grid */}
                <div className="achievements__grid">
                    {filteredCertificates.map((cert, index) => (
                        <AnimatedSection 
                            key={cert.id} 
                            direction={index % 2 === 0 ? "left" : "right"}
                            className="achievements__cert-wrapper"
                        >
                            <div className="achievements__cert-card hover-scale">
                                {/* Image Trailer / Header */}
                                <div className="achievements__cert-img-container">
                                    {/* Badge */}
                                    <div className="achievements__cert-badge">
                                        {cert.badge}
                                    </div>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="achievements__cert-img"
                                    />
                                    {/* Gradient fade to contents */}
                                    <div className="achievements__cert-gradient"></div>
                                </div>

                                {/* Body */}
                                <div className="achievements__cert-body">
                                    <h3 className="achievements__cert-title">{cert.title}</h3>
                                    <p className="achievements__cert-issuer">{cert.issuer}</p>

                                    {/* Bottom Row */}
                                    <div className="achievements__cert-footer">
                                        <div className="achievements__cert-date">
                                            <svg className="achievements__cert-date-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                            {cert.date}
                                        </div>
                                        <Magnetic strength={0.3}>
                                            <a
                                                href={cert.link}
                                                className="achievements__cert-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Certificate
                                                <svg className="achievements__cert-link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                </svg>
                                            </a>
                                        </Magnetic>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Bottom Collaboration CTA */}
                <AnimatedSection className="achievements__cta">
                    {/* Background glow top right */}
                    <div className="achievements__cta-glow"></div>

                    <div className="achievements__cta-content">
                        <h2 className="achievements__cta-title">
                            Interested in working<br />
                            <span className="text-primary">together?</span>
                        </h2>
                        <p className="achievements__cta-desc">
                            I'm currently available for freelance projects and full-time remote roles. Let's build something exceptional.
                        </p>

                        <div className="achievements__cta-buttons">
                            <Magnetic>
                                <div>
                                    <Link to="/contact" className="achievements__cta-btn-primary hover-scale">
                                        Get In Touch
                                    </Link>
                                </div>
                            </Magnetic>
                            <Magnetic>
                                <div>
                                    <Link to="/projects" className="achievements__cta-btn-secondary hover-scale">
                                        View Projects
                                    </Link>
                                </div>
                            </Magnetic>
                        </div>
                    </div>

                    {/* Rocket Icon Graphic */}
                    <div className="achievements__cta-graphic">
                        <div className="achievements__graphic-circle-1">
                            <div className="achievements__graphic-circle-2">
                                <svg className="achievements__graphic-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19ZM5.64003 12.5L1.81003 10.87L7.91003 8.1C7.00003 9.46 6.22003 10.93 5.64003 12.5ZM21.61 2.39C21.53 2.39 21.46 2.4 21.38 2.41H21.37L21.33 2.42C16.81 2.96 4.30003 8.1 4.30003 8.1C3.96003 8.24 3.75003 8.57 3.75003 8.93C3.75003 9.17 3.86003 9.41 4.05003 9.58L9.00003 14L8.26003 16.21C8.16003 16.49 8.23003 16.8 8.44003 17.02C8.61003 17.18 8.84003 17.26 9.07003 17.26C9.17003 17.26 9.27003 17.24 9.37003 17.19L11.57 15.71L15.34 20.91C15.52 21.15 15.8 21.28 16.09 21.27C16.39 21.26 16.66 21.1 16.82 20.84L16.85 20.79V20.78C16.85 20.78 22.28 7.37 22.56 2.6V2.58C22.59 2.12 22.18 1.76 21.61 2.39Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Achievements;
