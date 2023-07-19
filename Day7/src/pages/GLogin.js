import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GLogin.css';
import App from '../App';
import App2 from '../App2';

function GLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginRole, setLoginRole] = useState('teacher');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (email === 'teacher@example.com' && password === 'password' && loginRole === 'teacher') {
      setIsLoggedIn(true);
    } else if (email === 'admin@example.com' && password === 'password' && loginRole === 'admin') {
      setIsLoggedIn(true);
    } else if (email === 'student@example.com' && password === 'password' && loginRole === 'student') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // Handle invalid login credentials
    }
  };

  if (isLoggedIn) {
    if (loginRole === 'teacher' || loginRole === 'admin') {
      return <App />;
    } else if (loginRole === 'student') {
      return <App2 />;
    }
  }

  return (
    <div className="student-login-form">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="role-select">
          <label>
            <input
              type="radio"
              value="teacher"
              checked={loginRole === 'teacher'}
              onChange={() => setLoginRole('teacher')}
            />
            Login as Teacher
          </label>
          <label>
            <input
              type="radio"
              value="student"
              checked={loginRole === 'student'}
              onChange={() => setLoginRole('student')}
            />
            Login as Student
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={loginRole === 'admin'}
              onChange={() => setLoginRole('admin')}
            />
            Login as Admin
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <br/>
      <div className="signup-link">
        <Link to="/form">Don't have an account?</Link>
      </div>
    </div>
  );
}

export default GLoginForm;
