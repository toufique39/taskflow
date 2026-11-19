import { Suspense } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";


function App() {
  return (
    <main>
     <Suspense fallback={<center><h1>LOADING....</h1></center>}>
       <Navbar />
      <Hero></Hero>
      <Features></Features>
     </Suspense>
    </main>
  );
}

export default App;
