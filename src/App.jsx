import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
