import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';

const studentData = {
  position: 'Assistant Professor',
  dept: 'CSE',
  empId: '1234',
};

function Home() {
  const username = useSelector((state) => state.username);

  return (
    <div>
    <div className="container">
      <h1 className="title">Ensuring every moment counts!</h1>
      <h1 className="subtitle" style={{ fontSize: '0.8cm' }}>
        Hi {username}! We're glad to have you here.
      </h1>
      <br />
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Your Profile</h3>
          <p className="card-position">Position: {studentData.position}</p>
          <p className="card-position">Department: {studentData.dept}</p>
          <p className="card-emp-id">Employee ID: {studentData.empId}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Courses</h3>
          <p className="card-content">You are currently teaching:</p>
          <ul className="card-list">
            <li>Java</li>
            <li>OOPs</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Upcoming Events</h3>
          <p className="card-content">Stay tuned for these events:</p>
          <ul className="card-list">
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
            {/* Add more events here */}
          </ul>
        </div>
      </div>
      </div>
  
    
      </div>
  );
}

export default Home;
