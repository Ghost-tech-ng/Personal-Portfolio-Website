import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">
                            Let's Build <br />
                            <span className="text-[var(--accent)]">Something Intelligent.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Open for collaborations on AI integration, backend architecture, and complex system design.
                        </p>

                        <a
                            href="mailto:Osemwegieeghosa@gmail.com"
                            className="inline-flex items-center gap-3 text-2xl text-white hover:text-[var(--accent)] transition-colors border-b border-white/20 pb-2 hover:border-[var(--accent)]"
                        >
                            <Mail /> Osemwegieeghosa@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-6">
                        <a
                            href="https://github.com/Ghost-tech-ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-8 bg-[#111] hover:bg-white text-white hover:text-black transition-all duration-300"
                        >
                            <span className="text-2xl font-bold">GitHub</span>
                            <Github size={32} className="group-hover:scale-110 transition-transform" />
                        </a>

                        <div className="p-8 border border-white/10 text-gray-500">
                            <h3 className="uppercase tracking-widest text-sm mb-2">Location</h3>
                            <p className="text-white text-xl">Abuja, Nigeria (Remote)</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
                    <p>&copy; 2026 Eghosa Osemwegie. All rights reserved.</p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 hover:text-white transition-colors mt-4 md:mt-0"
                    >
                        Back to Top <ArrowUp size={16} />
                    </button>
                </div>
            </div>

            {/* Background decorative glow */}
            <div className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
};

export default Contact;
