import React from 'react';
import './OptionSection.css';
import { NavLink} from 'react-router-dom';

function OptionSection() {
  return (
    <section className="option">
      <div className="option-container">
        <div className="option-content">
          <h1>Transforming lending into a trusted partnership empowering borrowers ,while enabling lenders to invest securely.</h1>
          <p>Unlock your financial journey by choosing the path that best fits your goals.</p>

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
