import React, { useState } from 'react';

export default function Reviews() {
  const allReviews = [
    {
      name: 'Jess Cohen',
      status: '7 reviews • 2 photos',
      stars: 5,
      date: '1 month ago',
      text: 'Wonderful experience with Lana! She’s taken great care of my hair over the last year. These pics show my full set of blonde highlights—love the results!!',
      response: 'Thank you so much, Jessica❤️❤️❤️',
      tags: ['precio', 'sentir']
    },
    {
      name: 'Kate Morrell',
      status: '9 reviews • 3 photos',
      stars: 5,
      date: '9 months ago',
      text: 'Lana is an excellent hair stylist! My hair is difficult to cut because it’s short, but she always does a fabulous job!! Five stars for sure!',
      response: 'Thank you my Dear❤️❤️❤️',
      tags: ['cortar', 'laburo']
    },
    {
      name: 'Sarah Shitrit',
      status: 'Local Guide • 14 reviews • 2 photos',
      stars: 5,
      date: '11 months ago',
      text: 'I had the most amazing experience at American Beauty Salons with Lana! She went above and beyond to accommodate me, and from the moment I sat in her chair, she made me feel so comfortable and special. Not only is she incredibly talented...',
      response: 'Thank you so much, sweetie! It was a pleasure style-crafting your look! ❤️',
      tags: ['sentir', 'laburo']
    }
  ];

  const [activeTag, setActiveTag] = useState('all');

  const filteredReviews = activeTag === 'all' 
    ? allReviews 
    : allReviews.filter(rev => rev.tags.includes(activeTag));

  const tags = ['all', 'precio', 'laburo', 'sentir', 'cortar'];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-gold">Client Love</div>
          <h2>Verified Guest Experiences</h2>
          <p>Read what our guests say about Lana’s professional styling and custom colors.</p>
        </div>

        <div className="reviews-filter">
          {tags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag === 'all' ? 'Show All' : `#${tag}`}
            </button>
          ))}
        </div>

        <div className="reviews-grid">
          {filteredReviews.map((review, idx) => (
            <div key={idx} className="review-card glass-panel">
              <div className="review-header">
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="reviewer-title">{review.status}</span>
                </div>
                <div className="review-rating">
                  {[...Array(review.stars)].map((_, starIdx) => (
                    <svg key={starIdx} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="review-meta">
                <span className="review-date">{review.date}</span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {review.tags.map(tag => (
                    <span 
                      key={tag} 
                      style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--accent-gold)', 
                        background: 'rgba(212,175,55,0.08)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px' 
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {review.response && (
                <div className="review-owner-response">
                  <div className="response-header">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Lana (Owner Response)</span>
                  </div>
                  <p className="response-text">{review.response}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
