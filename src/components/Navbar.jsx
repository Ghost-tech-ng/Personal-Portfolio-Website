import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#home"
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Monogram mark */}
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        {/* Outer square border */}
                        <rect x="1" y="1" width="34" height="34" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                        {/* Cyan accent corner — top-left */}
                        <path d="M1 10 L1 1 L10 1" stroke="#00f2ff" strokeWidth="1.5"/>
                        {/* Cyan accent corner — bottom-right */}
                        <path d="M35 26 L35 35 L26 35" stroke="#00f2ff" strokeWidth="1.5"/>
                        {/* "E" left bar */}
                        <line x1="10" y1="10" x2="10" y2="26" stroke="white" strokeWidth="1.5"/>
                        {/* "E" top bar */}
                        <line x1="10" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.5"/>
                        {/* "E" mid bar */}
                        <line x1="10" y1="18" x2="16" y2="18" stroke="#00f2ff" strokeWidth="1.5"/>
                        {/* "E" bottom bar */}
                        <line x1="10" y1="26" x2="18" y2="26" stroke="white" strokeWidth="1.5"/>
                        {/* "O" right side — open circle arc as two lines */}
                        <path d="M21 10 Q26 10 26 18 Q26 26 21 26" stroke="white" strokeWidth="1.5" fill="none"/>
                        <line x1="21" y1="10" x2="21" y2="26" stroke="white" strokeWidth="1.5"/>
                    </svg>
                    {/* Wordmark */}
                    <div className="flex flex-col leading-none">
                        <span className="text-sm font-bold tracking-[0.15em] text-white uppercase">Eghosa</span>
                        <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--accent)] uppercase">Osemwegie</span>
                    </div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://github.com/Ghost-tech-ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Github size={20} />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-none overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-gray-300 hover:text-[var(--accent)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
