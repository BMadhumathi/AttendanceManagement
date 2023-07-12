import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import './HomePage.css';

function Frontpage() {
  return (
    <div className="container">
      <div className="icons-container">
        <Link to="/login-teacher" className="icon-link">
          <div className="icon">
            <FaChalkboardTeacher size={32} />
            <span>Teacher</span>
          </div>
        </Link>
        <Link to="/login-student" className="icon-link">
          <div className="icon">
            <FaUserGraduate size={32} />
            <span>Student</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Frontpage;
