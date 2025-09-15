import React from 'react';
import '../Auth/auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real backend signup then navigate on success
    navigate('/option');
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-chip">Peer‑to‑Peer Lending</div>
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Join LendMate to borrow or invest with confidence</p>

        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-field">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Jane Doe" required />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Create a strong password" required />
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary">Sign up</button>
            <Link to="/login" className="auth-switch">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
