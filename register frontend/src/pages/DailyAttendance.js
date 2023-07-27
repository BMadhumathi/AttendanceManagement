import React, { useState } from 'react';
import './DailyAttendance.css';

const studentsData = [
  { rollNumber: 1, name: 'John Doe' },
  { rollNumber: 2, name: 'Jane Smith' },
  { rollNumber: 3, name: 'Alice Johnson' },
  { rollNumber: 4, name: 'Madhu' },
  { rollNumber: 5, name: 'Riya' },
  { rollNumber: 6, name: 'maggi' },
  // Add more student data as needed
];

const DailyAttendance = () => {
  const [students, setStudents] = useState(studentsData);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [filter, setFilter] = useState('all');

  const markAttendance = (rollNumber, isPresent) => {
    const updatedStudents = students.map((student) => {
      if (student.rollNumber === rollNumber) {
        return { ...student, isPresent };
      }
      return student;
    });
    setStudents(updatedStudents);
    updateAttendanceCount(updatedStudents);
  };

  const updateAttendanceCount = (updatedStudents) => {
    const presentStudents = updatedStudents.filter((student) => student.isPresent);
    const absentStudents = updatedStudents.filter((student) => !student.isPresent);
    setPresentCount(presentStudents.length);
    setAbsentCount(absentStudents.length);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === 'present') {
      return student.isPresent;
    }
    if (filter === 'absent') {
      return !student.isPresent;
    }
    return true;
  });

  return (
    <div className="daily-attendance">
      <h2>Daily Attendance</h2>
      <div className="filter">
        <label>Filter:</label>
        <select value={filter} onChange={handleFilterChange} style={{  
          width: '150px',
          margin: '10px',
          height:'40px'
  }}>
          <option value="all" style={{fontSize:'0.6cm'}}>All</option>
          <option value="present"style={{fontSize:'0.6cm'}}>Present</option>
          <option value="absent" style={{fontSize:'0.6cm'}}>Absent</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.rollNumber}>
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox" style={{width:'40px',height:'40px'}}
                  checked={student.isPresent}
                  onChange={(e) => markAttendance(student.rollNumber, e.target.checked)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="attendance-summary">
        <span>Present: {presentCount}</span>
        <span>Absent: {absentCount}</span>
      </div>
    </div>
  );
};

export default DailyAttendance;
