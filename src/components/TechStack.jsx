import { motion } from 'framer-motion';

const stack = [
    { name: 'Python', color: '#3776AB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'React', color: '#61DAFB' },
    { name: 'React Native', color: '#61DAFB' },
    { name: 'PHP / Laravel', color: '#8892BE' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'LangChain', color: '#00f2ff' },
    { name: 'Gemini AI', color: '#8E75B2' },
    { name: 'TensorFlow', color: '#FF6F00' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'OpenCV', color: '#5C3EE8' },
];

const TechStack = () => {
    return (
        <section className="py-24 bg-[#080808] border-y border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.25em] mb-3">Technologies</p>
                    <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                    {stack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                            whileHover={{ scale: 1.05 }}
                            className="group flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-200"
                        >
                            <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: tech.color }}
                            />
                            <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
