import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import './HomePage.css';
import TeacherLoginForm from './TeacherLogin'; // Import the TeacherLoginForm component
import StudentLoginForm from './StudentLogin'; // Import the StudentLoginForm component

function Frontpage() {
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);

  const handleTeacherLoginClick = () => {
    setShowTeacherLogin(true);
    setShowStudentLogin(false);
  };

  const handleStudentLoginClick = () => {
    setShowStudentLogin(true);
    setShowTeacherLogin(false);
  };

  return (
    <div className="container">
      {!showTeacherLogin && !showStudentLogin && (
        <div className="icons-container">
          <div className="icon" onClick={handleTeacherLoginClick}>
            <FaChalkboardTeacher size={50} />
            <span>Teacher</span>
          </div>
          <div className="icon" onClick={handleStudentLoginClick}>
            <FaUserGraduate size={50} />
            <span>Student</span>
          </div>
        </div>
      )}

      {showTeacherLogin && (
        <div className="teacher-login-form">
          <TeacherLoginForm />
        </div>
      )}

      {showStudentLogin && (
          <StudentLoginForm />
      )}
    </div>
  );
}

export default Frontpage;
