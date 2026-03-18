import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import pscodercertificate from '../assets/certificates/pscodercertificate.jpg'
import courserabootstrap from '../assets/certificates/courserabootstrap.jpg'
import courseragithub from '../assets/certificates/courseragithub.jpg'
import courseraintrohtmlcssjs from '../assets/certificates/courseraintrohtmlcssjs.jpg'
import DEP from '../assets/certificates/DEP.jpg'
import courserareact from '../assets/certificates/courserareact.jpg'
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';

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
            badgeColor: "bg-blue-500",
            category: "Frontend",
            image: pscodercertificate,// Generic cert placeholder
            link: pscodercertificate
        },
        {
            id: 2,
            title: "Backend Devlopment",
            issuer: "Brandora Software House - kohat pak",
            date: "Aug 2023",
            badge: "Brandora",
            badgeColor: "bg-blue-500",
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
            badgeColor: "bg-blue-500",
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
            badgeColor: "bg-blue-500",
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
            badgeColor: "bg-blue-500",
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
            badgeColor: "bg-blue-500",
            category: "Frontend",
            image: courserareact,
            link: courserareact
        },
        {
            id: 7, // Fixed duplicate ID 6 to 7
            title: "HTML & CSS & JavaScript",
            issuer: "Coursera",
            date: "4th May 2025",
            badge: "IBM",
            badgeColor: "bg-blue-500",
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
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                            VERIFIED MILESTONES
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
                            Achievements &<br />
                            <span className="text-primary">Certifications</span>
                        </h1>
                        <p className="text-gray-400 text-lg mt-6 max-w-xl">
                            A curated collection of professional credentials, academic awards, and certifications reflecting my journey in modern web development, MERN stack mastery, and AI-driven automation.
                        </p>
                    </div>

                    <Magnetic>
                        {/* <button className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-[#131b2a] border border-white/10 hover:border-primary/50 hover:bg-white/5 text-gray-300 font-medium rounded-xl transition-all text-sm whitespace-nowrap h-fit">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download All PDFs
                        </button> */}
                    </Magnetic>
                </AnimatedSection>

                {/* Category Filters */}
                <AnimatedSection delay={0.1} className="flex flex-wrap gap-3 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                                : "bg-[#131b2a] border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </AnimatedSection>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredCertificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="h-full"
                            >
                                <motion.div
                                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)" }}
                                    className="bg-[#131b2a] border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all group flex flex-col h-full relative p-2 shadow-xl"
                                >
                                    {/* Image Trailer / Header */}
                                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-black/40">
                                        {/* Badge */}
                                        <div className={`absolute top-4 right-4 z-20 ${cert.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-lg`}>
                                            {cert.badge}
                                        </div>
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        {/* Gradient fade to contents */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#131b2a] via-[#131b2a]/40 to-transparent"></div>
                                    </div>

                                    {/* Body */}
                                    <div className="px-6 flex-grow flex flex-col pb-4">
                                        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 flex-grow">{cert.issuer}</p>

                                        {/* Bottom Row */}
                                        <div className="flex items-center justify-between pt-6 mt-auto border-t border-white/5">
                                            <div className="flex items-center text-gray-500 text-xs">
                                                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                                {cert.date}
                                            </div>
                                            <Magnetic strength={0.3}>
                                                <motion.a
                                                    whileHover={{ x: 3 }}
                                                    href={cert.link}
                                                    className="inline-flex items-center text-primary text-sm font-bold hover:text-blue-400 transition-colors py-2"
                                                >
                                                    View Certificate
                                                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                    </svg>
                                                </motion.a>
                                            </Magnetic>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Collaboration CTA */}
                <AnimatedSection className="bg-[#111827] border border-white/5 rounded-[2.5rem] p-10 sm:p-16 lg:p-20 relative overflow-hidden my-16 max-w-7xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Background glow top right */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                    <div className="max-w-xl relative z-10 w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Interested in working<br />
                            <span className="text-primary">together?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            I'm currently available for freelance projects and full-time remote roles. Let's build something exceptional.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Magnetic>
                                <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-blue-600 text-white font-bold text-[15px] rounded-xl transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 transform">
                                    Get In Touch
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link to="/projects" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#182133] border border-white/5 hover:bg-[#1e293b] text-white font-bold text-[15px] rounded-xl transition-all">
                                    View Projects
                                </Link>
                            </Magnetic>
                        </div>
                    </div>

                    {/* Rocket Icon Graphic */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 opacity-40">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[1px] border-white/5 flex items-center justify-center relative">
                            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[1px] border-white/10 flex items-center justify-center relative">
                                <svg className="w-24 h-24 sm:w-32 sm:h-32 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19ZM5.64003 12.5L1.81003 10.87L7.91003 8.1C7.00003 9.46 6.22003 10.93 5.64003 12.5ZM21.61 2.39C21.53 2.39 21.46 2.4 21.38 2.41H21.37L21.33 2.42C16.81 2.96 4.30003 8.1 4.30003 8.1C3.96003 8.24 3.75003 8.57 3.75003 8.93C3.75003 9.17 3.86003 9.41 4.05003 9.58L9.00003 14L8.26003 16.21C8.16003 16.49 8.23003 16.8 8.44003 17.02C8.61003 17.18 8.84003 17.26 9.07003 17.26C9.17003 17.26 9.27003 17.24 9.37003 17.19L11.57 15.71L15.34 20.91C15.52 21.15 15.8 21.28 16.09 21.27C16.39 21.26 16.66 21.1 16.82 20.84L16.85 20.79V20.78C16.85 20.78 22.28 7.37 22.56 2.6V2.58C22.59 2.12 22.18 1.76 21.61 2.39Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </div>

            {/* Minimal Footer Area */}
            {/* <div className="border-t border-border mt-auto w-full">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                    <div className="flex items-center justify-center gap-3 text-white">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <p className="text-white text-[10px] font-black leading-none">{'<>'}</p>
                        </div>
                        <p className="text-gray-500 text-xs text-center md:text-left">
                            &copy; 2024 Shakir Waheed. Built with React & Tailwind CSS.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Github">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Link">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        </a>
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Email">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Achievements;
