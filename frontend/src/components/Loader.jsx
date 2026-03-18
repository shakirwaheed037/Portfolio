import { motion } from "framer-motion";
import whitelogo from "../assets/images/whitelogo.png";

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col items-center gap-6">

                {/* Animated Logo */}
                <motion.img
                    src={whitelogo}
                    alt="CBS Logo"
                    className="w-28 h-28 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                    initial={{ scale: 0.6, rotate: -360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                />

                {/* Animated Text */}
                <motion.h1
                    className="text-2xl font-semibold text-white tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.8
                    }}
                >
                    CodeByShakir
                </motion.h1>

                {/* Loading Bar */}
                <div className="w-40 h-[2px] bg-white/10 rounded overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2
                        }}
                    />
                </div>

            </div>
        </motion.div>
    );
};

export default Loader;