import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">Lend<span className="site-footer__logo-accent">Mate</span></span>
          <p className="site-footer__tag">Empowering Borrowers, Assuring Investors</p>
        </div>
        <nav className="site-footer__links">
          <a href="#" className="site-footer__link">Terms</a>
          <a href="#" className="site-footer__link">Privacy</a>
          <a href="#" className="site-footer__link">Contact</a>
        </nav>
      </div>
      <div className="site-footer__copy">© {new Date().getFullYear()} LendMate.</div>
    </footer>
  );
}

export default Footer;
