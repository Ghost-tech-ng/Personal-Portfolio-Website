import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        number: '01',
        title: 'Adeon AI Healthcare Platform',
        role: 'Lead AI & Backend Engineer',
        problem: 'Healthcare providers needed an AI system for real-time transcription, medical diagnosis assistance, and longitudinal patient tracking — HIPAA-compliant at production scale.',
        solution: 'Architected a 3-tier microservices platform with 20+ REST endpoints. Integrated Gemini 2.5 Pro and Whisper for 2.5–2.9× real-time transcription. Built severity classification pipelines and multi-level caching to cut API latency.',
        tags: ['FastAPI', 'Gemini AI', 'LangChain', 'Docker', 'PostgreSQL', 'HIPAA'],
        image: '/project-healthcare.png',
        github: 'https://github.com/Ghost-tech-ng',
        status: 'Production',
    },
    {
        number: '02',
        title: 'SocialBooxter',
        role: 'Founder & Full-Stack Developer',
        problem: 'Content creators needed a reliable, fast platform to grow their Instagram presence with real engagement delivery and transparent tracking.',
        solution: 'Built end-to-end SaaS platform with secure payment integration, automated order fulfillment, and real-time delivery tracking. Full backend + frontend deployed and live.',
        tags: ['Full-Stack', 'SaaS', 'Payment Integration', 'Web'],
        image: '/project-socialbooxter.png',
        link: 'https://socialbooxter.com',
        status: 'Live',
    },
    {
        number: '03',
        title: 'Lendsqr Digital Wallet',
        role: 'Backend Engineer',
        problem: 'FinTech platform needed a secure, scalable digital wallet system for user account management, fund transfers, and transaction processing with blacklist verification.',
        solution: 'Built Node.js + TypeScript backend with KnexJS query builder and MySQL. Integrated Adjutor API for Karma blacklist checks. Implemented secure transaction flows with proper error handling and audit trails.',
        tags: ['Node.js', 'TypeScript', 'MySQL', 'KnexJS', 'FinTech', 'REST API'],
        github: 'https://github.com/Ghost-tech-ng/Lendsqtr-backend-project',
        status: 'Complete',
        image: null,
    },
    {
        number: '04',
        title: 'Gold Breakout Bot',
        role: 'Solo Developer',
        problem: 'Traders needed a system to detect high-probability breakout patterns in the gold market and receive instant alerts without manual chart monitoring.',
        solution: 'Built Python algorithmic trading system that monitors price action, identifies breakout patterns in real-time, and sends formatted trade signals via Telegram API with entry, stop-loss, and take-profit levels.',
        tags: ['Python', 'Trading Algorithms', 'Telegram API', 'Real-time', 'FinTech'],
        image: '/project-trading.png',
        github: 'https://github.com/Ghost-tech-ng/Gold-breakout-bot',
        status: 'Live',
    },
    {
        number: '05',
        title: 'Crime Prediction AI',
        role: 'Data Scientist & Developer',
        problem: 'Law enforcement agencies needed a transparent AI tool that could predict crime hotspots while explaining its reasoning — not just a black-box model.',
        solution: 'Built an Explainable AI system using TensorFlow with SHAP and LIME to visualise model decisions. Deployed on Streamlit for easy non-technical access. Earned a GitHub star for originality.',
        tags: ['TensorFlow', 'SHAP', 'LIME', 'Streamlit', 'Explainable AI', 'Python'],
        image: '/project-crime.png',
        github: 'https://github.com/Ghost-tech-ng/crime-prediction-explainable-ai',
        status: 'Open Source',
    },
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group grid md:grid-cols-2 gap-0 border-t border-white/10 py-16 hover:bg-white/[0.02] transition-colors"
        >
            {/* Left: Meta */}
            <div className="md:pr-16 mb-8 md:mb-0">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono">
                        {project.number}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest font-mono
                        border border-[var(--accent)]/40 text-[var(--accent)] rounded-sm">
                        {project.status}
                    </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm italic mb-6">{project.role}</p>

                {/* Image thumbnail */}
                {project.image && (
                    <div className="w-full h-40 rounded overflow-hidden border border-white/10 mb-6">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-gray-600 bg-white/5 px-2 py-1">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right: Case study */}
            <div className="md:pl-16 md:border-l md:border-white/10">
                <div className="mb-6">
                    <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest mb-2">The Problem</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="mb-8">
                    <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest mb-2">The Solution</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-px">
                            <Github size={14} /> GitHub
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)] hover:text-white transition-colors uppercase tracking-widest border-b border-[var(--accent)]/30 hover:border-white pb-px">
                            <ArrowUpRight size={14} /> Live Site
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#050505]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.25em] mb-3">Selected work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
                </motion.div>

                <div>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.number} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
