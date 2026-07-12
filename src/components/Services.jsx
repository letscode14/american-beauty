import React from 'react';

export default function Services({ onBookClick }) {
  const servicesList = [
    {
      title: 'Precision Haircuts',
      price: '$90+',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="9.8" y1="8.2" x2="20" y2="18"></line>
          <line x1="9.8" y1="15.8" x2="20" y2="6"></line>
        </svg>
      ),
      desc: 'Expert cutting designed for your hair type, including short cuts, layered stylings, and custom trims.',
      features: ['Personalized consultation', 'Signature wash & massage', 'Blowout & styling finish']
    },
    {
      title: 'Color & Highlights',
      price: '$180+',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M7.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"></path>
          <path d="M11.5 7.5c.828 0 1.5-.672 1.5-1.5S12.328 4.5 11.5 4.5 10 5.172 10 6s.672 1.5 1.5 1.5z"></path>
          <path d="M16.5 9.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"></path>
          <path d="M6 14c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
        </svg>
      ),
      desc: 'Full-set highlights, premium balayage, and root touch-ups formulated to protect and shine.',
      features: ['Lana’s custom shade matching', 'Olapex protective treatments', 'Glaze / Gloss treatment']
    },
    {
      title: 'Styling & Care',
      price: '$65+',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      desc: 'Nourishing botanical hair masks, professional blowout services, and smoothing treatments.',
      features: ['Organic deep conditioning', 'Sleek silk press or wave curls', 'Long-lasting frizz control']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-gold">Service Menu</div>
          <h2>Exceptional Hair Care Services</h2>
          <p>We combine premium products with master styling techniques to provide you with luxury hair care results.</p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>
                {service.title}
                <span className="price">{service.price}</span>
              </h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', marginTop: '2rem', padding: '0.6rem' }}
                onClick={onBookClick}
              >
                Select & Book
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
