import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import WorkflowSection from "./components/WorkflowSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 sm:pt-20 px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        <Hero />
        <About />
        <Features />
        <WorkflowSection />
        <Projects />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
