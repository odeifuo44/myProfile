import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header />

      <main className="pt-16"> {/* Add padding to avoid overlap with fixed header */}
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
