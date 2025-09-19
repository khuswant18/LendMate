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
              <h3>The Problem with Traditional Lending</h3>
            </div>
            <ul className="problem-list">
              <li>
                <div className="list-icon">
                  
                </div>
                <div>
                  <h4>Limited Access</h4>
                  <p>Traditional banks exclude millions without formal credit history or collateral</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                </div>
                <div>
                  <h4>Narrow Eligibility</h4>
                  <p>Rigid qualification criteria that overlook human potential and community trust</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
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
              <h3>How Lending Mate Solves It</h3>
            </div>
            <ul className="solution-list">
              <li>
                <div className="list-icon">
                </div>
                <div>
                  <h4>Inclusive Eligibility</h4>
                  <p>Alternative assessment methods that recognize potential beyond traditional metrics</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                </div>
                <div>
                  <h4>Community Trust</h4>
                  <p>Peer endorsements and social vouching create reliable trust networks</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
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