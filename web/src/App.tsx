import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CtaBand from "./components/CtaBand";
import Meet from "./components/Meet";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// App.tsx is the top-level component: it just assembles the page out of
// the section components below, in order. Compare this to index.html —
// same sections, same order, but now each one is its own file instead of
// one long HTML document.

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CtaBand />
        <Meet />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
