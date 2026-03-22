import { motion } from 'framer-motion';
import { Wallet, Brain, TrendingUp, Layout } from 'lucide-react';

const services = [
    {
        icon: <Wallet size={28} />,
        title: 'FinTech Backends',
        description: 'Secure payment APIs, digital wallets, transaction systems. Built with Node.js or FastAPI and optimised for scale.',
        tags: ['Node.js', 'MySQL', 'APIs', 'Payments'],
    },
    {
        icon: <Brain size={28} />,
        title: 'AI & LLM Integration',
        description: 'Production AI pipelines, healthcare AI, RAG systems, and LLM-powered chatbots using Gemini, OpenAI, and LangChain.',
        tags: ['FastAPI', 'LangChain', 'Gemini', 'Python'],
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Trading Automation',
        description: 'Algorithmic signal bots, market analysis systems, and real-time trade notification engines via Telegram.',
        tags: ['Python', 'Telegram', 'Market Data', 'Algo'],
    },
    {
        icon: <Layout size={28} />,
        title: 'Full-Stack Web Apps',
        description: 'Complete SaaS platforms, e-commerce systems, and dashboards — from database to deployed frontend.',
        tags: ['React', 'PHP/Laravel', 'TypeScript', 'SaaS'],
    },
];

const Services = () => {
    return (
        <section id="services" className="py-28 bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.25em] mb-3">What I do</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Services</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-px bg-white/5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group bg-[#050505] p-10 hover:bg-white/[0.03] transition-colors"
                        >
                            <div className="text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
