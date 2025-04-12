import React from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';


function Hero() {
  return (
    <section className="hero">
  
      <div className="container hero-container">
        <div className="hero-content">

          <div className="badge">Peer-to-Peer Lending Platform</div>
          <h1>Lending Made Human: Empowering Borrowers, Assuring Investors</h1>
          <p>A transparent, community-trusted peer-to-peer lending platform for inclusive finance.</p>

          <div className="hero-buttons">
            <NavLink to="/option" className="btn btn-secondary">Get Started</NavLink>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98.5%</span>
              <span className="stat-label">Repayment Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹25Cr+</span>
              <span className="stat-label">Disbursed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero; 