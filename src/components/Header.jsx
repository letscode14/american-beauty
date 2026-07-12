import React, { useState, useEffect } from 'react';

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'color-bar', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-logo">
            AMERICAN BEAUTY <span>SALONS</span>
          </a>

          <nav className="nav-links">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About Lana
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')} 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a 
              href="#color-bar" 
              onClick={(e) => handleNavClick(e, 'color-bar')} 
              className={`nav-link ${activeSection === 'color-bar' ? 'active' : ''}`}
            >
              Color Swatch
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')} 
              className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
            <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }} onClick={onBookClick}>
              Book Now
            </button>
          </nav>

          <button className="nav-toggle" onClick={() => setMobileMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-nav-modal">
          <div className="container mobile-nav-header">
            <span className="nav-logo">AMERICAN BEAUTY <span>SALONS</span></span>
            <button style={{ color: 'var(--text-primary)', fontSize: '1.75rem' }} onClick={() => setMobileMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="mobile-nav-links">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About Lana
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')} 
              className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a 
              href="#color-bar" 
              onClick={(e) => handleNavClick(e, 'color-bar')} 
              className={`mobile-nav-link ${activeSection === 'color-bar' ? 'active' : ''}`}
            >
              Color Swatch
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')} 
              className={`mobile-nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
            <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => { setMobileMenuOpen(false); onBookClick(); }}>
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
