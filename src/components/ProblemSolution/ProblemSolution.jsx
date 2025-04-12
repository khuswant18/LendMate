import React from 'react';
import './ProblemSolution.css';

function ProblemSolution() {
  return (
    <section className="problem-solution section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Reimagining Financial Access</h2>
          <p>Breaking barriers between borrowers and lenders</p>
        </div>
        
        <div className="problem-solution-container">
          <div className="problem-box">
            <div className="box-header">
              <div className="box-icon problem-icon"></div>
              <h3>The Problem with Traditional Lending</h3>
            </div>
            <ul className="problem-list">
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <h4>Limited Access</h4>
                  <p>Traditional banks exclude millions without formal credit history or collateral</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <h4>Narrow Eligibility</h4>
                  <p>Rigid qualification criteria that overlook human potential and community trust</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <h4>Trust Barriers</h4>
                  <p>Lack of transparency creates uncertainty for both borrowers and lenders</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="solution-box">
            <div className="box-header">
              <div className="box-icon solution-icon"></div>
              <h3>How Lending Kat Solves It</h3>
            </div>
            <ul className="solution-list">
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Inclusive Eligibility</h4>
                  <p>Alternative assessment methods that recognize potential beyond traditional metrics</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Community Trust</h4>
                  <p>Peer endorsements and social vouching create reliable trust networks</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Open Ledger System</h4>
                  <p>Complete transparency in fund movement and platform operations</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;