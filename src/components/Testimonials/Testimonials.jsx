import React from 'react';
import './Testimonials.css';

function Testimonials() {
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      quote: 'Lending Mate helped me expand my tailoring business when traditional banks wouldn\'t even consider my application. The community trust system made all the difference.',
      type: 'borrower'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Farmer',
      quote: 'I needed funds for modern irrigation equipment. Through Lending Mate, I connected with investors who believed in my vision for sustainable farming.',
      type: 'borrower'
    },
    {
      name: 'Anita Desai',
      role: 'Investor',
      quote: 'I\'ve been investing through Lending Mate for over a year. The transparency is unmatched, and knowing my money is helping real people makes all the difference.',
      type: 'investor'
    },
    {
      name: 'Vikram Mehta',
      role: 'Investor',
      quote: 'The detailed borrower profiles and community endorsements give me confidence in my investment decisions. The returns have been consistent and rewarding.',
      type: 'investor'
    }
  ]; 

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container"> 
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Real people, real impact</p>
        </div>
        
        <div className="impact-stats">
          <div className="stat-item">
            <h3>₹25 Crores</h3>
            <p>Disbursed</p> 
          </div>
          <div className="stat-item">
            <h3>98.5%</h3>
            <p>Repayment Rate</p>
          </div>
          <div className="stat-item">

            <h3>12,500+</h3>
            <p>Verified Borrowers</p>
          </div>
        </div>
        
        <div className="testimonial-tabs">
          <button className='tab-btn'>
            All Stories
          </button>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className={`testimonial-card ${testimonial.type}`} key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">
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
