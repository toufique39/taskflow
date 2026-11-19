import Navbar from "./components/navbar";


function App() {
  return (
    <main>
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center justify-center bg-slate-50"
      >
        <h1 className="text-4xl font-bold text-slate-900">
          TaskFlow Website
        </h1>
      </section>
    </main>
  );
}

export default App;
