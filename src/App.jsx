import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Work from "./components/sections/Work";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen font-body text-structural-dark bg-surface selection:bg-primary-neon selection:text-structural-dark pt-20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <Contact />

      <footer className="py-8 border-t-2 border-structural-dark bg-structural-dark text-surface text-center font-heading text-sm uppercase tracking-widest relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-neon opacity-50"></div>
        © {new Date().getFullYear()} Creator Shivalika Mehra. ©{new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
