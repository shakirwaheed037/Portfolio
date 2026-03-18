import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import myimage from '../assets/images/myimage.png';
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';
const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

                {/* Breadcrumbs */}
                <div className="flex items-center text-sm font-medium mb-12 no-print">
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                    <span className="text-gray-600 mx-2">›</span>
                    <span className="text-white">About Me</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24 no-print">
                    {/* Left Column: Text & Skills */}
                    <AnimatedSection direction="right" className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
                                PROFESSIONAL BACKGROUND
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                                Passionate Developer &<br />
                                <span className="text-primary">Lifelong Learner</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                My journey into the world of software development began with the fundamental building blocks of the web: HTML and CSS. I spent countless hours perfecting static layouts, focusing on precision and semantic structure. This foundation allowed me to transition seamlessly into the modern JavaScript ecosystem.
                            </p>
                            <p>
                                As I evolved as a developer, I mastered the <strong className="text-primary">React</strong> ecosystem, building dynamic, highly-responsive user interfaces that prioritize user experience. I thrive on the challenge of creating clean, reusable components and managing complex application states.
                            </p>
                            <p>
                                Currently, I am deepening my expertise in the <strong className="text-primary">MERN stack</strong>. I am heavily focused on Node.js, Express, and MongoDB, applying these skills in a professional backend internship. My goal is to engineer scalable, high-performance server-side solutions that power the next generation of web applications.
                            </p>
                        </div>

                        {/* Skills Pills */}
                        <div className="pt-8 flex flex-wrap gap-4">
                            {[
                                { icon: '</>', label: 'React.js', color: '#61dafb' },
                                { icon: 'DB', label: 'MongoDB', color: '#47A248' },
                                { icon: 'JS', label: 'Node.js', color: '#339933' }
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                    className="flex items-center gap-3 bg-[#131b2a] border border-white/5 py-2.5 px-6 rounded-lg shadow-sm cursor-default transition-colors"
                                >
                                    <span style={{ color: skill.color }} className="font-black text-xl leading-none">
                                        {skill.icon === 'DB' ? (
                                            <div className="flex flex-col gap-[2px]">
                                                <div className="w-4 h-[3px] bg-green-500 rounded-full"></div>
                                                <div className="w-4 h-[3px] bg-green-500 rounded-full"></div>
                                                <div className="w-4 h-[3px] bg-green-500 rounded-full"></div>
                                            </div>
                                        ) : skill.icon === 'JS' ? (
                                            <div className="w-4 h-4 rounded-sm border-[3px] border-[#339933]"></div>
                                        ) : skill.icon}
                                    </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">{skill.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right Column: Image Card */}
                    <AnimatedSection direction="left" className="lg:col-span-5 relative">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="rounded-3xl bg-[#1c2436] border border-white/10 overflow-hidden shadow-2xl relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:mx-0 group"
                        >
                            {/* Inner glow gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/10 opacity-60"></div>

                            {/* Headshot image */}
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                src={myimage}
                                alt="Shakir Waheed"
                                className="w-full h-full object-cover brightness-95 contrast-110"
                            />

                            {/* Current Internship Badge */}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 transform glass-effect border border-white/10 rounded-2xl p-4 flex items-center gap-4 w-[90%] max-w-[320px] shadow-xl z-20"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/20 flex flex-shrink-0 items-center justify-center border border-primary/30">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">CURRENT INTERNSHIP</span>
                                    <span className="text-white font-bold truncate">Backend Developer</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatedSection>
                </div>

                {/* Resume Section */}
                <AnimatedSection className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-12 text-center relative overflow-hidden my-16 group no-print">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>

                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20"
                    >
                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </motion.div>

                    <h2 className="text-3xl font-extrabold text-white mb-4">Looking for my Resume?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Download my detailed professional resume to see my full work history, technical skills, and certifications.
                    </p>

                    <Magnetic>
                        <motion.button
                            onClick={() => {
                                // Simple function to trigger print as a "download" or PDF generation
                                const cvElement = document.getElementById('cv-preview-container');
                                if (cvElement) {
                                    window.print();
                                }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary/20"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download CV
                        </motion.button>
                    </Magnetic>
                </AnimatedSection>

                {/* High-Fidelity CV Preview Section */}
                <div id="cv-preview-container" className="max-w-4xl mx-auto mb-20 print:m-0 print:p-0">
                    <AnimatedSection delay={0.2} className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 print:shadow-none print:rounded-none p-10 md:p-16">
                        
                        {/* CV Header */}
                        <div className="text-center border-b-2 border-slate-100 pb-10 mb-10">
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Shakir Waheed</h3>
                            <p className="text-primary font-bold text-lg tracking-widest uppercase mb-6">MERN Stack Developer</p>
                            
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
                                <span className="flex items-center gap-2">
                                    <span className="text-primary text-lg">📧</span> shakir03748@gmail.com
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-primary text-lg">📍</span> Peshawar, Pakistan
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="text-primary text-lg">💼</span> Remote / On-site
                                </span>
                            </div>
                        </div>

                        {/* Professional Summary */}
                        <section className="mb-12">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-[3px] bg-primary"></span>
                                Professional Summary
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Dedicated MERN Stack Developer with a passion for building scalable, high-performance web applications. Expertise in creating responsive frontends with React and robust backends with Node.js and MongoDB. Currently specializing in backend architecture and automation workflows, with a proven ability to deliver polished digital solutions.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            {/* Skills Section */}
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-[3px] bg-primary"></span>
                                    Technical Expertise
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'TailwindCSS', 'Bootstrap 5', 'Git/GitHub', 'REST APIs', 'n8n Automation'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Languages Section */}
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-[3px] bg-primary"></span>
                                    Languages
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { name: 'English', level: 'Professional Working Proficiency' },
                                        { name: 'Urdu', level: 'Native or Bilingual' },
                                        { name: 'Pashto', level: 'Native or Bilingual' }
                                    ].map(lang => (
                                        <div key={lang.name} className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-slate-800">{lang.name}</span>
                                            <span className="text-slate-500 font-medium italic">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Experience Section */}
                        <section className="mb-12">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-10 h-[3px] bg-primary"></span>
                                Work Experience
                            </h4>
                            <div className="space-y-10">
                                <div className="relative pl-8 border-l-2 border-slate-100">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                        <h5 className="font-bold text-slate-900 text-xl">Backend Development Intern</h5>
                                        <span className="text-primary font-bold text-sm tracking-wider md:mt-1">2023 — 2025</span>
                                    </div>
                                    <p className="text-slate-400 font-bold text-sm uppercase mb-4 tracking-widest">Brandora Software House</p>
                                    <ul className="text-slate-600 text-[15px] space-y-2 list-none">
                                        <li className="flex gap-3"><span className="text-primary mt-1">•</span> Developed and optimized REST APIs using Node.js and Express.</li>
                                        <li className="flex gap-3"><span className="text-primary mt-1">•</span> Designed robust database architectures with MongoDB for real-world projects.</li>
                                        <li className="flex gap-3"><span className="text-primary mt-1">•</span> Collaborated with cross-functional teams to deliver scalable server-side solutions.</li>
                                    </ul>
                                </div>

                                <div className="relative pl-8 border-l-2 border-slate-100">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                        <h5 className="font-bold text-slate-900 text-xl">Frontend Developer</h5>
                                        <span className="text-primary font-bold text-sm tracking-wider md:mt-1">2024 — 2026</span>
                                    </div>
                                    <p className="text-slate-400 font-bold text-sm uppercase mb-4 tracking-widest">PS Coders</p>
                                    <ul className="text-slate-600 text-[15px] space-y-2 list-none">
                                        <li className="flex gap-3"><span className="text-primary mt-1">•</span> Architected interactive user interfaces using React and modern design tokens.</li>
                                        <li className="flex gap-3"><span className="text-primary mt-1">•</span> Focused on high-fidelity responsive design and performance optimization.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="mb-16">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-10 h-[3px] bg-primary"></span>
                                Education
                            </h4>
                            <div className="relative pl-8 border-l-2 border-slate-100">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                    <h5 className="font-bold text-slate-900 text-xl">Bachelor of Science in Computer Science</h5>
                                    <span className="text-primary font-bold text-sm tracking-wider md:mt-1">Exp. Graduation 2026</span>
                                </div>
                                <p className="text-slate-400 font-bold text-sm uppercase mb-3 tracking-widest">KUST University</p>
                                <p className="text-slate-600 leading-relaxed max-w-2xl">
                                    Specializing in Software Engineering and Modern Web Architectures with a focus on core computer science foundations.
                                </p>
                            </div>
                        </section>

                        {/* CV Footer */}
                        <div className="pt-10 border-t border-slate-100 flex justify-between items-center opacity-40">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Portfolio CV Revision 2.0</span>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Digital Milestone</div>
                        </div>
                    </AnimatedSection>
                </div>

            </div>

            {/* Minimal Footer Area */}
            {/* <div className="border-t border-border mt-auto w-full no-print">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-6 text-gray-400 mb-6">
                        <a href="#" className="hover:text-white transition-colors" aria-label="Github">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Link">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Email">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 Shakir Waheed. Built with modern technology and passion.
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default About;
