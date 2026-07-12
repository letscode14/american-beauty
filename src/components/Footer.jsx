import React from 'react';

export default function Footer({ onBookClick }) {
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
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3>AMERICAN BEAUTY <span>SALONS</span></h3>
            <p>Signature hair highlights, luxury precision cuts, and customized styling services in Lower Manhattan.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Salon Sections</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Lana</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Services Menu</a></li>
              <li><a href="#color-bar" onClick={(e) => handleScrollTo(e, 'color-bar')}>Interactive Colors</a></li>
              <li><a href="#reviews" onClick={(e) => handleScrollTo(e, 'reviews')}>Client Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Booking Portals</h4>
            <ul className="footer-links">
              <li><a href="https://simplybook.me" target="_blank" rel="noopener noreferrer">simplybook.me</a></li>
              <li><a href="https://americanbeautysalons.net" target="_blank" rel="noopener noreferrer">americanbeautysalons.net</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBookClick(); }}>Direct Booking Form</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>100 William St, New York, NY 10038</li>
              <li style={{ marginBottom: '0.5rem' }}>Tel: +1 929-210-1542</li>
              <li>Email: info@americanbeautysalons.net</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} American Beauty Salons. All rights reserved.</span>
          <span>Designed with luxury and sophistication.</span>
        </div>

      </div>
    </footer>
  );
}
