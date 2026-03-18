import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Magnetic from './Magnetic';

const ProjectCard = ({ title, description, tags, image, demoUrl, githubUrl, index = 0, direction = "up" }) => {
    return (
        <AnimatedSection
            direction={direction}
            delay={index * 0.1}
            className="h-full"
        >

            <motion.div
                whileHover={{
                    y: -12,
                    scale: 1.02,
                    boxShadow: "0 25px 40px rgba(0,0,0,0.5)"

                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group rounded-2xl bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] h-full flex flex-col"

            >

                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                    {image && (
                        <motion.img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                    )}
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags?.map((tag) => (
                            <motion.span
                                key={tag}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full transition-colors"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <Magnetic strength={0.2}>
                            <motion.a
                                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                                whileTap={{ scale: 0.95 }}
                                href={demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-sm font-medium text-white transition-colors p-2"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </motion.a>
                        </Magnetic>
                        {githubUrl && (
                            <Magnetic strength={0.2}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.1,
                                        color: '#fff',
                                        textShadow: "0 0 8px rgba(255,255,255,0.5)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center text-sm font-medium text-gray-400 transition-all duration-300 p-2 group/github"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 12 }}
                                        className="mr-2"
                                    >
                                        <Github className="w-5 h-5 group-hover/github:text-white" />
                                    </motion.div>
                                    <span className="group-hover/github:text-white">View Code</span>
                                </motion.a>
                            </Magnetic>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatedSection>
    );
};

export default ProjectCard;
