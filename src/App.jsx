import NeuralBackground from './components/NeuralBackground';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
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
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
