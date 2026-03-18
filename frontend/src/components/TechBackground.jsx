import { motion, useIsPresent } from 'framer-motion';
import { useMemo } from 'react';

const TechBackground = () => {
    const isPresent = useIsPresent();

    const gridCells = useMemo(() => {
        return Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            left: `${(Math.random() * 100).toFixed(2)}%`,
            top: `${(Math.random() * 100).toFixed(2)}%`,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
            />

            {/* Moving Nodes */}
            {gridCells.map((cell) => (
                <motion.div
                    key={cell.id}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{ left: cell.left, top: cell.top }}
                    animate={{
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: cell.duration,
                        delay: cell.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Radial Gradient Mask for Mouse (Simulated via CSS) */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.1)_0%,transparent_50%)]"
            />
        </div>
    );
};

export default TechBackground;
