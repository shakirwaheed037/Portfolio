import { Link } from 'react-router-dom';
import alizeb from "../assets/images/alizeb.jpg";
import sabir from "../assets/images/sabir.jpg";
import hashir from "../assets/images/hashir.jpg";
import { motion } from "framer-motion";
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';

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
                return <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
            case "book":
                return <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;
            case "layout":
                return <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>;
            case "server":
                return <svg className="w-6 h-6 text-primary mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>;
            case "api":
                return <svg className="w-6 h-6 text-primary mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>;
            case "database":
                return <svg className="w-6 h-6 text-primary mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>;
            case "ui":
                return <svg className="w-6 h-6 text-primary mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>;
            default: return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

                {/* Hero Header */}
                <AnimatedSection className="text-center mb-24 relative">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">My Experience</h1>
                    <div className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-8">
                        A JOURNEY THROUGH PROFESSIONAL GROWTH
                    </div>
                    <Magnetic>
                        <button className="inline-flex items-center justify-center px-6 py-2.5 bg-[#131b2a] border border-primary/30 hover:border-primary/80 hover:bg-primary/10 text-white font-medium rounded-lg transition-all text-sm">
                            <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download Full CV
                        </button>
                    </Magnetic>
                    {/* Faint blue glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
                </AnimatedSection>

                {/* Vertical Timeline */}
                <div className="relative max-w-5xl mx-auto mb-32">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16">
                        {timelineData.map((item, index) => {
                            const isRight = index % 2 === 0;
                            return (
                                <AnimatedSection
                                    key={item.id}
                                    direction={isRight ? "right" : "left"}
                                    delay={index * 0.1}
                                    className={`flex flex-col md:flex-row relative items-center w-full ${isRight ? 'md:justify-end' : 'md:justify-start'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0f18] border-[3px] border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                        {renderIcon(item.iconType)}
                                    </div>

                                    {/* Content Card container */}
                                    <div className={`w-full md:w-[45%] ${isRight ? 'md:pl-10' : 'md:pr-10'} relative`}>
                                        <motion.div
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="glass-effect rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all bg-[#131b2a]/80 relative group overflow-hidden"
                                        >
                                            {/* Hover gradient flare */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="flex items-center text-primary font-bold text-sm mb-3">
                                                {item.period}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{item.role}</h3>
                                            <h4 className="text-[15px] text-gray-400 font-medium mb-5">{item.company}</h4>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary font-medium text-[11px] rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="mb-32">
                    <AnimatedSection className="text-center mb-16">
                        <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3">
                            FEEDBACK FROM CLIENTS & PEERS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                            Client Testimonials
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded"></div>
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection delay={index * 0.1} key={testimonial.id} direction="up" distance={20}>
                                <Magnetic strength={0.1}>
                                    <div className="bg-[#131b2a] border border-white/5 p-8 rounded-3xl h-full flex flex-col relative group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21Z" />
                                                <path d="M3.01703 21L3.01703 18C3.01703 16.8954 3.91246 16 5.01703 16H8.01703C9.1216 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.1216 23 8.01703 23H5.01703C3.91246 23 3.01703 22.1046 3.01703 21Z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">
                                            {testimonial.quote}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                                                <p className="text-primary text-[10px] font-bold uppercase tracking-wider">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Magnetic>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Skills Applied */}
                <div className="mb-24">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white relative inline-block">
                            Skills Applied in Real Projects
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded"></div>
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <AnimatedSection key={index} delay={index * 0.1} className="bg-[#131b2a] border border-white/5 rounded-2xl p-6 text-center hover:border-primary/20 transition-colors group">
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="transform transition-transform">
                                    {renderIcon(skill.icon)}
                                </motion.div>
                                <h3 className="text-white font-bold text-[15px] mb-2">{skill.title}</h3>
                                <p className="text-gray-500 text-[12px] leading-relaxed">
                                    {skill.desc}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <AnimatedSection className="bg-[#111827] border border-white/5 rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden my-16 max-w-5xl mx-auto shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Want to know more?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-[15px] leading-relaxed">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Magnetic>
                            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-primary/20">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                Download CV
                            </button>
                        </Magnetic>
                        <Magnetic>
                            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#1a2333] border border-primary/30 hover:bg-[#1f2937] text-primary font-bold text-sm rounded-xl transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Get In Touch
                            </Link>
                        </Magnetic>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Experience;
