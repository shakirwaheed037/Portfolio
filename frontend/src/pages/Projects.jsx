import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import reacttodoapp from "../assets/projects/reacttodoapp.jpg";
import reactcalculater from "../assets/projects/reactcalculater.jpg";
import agecalculater from "../assets/projects/agecalculater.jpg";
import fyp from "../assets/projects/fyp.png";
import Techcourses from "../assets/projects/Techcourses.jpg";
import hostpital from "../assets/projects/hostpital.png";
import urlshortener from "../assets/projects/urlshortener.png";
import movieapp from "../assets/projects/movieapp.png";
import { Search, ExternalLink, Github, ChevronDown, Server, Layout, GitMerge, MessageSquare, Activity, Workflow, CheckSquare, Calculator, Clock, Link, Film } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Magnetic from '../components/Magnetic';

import '../styles/Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
      
          {
            id: 1,
            title: "Interns-Portal",
            description: "Interns Portal is a full-stack internship management web application designed to connect students, companies, and administrators on a single platform. It allows students to apply for internships, companies to post opportunities, and admins to manage the entire system efficiently.",
            badges: ["FRONTEND", "BACKEND"],
            footerText: "MERN Stack",
            footerIcon: CheckSquare,
            iconColor: "text-blue-500",
            image: fyp,
            githubUrl: "https://github.com/shakirwaheed037/interns.git",
            liveUrl: "https://interns-manag.vercel.app/"

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
        },
          {
            id: 8,
            title: "React Todo App",
            description: "A simple React task manager where users can add, delete, and manage daily tasks using dynamic state updates.",
            badges: ["REACT", "FRONTEND"],
            footerText: "React.js",
            footerIcon: CheckSquare,
            iconColor: "text-blue-500",
            image: reacttodoapp,
            githubUrl: "https://github.com/shakirwaheed037/Todo-app-with-react.js"
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
        <div className="projects-page">
            <div className="projects-page__container">
                {/* Header Section */}
                <AnimatedSection className="projects__header">
                    <div className="projects__header-badge hover-scale">
                        <div className="projects__header-badge-dot"></div>
                        <span className="projects__header-badge-text">Portfolio 2024 Showcase</span>
                    </div>

                    <h1 className="projects__header-title">
                        Projects <span className="text-primary">Gallery</span>
                    </h1>

                    <p className="projects__header-desc">
                        A curated collection of full-stack applications, interactive interfaces, and intelligent automation workflows, showcasing both creativity and technical depth.
                    </p>
                </AnimatedSection>

                {/* Filters and Search */}
                <AnimatedSection className="projects__filters-container">
                    <div className="projects__filters-scroll">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`projects__filter-btn ${filter === f ? 'projects__filter-btn--active' : ''}`}
                            >
                                {f}
                                {f === 'n8n' && (
                                    <div className={`projects__filter-dot ${filter === f ? 'projects__filter-dot--active' : 'projects__filter-dot--inactive'}`}></div>
                                )}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="projects__grid">
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
                            direction={index % 2 === 0 ? "left" : "right"}
                        />
                    ))}
                </div>

                {/* Footer Actions */}
                <AnimatedSection className="projects__actions">
                    <Magnetic>
                        <button className="projects__explore-btn">
                            Explore All Projects
                            <ChevronDown className="projects__explore-icon" />
                        </button>
                    </Magnetic>

                    <p className="projects__actions-text">Looking for more? Explore the full source code archive.</p>
                    <a href="https://github.com/shakirwaheed037" target="_blank" rel="noopener noreferrer" className="projects__github-link">
                        <Github className="w-4 h-4" /> Visit GitHub Repository &rarr;
                    </a>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Projects;
