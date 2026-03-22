import { motion } from 'framer-motion';

const experiences = [
    {
        date: 'Oct 2025 – Present',
        company: 'ToksNet Africa',
        role: 'Lead AI & Backend Engineer',
        location: 'Remote',
        bullets: [
            'Architecting Adeon AI — a production healthcare AI platform with FastAPI microservices, Gemini 2.5 Pro, and LangChain.',
            'Designed HIPAA-conscious multi-layer content safety pipelines and severity-based classification systems.',
            'Achieved 2.5–2.9× real-time transcription speed via async architecture and multi-level caching.',
        ],
    },
    {
        date: 'Aug 2023 – Feb 2024',
        company: 'Sosotoba Institute of Technology',
        role: 'Senior Backend Developer',
        location: 'Benin City, Nigeria',
        bullets: [
            'Led backend development of Hospital Management Software serving thousands of users.',
            'Designed and optimised MySQL databases for millions of records with complex relational schemas.',
            'Mentored junior developers on clean code practices and scalable architecture patterns.',
        ],
    },
    {
        date: 'Jun 2022 – Jul 2023',
        company: 'Tryve Technologies',
        role: 'Software Developer',
        location: 'Benin City, Nigeria',
        bullets: [
            'Built and maintained production web applications using Laravel with MySQL integration.',
            'Integrated third-party payment and service APIs, ensuring secure and reliable transactions.',
            'Collaborated across teams to define technical requirements and deliver on schedule.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-28 bg-[#080808]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.25em] mb-3">Background</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    <div className="flex flex-col gap-16">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="md:pl-12 relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-[var(--accent)] hidden md:block" />

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xs font-mono text-gray-500 mb-1">{exp.date}</p>
                                        <p className="text-xs font-mono text-gray-600">{exp.location}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-[var(--accent)] text-sm font-mono mb-4">{exp.company}</p>
                                        <ul className="space-y-2">
                                            {exp.bullets.map((b, j) => (
                                                <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                                                    <span className="text-[var(--accent)] mt-1 flex-shrink-0">—</span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
