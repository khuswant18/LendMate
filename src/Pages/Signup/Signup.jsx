import React, { useState, useRef } from 'react';
import '../Auth/auth.css';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const firstFieldRef = useRef(null);
  const statusRef = useRef(null);

  const evaluateStrength = (pwd) => {
    if (!pwd) return '';
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return ['Weak','Fair','Good','Strong'][score-1] || 'Very weak';
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    // Basic front-end validation
    if (password.length < 6) {
      setLoading(false);
      setError('Password must be at least 6 characters.');
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      if (res.ok) {
        navigate('/login');
      } else {
        const error = await res.json();
        setError(error.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
      if (statusRef.current) statusRef.current.focus();
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Join LendMate to borrow or invest with confidence</p>

        {error && (
          <div className="auth-error" role="alert" ref={statusRef} tabIndex={-1}>{error}</div>
        )}
        <form className="auth-form" onSubmit={onSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="name">Full name</label>
            <input ref={firstFieldRef} id="name" name="name" type="text" placeholder="Jane Doe" required disabled={loading} />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required disabled={loading} />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a strong password"
                required
                disabled={loading}
                onChange={(e)=> setPasswordStrength(evaluateStrength(e.target.value))}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={()=> setShowPassword(p=>!p)}
                aria-label={showPassword? 'Hide password':'Show password'}
                disabled={loading}
              >{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            {passwordStrength && <div className={`pwd-strength strength-${passwordStrength.toLowerCase().replace(' ','')}`}>Strength: {passwordStrength}</div>}
          </div>
          <div className="auth-field">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" required disabled={loading}>
              <option value="BORROWER">Borrower</option>
              <option value="LENDER">Lender</option>
            </select>
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary" disabled={loading} aria-busy={loading}>
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
            <Link to="/login" className="auth-switch">Already have an account? Log in</Link>
          </div>
        </form>
        <div className="visually-hidden" aria-live="polite">{loading ? 'Submitting form' : ''}</div>
      </div>
    </section>
  );
};

export default Signup;
