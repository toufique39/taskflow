import { Suspense } from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/Hero";


function App() {
  return (
    <main>
     <Suspense fallback={<center><h1>LOADING....</h1></center>}>
       <Navbar />
      <Hero></Hero>
     </Suspense>
    </main>
  );
}

export default App;
