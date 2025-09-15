import React from 'react';
import '../Auth/auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Call your backend login then navigate (if desired)
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-chip">Secure Access</div>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in to continue your LendMate journey</p>

        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required />
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary">Log in</button>
            <Link to="/signup" className="auth-switch">New here? Create an account</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
