import { motion } from 'framer-motion';

const AnimatedSection = ({
    children,
    delay = 0,
    className = "",
    direction = "up",
    distance = 40,
    duration = 0.5,
    triggerOnce = true
}) => {
    const getInitialProps = () => {
        switch (direction) {
            case "up": return { y: distance, opacity: 0 };
            case "down": return { y: -distance, opacity: 0 };
            case "left": return { x: distance, opacity: 0 };
            case "right": return { x: -distance, opacity: 0 };
            case "none": return { opacity: 0 };
            default: return { y: distance, opacity: 0 };
        }
    };

    const getAnimateProps = () => {
        switch (direction) {
            case "up":
            case "down": return { y: 0, opacity: 1 };
            case "left":
            case "right": return { x: 0, opacity: 1 };
            case "none": return { opacity: 1 };
            default: return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            initial={getInitialProps()}
            whileInView={getAnimateProps()}
            viewport={{ once: triggerOnce, amount: 0.1 }}
            transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
