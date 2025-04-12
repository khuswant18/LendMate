import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      quote: 'Lending Kat helped me expand my tailoring business when traditional banks wouldn\'t even consider my application. The community trust system made all the difference.',
      type: 'borrower'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Farmer',
      quote: 'I needed funds for modern irrigation equipment. Through Lending Kat, I connected with investors who believed in my vision for sustainable farming.',
      type: 'borrower'
    },
    {
      name: 'Anita Desai',
      role: 'Investor',
      quote: 'I\'ve been investing through Lending Kat for over a year. The transparency is unmatched, and knowing my money is helping real people makes all the difference.',
      type: 'investor'
    },
    {
      name: 'Vikram Mehta',
      role: 'Investor',
      quote: 'The detailed borrower profiles and community endorsements give me confidence in my investment decisions. The returns have been consistent and rewarding.',
      type: 'investor'
    }
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeTab);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Real people, real impact</p>
        </div>
        
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>₹25 Crores</h3>
            <p>Disbursed</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>98.5%</h3>
            <p>Repayment Rate</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>12,500+</h3>
            <p>Verified Borrowers</p>
          </div>
        </div>
        
        <div className="testimonial-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Stories
          </button>
          <button 
            className={`tab-btn ${activeTab === 'borrower' ? 'active' : ''}`}
            onClick={() => setActiveTab('borrower')}
          >
            Borrowers
          </button>
          <button 
            className={`tab-btn ${activeTab === 'investor' ? 'active' : ''}`}
            onClick={() => setActiveTab('investor')}
          >
            Investors
          </button>
        </div>
        
        <div className="testimonials-grid">
          {filteredTestimonials.map((testimonial, index) => (
            <div className={`testimonial-card ${testimonial.type}`} key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
