import { motion } from 'framer-motion';

const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '21', label: 'GitHub Repos' },
    { value: '3', label: 'Production Systems' },
    { value: '100%', label: 'Remote-Ready' },
];

const Stats = () => {
    return (
        <section className="border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center md:items-start md:px-10 gap-1"
                        >
                            <span className="text-4xl font-bold text-[var(--accent)]">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
