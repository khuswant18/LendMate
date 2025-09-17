import React from 'react';
import '../Auth/auth.css';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await fetch(`${API_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        navigate('/login');
      } else {
        // Handle error (show message)
        alert('Signup failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    }
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
            <input id="name" name="name" type="text" placeholder="Jane Doe" required />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Create a strong password" required />
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
