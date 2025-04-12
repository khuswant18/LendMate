import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">Peer-to-Peer Lending Platform</div>
          <h1>Lending Made Human: Empowering Borrowers, Assuring Investors</h1>
          <p>A transparent, community-trusted peer-to-peer lending platform for inclusive finance.</p>
          <div className="hero-buttons">
            <a href="/borrower" className="btn">Join as Borrower</a>
            <a href="/investor" className="btn btn-secondary">Invest with Confidence</a>
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
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="image-card">
              <div className="image-card-inner">
                <div className="card-icon"></div>
                <div className="card-content">
                  <div className="card-line"></div>
                  <div className="card-line"></div>
                  <div className="card-line"></div>
                </div>
              </div>
            </div>
            <div className="image-card card-2">
              <div className="image-card-inner">
                <div className="card-icon"></div>
                <div className="card-content">
                  <div className="card-line"></div>
                  <div className="card-line"></div>
                </div>
              </div>
            </div>
            <div className="image-card card-3">
              <div className="image-card-inner">
                <div className="card-icon"></div>
                <div className="card-content">
                  <div className="card-line"></div>
                  <div className="card-line"></div>
                  <div className="card-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;