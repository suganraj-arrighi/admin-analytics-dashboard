import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@test.com' && password === '1234') {
      login(email);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Sign In</h1>
        <p className="subtitle">Enter your email and password to Sign In.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text" role="alert">{error}</p>}

          <button type="submit" className="btn-primary">SIGN IN</button>
        </form>

        <div className="divider"></div>

        <div className="social-logins">
          <button className="btn-social">
             <span className="icon">G</span> SIGN IN WITH GOOGLE
          </button>
        </div>
        <p className="footer-text">
          Not registered? <a href="#create">Create account</a>
        </p>
      </div>
    </main>
  );
};

export default Login;