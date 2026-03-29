import { Link } from 'react-router-dom';

import AnimatedSection from '../components/AnimatedSection';
import Achievements from "../pages/Achievements.jsx";
import myimage from '../assets/images/myimage.png';
import Techcourses from '../assets/projects/Techcourses.jpg';
import movieapp from '../assets/projects/movieapp.png';
import hostpital from '../assets/projects/hostpital.png';
import Magnetic from '../components/Magnetic';
import TechBackground from '../components/TechBackground';
// imported icons below
import Bootstrap from '../assets/icon/Bootstrap.svg';
import GitHub from '../assets/icon/GitHub.svg';
import cpp from '../assets/icon/cpp.svg';
import Python from '../assets/icon/Python.svg';
import Node from '../assets/icon/Node.svg';
import MongoDB from '../assets/icon/MongoDB.svg';
import Express from '../assets/icon/Express.svg';
import ReactIcon from '../assets/icon/React.svg';
import n8n from '../assets/icon/n8n.svg';

import '../styles/Home.css';


const Home = ({ onHireMeClick }) => {
    const floatingIcons = [
        { name: "React.js", icon: ReactIcon },
        { name: "Node.js", icon: Node },
        { name: "Express.js", icon: Express },
        { name: "MongoDB", icon: MongoDB },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "Github", icon: GitHub },
        { name: "C++", icon: cpp },
        { name: "Python", icon: Python },
        { name: "n8n", icon: n8n },
    ];

    return (
        <div className="home-page__container">
            {/* Hero Section */}
            <section className="home__hero home__section">
                <div className="home__hero-glow"></div>

                <div className="home__hero-grid">
                    <div>
                        <div className="home__hero-badge">
                            AVAILABLE FOR FREELANCE
                        </div>
                        <h1 className="home__hero-title">
                            Hi, I'm <span className="text-primary animate-heartbeat" style={{ display: 'inline-block' }}>Shakir Waheed</span>
                        </h1>
                        <p className="home__hero-desc">
                            MERN Stack Developer crafting responsive and interactive digital experiences. I combine clean, functional design with scalable code to build apps that users love.
                        </p>
                        <div className="home__hero-buttons">
                            <Magnetic>
                                <div>
                                    <Link to="/projects" className="home__btn-primary">
                                        View Projects <span className="ml-2 font-bold">+</span>
                                    </Link>
                                </div>
                            </Magnetic>
                            <Magnetic>
                                <div>
                                    <button onClick={onHireMeClick} className="home__btn-secondary">
                                        Hire Me
                                    </button>
                                </div>
                            </Magnetic>
                        </div>
                    </div>

                    <div className="home__hero-image-wrapper">
                        <div className="home__hero-card">
                            <div className="home__hero-card-gradient"></div>
                            <div className="home__hero-image-inner">
                                <img
                                    src={myimage}
                                    alt="Shakir Waheed"
                                    className="home__hero-img"
                                />
                            </div>

                            <div className="home__hero-floating-badge">
                                <div className="home__hero-badge-icon">
                                    M
                                </div>
                                <div className="flex flex-col">
                                    <span className="home__hero-badge-text-top">Current Role</span>
                                    <span className="home__hero-badge-text-bottom">MERN Stack Builder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Tech Stack Banner */}
            <section className="home__tech-banner home__section">
                <AnimatedSection delay={0.2} className="home__section-inner">
                    <div className="home__tech-grid">
                        {floatingIcons.map((icon) => (
                            <div
                                key={icon.name}
                                className="home__tech-item"
                            >
                                <img
                                    src={icon.icon}
                                    alt={icon.name}
                                    className="home__tech-icon"
                                />

                                <span className="home__tech-name">
                                    {icon.name}
                                </span>
                            </div>
                        ))}

                    </div>
                </AnimatedSection>
            </section>

            {/* About Section */}
            <section className="home-section home__section">
                <AnimatedSection className="home__section-inner">
                    <div className="home-section__badge">
                        <div className="home-section__badge-line"></div>
                        <span className="home-section__badge-text">About Me</span>
                    </div>

                    <div className="home__about-grid">
                        <div>
                            <h2 className="home__about-title">
                                Transforming Ideas into <span className="text-primary">Scalable Reality</span>
                            </h2>
                            <p className="home__about-desc">
                                With hands-on experience across the MERN stack, I design and develop web applications that are both performant and visually striking. My workflow merges coding expertise with an eye for detail, turning concepts into polished, functional solutions.
                            </p>
                            <Link to="/about" className="home__about-link hover-scale">
                                See More <span>↗</span>
                            </Link>

                            <div className="home__stats-grid">
                                <div className="home__stat-card">
                                    <div className="home__stat-number">50+</div>
                                    <div className="home__stat-label">Projects Completed</div>
                                </div>
                                <div className="home__stat-card">
                                    <div className="home__stat-number">12+</div>
                                    <div className="home__stat-label">Global Clients</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="home__vision-card hover-scale">
                                <div className="home__vision-icon-wrap">
                                    <div className="home__vision-icon-dot"></div>
                                </div>
                                <h3>Vision</h3>
                                <p>Crafting seamless user interfaces paired with robust backend systems that deliver real value to users and businesses alike.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Featured Projects */}
            <section className="home-section home__section">
                <AnimatedSection className="home__section-inner">
                    <div className="home-section__badge">
                        <div className="home-section__badge-line"></div>
                        <span className="home-section__badge-text">Portfolio</span>
                    </div>

                    <div className="home__projects-header">
                        <h2 className="home__projects-title">Featured Projects</h2>
                        <Link to="/projects" className="home__projects-link">
                            Explore More <span>→</span>
                        </Link>
                    </div>

                    <div className="home__projects-grid">
                        {/* Project 1 */}
                        <div className="home__project-card hover-scale">
                            <div className="home__project-image home__project-image--bg1">
                                <div className="home__project-image-gradient"></div>
                                <img
                                    src={Techcourses}
                                    alt="techcourses web platform image"
                                />
                            </div>
                            <div className="home__project-content">
                                <div className="home__project-tags">
                                    <span className="home__project-tag home__project-tag--primary">React</span>
                                    <span className="home__project-tag home__project-tag--secondary">Node</span>
                                </div>
                                <h3 className="home__project-title">Tech Courses Web Platform</h3>
                                <p className="home__project-desc">A full-stack course platform with authentication, role-based access, course management, and image uploads.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="home__project-card hover-scale">
                            <div className="home__project-image home__project-image--bg2">
                                <div className="home__project-dashbg">
                                    <img
                                        src={movieapp}
                                        alt="movieapp image"
                                    />
                                </div>
                            </div>
                            <div className="home__project-content">
                                <div className="home__project-tags">
                                    <span className="home__project-tag home__project-tag--primary">REACT</span>
                                    <span className="home__project-tag home__project-tag--secondary">API</span>
                                </div>
                                <h3 className="home__project-title">Movie Search App</h3>
                                <p className="home__project-desc">A React movie explorer that fetches data from a movie API to search, view details, and save favorites.</p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="home__project-card hover-scale">
                            <div className="home__project-image home__project-image--bg3">
                                <div className="home__project-orb">
                                    <img
                                        src={hostpital}
                                        alt="hostpital image"
                                    />
                                </div>
                            </div>
                            <div className="home__project-content">
                                <div className="home__project-tags">
                                    <span className="home__project-tag home__project-tag--primary">BOOTSTRAP 5</span>
                                    <span className="home__project-tag home__project-tag--secondary">HEALTH</span>
                                </div>
                                <h3 className="home__project-title">Hospital Appointment Management Web</h3>
                                <p className="home__project-desc">A responsive hospital website where patients can view doctors and schedule appointments easily.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Achievements Section */}
            <section className="home-section home__section">
                <AnimatedSection className="home__section-inner home__achievements">
                    <h2 className="home__achievements-title">Achievements & Certifications</h2>

                    <div className="home__achievements-grid">
                        <div className="home__achievement-card hover-scale">
                            <div className="home__achievement-icon-wrapper">
                                <div className="home__achievement-icon1"></div>
                            </div>
                            <h3 className="home__achievement-title">MERN Stack</h3>
                            <p className="home__achievement-badge">CERTIFIED</p>
                            <p className="home__achievement-desc">Certified Professional at React Development</p>
                        </div>

                        <div className="home__achievement-card hover-scale">
                            <div className="home__achievement-icon-wrapper">
                                <div className="home__achievement-icon2"></div>
                            </div>
                            <h3 className="home__achievement-title">Data Analyst</h3>
                            <p className="home__achievement-badge">Certified</p>
                            <p className="home__achievement-desc">Working with data and analysis of data</p>
                        </div>

                        <div className="home__achievement-card hover-scale">
                            <div className="home__achievement-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                            </div>
                            <h3 className="home__achievement-title">CS Graduate</h3>
                            <p className="home__achievement-badge">FROM KUST UNIVERSITY</p>
                            <p className="home__achievement-desc">Bachelor of Science of Computer Science</p>
                        </div>
                    </div>

                    <Link to="/achievements">
                        <button className="home__achievements-btn hover-scale">
                            Show More Achievements <span>▼</span>
                        </button>
                    </Link>
                </AnimatedSection>
            </section>

            {/* Services Section */}
            <section className="home-section home__section">
                <AnimatedSection className="home__section-inner">
                    <div className="home__services-header">
                        <h2 className="home__services-title">Expert <span className="text-primary">Services</span></h2>
                    </div>

                    <div className="home__services-grid">
                        <div className="home__service-card hover-scale">
                            <div className="home__service-icon-wrapper">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="home__service-title">Frontend Engineering</h3>
                            <p className="home__service-desc">I build responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and Responsive React interfaces with clean, intuitive UX.</p>
                        </div>

                        <div className="home__service-card home__service-card--offset hover-scale">
                            <div className="home__service-icon-wrapper">
                                <span className="home__service-icon-text">{"{ }"}</span>
                            </div>
                            <h3 className="home__service-title">Backend Development</h3>
                            <p className="home__service-desc">I develop secure, scalable APIs and web apps using Node.js, Express, and MongoDB. Secure and scalable server-side logic.</p>
                        </div>

                        <div className="home__service-card hover-scale">
                            <div className="home__service-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            </div>
                            <h3 className="home__service-title">UI/UX Strategy</h3>
                            <p className="home__service-desc">User-centric design systems that bridge the gap between complex functionality and seamless ergonomics.</p>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Contact Section */}
            <section id="contact" className="home__contact-section home__section">
                <div className="home__contact-glow"></div>
                <AnimatedSection className="home__contact-card">
                    <div className="home__contact-header">
                        <h2 className="home__contact-title">Let's Build Something <span className="text-primary">Incredible</span></h2>
                        <p className="home__contact-desc">Ready to start your next digital revolution? Drop a message.</p>
                    </div>

                    <form className="home__contact-form">
                        <div className="home__contact-grid-local">
                            <div className="home__contact-group">
                                <label className="home__contact-label">Your Name</label>
                                <input
                                    type="text"
                                    className="home__contact-input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="home__contact-group">
                                <label className="home__contact-label">Email Address</label>
                                <input
                                    type="email"
                                    className="home__contact-input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="home__contact-group">
                            <label className="home__contact-label">Message</label>
                            <textarea
                                rows="5"
                                className="home__contact-input"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="home__contact-submit hover-scale"
                        >
                            <span>Send Message</span>
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </form>
                </AnimatedSection>
            </section>
        </div>
    );

};
export default Home;
