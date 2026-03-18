import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
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
import Express from '../assets/icon/express.svg';
import React from '../assets/icon/React.svg';
import n8n from '../assets/icon/n8n.svg';




const Home = ({ onHireMeClick }) => {
    // ... existing variants ...

    const floatingIcons = [
        { name: "React.js", icon: React, delay: 0.7 },
        { name: "Node.js", icon: Node, delay: 0.4 },
        { name: "Express.js", icon: Express, delay: 0.6 },
        { name: "MongoDB", icon: MongoDB, delay: 0.5 },
        { name: "Bootstrap", icon: Bootstrap, delay: 0 },
        { name: "Github", icon: Github, delay: 0.1 },
        { name: "C++", icon: cpp, delay: 0.2 },
        { name: "Python", icon: Python, delay: 0.3 },
        { name: "n8n", icon: n8n, delay: 0.8 },

    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }




    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden flex-grow flex items-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-6"
                        >
                            AVAILABLE FOR FREELANCE
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
                        >
                            Hi, I'm <span className="text-primary">Shakir<br />Waheed</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="mt-4 text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
                        >
                            MERN Stack Developer crafting responsive and interactive digital experiences. I combine clean, functional design with scalable code to build apps that users love.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Magnetic>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-primary hover:bg-blue-600 font-medium transition-colors w-full sm:w-auto shadow-lg shadow-blue-500/20"
                                    >
                                        View Projects <span className="ml-2 font-bold">+</span>
                                    </Link>
                                </motion.div>
                            </Magnetic>
                            <Magnetic>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <button
                                        onClick={onHireMeClick}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-md text-gray-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white font-medium transition-colors w-full sm:w-auto"
                                    >
                                        Hire Me
                                    </button>
                                </motion.div>
                            </Magnetic>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-effect rounded-[2rem] p-4 pb-20 relative w-full max-w-md border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                            <div className="aspect-[4/5] w-full bg-[#1c2436] rounded-[1.5rem] overflow-hidden mb-[-4rem] relative z-10">
                                <img
                                    src={myimage}
                                    alt="Shakir Waheed"
                                    className="w-full h-full object-cover brightness-95 contrast-110"
                                />
                            </div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-effect rounded-full px-6 py-3 flex items-center gap-3 whitespace-nowrap z-20 shadow-xl border-white/20"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                                    M
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Current Role</span>
                                    <span className="text-sm text-white font-medium">MERN Stack Builder</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Banner */}
            <section className="py-8 border-y border-white/5 overflow-hidden">
                <AnimatedSection delay={0.2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center opacity-70 gap-8 transition-all duration-500">
                        {floatingIcons.map((icon, i) => (
                            <motion.div
                                key={icon.name}
                                className="flex items-center gap-2"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: icon.delay
                                }}
                            >
                                <img
                                    src={icon.icon}
                                    alt={icon.name}
                                    className="w-7 h-8 object-contain brightness-1 invert"
                                />

                                <span className="font-bold tracking-widest text-sm uppercase">
                                    {icon.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Me</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Transforming Ideas into <span className="text-primary">Scalable Reality</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                With hands-on experience across the MERN stack, I design and develop web applications that are both performant and visually striking. My workflow merges coding expertise with an eye for detail, turning concepts into polished, functional solutions.
                            </p>
                            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-[#1c2436] hover:bg-[#252f44] border border-white/5 font-medium transition-colors text-sm mb-12">
                                See More <span className="ml-2 font-bold mb-0.5">↗</span>
                            </Link>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-[#131b2a] border border-white/5">
                                    <div className="text-3xl font-extrabold text-white mb-2">50+</div>
                                    <div className="text-sm text-gray-500">Projects Completed</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-[#131b2a] border border-white/5">
                                    <div className="text-3xl font-extrabold text-white mb-2">12+</div>
                                    <div className="text-sm text-gray-500">Global Clients</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl bg-[#161d2b] border border-white/5 h-full flex flex-col justify-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
                                <p className="text-gray-400"> Crafting seamless user interfaces paired with robust backend systems that deliver real value to users and businesses alike.</p>
                            </div>
                            {/* <div className="p-8 rounded-2xl bg-[#161d2b] border border-white/5 h-full flex flex-col justify-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-lg">
                                    {`</>`}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Execution</h3>
                                <p className="text-gray-400">Architecting robust backend systems using Node.js and MongoDB to handle scaling, distributed traffic and data.</p>
                            </div> */}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Featured Projects */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
                        <h2 className="text-4xl font-extrabold text-white">Featured Projects</h2>
                        <Link to="/projects" className="flex items-center text-primary text-sm font-semibold hover:text-blue-400 transition-colors uppercase tracking-wider">
                            Explore More <span className="ml-2 font-bold text-lg mb-1">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project 1 */}
                        <div className="group rounded-2xl bg-[#161d2b] border border-white/5 overflow-hidden transition-all hover:border-white/20">
                            <div className="aspect-[4/3] bg-[#222b3e] relative overflow-hidden">
                                {/* Placeholder gradient resembling the dark mesh */}

                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"> <img
                                    src={Techcourses}
                                    alt="techcourses web platform image"

                                /></div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded uppercase tracking-wider">React</span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 text-xs font-semibold rounded uppercase tracking-wider">Node</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Tech Courses Web Platform</h3>
                                <p className="text-gray-400 text-sm">A full-stack course platform with authentication, role-based access, course management, and image uploads.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group rounded-2xl bg-[#161d2b] border border-white/5 overflow-hidden transition-all hover:border-white/20">
                            <div className="aspect-[4/3] bg-[#1a2c2b] relative overflow-hidden flex items-center justify-center">
                                {/* Dashboard sketch placeholder */}

                                <div className="w-[80%] h-[60%] border border-teal-500/30 rounded bg-teal-900/10">  <img
                                    src={movieapp}
                                    alt="movieapp image"

                                /></div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded uppercase tracking-wider">REACT</span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 text-xs font-semibold rounded uppercase tracking-wider">API</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Movie Search App</h3>
                                <p className="text-gray-400 text-sm">A React movie explorer that fetches data from a movie API to search, view details, and save favorites.</p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group rounded-2xl bg-[#161d2b] border border-white/5 overflow-hidden transition-all hover:border-white/20">
                            <div className="aspect-[4/3] bg-[#161616] relative overflow-hidden flex items-center justify-center">
                                {/* Car sketch placeholder */}

                                <div className="w-[80%] h-[40%] rounded-full bg-gray-600/20 ">   <img
                                    src={hostpital}
                                    alt="hostpital image"

                                /></div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded uppercase tracking-wider">BOOTSTRAP 5</span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 text-xs font-semibold rounded uppercase tracking-wider">HEALTH</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Hospital Appointment Management Web</h3>
                                <p className="text-gray-400 text-sm">A responsive hospital website where patients can view doctors and schedule appointments easily.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Achievements Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <AnimatedSection className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Achievements & Certifications</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <div className="w-5 h-5 border-2 border-primary rounded-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-2 h-2.5 border-r-2 border-b-2 border-primary rotate-45"></div>
                                </div>
                            </div>
                            <h3 className="text-white font-bold mb-1">MERN Stack</h3>
                            <p className="text-xs text-primary font-semibold mb-3 tracking-wider">CERTIFIED</p>
                            <p className="text-gray-400 text-xs px-4">Certified Professional at React Development</p>
                        </div>

                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <div className="w-5 h-5 rounded-md border-2 border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-white font-bold mb-1">Data Analyst</h3>
                            <p className="text-xs text-primary font-semibold mb-3 tracking-wider">Certified</p>
                            <p className="text-gray-400 text-xs px-4">Working with data and analysis of data</p>
                        </div>

                        {/* <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                            </div>
                            <h3 className="text-white font-bold mb-1">Hackathon Finalist</h3>
                            <p className="text-xs text-primary font-semibold mb-3 tracking-wider">TECHFEST</p>
                            <p className="text-gray-400 text-xs px-4">Top 10 Global Web Innovation Challenge</p>
                        </div> */}

                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                            </div>
                            <h3 className="text-white font-bold mb-1">CS Graduate</h3>
                            <p className="text-xs text-primary font-semibold mb-3 tracking-wider">FROM KUST UNIVERSITY</p>
                            <p className="text-gray-400 text-xs px-4">Bachelor of Science of Computer Science</p>
                        </div>
                    </div>

                    <Link to="/achievements">
                        <button className="inline-flex items-center text-gray-300 text-sm font-medium hover:text-white bg-[#1c2436] border border-white/5 px-6 py-2.5 rounded-md transition-colors">
                            Show More Achievements <span className="ml-2 text-xs">▼</span>
                        </button>
                    </Link>
                </AnimatedSection>
            </section>

            {/* Services Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-white">Expert <span className="text-primary">Services</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Frontend Engineering</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">I build responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and Responsive React interfaces with clean, intuitive UX.</p>
                        </div>

                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8 transform md:-translate-y-4">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 text-white font-bold font-mono">
                                {"{ }"}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">I develop secure, scalable APIs and web apps using Node.js, Express, and MongoDB. Secure and scalable server-side logic, API integrations, and complex database architectures.</p>
                        </div>

                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 text-white pb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">UI/UX Strategy</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">User-centric design systems that bridge the gap between complex functionality and seamless ergonomics.</p>
                        </div>

                        <div className="bg-[#161d2b] border border-white/5 rounded-2xl p-8">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 text-white pb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI & Automation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Workflow automation and agentic AI integration using tools like n8n for smarter web solutions.</p>
                        </div>

                    </div>
                </AnimatedSection>
            </section>




            {/* Insights / Blog Section */}
            {/* <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0f1523]">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <h2 className="text-3xl font-extrabold text-white">Latest Insights</h2>
                        <Link to="/blog" className="text-primary text-sm font-semibold tracking-wider hover:text-blue-400 uppercase">
                            VIEW ALL POSTS →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col sm:flex-row gap-6 bg-[#161d2b] border border-white/5 rounded-2xl p-4">
                            <div className="w-full sm:w-1/3 aspect-video sm:aspect-square bg-[#0d131f] rounded-xl flex items-center justify-center shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                            </div>
                            <div className="py-2 flex flex-col justify-center">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">ENGINEERING</span>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">Mastering React Hooks in 2024</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">Deep dive into advanced patterns for managing state and side effects in enterprise React apps.</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mt-auto">
                                    <span>Oct 2</span>
                                    <span>•</span>
                                    <span>4 min read</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 bg-[#161d2b] border border-white/5 rounded-2xl p-4">
                            <div className="w-full sm:w-1/3 aspect-video sm:aspect-square bg-[#0d131f] rounded-xl flex items-center justify-center shrink-0">
                                <div className="w-16 h-12 bg-gray-600 rounded"></div>
                            </div>
                            <div className="py-2 flex flex-col justify-center">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">ARCHITECTURE</span>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">Why MongoDB for Startups?</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">Understanding the flexibility and speed it delivers for lean databases in fast-growing ecosystems.</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mt-auto">
                                    <span>Sep 28</span>
                                    <span>•</span>
                                    <span>6 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section> */}




            {/* Contact Section */}
            <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <AnimatedSection className="max-w-3xl mx-auto relative z-10 glass-effect p-10 sm:p-14 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Let's Build Something <span className="text-primary">Incredible</span></h2>
                        <p className="text-gray-400 text-lg">Ready to start your next digital revolution? Drop a message.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0d131f] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#0d131f] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                            <textarea
                                rows="5"
                                className="w-full bg-[#0d131f] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                        >
                            <span>Send Message</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </motion.button>
                    </form>
                </AnimatedSection>
            </section>
        </div>
    );

};
export default Home;
