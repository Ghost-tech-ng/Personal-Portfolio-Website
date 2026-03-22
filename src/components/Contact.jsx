import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUp, Download } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Main CTA */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.25em] mb-4">Get in touch</p>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Let's Build<br />
                            <span className="text-[var(--accent)]">Something Real.</span>
                        </h2>
                        <p className="text-gray-400 text-base max-w-md mb-2">
                            Available for remote contracts and full-time roles. Quick to respond.
                        </p>
                        <p className="text-gray-600 text-sm mb-8 font-mono">Abuja, Nigeria · UTC+1</p>

                        <a
                            href="mailto:Osemwegieeghosa@gmail.com"
                            className="inline-flex items-center gap-3 text-xl text-white hover:text-[var(--accent)] transition-colors border-b border-white/20 pb-2 hover:border-[var(--accent)]"
                        >
                            <Mail size={20} />
                            Osemwegieeghosa@gmail.com
                        </a>
                    </motion.div>

                    {/* Links column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col gap-4"
                    >
                        <a
                            href="https://github.com/Ghost-tech-ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-7 bg-[#111] hover:bg-white text-white hover:text-black transition-all duration-300"
                        >
                            <span className="text-xl font-bold">GitHub</span>
                            <Github size={28} className="group-hover:scale-110 transition-transform" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/osemwegie-epraim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-7 bg-[#111] hover:bg-[#0077B5] text-white transition-all duration-300"
                        >
                            <span className="text-xl font-bold">LinkedIn</span>
                            <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                        </a>

                        <a
                            href="/Osemwegie_Eghosa_CV.pdf"
                            download
                            className="group flex items-center justify-between p-7 bg-[var(--accent)] hover:bg-white text-black transition-all duration-300"
                        >
                            <span className="text-xl font-bold">Download CV</span>
                            <Download size={28} className="group-hover:scale-110 transition-transform" />
                        </a>

                        <div className="p-7 border border-white/10 text-gray-500">
                            <h3 className="uppercase tracking-widest text-xs mb-1 font-mono">Location</h3>
                            <p className="text-white text-lg">Abuja, Nigeria · Remote</p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Eghosa Osemwegie. All rights reserved.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 mt-4 md:mt-0 hover:text-white transition-colors"
                    >
                        Back to top <ArrowUp size={14} />
                    </button>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-[var(--accent)] opacity-[0.025] rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
};

export default Contact;
