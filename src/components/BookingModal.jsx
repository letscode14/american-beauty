import React from 'react';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-title">
          <h3>Secure Your Chair</h3>
          <p>Choose your preferred booking channel to schedule a session with Lana.</p>
        </div>

        <div className="booking-channels">
          <div className="booking-channel-card">
            <div className="booking-channel-info">
              <h4>SimplyBook Portal</h4>
              <p>Schedule instantly via our booking portal.</p>
            </div>
            <a 
              href="https://americanbeautysalons.simplybook.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="booking-channel-btn"
            >
              Book Now
            </a>
          </div>

          <div className="booking-channel-card">
            <div className="booking-channel-info">
              <h4>Official Website</h4>
              <p>Reserve via our primary site.</p>
            </div>
            <a 
              href="https://americanbeautysalons.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="booking-channel-btn"
            >
              Visit
            </a>
          </div>

          <div className="booking-channel-card">
            <div className="booking-channel-info">
              <h4>Call to Schedule</h4>
              <p>Speak directly with Lana or our reception team.</p>
            </div>
            <a 
              href="tel:+19292101542" 
              className="booking-channel-btn"
              style={{ background: 'var(--text-primary)', color: '#000' }}
            >
              +1 929
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
