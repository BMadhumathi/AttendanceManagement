import React, { useState } from 'react';

const AddTeacher = ({ onSubmit, setTeachers }) => {
  const [teacher, setTeacher] = useState({
    teacher_id: '', // Added the teacher_id field
    teacher_name: '',
    dept_name: '',
    subject_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(teacher); // Pass the teacher data to the parent component

    // Clear the form fields
    setTeacher({
      teacher_id: '', // Reset the teacher_id field
      teacher_name: '',
      dept_name: '',
      subject_name: '',
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.8em', marginBottom: '20px' }}>Add Teacher</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridGap: '10px' }}>
        <div>
          <label htmlFor="teacher_id" style={{ fontSize: '1.2em' }}>ID:</label>
          <input
            type="text"
            id="teacher_id"
            name="teacher_id"
            value={teacher.teacher_id}
            onChange={handleChange}
            required
            style={{ padding: '8px', fontSize: '1em', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="teacher_name" style={{ fontSize: '1.2em' }}>Teacher Name:</label>
          <input
            type="text"
            id="teacher_name"
            name="teacher_name"
            value={teacher.teacher_name}
            onChange={handleChange}
            required
            style={{ padding: '8px', fontSize: '0.6cm', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="dept_name" style={{ fontSize: '1.2em' }}>Department:</label>
          <input
            type="text"
            id="dept_name"
            name="dept_name"
            value={teacher.dept_name}
            onChange={handleChange}
            required
            style={{ padding: '8px', fontSize: '0.6cm', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="subject_name" style={{ fontSize: '0.6cm' }}>Subject:</label>
          <input
            type="text"
            id="subject_name"
            name="subject_name"
            value={teacher.subject_name}
            onChange={handleChange}
            required
            style={{ padding: '8px', fontSize: '0.6cm', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1.2em',
            cursor: 'pointer',
          }}
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
