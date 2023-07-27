// AddStudent.js

import './AddStudent.css';
import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    stu_id: '',
    stu_name: '',
    stu_gender: '',
    stu_phno: '',
    class_year: '',
    section: '',
    dept_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/students', student);
      onSubmit(response.data);
      setStudent({
        stu_id: '',
        stu_name: '',
        stu_gender: '',
        stu_phno: '',
        class_year: '',
        section: '',
        dept_name: '',
      });
      window.alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="form-container-wrapper">

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="stu_id">Roll No:</label>
        <input
          type="number"
          id="stu_id"
          name="stu_id"
          value={student.stu_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_name">Name:</label>
        <input
          type="text"
          id="stu_name"
          name="stu_name"
          value={student.stu_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_gender">Gender:</label>
        <input
          type="text"
          id="stu_gender"
          name="stu_gender"
          value={student.stu_gender}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_phno">Phone Number:</label>
        <input
          type="text"
          id="stu_phno"
          name="stu_phno"
          value={student.stu_phno}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="class_year">Class Year:</label>
        <input
          type="text"
          id="class_year"
          name="class_year"
          value={student.class_year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="section">Section:</label>
        <input
          type="text"
          id="section"
          name="section"
          value={student.section}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dept_name">Department:</label>
        <input
          type="text"
          id="dept_name"
          name="dept_name"
          value={student.dept_name}
          onChange={handleChange}
          required
        />
      </div>
      <br/>
      <button type="submit" className='but'>Add Student</button>
    </form>
    </div>
  );
};

export default AddStudentForm;
