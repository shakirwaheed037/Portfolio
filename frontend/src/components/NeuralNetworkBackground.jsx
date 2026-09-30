import { useEffect, useRef } from 'react';

const NeuralNetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Canvas dimensions
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let isLight =
            document.documentElement.getAttribute('data-theme') === 'light';

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        // Theme observer
        const observer = new MutationObserver(() => {
            isLight =
                document.documentElement.getAttribute('data-theme') === 'light';
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        // Responsive settings
        const getResponsiveSettings = () => {
            const w = window.innerWidth;

            if (w < 640) {
                return {
                    count: 32,
                    maxDist: 120,
                    maxNeighbors: 2,
                    nodeRadius: 2.2,
                };
            } else if (w < 1024) {
                return {
                    count: 55,
                    maxDist: 150,
                    maxNeighbors: 3,
                    nodeRadius: 2.6,
                };
            } else {
                return {
                    count: 80,
                    maxDist: 175,
                    maxNeighbors: 3,
                    nodeRadius: 3.0,
                };
            }
        };

        let settings = getResponsiveSettings();

        // Mouse position
        const mouse = {
            x: -1000,
            y: -1000,
            radius: 180,
        };

        // Fast connection break distance
        const cursorBreakDistance = 140;

        // Resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            settings = getResponsiveSettings();
            initNodes();
        };

        // Mouse movement
        const handleMouseMove = (e) => {
            if (window.innerWidth < 640) return;

            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        // Mouse leave
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Neural Node
        class NeuralNode {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;

               const baseSpeed = prefersReducedMotion ? 1.0 : 0.8;

                this.vx = (Math.random() - 0.5) * baseSpeed;
                this.vy = (Math.random() - 0.5) * baseSpeed;

                this.radius =
                    Math.random() * 1.5 + (settings.nodeRadius - 0.7);

                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Screen boundary wrap-around
                const margin = 25;

                if (this.x < -margin) this.x = width + margin;
                if (this.x > width + margin) this.x = -margin;

                if (this.y < -margin) this.y = height + margin;
                if (this.y > height + margin) this.y = -margin;

                this.pulse += this.pulseSpeed;

                // Cursor repulsion
                if (mouse.x > 0 && !prefersReducedMotion) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;

                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist > 0 && dist < mouse.radius) {
                        const force =
                            (mouse.radius - dist) / mouse.radius;

                        this.x += (dx / dist) * force * 1.6;
                        this.y += (dy / dist) * force * 1.6;
                    }
                }
            }

            draw() {
                const pulseAlpha =
                    Math.sin(this.pulse) * 0.2 + 0.5;

                const alpha = isLight
                    ? pulseAlpha * 0.8
                    : pulseAlpha;

                // Portfolio Blue
                const r = 0;
                const g = 123;
                const b = 255;

                // Outer glow
                const glowRadius = this.radius * 3;

                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    glowRadius
                );

                gradient.addColorStop(
                    0,
                    `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`
                );

                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(
                    this.x,
                    this.y,
                    glowRadius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = gradient;
                ctx.fill();

                // Node dot
                ctx.beginPath();

                ctx.arc(
                    this.x,
                    this.y,
                    this.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${
                    alpha * 0.95
                })`;

                ctx.fill();
            }
        }

        let nodes = [];

        // Initialize nodes
        const initNodes = () => {
            nodes = Array.from(
                { length: settings.count },
                () => new NeuralNode()
            );
        };

        initNodes();

        // Animation
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update nodes
            nodes.forEach((node) => node.update());

            // Prevent duplicate connections
            const drawnEdges = new Set();

            ctx.lineWidth = 1.15;

            for (let i = 0; i < nodes.length; i++) {
                const n1 = nodes[i];

                // Find nearby nodes
                const neighbors = [];

                for (let j = 0; j < nodes.length; j++) {
                    if (i === j) continue;

                    const n2 = nodes[j];

                    const dx = n1.x - n2.x;
                    const dy = n1.y - n2.y;

                    const dist = Math.sqrt(dx * dx + dy * dy);

                    neighbors.push({
                        index: j,
                        node: n2,
                        dist,
                    });
                }

                // Nearest neighbors first
                neighbors.sort((a, b) => a.dist - b.dist);

                const connectLimit = Math.min(
                    settings.maxNeighbors,
                    neighbors.length
                );

                for (let k = 0; k < connectLimit; k++) {
                    const neighbor = neighbors[k];

                    if (neighbor.dist > settings.maxDist) {
                        continue;
                    }

                    const j = neighbor.index;
                    const n2 = neighbor.node;

                    /*
                     * FAST CURSOR LINE BREAK
                     *
                     * If either node is close to the cursor,
                     * immediately remove their connection.
                     */

                    const d1x = n1.x - mouse.x;
                    const d1y = n1.y - mouse.y;

                    const d2x = n2.x - mouse.x;
                    const d2y = n2.y - mouse.y;

                    const distToCursor1 = Math.sqrt(
                        d1x * d1x + d1y * d1y
                    );

                    const distToCursor2 = Math.sqrt(
                        d2x * d2x + d2y * d2y
                    );

                    if (
                        distToCursor1 < cursorBreakDistance ||
                        distToCursor2 < cursorBreakDistance
                    ) {
                        continue;
                    }

                    // Prevent duplicate edges
                    const edgeKey =
                        i < j
                            ? `${i}-${j}`
                            : `${j}-${i}`;

                    if (drawnEdges.has(edgeKey)) {
                        continue;
                    }

                    drawnEdges.add(edgeKey);

                    // Line opacity
                    const dist = neighbor.dist;

                    const distFactor =
                        1 - dist / settings.maxDist;

                    const lineAlpha =
                        distFactor *
                        (isLight ? 0.38 : 0.48);

                    // Portfolio Blue
                    const r = 0;
                    const g = 123;
                    const b = 255;

                    // Draw connection
                    ctx.beginPath();

                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;

                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);

                    ctx.stroke();
                }
            }

            // Draw nodes above lines
            nodes.forEach((node) => node.draw());

            animationFrameId =
                requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            observer.disconnect();

            window.removeEventListener(
                'resize',
                handleResize
            );

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

            window.removeEventListener(
                'mouseleave',
                handleMouseLeave
            );

            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default NeuralNetworkBackground;