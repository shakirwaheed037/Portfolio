import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Magnetic from './Magnetic';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, tags, image, demoUrl, githubUrl, index = 0, direction = "up" }) => {
    return (
        <AnimatedSection
            direction={direction}
            delay={index * 0.1}
            className="h-full hover-scale"
        >
            <div className="project-card">
                <div className="project-card__image-container">
                    <div className="project-card__overlay"></div>
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="project-card__img"
                        />
                    )}
                </div>
                <div className="project-card__content">
                    <h3 className="project-card__title">{title}</h3>
                    <p className="project-card__description">
                        {description}
                    </p>
                    <div className="project-card__tags">
                        {tags?.map((tag) => (
                            <span
                                key={tag}
                                className="project-card__tag"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="project-card__links">
                        <Magnetic strength={0.2}>
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card__link smooth-transition"
                            >
                                <ExternalLink className="project-card__link-icon" />
                                Live Demo
                            </a>
                        </Magnetic>
                        {githubUrl && (
                            <Magnetic strength={0.2}>
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__github-link smooth-transition"
                                >
                                    <div className="project-card__github-icon-wrapper">
                                        <Github className="project-card__github-icon" />
                                    </div>
                                    <span>View Code</span>
                                </a>
                            </Magnetic>
                        )}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default ProjectCard;
