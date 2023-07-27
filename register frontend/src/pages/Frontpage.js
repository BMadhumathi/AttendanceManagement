import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import './HomePage.css';
import GLoginForm from './GLogin'; // Import the StudentLoginForm component

function Frontpage() {
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleTeacherLoginClick = () => {
    setShowTeacherLogin(true);
    setShowStudentLogin(false);
    setShowAdminLogin(false);
  };

  const handleStudentLoginClick = () => {
    setShowStudentLogin(true);
    setShowTeacherLogin(false);
    setShowAdminLogin(false);
  };

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    setShowTeacherLogin(false);
    setShowStudentLogin(false);
  };

  return (
    <div className="container">
      {!showTeacherLogin && !showStudentLogin && !showAdminLogin && (
        <div className="icons-container">
          <div className="icon" onClick={handleTeacherLoginClick}>
            <FaChalkboardTeacher size={50} />
            <span style={{fontSize:'50px',fontFamily:'cursive'}}>Teacher</span>
          </div>
          <div className="icon" onClick={handleStudentLoginClick}>
            <FaUserGraduate size={50} />
            <span style={{fontSize:'50px',fontFamily:'cursive'}}>Student</span>
          </div>
          <div className="icon" onClick={handleAdminLoginClick}>
            <FaUserShield size={50} />
            <span style={{fontSize:'50px',fontFamily:'cursive'}}>Admin</span>
          </div>
        </div>
      )}

      {showTeacherLogin && (
        
          <GLoginForm />
      )}

      {showStudentLogin && (
          <GLoginForm/>
          )}
          
          {showAdminLogin && (
        <GLoginForm />
        
      )}
    </div>
  );
}

export default Frontpage;
