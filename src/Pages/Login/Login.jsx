import React from 'react';
import '../Auth/auth.css';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
  const data = await res.json();
  localStorage.setItem('jwt', data.token);
  navigate('/option');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    }
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
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required />
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
