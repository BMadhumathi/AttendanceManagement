// import React from 'react';
// import './home.css';

// function Home() {
//   return (
//     <div className="container" id="contact-section">
//     <h1 className="title" style={{fontSize:'1.5cm'}}>Ensuring every moment counts!!</h1>
//       <h2 className="subtitle">Efficiently manage attendance with ease</h2>
//     </div>
//   );
// }
// export default Home;

import React, { useState } from 'react';
import './home.css';
//import DailyAttendance from './DailyAttendance';
 // Import the DailyAttendance component

const studentsData = [
  { rollNumber: 1, name: 'John Doe' },
  { rollNumber: 2, name: 'Jane Smith' },
  { rollNumber: 3, name: 'Alice Johnson' },
  // Add more student data as needed
];

function Home() {
  const [students, setStudents] = useState(studentsData);
  const [presentCount, setPresentCount] = useState(0);
  const [offDutyCount, setOffDutyCount] = useState(0);
  const [onLeaveCount, setOnLeaveCount] = useState(0);

  const updateAttendanceCount = () => {
    const presentStudents = students.filter((student) => student.isPresent);
    const offDutyStudents = students.filter((student) => student.isOffDuty);
    const onLeaveStudents = students.filter((student) => student.isOnLeave);
    setPresentCount(presentStudents.length);
    setOffDutyCount(offDutyStudents.length);
    setOnLeaveCount(onLeaveStudents.length);
  };

  const handleCardClick = (status) => {
    // Filter students based on the status clicked
    const filteredStudents = students.filter((student) => {
      if (status === 'present') {
        return student.isPresent;
      } else if (status === 'offDuty') {
        return student.isOffDuty;
      } else if (status === 'onLeave') {
        return student.isOnLeave;
      }
      return false;
    });

    // Get the names of the filtered students
    const studentNames = filteredStudents.map((student) => student.name);

    // Display the names of the students
    alert(`Students: ${studentNames.join(', ')}`);
  };

  return (
    <div className="container">
      <h1 className="title">Ensuring every moment counts!!</h1>
      <h2 className="subtitle">Efficiently manage attendance with ease</h2>
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick('present')}>
          <h3 className="card-title">Present</h3>
          <p className="card-count">{presentCount}</p>
        </div>
        <div className="card" onClick={() => handleCardClick('offDuty')}>
          <h3 className="card-title">Off Duty</h3>
          <p className="card-count">{offDutyCount}</p>
        </div>
        <div className="card" onClick={() => handleCardClick('onLeave')}>
          <h3 className="card-title">On Leave</h3>
          <p className="card-count">{onLeaveCount}</p>
        </div>
      </div>
      </div>
      );
      // <DailyAttendance
      //   students={students}
      //   setStudents={setStudents}
      //   updateAttendanceCount={updateAttendanceCount}
      // />
}

export default Home;
