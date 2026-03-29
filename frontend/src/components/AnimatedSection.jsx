import React, { useRef, useEffect, useState } from 'react';
import '../styles/AnimatedSection.css';

const AnimatedSection = ({
    children,
    className = "",
    direction = "up"
}) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const directionClass = `reveal--${direction}`;

    return (
        <div 
            ref={sectionRef}
            className={`reveal ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
