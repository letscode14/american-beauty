import React from 'react';

export default function Contact({ onBookClick }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="contact-grid">
          
          <div className="contact-info-panel">
            <div className="badge-gold">Location & Hours</div>
            <h2>Get In Touch</h2>
            <p>
              American Beauty Salons is situated in the heart of Lower Manhattan. Drop in or schedule a session to experience Lana's styling care.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <h4>Address</h4>
                  <p>100 William St, New York, NY 10038, United States</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <h4>Opening Hours</h4>
                  <p>Closed • Opens at 11:00 AM (Tue - Sat: 11 AM - 8 PM)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <h4>Phone Number</h4>
                  <p>+1 929-210-1542</p>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={onBookClick}>
              Schedule Appointment
            </button>
          </div>

          <div className="contact-map-panel">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.238466608552!2d-74.00832328459496!3d40.70732897933257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17bbf51999%3A0x633bc39871587d55!2s100%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1657800000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(1) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              title="American Beauty Salons Map Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
