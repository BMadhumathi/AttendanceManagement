import React, { useState } from 'react';
import './TeacherLogin.css'
function TeacherLoginForm() {
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
    // Redirect or render the teacher dashboard component upon successful login
    // For simplicity, we'll just display a success message here
    return <div>Login successful! Teacher Dashboard will be displayed here.</div>;
  }

  return (
    <div>
      <h2>Teacher Login</h2>
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

export default TeacherLoginForm;
