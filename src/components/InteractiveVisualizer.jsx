import React, { useState } from 'react';
import highlightsImg from '../assets/blonde_highlights.png';

export default function InteractiveVisualizer({ onBookClick }) {
  const swatches = [
    {
      id: 'platinum',
      name: 'Platinum Ice Highlights',
      hex: '#f5f5f7',
      overlayColor: 'rgba(255, 255, 255, 0.1)',
      opacity: 0,
      price: '$220',
      time: '3.5 hrs',
      desc: 'Cool-toned, bright platinum blonde dimensional highlights. Lana’s signature work that creates an icy, high-contrast, modern clean look without warm undertones.'
    },
    {
      id: 'honey',
      name: 'Honey Balayage',
      hex: '#dcae6d',
      overlayColor: '#d4af37',
      opacity: 0.35,
      price: '$240',
      time: '4.0 hrs',
      desc: 'Warm golden honey strokes painted seamlessly onto your hair. Provides a natural, sun-kissed dimension that grows out beautifully and enhances warm skin tones.'
    },
    {
      id: 'caramel',
      name: 'Caramel Ribboning',
      hex: '#b07f35',
      overlayColor: '#96641e',
      opacity: 0.45,
      price: '$200',
      time: '3.0 hrs',
      desc: 'Rich, toasted caramel tones woven throughout darker bases. Excellent for adding incredible depth, volume, and movement to brunettes.'
    },
    {
      id: 'copper',
      name: 'Copper Spice Glaze',
      hex: '#ca6b37',
      overlayColor: '#c85a17',
      opacity: 0.4,
      price: '$210',
      time: '3.0 hrs',
      desc: 'Vibrant ginger and copper dimensions that catch the light elegantly. A bold, high-fashion statement that leaves the hair looking glossy and full of life.'
    }
  ];

  const [activeSwatch, setActiveSwatch] = useState(swatches[0]);

  return (
    <section id="color-bar" className="visualizer-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-gold">Color Studio</div>
          <h2>Interactive Highlight Swatches</h2>
          <p>Experiment with different highlight shades. Click a swatch below to preview Lana's signature highlight effects.</p>
        </div>

        <div className="visualizer-grid">
          
          <div className="visualizer-preview">
            <img src={highlightsImg} alt={activeSwatch.name} />
            <div 
              className="visualizer-overlay" 
              style={{ 
                backgroundColor: activeSwatch.overlayColor,
                mixBlendMode: 'color',
                opacity: activeSwatch.opacity
              }}
            />
          </div>

          <div className="swatch-details glass-panel">
            <div className="swatch-title-wrap">
              <div className="badge-gold" style={{ margin: 0 }}>Active Shade</div>
              <h3 style={{ fontSize: '2rem', marginTop: '1rem' }}>{activeSwatch.name}</h3>
              <div className="swatch-meta">
                <span className="swatch-price">{activeSwatch.price}+</span>
                <span className="swatch-time">Est. Time: {activeSwatch.time}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', minHeight: '80px' }}>
              {activeSwatch.desc}
            </p>

            <div className="swatch-picker">
              <span className="swatch-picker-label">Select Color Shade:</span>
              <div className="swatches">
                {swatches.map((swatch) => (
                  <button
                    key={swatch.id}
                    className={`swatch-btn ${activeSwatch.id === swatch.id ? 'active' : ''}`}
                    style={{ backgroundColor: swatch.hex }}
                    onClick={() => setActiveSwatch(swatch)}
                    title={swatch.name}
                    aria-label={`Select ${swatch.name}`}
                  />
                ))}
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%' }} onClick={onBookClick}>
              Book This Shade with Lana
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
