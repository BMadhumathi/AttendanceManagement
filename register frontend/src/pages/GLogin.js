import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './GLogin.css';
import RegistrationForm from '../Form';
import { useDispatch } from 'react-redux';
import App from '../App';
import App2 from '../App2';
import MainPage from '../FormSubmission';
import ManageTeachersAndStudents from '../adminhome';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginRole, setLoginRole] = useState('teacher');
  const [loggedIn, setLoggedIn] = useState(false); // State to track if the user is logged in
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: email,
        password: password,
        role: loginRole,
      });

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem('token', token);

        // Store the email in the Redux store without dispatching LOGIN_SUCCESS action
        dispatch({ type: 'SET_USERNAME', payload: { username:username } });

        // Set loggedIn to true to render the component after successful login
        setLoggedIn(true);
      } else {
        console.log('Invalid response from the server.');
      }
    } catch (error) {
      console.log('Error occurred during login:', error.message);
      alert('invalid credentials');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Use navigate for redirection to the registration form
    navigate('/form'); // Assuming you have a route defined for the registration form
  };

  // Render the component after successful login
  if (loggedIn) {
    // Render the appropriate component based on the login role
    if (loginRole === 'teacher') {
      return <App />;
    } else if (loginRole === 'admin') {
      return <ManageTeachersAndStudents/>;
    } else if (loginRole === 'student') {
      return <App2 />;
    }
  }

  // If not logged in, show the login form
  return (
    <div className="login-container">
      <div className="left-image"></div>
      <div className="right-form">
        <center>
          <div className="student-login-form-bg">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Email:<br/>
                <input type="email" style={{height:'40px',width:'340px'}} value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <br />
              <label>
                Username:<br/>
                <input type="text" style={{height:'40px',paddingLeft:'50px',width:'300px'}} value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <br />
              <label>
                Password:<br/>
                <input
                  type="password" style={{height:'40px',width:'330px'}}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <div className='kk'>
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
                <br />
                <label>
                  <input
                    type="radio"
                    value="student"
                    checked={loginRole === 'student'}
                    onChange={() => setLoginRole('student')}
                  />  Login as Student
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="admin"
                    checked={loginRole === 'admin'}
                    onChange={() => setLoginRole('admin')}
                  />
                  Login as Admin
                  </label>
                  <br />
                  </div>
                  </div>
              <button type="submit">Login</button>
              <br />
              <div className="signup-link" style={{ paddingLeft: '30px' }}>
            <Link onClick={handleClick}>Don't have an account?</Link>
              </div>
            </form>
          </div>
          
        </center>
      </div>
    </div>
  );
}

export default LoginPage;
