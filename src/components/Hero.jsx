import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero = () => {
    const tags = ['FinTech Systems', 'AI Backends', 'Trading Automation', 'Full-Stack Web'];

    return (
        <section id="home" className="relative flex items-center min-h-screen overflow-hidden">
            {/* Subtle gradient backdrop */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-cyan-900/10 via-black to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
                <div className="max-w-4xl">
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Available for remote gigs</span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
                    >
                        I build systems that move{' '}
                        <span className="text-[var(--accent)]">money</span> and{' '}
                        <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">intelligence</span>{' '}
                        at scale.
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
                    >
                        <span className="text-white font-medium">Eghosa Osemwegie</span> — Full Stack Engineer with 5+ years
                        specialising in FinTech backends, AI/LLM integration, and algorithmic trading systems.
                    </motion.p>

                    {/* Speciality tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono text-[var(--accent)] border border-[var(--accent)]/30 rounded-full bg-[var(--accent)]/5">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] transition-colors duration-300"
                        >
                            See My Work
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="mailto:Osemwegieeghosa@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                        >
                            Let's Talk
                        </a>
                        <a
                            href="https://www.linkedin.com/in/osemwegie-epraim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
