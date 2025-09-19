import React, { useState } from 'react';
import '../Auth/auth.css';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
  setError('');
  setLoading(true);
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
            if (data.role === 'borrower') {
              navigate('/borrower');
            } else if (data.role === 'Lender') {
              navigate('/dashboard');
            } else {
              navigate('/');
            }
          } else {
            const error = await res.json();
            setError(error.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in to continue your LendMate journey</p>

        {error && <div className="auth-error" role="alert">{error}</div>}
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required disabled={loading} />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input id="password" name="password" type={showPassword ? 'text':'password'} placeholder="••••••••" required disabled={loading} />
              <button
                type="button"
                className="toggle-password"
                onClick={()=> setShowPassword(p=>!p)}
                aria-label={showPassword? 'Hide password':'Show password'}
                disabled={loading}
              >{showPassword ? 'Hide':'Show'}</button>
            </div>
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary" disabled={loading} aria-busy={loading}>
              {loading ? 'Logging in...' : 'Log in'}
            </button>
            <Link to="/signup" className="auth-switch">New here? Create an account</Link>
          </div>
        </form>
        <div className="visually-hidden" aria-live="polite">{loading ? 'Submitting form' : ''}</div>
      </div>
    </section>
  );
};

export default Login;
