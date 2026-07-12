import React from 'react';

export default function Hero({ onBookClick }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content animate-slide-up">
          <div className="badge-gold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>4.9 Google Rating (197 reviews)</span>
          </div>
          
          <h1 className="hero-title">
            Crafting Elegance, <span>One Cut</span> at a Time.
          </h1>
          
          <p className="hero-desc">
            Experience premium hair styling, customized coloring, and signature blonde highlights in the heart of New York City. Led by Lana, we specialize in high-end personalization that reveals your inner radiance.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onBookClick}>
              Book Session
            </button>
            <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="btn-secondary">
              View Menu
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>4.9</h4>
              <p>Google Stars</p>
            </div>
            <div className="stat-item">
              <h4>197+</h4>
              <p>Satisfied Clients</p>
            </div>
            <div className="stat-item">
              <h4>Lana</h4>
              <p>Signature Stylist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
