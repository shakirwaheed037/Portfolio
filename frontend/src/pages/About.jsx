import { Link } from 'react-router-dom';
import { Download, ExternalLink, FileText } from 'lucide-react';
import myimage from '../assets/images/myimage.jpg';
import cvPdf from '../assets/Shakir_Waheed CV.pdf';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-page__container">

                {/* Breadcrumbs */}
                <AnimatedSection className="no-print">
                    <div className="about__breadcrumbs">
                        <Link to="/" className="about__breadcrumb-link">Home</Link>
                        <span className="about__breadcrumb-sep">›</span>
                        <span className="about__breadcrumb-current">About Me</span>
                    </div>
                </AnimatedSection>

                {/* ── Main Bio Grid ── */}
                <div className="about__bio-grid no-print">

                    {/* Left — Text */}
                    <AnimatedSection className="about__bio-text-col">
                        <div>
                            <div className="about__bio-badge">
                                PROFESSIONAL BACKGROUND
                            </div>
                            <h1 className="about__bio-title">
                                Passionate Developer &<br />
                                <span className="text-primary">Lifelong Learner</span>
                            </h1>
                        </div>

                        <div className="about__bio-paragraphs">
                            <p>
                                My journey into the world of software development began with the fundamental building blocks of the web: HTML and CSS. I spent countless hours perfecting static layouts, focusing on precision and semantic structure. This foundation allowed me to transition seamlessly into the modern JavaScript ecosystem.
                            </p>
                            <p>
                                As I evolved as a developer, I mastered the <strong>React</strong> ecosystem, building dynamic, highly-responsive user interfaces that prioritize user experience. I thrive on the challenge of creating clean, reusable components and managing complex application states.
                            </p>
                            <p>
                                Currently, I am deepening my expertise in the <strong>MERN stack</strong>. I am heavily focused on Node.js, Express, and MongoDB, applying these skills in a professional backend internship. My goal is to engineer scalable, high-performance server-side solutions that power the next generation of web applications.
                            </p>
                        </div>

                        {/* Skills Pills */}
                        <div className="about__skills-pills">
                            {[
                                { icon: '</>', label: 'React.js', color: '#61dafb' },
                                { icon: 'DB', label: 'MongoDB', color: '#47A248' },
                                { icon: 'JS', label: 'Node.js', color: '#339933' }
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="about__skill-pill"
                                >
                                    <span style={{ color: skill.color }} className="about__skill-pill-icon">
                                        {skill.icon === 'DB' ? (
                                            <div className="about__icon-db">
                                                <div className="about__icon-db-line" />
                                                <div className="about__icon-db-line" />
                                                <div className="about__icon-db-line" />
                                            </div>
                                        ) : skill.icon === 'JS' ? (
                                            <div className="about__icon-js" />
                                        ) : skill.icon}
                                    </span>
                                    <span className="about__skill-pill-text">{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right — Image Card */}
                    <AnimatedSection className="about__bio-image-col">
                        <div className="about__bio-card">
                            <div className="about__bio-card-overlay" />
                            <img
                                src={myimage}
                                alt="Shakir Waheed"
                                className="about__bio-img"
                            />
                            <div className="about__bio-floating-badge hover-scale">
                                <div className="about__bio-badge-icon">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="about__bio-badge-text-top">CURRENT INTERNSHIP</span>
                                    <span className="about__bio-badge-text-bottom">Backend Developer</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* ── Skills Grid ── */}
                <AnimatedSection className="about__skills-section no-print">
                    <h2 className="about__skills-title">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <div className="about__skills-grid">
                        {[
                            { name: "React.js", level: 85 },
                            { name: "Node.js", level: 80 },
                            { name: "MongoDB", level: 75 },
                            { name: "Express.js", level: 80 },
                            { name: "JavaScript", level: 85 },
                            { name: "HTML & CSS", level: 95 },
                            { name: "Bootstrap", level: 90 },
                            { name: "Git & GitHub", level: 80 },
                        ].map((skill) => (
                            <div key={skill.name}>
                                <div className="about__skill-card hover-scale">
                                    <div className="about__skill-header">
                                        <span className="about__skill-name">{skill.name}</span>
                                        <span className="about__skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="about__skill-bar-bg">
                                        <div
                                            className="about__skill-bar-fill"
                                            style={{ '--skill-percent': `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* ── Curriculum Vitae / Resume PDF Viewer Section ── */}
                <AnimatedSection className="no-print">
                    <div className="about__pdf-container">
                        {/* CV Header Bar */}
                        <div className="about__pdf-header">
                            <div className="about__pdf-header-info">
                                <div className="about__pdf-badge">CURRICULUM VITAE</div>
                                <h2 className="about__pdf-title">
                                    Shakir Waheed <span className="text-primary">Resume</span>
                                </h2>
                                <p className="about__pdf-subtitle">
                                    Official verified CV document • MERN Stack Developer
                                </p>
                            </div>

                            <div className="about__pdf-actions">
                                <a
                                    href={cvPdf}
                                    download="Shakir-Waheed-CV.pdf"
                                    className="about__pdf-btn about__pdf-btn--primary"
                                    aria-label="Download CV as PDF"
                                >
                                    <Download size={18} />
                                    <span>Download CV</span>
                                </a>
                                <a
                                    href={cvPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about__pdf-btn about__pdf-btn--secondary"
                                    aria-label="Open Full CV in new tab"
                                >
                                    <ExternalLink size={18} />
                                    <span>Open Full CV</span>
                                </a>
                            </div>
                        </div>

                        {/* PDF Document Viewer Container */}
                        <div className="about__pdf-viewer-wrapper">
                            <object
                                data={`${cvPdf}#toolbar=1&navpanes=0`}
                                type="application/pdf"
                                className="about__pdf-viewer"
                                title="Shakir Waheed CV"
                            >
                                {/* Fallback for devices / browsers that do not render inline PDF objects */}
                                <div className="about__pdf-fallback">
                                    <FileText size={48} className="about__pdf-fallback-icon" />
                                    <h3 className="about__pdf-fallback-title">Shakir-Waheed-CV.pdf</h3>
                                    <p className="about__pdf-fallback-text">
                                        Preview is not supported directly in this browser frame. You can view or download the official CV using the buttons below:
                                    </p>
                                    <div className="about__pdf-fallback-actions">
                                        <a
                                            href={cvPdf}
                                            download="Shakir-Waheed-CV.pdf"
                                            className="about__pdf-btn about__pdf-btn--primary"
                                        >
                                            <Download size={18} />
                                            <span>Download CV</span>
                                        </a>
                                        <a
                                            href={cvPdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="about__pdf-btn about__pdf-btn--secondary"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Open Full CV</span>
                                        </a>
                                    </div>
                                </div>
                            </object>
                        </div>
                    </div>
                </AnimatedSection>

            </div>
        </div>
    );
};

export default About;
