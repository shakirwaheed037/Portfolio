import { Link } from 'react-router-dom';
import myimage from '../assets/images/myimage.png';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/About.css';

const About = () => {
    const handleDownloadCV = () => {
        window.print();
    };

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
                        ].map((skill, i) => (
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

                {/* ── CV Preview ── */}
                <AnimatedSection className="no-print">
                    <div id="cv-preview-container" className="about__cv-container">
                        {/* CV Header */}
                        <div className="about__cv-header">
                            <div className="about__cv-avatar">
                                <img src={myimage} alt="Shakir Waheed" />
                            </div>
                            <div>
                                <h2 className="about__cv-title">Shakir Waheed</h2>
                                <p className="about__cv-subtitle">MERN Stack Developer</p>
                                <div className="about__cv-contact">
                                    <span>shakir03748@gmail.com</span>
                                    <span>Peshawar, Pakistan</span>
                                    <a href="https://github.com/shakirwaheed037">github.com/shakirwaheed037</a>
                                </div>
                            </div>
                        </div>

                        {/* CV Body */}
                        <div className="about__cv-body">
                            {/* Skills */}
                            <section className="about__cv-section">
                                <h4 className="about__cv-section-title">
                                    <span className="about__cv-section-line" />
                                    Technical Skills
                                </h4>
                                <div className="about__cv-skills-grid">
                                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML & CSS', 'Bootstrap', 'Git & GitHub'].map(s => (
                                        <div key={s} className="about__cv-skill-item">
                                            <span className="about__cv-skill-dot" />
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Languages */}
                            <section className="about__cv-section">
                                <h4 className="about__cv-section-title">
                                    <span className="about__cv-section-line" />
                                    Languages
                                </h4>
                                <div className="about__cv-langs">
                                    {[
                                        { name: 'English', level: 'Professional Working Proficiency' },
                                        { name: 'Urdu', level: 'Native or Bilingual' },
                                        { name: 'Pashto', level: 'Native or Bilingual' }
                                    ].map(lang => (
                                        <div key={lang.name} className="about__cv-lang-item">
                                            <span className="about__cv-lang-name">{lang.name}</span>
                                            <span className="about__cv-lang-level">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Experience */}
                            <section className="about__cv-section">
                                <h4 className="about__cv-section-title">
                                    <span className="about__cv-section-line" />
                                    Work Experience
                                </h4>
                                <div className="about__cv-timeline-layer">
                                    <div className="about__cv-timeline-item">
                                        <div className="about__cv-timeline-dot" />
                                        <div className="about__cv-timeline-header">
                                            <h5 className="about__cv-timeline-title">Backend Development Intern</h5>
                                            <span className="about__cv-timeline-date">2023 — 2025</span>
                                        </div>
                                        <p className="about__cv-timeline-org">Brandora Software House</p>
                                        <ul className="about__cv-timeline-list">
                                            <li><span className="about__cv-timeline-bullet">•</span> <span className="about__cv-timeline-text">Developed and optimized REST APIs using Node.js and Express.</span></li>
                                            <li><span className="about__cv-timeline-bullet">•</span> <span className="about__cv-timeline-text">Designed robust database architectures with MongoDB for real-world projects.</span></li>
                                            <li><span className="about__cv-timeline-bullet">•</span> <span className="about__cv-timeline-text">Collaborated with cross-functional teams to deliver scalable server-side solutions.</span></li>
                                        </ul>
                                    </div>
                                    <div className="about__cv-timeline-item">
                                        <div className="about__cv-timeline-dot" />
                                        <div className="about__cv-timeline-header">
                                            <h5 className="about__cv-timeline-title">Frontend Developer</h5>
                                            <span className="about__cv-timeline-date">2024 — 2026</span>
                                        </div>
                                        <p className="about__cv-timeline-org">PS Coders</p>
                                        <ul className="about__cv-timeline-list">
                                            <li><span className="about__cv-timeline-bullet">•</span> <span className="about__cv-timeline-text">Architected interactive user interfaces using React and modern design tokens.</span></li>
                                            <li><span className="about__cv-timeline-bullet">•</span> <span className="about__cv-timeline-text">Focused on high-fidelity responsive design and performance optimization.</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section className="about__cv-section" style={{ marginBottom: "4rem" }}>
                                <h4 className="about__cv-section-title">
                                    <span className="about__cv-section-line" />
                                    Education
                                </h4>
                                <div className="about__cv-timeline-item">
                                    <div className="about__cv-timeline-dot" />
                                    <div className="about__cv-timeline-header">
                                        <h5 className="about__cv-timeline-title">Bachelor of Science in Computer Science</h5>
                                        <span className="about__cv-timeline-date">Exp. Graduation 2026</span>
                                    </div>
                                    <p className="about__cv-timeline-org">KUST University</p>
                                    <p className="about__cv-timeline-text">
                                        Specializing in Software Engineering and Modern Web Architectures with a focus on core computer science foundations.
                                    </p>
                                </div>
                            </section>

                            {/* CV Footer */}
                            <div className="about__cv-footer">
                                <span className="about__cv-footer-left">Portfolio CV Revision 2.0</span>
                                <div className="about__cv-footer-right">Verified Digital Milestone</div>
                            </div>
                        </div>
                    </div>

                    <div className="about__cv-download-section">
                        <button 
                            onClick={handleDownloadCV} 
                            className="about__cv-download-btn hover-scale"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download Full CV as PDF
                        </button>
                    </div>
                </AnimatedSection>

            </div>
        </div>
    );
};

export default About;
