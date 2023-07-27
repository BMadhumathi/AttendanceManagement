import React, { useState, useEffect } from 'react';
import AddTeacher from './addteacher';
import axios from 'axios';

const TeacherForm = () => {
  const [showForm, setShowForm] = useState(true); // Set initial state to true
  const [teachers, setTeachers] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleAddTeacher = async (teacher) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/teachers', teacher);
      const newTeacher = response.data;
      setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
      setShowForm(false);
      alert('Teacher details added successfully!');
    } catch (error) {
      console.error('Error adding teacher:', error);
      alert('Error adding teacher. Please try again.');
    }
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const departmentMatch =
      !departmentFilter || teacher.dept_name.toLowerCase() === departmentFilter.toLowerCase();
    const subjectMatch = !subjectFilter || teacher.subject_name.toLowerCase().includes(subjectFilter.toLowerCase());
    return departmentMatch && subjectMatch;
  });

  const departmentOptions = ['CSE', 'IT', 'ECE', 'EEE'];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>Teacher Management System</h1>
      <button
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={toggleForm}
      >
        {showForm ? 'Hide Form' : 'Add Teacher'}
      </button>
      {showForm && <AddTeacher onSubmit={handleAddTeacher} />}
      {/* Move the rest of the code inside a conditional block */}
      {showForm ? null : (
        <div>
          <div style={{ marginTop: '20px' }}>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              style={{ fontSize: '1em', padding: '8px', marginRight: '10px' }}
            >
              <option value="">All Departments</option>
              {departmentOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Filter by Subject"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              style={{ fontSize: '1em', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          {filteredTeachers.length > 0 ? (
            <div style={{ marginTop: '20px' }}>
              <h2 style={{ fontSize: '1.5em' }}>Added Teachers:</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Teacher ID</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Department</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTeachers.map((teacher) => (
                    <tr key={teacher.teacher_id} style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>{teacher.teacher_id}</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>{teacher.teacher_name}</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>{teacher.dept_name}</td>
                      <td style={{ padding: '10px', border: '1px solid #ccc' }}>{teacher.subject_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{ fontSize: '1em' }}>No teachers found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherForm;
