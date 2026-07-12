import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InteractiveVisualizer from './components/InteractiveVisualizer';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <InteractiveVisualizer />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
