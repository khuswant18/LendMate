import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const borrowerSteps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and build your borrower profile with personal and financial information.'
    },
    {
      number: '02',
      title: 'Get Community Endorsements',
      description: 'Invite trusted connections to vouch for your reliability and credibility.'
    },
    {
      number: '03',
      title: 'Receive Funding',
      description: 'Once approved, receive funds directly and begin your repayment journey.'
    }
  ];

  const investorSteps = [
    {
      number: '01',
      title: 'Join as an Investor',
      description: 'Create your investor account and complete verification.'
    },
    {
      number: '02',
      title: 'Browse Borrower Profiles',
      description: 'Explore verified borrowers and their stories to find meaningful investments.'
    },
    {
      number: '03',
      title: 'Track Your Impact',
      description: 'Monitor repayments, returns, and the social impact of your investments.'
    }
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to financial empowerment</p>
        </div>
        
        <div className="process-container">
          <div className="process-column">
            <div className="process-header">
              <div className="process-icon borrower-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="process-title">For Borrowers</h3>
            </div>
            <div className="process-steps">
              {borrowerSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="process-column">
            <div className="process-header">
              <div className="process-icon investor-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="process-title">For Investors</h3>
            </div>
            <div className="process-steps">
              {investorSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;