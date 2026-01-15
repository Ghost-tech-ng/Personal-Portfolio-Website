import { motion } from 'framer-motion';
import { Server, Brain, Globe, Database, Terminal, Shield } from 'lucide-react';

const About = () => {
    const skills = [
        { icon: <Brain size={24} />, title: "AI & Machine Learning", desc: "Gemini, OpenAI, TensorFlow, LangChain, RAG Pipelines" },
        { icon: <Server size={24} />, title: "Backend Architecture", desc: "FastAPI, Node.js, Microservices, System Design" },
        { icon: <Globe size={24} />, title: "Web Development", desc: "React, Modern UI/UX, Interactive Frontend" },
        { icon: <Database size={24} />, title: "Database Engineering", desc: "PostgreSQL, MySQL, Redis, Vector DBs" },
        { icon: <Terminal size={24} />, title: "DevOps & Cloud", desc: "Docker, AWS, GCP, CI/CD Implementation" },
        { icon: <Shield size={24} />, title: "Security & Compliance", desc: "HIPAA-conscious Design, Authorization, Safety Pipelines" }
    ];

    return (
        <section id="about" className="section bg-[#080808] py-20">
            <div className="container mx-auto px-6">
                {/* Profile Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-16"
                >
                    <div className="relative group">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent)] p-1 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                {/* Placeholder - User can replace profile.jpg in public folder */}
                                <img
                                    src="/profile.jpg"
                                    alt="Eghosa Osemwegie"
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 items-center justify-center">
                                    <span className="text-6xl font-bold text-white">EO</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-[var(--accent)]">
                            <p className="text-xs text-[var(--accent)] font-mono">EGHOSA OSEMWEGIE</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Engineering Intelligence. <br />
                        <span className="text-gray-500 text-2xl md:text-3xl">Not just code.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 border border-white/5 bg-[#111] hover:bg-[#151515] transition-colors group"
                            >
                                <div className="text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                <p className="text-gray-400 text-sm">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="max-w-2xl mx-auto text-gray-400">
                            I specialize in building systems that think. From
                            <span className="text-white"> automated trading bots </span>
                            that analyze market patterns to
                            <span className="text-white"> healthcare platforms </span>
                            that diagnose conditions using computer vision. My work bridges the gap between
                            creative innovation and rigid engineering standards.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
