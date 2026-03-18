import { useState } from 'react';
import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';
import reacttodoapp from "../assets/projects/reacttodoapp.jpg";
import reactcalculater from "../assets/projects/reactcalculater.jpg";
import agecalculater from "../assets/projects/agecalculater.jpg";
import Techcourses from "../assets/projects/Techcourses.jpg";
import hostpital from "../assets/projects/hostpital.png";
import urlshortener from "../assets/projects/urlshortener.png";
import movieapp from "../assets/projects/movieapp.png";
import { Search, ExternalLink, Github, ChevronDown, Server, Layout, GitMerge, MessageSquare, Activity, Workflow, CheckSquare, Calculator, Clock, Link, Film } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "React Todo App",
            description: "A simple React task manager where users can add, delete, and manage daily tasks using dynamic state updates.",
            badges: ["REACT", "FRONTEND"],
            footerText: "React.js",
            footerIcon: CheckSquare,
            iconColor: "text-blue-500",
            image: reacttodoapp,
            githubUrl: "https://github.com/shakirwaheed037/Todo-app-with-react.js"
        },
        {
            id: 2,
            title: "React Calculator",
            description: "A responsive calculator built with React that performs basic arithmetic operations using dynamic state handling.",
            badges: ["REACT", "FRONTEND"],
            footerText: "React.js",
            footerIcon: Calculator,
            iconColor: "text-blue-500",
            image: reactcalculater,
            githubUrl: "https://github.com/shakirwaheed037/React-Calculator"
        },
        {
            id: 3,
            title: "Advanced Age Calculator",
            description: "A React application that calculates age in years, months, days, and hours with accurate input validation.",
            badges: ["REACT", "FRONTEND"],
            footerText: "React.js",
            footerIcon: Clock,
            iconColor: "text-emerald-500",
            image: agecalculater,
            githubUrl: "https://github.com/shakirwaheed037/Age-Calculater"
        },
        {
            id: 4,
            title: "Tech Courses Web Platform",
            description: "A full-stack course platform with authentication, role-based access, course management, and image uploads.",
            badges: ["MERN", "BACKEND"],
            footerText: "Node.js, Express, MongoDB",
            footerIcon: Server,
            iconColor: "text-blue-500",
            image: Techcourses,
            githubUrl: "https://github.com/shakirwaheed037/Tech-Courses-Web-Platform"
        },
        {
            id: 5,
            title: "Hospital Appointment Management Web",
            description: "A responsive hospital website where patients can view doctors and schedule appointments easily.",
            badges: ["FRONTEND", "BOOTSTRAP"],
            footerText: "Bootstrap 5",
            footerIcon: Activity,
            iconColor: "text-blue-500",
            image: hostpital,
            githubUrl: "https://github.com/shakirwaheed037/hospitalManagementWebsite"
        },
        {
            id: 6,
            title: "URL Shortener",
            description: "A MERN-based tool that converts long URLs into short links with copy functionality and click tracking.",
            badges: ["MERN", "API", "BACKEND"],
            footerText: "React, Node.js, Express, MongoDB",
            footerIcon: Link,
            iconColor: "text-emerald-500",
            image: urlshortener,
            githubUrl: "https://github.com/shakirwaheed037/URL-Shortener"
        },
        {
            id: 7,
            title: "Movie Search App",
            description: "A React movie explorer that fetches data from a movie API to search, view details, and save favorites.",
            badges: ["REACT", "API"],
            footerText: "React, Movie API, JavaScript",
            footerIcon: Film,
            iconColor: "text-emerald-500",
            image: movieapp,
            githubUrl: "https://github.com/shakirwaheed037/Movie-App"

        }
    ];

    const filters = ["All", "Frontend", "Backend", "n8n"];

    const filteredProjects = projects.filter(p => {
        if (filter === 'All') return true;
        if (filter === 'Frontend') return p.badges.includes('FRONTEND');
        if (filter === 'Backend') return p.badges.includes('BACKEND');
        if (filter === 'n8n') return p.badges.includes('N8N');
        return true;
    });

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
                {/* Header Section */}
                <AnimatedSection className="mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Portfolio 2024 Showcase</span>
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
                        Projects <span className="text-primary">Gallery</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                        A curated collection of full-stack applications, interactive interfaces, and intelligent automation workflows, showcasing both creativity and technical depth.
                    </p>
                </AnimatedSection>

                {/* Filters and Search */}
                <AnimatedSection delay={0.1} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div className="flex bg-[#161d2b] rounded-full p-1.5 border border-white/5 overflow-x-auto max-w-full hide-scrollbar">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${filter === f
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {f}
                                {f === 'n8n' && (
                                    <div className={`w-2 h-2 rounded-full ${filter === f ? 'bg-white' : 'bg-emerald-500'}`}></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* search bar of the project */}
                    {/* <div className="relative w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full bg-[#161d2b] border border-white/5 rounded-full pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-500"
                        />
                    </div> */}
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            title={project.title}
                            description={project.description}
                            tags={project.badges}
                            image={project.image}
                            demoUrl="#"
                            githubUrl={project.githubUrl}
                            direction={index % 2 === 0 ? "up" : "down"}
                        />
                    ))}
                </div>

                {/* Footer Actions */}
                <AnimatedSection delay={0.3} className="flex flex-col items-center justify-center text-center pb-12">
                    <Magnetic>
                        <button className="flex items-center gap-2 bg-[#161d2b] hover:bg-white/5 border border-white/5 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors mb-10 w-full sm:w-auto justify-center">
                            Explore All Projects
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>
                    </Magnetic>

                    <p className="text-sm text-gray-400 mb-3">Looking for more? Explore the full source code archive.</p>
                    <a href="https://github.com/shakirwaheed037" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary text-sm font-semibold hover:text-blue-400 transition-colors">
                        <Github className="w-4 h-4" /> Visit GitHub Repository &rarr;
                    </a>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Projects;
