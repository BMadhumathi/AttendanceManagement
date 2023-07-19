import React, { createContext, useState } from 'react';

const AttendanceContext = createContext();

const AttendanceProvider = ({ children }) => {
  const studentsData = [
    { rollNumber: 1, name: 'John Doe', isPresent: false },
    { rollNumber: 2, name: 'Jane Smith', isPresent: false },
    { rollNumber: 3, name: 'Alice Johnson', isPresent: false },
    // Add more student data as needed
  ];

  const [students, setStudents] = useState(studentsData);

  const markAttendance = (rollNumber, isPresent) => {
    const updatedStudents = students.map((student) => {
      if (student.rollNumber === rollNumber) {
        return { ...student, isPresent };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <AttendanceContext.Provider value={{ students, markAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export { AttendanceContext, AttendanceProvider };
