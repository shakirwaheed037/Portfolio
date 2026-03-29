import { Link } from 'react-router-dom';
import alizeb from "../assets/images/alizeb.jpg";
import sabir from "../assets/images/sabir.jpg";
import hashir from "../assets/images/hashir.jpg";
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';
import '../styles/Experience.css';

const Experience = () => {
    // Hardcoded timeline matching the image
    const timelineData = [
        {
            id: 1,
            role: "Backend Development",
            company: "Brandora Software House – Kohat, Pakistan",
            period: "June 2025 – Dec 2025",
            description: "Learned backend development using Node.js, Express.js, and MongoDB in a real project environment. Worked on REST APIs, database design, and server-side logic with mentors.",
            technologies: ["Node.js", "Express.js", "MongoDB", "RestAPI"],
            iconType: "briefcase"
        },
        {
            id: 2,
            role: "Frontend Development",
            company: "PS Coders – NIC KUST University, KPK ,Pakistan",
            period: "Oct 2025 - Jun 2026",
            description: "Contributed to web projects using HTML, CSS3, jQuery, Bootstrap. Improved UI/UX by working with senior developers.",
            technologies: ["HTML", "CSS", "jQery", "JavaScript"],
            iconType: "book"
        },
        {
            id: 3,
            role: "Backend Development Intern",
            company: "Digital Empowernment Pakistan DEP – Remote",
            period: "1st Aug 2024 – 31st Oct 2024",
            description: "Worked on mini-projects with HTML, CSS, and JavaScript. Learned performance optimization, responsiveness, and user experience improvements.",
            technologies: ["HTML", "CSS", "JavaScript"],
            iconType: "briefcase"
        },
        {
            id: 4,
            role: "Final Year Project Developer",
            company: "Kohat University",
            period: "Oct 2025 - Jun 2026",
            description: "Developed a full-stack e-learning platform with real-time video streaming capabilities. Implemented JWT authentication and complex relational database schemas.",
            technologies: ["React", "Node.js", "MongoDB"],
            iconType: "book"
        },
        {
            id: 5,
            role: "Certifications & Self Learning",
            company: "Coursera & Self Study",
            period: "2024 – Present",
            description: "Completed React, Bootstrap, and Prompt Engineering. Currently learning Node.js, Express.js, MongoDB. Built projects with Python OOP and MySQL.",
            technologies: ["React", "Bootstrap", "Prompt Engineering"],
            iconType: "book"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Dr.Muhammad Ali Zeb",
            role: "Instructor , Kohat University",
            quote: "\"Shakir has a remarkable attention to detail and a natural ability to build responsive, modern interfaces. He’s a true asset to any frontend team.”\"",
            avatar: alizeb
        },
        {
            id: 2,
            name: "Sabir Ud din",
            role: "Senoir Software Developer, Brandora",
            quote: "\"A passionate developer who’s always open to feedback and eager to learn. His portfolio reflects his strong command over frontend technologies.”\"",
            avatar: sabir
        },
        {
            id: 3,
            name: "Hashir Mehmmod",
            role: "Lead UI/UX Designer",
            quote: "\"“Working with Shakir on our university projects has always been inspiring. His consistency and curiosity push everyone around him to do better.”\"",
            avatar: hashir
        }
    ];

    const skills = [
        { title: "Backend", desc: "Robust server-side logic and API construction.", icon: "server" },
        { title: "REST API", desc: "Secure and efficient data communication layers.", icon: "api" },
        { title: "Database", desc: "Schema design and query optimization.", icon: "database" },
        { title: "UI Development", desc: "Responsive and interactive modern user interfaces.", icon: "ui" }
    ];

    const renderIcon = (type) => {
        switch (type) {
            case "briefcase":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
            case "book":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;
            case "layout":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>;
            case "server":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>;
            case "api":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>;
            case "database":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>;
            case "ui":
                return <svg className="experience__skill-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>;
            default: return null;
        }
    };

    return (
        <div className="experience-page">
            <div className="experience-page__container">

                {/* Hero Header */}
                <AnimatedSection className="experience__hero">
                    <h1 className="experience__hero-title">My Experience</h1>
                    <div className="experience__hero-subtitle">
                        A JOURNEY THROUGH PROFESSIONAL GROWTH
                    </div>
                    <Magnetic>
                        <button className="experience__hero-btn">
                            <svg className="experience__hero-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download Full CV
                        </button>
                    </Magnetic>
                    {/* Faint blue glow */}
                    <div className="experience__hero-glow"></div>
                </AnimatedSection>

                {/* Vertical Timeline */}
                <div className="experience__timeline">
                    {/* Center Line */}
                    <div className="experience__timeline-line"></div>

                    <div className="experience__timeline-items">
                        {timelineData.map((item, index) => {
                            const isRight = index % 2 === 0;
                            return (
                                <AnimatedSection
                                    key={item.id}
                                    direction={isRight ? 'right' : 'left'}
                                    className={`experience__timeline-item ${isRight ? 'experience__timeline-item--right' : 'experience__timeline-item--left'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="experience__timeline-node">
                                        {renderIcon(item.iconType)}
                                    </div>

                                    {/* Content Card container */}
                                    <div className="experience__timeline-content-wrapper">
                                        <div className="experience__timeline-card hover-scale">
                                            {/* Hover gradient flare */}
                                            <div className="experience__timeline-card-flare"></div>

                                            <div className="experience__timeline-period">
                                                {item.period}
                                            </div>
                                            <h3 className="experience__timeline-role">{item.role}</h3>
                                            <h4 className="experience__timeline-company">{item.company}</h4>

                                            <p className="experience__timeline-desc">
                                                {item.description}
                                            </p>

                                            <div className="experience__timeline-techs">
                                                {item.technologies.map(tech => (
                                                    <span key={tech} className="experience__timeline-tech">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="experience__testimonials-section">
                    <AnimatedSection className="experience__section-header">
                        <div className="experience__section-subtitle">
                            FEEDBACK FROM CLIENTS & PEERS
                        </div>
                        <h2 className="experience__section-title">
                            Client Testimonials
                            <div className="experience__section-title-underline"></div>
                        </h2>
                    </AnimatedSection>

                    <div className="experience__testimonials-grid">
                        {testimonials.map((testimonial) => (
                            <AnimatedSection key={testimonial.id}>
                                <Magnetic strength={0.1}>
                                    <div className="experience__testimonial-card hover-scale">
                                        <div className="experience__testimonial-quote-icon">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21Z" />
                                                <path d="M3.01703 21L3.01703 18C3.01703 16.8954 3.91246 16 5.01703 16H8.01703C9.1216 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.1216 23 8.01703 23H5.01703C3.91246 23 3.01703 22.1046 3.01703 21Z" />
                                            </svg>
                                        </div>
                                        <p className="experience__testimonial-text">
                                            {testimonial.quote}
                                        </p>
                                        <div className="experience__testimonial-author">
                                            <div className="experience__testimonial-avatar">
                                                <img src={testimonial.avatar} alt={testimonial.name} />
                                            </div>
                                            <div>
                                                <h4 className="experience__testimonial-name">{testimonial.name}</h4>
                                                <p className="experience__testimonial-role">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Magnetic>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Skills Applied */}
                <div className="experience__skills-section">
                    <AnimatedSection className="experience__section-header">
                        <h2 className="experience__section-title">
                            Skills Applied in Real Projects
                            <div className="experience__section-title-underline"></div>
                        </h2>
                    </AnimatedSection>

                    <div className="experience__skills-grid">
                        {skills.map((skill, index) => (
                            <AnimatedSection key={index}>
                                <div className="experience__skill-card hover-scale">
                                    {renderIcon(skill.icon)}
                                    <h3 className="experience__skill-title">{skill.title}</h3>
                                    <p className="experience__skill-desc">
                                        {skill.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <AnimatedSection className="experience__cta text-center">
                    <div className="experience__cta-bg"></div>
                    <div className="experience__cta-content">
                        <h2 className="experience__cta-title">Want to know more?</h2>
                        <p className="experience__cta-desc">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="experience__cta-buttons">
                            <Magnetic>
                                <div>
                                    <button className="experience__cta-btn-primary hover-scale">
                                        <svg className="experience__cta-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        Download CV
                                    </button>
                                </div>
                            </Magnetic>
                            <Magnetic>
                                <div>
                                    <Link to="/contact" className="experience__cta-btn-secondary hover-scale">
                                        <svg className="experience__cta-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Get In Touch
                                    </Link>
                                </div>
                            </Magnetic>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Experience;
