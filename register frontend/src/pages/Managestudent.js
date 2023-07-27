// ManageStudents.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './managestudents.css';

function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState('CSE');
  const [classYear, setClassYear] = useState('I');
  const [section, setSection] = useState('A');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [session1PresentCount, setSession1PresentCount] = useState(0);
  const [session1AbsentCount, setSession1AbsentCount] = useState(0);
  const [session2PresentCount, setSession2PresentCount] = useState(0);
  const [session2AbsentCount, setSession2AbsentCount] = useState(0);

  useEffect(() => {
    fetchStudents(selectedDate);
  }, [selectedDate]);

  const fetchStudents = async (date) => {
    try {
      if (date === null) {
        console.error('Please select a date.');
        return;
      }

      const formattedDate = formatDate(date);

      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/students/filter/${department}/${classYear}/${section}?date=${formattedDate}`
      );
      if (response.status === 200) {
        const studentsData = response.data.map((student) => ({
          ...student,
          session1: student.session1 === 'Present' ? 'P' : '',
          session2: student.session2 === 'Present' ? 'P' : '',
        }));
        setStudents(studentsData);
      } else {
        console.error('Failed to fetch students:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleInputChange = async (studentId, session, value) => {
    try {
      const isGovernmentHoliday = checkIfGovernmentHoliday(selectedDate);
      const isFutureDate = checkIfFutureDate(selectedDate);

      if (isGovernmentHoliday || isFutureDate || !isToday(selectedDate)) {
        console.error('Cannot mark attendance on a government holiday or future dates.');
        return;
      }

      const status = value.trim().toUpperCase();
      const finalStatus = status === 'P' || status === 'A' ? status : '';

      const attendanceData = {
        date: selectedDate,
        status: finalStatus,
        session: session,
        student: {
          stu_id: studentId,
        },
      };

      const response = await axios.post('http://localhost:8080/api/v1/auth/attendance', attendanceData);
      if (response.status === 201) {
        console.log('Attendance updated successfully!');
        const updatedStudents = students.map((student) => {
          if (student.stu_id === studentId) {
            return {
              ...student,
              [session === 'Session 1' ? 'session1' : 'session2']: finalStatus,
            };
          }
          return student;
        });
        setStudents(updatedStudents);
      } else {
        console.error('Failed to update attendance:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  const handleSession1ButtonClick = () => {
    const presentCount = students.filter((student) => student.session1 === 'P').length;
    const absentCount = students.filter((student) => student.session1 === 'A').length;
    setSession1PresentCount(presentCount);
    setSession1AbsentCount(absentCount);
  };

  const handleSession2ButtonClick = () => {
    const presentCount = students.filter((student) => student.session2 === 'P').length;
    const absentCount = students.filter((student) => student.session2 === 'A').length;
    setSession2PresentCount(presentCount);
    setSession2AbsentCount(absentCount);
  };

  const checkIfGovernmentHoliday = (date) => {
    return false;
  };

  const checkIfFutureDate = (date) => {
    return date > currentDate;
  };

  const isToday = (date) => {
    const formattedCurrentDate = new Date(currentDate).setHours(0, 0, 0, 0);
    const formattedSelectedDate = new Date(date).setHours(0, 0, 0, 0);
    return formattedSelectedDate === formattedCurrentDate;
  };

  const formatDate = (date) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return '';
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    <div>
   
    
    <div className="manage-students-container">
      <div className="filters-container">
        <div className="filters">
          <label>
            Department:
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </label>
          <label>
            Year:
            <select value={classYear} onChange={(e) => setClassYear(e.target.value)}>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </label>
          <label>
            Section:
            <select value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </label>
          <label>
            Date:
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              todayButton="Today"
            />
          </label>
          <button onClick={fetchStudents}>Fetch Students</button>
        </div>
      </div>
      <div className="table-container">
        {students.length === 0 ? (
          <div>No students found for the selected class, department, and section.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Session 1</th>
                <th>Session 2</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.stu_id}>
                  <td>{student.stu_id}</td>
                  <td>{student.stu_name}</td>
                  <td>
                    {isToday(selectedDate) ? (
                      <input
                        type="text"
                        value={student.session1}
                        onChange={(e) =>
                          handleInputChange(student.stu_id, 'Session 1', e.target.value)
                        }
                        disabled={selectedDate > currentDate}
                      />
                    ) : (
                      <span>{student.session1}</span>
                    )}
                  </td>
                  <td>
                    {isToday(selectedDate) ? (
                      <input
                        type="text"
                        value={student.session2}
                        onChange={(e) =>
                          handleInputChange(student.stu_id, 'Session 2', e.target.value)
                        }
                        disabled={selectedDate > currentDate}
                      />
                    ) : (
                      <span>{student.session2}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="session-counts-container">
        <div>
          <button
            onClick={handleSession1ButtonClick}
            disabled={students.some((student) => student.session1 === '')}
          >
            Session_1
          </button>
          <span>Present: {session1PresentCount}</span>
          <span>Absent: {session1AbsentCount}</span>
        </div>
        <div>
          <button
            onClick={handleSession2ButtonClick}
            disabled={students.some((student) => student.session2 === '')}
          >
            Session_2
          </button>
          <span>Present: {session2PresentCount}</span>
          <span>Absent: {session2AbsentCount}</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ManageStudents;
