import React, { useState, useEffect } from 'react';
import AddStudentForm from './AddStudent';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import edit and delete icons

const MainPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [classYearFilter, setClassYearFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (student) => {
    const isDuplicate = students.some((existingStudent) => existingStudent.stu_id === student.stu_id);
    if (isDuplicate) {
      alert(`Student with ID ${student.stu_id} already exists and will not be added!`);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/students', student);
        setStudents((prevStudents) => [...prevStudents, response.data]);
      } catch (error) {
        alert('Error adding student:', error);
      }
    }
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleEditStudent = (studentId) => {
    const selectedStudent = students.find((student) => student.stu_id === studentId);
    setSelectedStudent(selectedStudent); // Set the selected student to the state

  };
  const handleUpdateStudent = async (updatedStudent) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/auth/students/${updatedStudent.stu_id}`, updatedStudent);
      setStudents((prevStudents) => prevStudents.map((student) => (student.stu_id === updatedStudent.stu_id ? updatedStudent : student)));
      setSelectedStudent(null); // Clear the selected student after updating
      alert('Student updated successfully!');
    } catch (error) {
      alert('Error updating student:', error);
    }
  };
  const handleSaveEdit = (e, student) => {
    const { name, value } = e.target;
    setSelectedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };



  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/auth/students/${studentId}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student.stu_id !== studentId));
    } catch (error) {
      alert('Error deleting student:', error);
    }
  };



  const filteredStudents = students.filter((student) => {
    const matchesDepartment = !departmentFilter || student.dept_name.toLowerCase() === departmentFilter.toLowerCase();
    const matchesClassYear = !classYearFilter || student.class_year === classYearFilter;
    const matchesSection = !sectionFilter || student.section.toLowerCase() === sectionFilter.toLowerCase();
    return matchesDepartment && matchesClassYear && matchesSection;
  });

  const sortedStudents = filteredStudents.sort((a, b) => a.stu_id - b.stu_id);

  const departmentOptions = ['CSE', 'IT', 'ECE', 'EEE'];
  const classYearOptions = ['I year', 'II year', 'III year', 'IV year'];
  const sectionOptions = ['A', 'B'];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2em' }}>Student Management System</h1>
      <br />
      <button style={{ padding: '10px 20px', fontSize: '1.2em' }} onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Add Student'}
      </button>
      {showForm ? (
        <AddStudentForm onSubmit={handleAddStudent} />
      ) : (
        <div style={{ margin: '20px auto', maxWidth: '800px' }}>
          <div style={{ marginBottom: '10px' }}>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              style={{ fontSize: '1.2em', padding: '5px' }}
            >
              <option value="">All Departments</option>
              {departmentOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>

            <select
              value={classYearFilter}
              onChange={(e) => setClassYearFilter(e.target.value)}
              style={{ fontSize: '1.2em', padding: '5px' }}
            >
              <option value="">All Class Years</option>
              {classYearOptions.map((classYear) => (
                <option key={classYear} value={classYear}>
                  {classYear}
                </option>
              ))}
            </select>

            <select
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
              style={{ fontSize: '1.2em', padding: '5px' }}
            >
              <option value="">All Sections</option>
              {sectionOptions.map((section) => (
                <option key={section} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>

          {sortedStudents.length > 0 ? (
            <div>
              <h2 style={{ fontSize: '1.5em' }}>Added Students:</h2>
              <table style={{ width: '100%', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Class Year</th>
                    <th>Section</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((student) => (
                    <tr key={student.stu_id}>
                      <td>{student.stu_id}</td>
                      <td>{student.stu_name}</td>
                      <td>{student.class_year}</td>
                      <td>{student.section}</td>
                      <td>{student.dept_name}</td>
                      <td>
                        <button onClick={() => handleEditStudent(student.stu_id)}>
                          <FaEdit />
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleDeleteStudent(student.stu_id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{ fontSize: '1.2em' }}>No students found.</p>
          )}
        </div>
      )}

      {/* Modal for Edit Student */}
      {selectedStudent && (
        <div className="edit-form">
          <h2>Edit Student</h2>
          <form onSubmit={() => handleUpdateStudent(selectedStudent)}>
            <div className="form-group">
              <label htmlFor="stu_id">Roll No:</label>
              <input
                type="number"
                id="stu_id"
                name="stu_id"
                value={selectedStudent.stu_id}
                onChange={(e) =>handleSaveEdit(e, selectedStudent)}
                required
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_name">Name:</label>
              <input
                type="text"
                id="stu_name"
                name="stu_name"
                value={selectedStudent.stu_name}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_gender">Gender:</label>
              <input
                type="text"
                id="stu_gender"
                name="stu_gender"
                value={selectedStudent.stu_gender}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_phno">Phone Number:</label>
              <input
                type="text"
                id="stu_phno"
                name="stu_phno"
                value={selectedStudent.stu_phno}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
          
            <div className="form-group">
              <label htmlFor="class_year">Class Year:</label>
              <input
                type="text"
                id="class_year"
                name="class_year"
                value={selectedStudent.class_year}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="section">Section:</label>
              <input
                type="text"
                id="section"
                name="section"
                value={selectedStudent.section}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept_name">Department:</label>
              <input
                type="text"
                id="dept_name"
                name="dept_name"
                value={selectedStudent.dept_name}
                onChange={(e) => handleSaveEdit(e, selectedStudent)}
                required
              />
            </div>
            <button type="submit">Update Student</button>
          </form>
        </div>
      )}
 

    </div>
  );
};

export default MainPage;
