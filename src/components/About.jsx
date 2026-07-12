import React from 'react';
import stylistImg from '../assets/lana_stylist.png';

export default function About({ onBookClick }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <img src={stylistImg} alt="Lana styling hair at American Beauty Salons" />
            <div className="about-image-overlay">
              <div className="about-overlay-text">Lana</div>
              <div className="about-overlay-sub">Lead Hair Artist & Colorist</div>
            </div>
          </div>

          <div className="about-details">
            <div className="badge-gold">MEET THE ARTIST</div>
            <h2>Lana's Signature Artistry</h2>
            <p>
              At American Beauty Salons, we believe hair is the ultimate form of self-expression. Led by our master stylist <strong>Lana</strong>, we provide a warm, comfortable, and tailored styling experience.
            </p>
            <p>
              Lana has spent years perfecting her craft, earning a stellar reputation in New York City. Whether you are looking for a complete blonde transformation or a precision cut for short hair, she brings unmatched expertise and warmth to every single chair.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card glass-panel">
                <h4>Signature Highlights</h4>
                <p>Expertly applied blonde highlights and custom balayage tailored to your hair texture and tone.</p>
              </div>
              <div className="highlight-card glass-panel">
                <h4>Precision Cutting</h4>
                <p>Specialized techniques for all lengths, especially short hair styling designed to frame your features.</p>
              </div>
            </div>

            <a 
              href="https://ab.simplybook.me/v2/#book" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ marginTop: '2.5rem' }}
            >
              Meet Lana In Person
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
