import { Suspense } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";


function App() {
  return (
    <main>
     <Suspense fallback={<center><h1>LOADING....</h1></center>}>
       <Navbar />
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <HowItWorks></HowItWorks>
      <Pricing></Pricing>
      <Contact></Contact>
     </Suspense>
    </main>
  );
}

export default App;
