import NeuralBackground from './components/NeuralBackground';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[var(--accent)] selection:text-black">
      {/* Background & UX */}
      <NeuralBackground />
      <Cursor />

      {/* Main Content */}
      <main className="relative z-10 font-sans">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
