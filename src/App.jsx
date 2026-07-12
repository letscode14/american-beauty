import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InteractiveVisualizer from './components/InteractiveVisualizer';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const openBookModal = () => setIsBookModalOpen(true);
  const closeBookModal = () => setIsBookModalOpen(false);

  return (
    <>
      <Header onBookClick={openBookModal} />
      <main>
        <Hero onBookClick={openBookModal} />
        <About onBookClick={openBookModal} />
        <Services onBookClick={openBookModal} />
        <InteractiveVisualizer onBookClick={openBookModal} />
        <Reviews />
        <Contact onBookClick={openBookModal} />
      </main>
      <Footer onBookClick={openBookModal} />
      <BookingModal isOpen={isBookModalOpen} onClose={closeBookModal} />
    </>
  );
}

export default App;
