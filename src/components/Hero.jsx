import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section relative flex items-center justify-center h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-[var(--accent)] font-mono text-sm tracking-[0.2em] mb-4 uppercase">
                        AI Engineer • Web Developer • Backend Architect
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                            Digital Future
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed md:mx-0 mx-auto">
                        Hi, I'm <span className="text-white font-semibold">Eghosa Osemwegie</span>.
                        I define the architecture of intelligent systems, merging
                        <span className="text-[var(--accent)]"> advanced AI </span>
                        with robust backend engineering to create scalable, production-ready solutions.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-bold text-sm uppercase tracking-widest backdrop-blur-sm"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
