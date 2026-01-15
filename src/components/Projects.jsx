import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github, status, index, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative border-t border-white/10 py-12 md:py-16 hover:bg-white/5 transition-colors overflow-hidden"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                {/* Project Thumbnail */}
                {image && (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                )}

                {/* Visual "Index" for maturity */}
                <div className="hidden md:block text-4xl font-bold text-white/5 group-hover:text-white/20 transition-colors">
                    0{index + 1}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                            {title}
                        </h3>
                        {status && (
                            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest border border-[var(--accent)] text-[var(--accent)] rounded-full">
                                {status}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-400 max-w-xl mb-4 text-sm md:text-base">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-xs text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-300">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                            <Github size={20} />
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "ToksNet / Adeon AI",
            description: "A production-ready AI healthcare platform integrating Google Gemini 2.5 Pro and Whisper. Features 3-tier microservices architecture, context-aware conversational AI for medical diagnosis, and longitudinal health tracking.",
            tags: ["FastAPI", "Gemini AI", "LangChain", "Docker", "HIPAA"],
            status: "Lead Engineer",
            github: "https://github.com/Ghost-tech-ng",
            image: "/project-healthcare.png"
        },
        {
            title: "SocialBooxter",
            description: "Instagram growth platform providing authentic engagement services including followers, likes, and views. Features secure payment integration, real-time delivery tracking, and automated order fulfillment system.",
            tags: ["Web Development", "SaaS", "Instagram Growth", "Payment Integration"],
            link: "https://socialbooxter.com",
            image: "/project-socialbooxter.png"
        },
        {
            title: "Gold Breakout Bot",
            description: "Algorithmic trading system analyzing market breakout patterns in real-time. Sends instant trade signals via Telegram API with high-precision entry/exit points.",
            tags: ["Python", "Trading Algorithms", "Telegram API", "FinTech"],
            github: "https://github.com/Ghost-tech-ng/Gold-breakout-bot",
            image: "/project-trading.png"
        },
        {
            title: "Crime Prediction AI",
            description: "Machine Learning model utilizing SHAP and LIME for 'Explainable AI'. Predicts crime hotspots and provides transparent reasoning for model decisions to aid law enforcement.",
            tags: ["TensorFlow", "Explainable AI", "Streamlit", "Python"],
            github: "https://github.com/Ghost-tech-ng/crime-prediction-explainable-ai",
            image: "/project-crime.png"
        },
        {
            title: "Anxiety Mobile App",
            description: "React Native wellness application using device sensors for physiological tracking. Features haptic-guided breathing exercises and pattern detection for anxiety attacks.",
            tags: ["React Native", "TypeScript", "Mobile", "HealthTech"],
            github: "https://github.com/Ghost-tech-ng/Anxiety-app",
        },
        {
            title: "Neems Food Hub",
            description: "Full-stack e-commerce platform for food delivery. Integrated with WhatsApp for order management and built with a custom PHP framework for performance.",
            tags: ["PHP", "E-commerce", "Web Architecture", "WhatsApp API"],
            link: "https://neemsfoodhub.com",
        }
    ];

    return (
        <section id="projects" className="bg-black py-24">
            <div className="container mx-auto px-6 mb-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-4"
                >
                    Selected Works
                </motion.h2>
                <div className="h-1 w-20 bg-[var(--accent)]" />
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
