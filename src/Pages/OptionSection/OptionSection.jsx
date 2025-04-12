import React from 'react';
import './OptionSection.css';
import { NavLink} from 'react-router-dom';

function OptionSection() {
  return (
    <section className="option">
      <div className="option-container">
        <div className="option-content">
          <h1>Lending Made Human: Empowering Borrowers, Assuring Investors</h1>
          <p>A transparent, community-trusted peer-to-peer lending platform for inclusive finance.</p>

          <div className="option-buttons">
            <NavLink to="/borrower" className="borrower-btn">Be a Borrower</NavLink>
            <NavLink to="/lender" className="lender-btn">Be a Lender</NavLink>
          </div>
        </div>
      </div>

    </section>
  );
}

export default OptionSection;
4