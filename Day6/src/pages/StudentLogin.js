import React, { useState } from 'react';
import './StudentLogin.css'; // Update the CSS file name
import App from '../App'; // Import the updated App component

function StudentLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (email === 'teacher@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // Handle invalid login credentials
    }
  };

  if (isLoggedIn) {
    return <App />; // Render the entire App component after successful login
  }

  return (
    <div className="student-login-form"> {/* Update the class name */}
      <h2>Student Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default StudentLoginForm;
