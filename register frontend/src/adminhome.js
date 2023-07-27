import React, { useState } from 'react';
import TeacherForm from './pages/teacherform';
import MainPage from './FormSubmission';

const ManageTeachersAndStudents = () => {
  const [showManageTeachers, setShowManageTeachers] = useState(false);
  const [showManageStudents, setShowManageStudents] = useState(false);

  const handleManageTeachersClick = () => {
    setShowManageTeachers(true);
    setShowManageStudents(false);
  };

  const handleManageStudentsClick = () => {
    setShowManageStudents(true);
    setShowManageTeachers(false);
  };

  return (
    <div>
      {!showManageTeachers && !showManageStudents && (
        <div style={{ display: 'flex', width: '100%', maxWidth: '1000px' }}>
          <div
            onClick={handleManageTeachersClick}
            style={{
              flex: 1,
              padding: '40px',
              margin: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
            }}
          >
            <h2>Manage Teachers</h2>
            {/* Add your content for managing teachers here */}
          </div>
          <div
            onClick={handleManageStudentsClick}
            style={{
              flex: 1,
              padding: '40px',
              margin: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
            }}
          >
            <h2>Manage Students</h2>
            {/* Add your content for managing students here */}
          </div>
        </div>
      )}
      {showManageTeachers && <TeacherForm />}
      {showManageStudents && <MainPage />}
    </div>
  );
};

export default ManageTeachersAndStudents;
