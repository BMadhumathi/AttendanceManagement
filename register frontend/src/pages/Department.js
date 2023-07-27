import React from 'react';
import { Link } from 'react-router-dom';
import './department.css';

const DepartmentPage = () => {
  const departmentData = [
    { id: 1, name: 'CSE', description: 'Computer Science Department', link: '/managestudent' },
    { id: 2, name: 'IT', description: 'Information Technology Department', link: '/managestudent' },
    { id: 3, name: 'ECE', description: 'Electronics and Communication Engineering Department', link: '/managestudent' },
    { id: 4, name: 'EE', description: 'Electrical Engineering Department', link: '/managestudent' },
    { id: 5, name: 'Civil', description: 'Civil Engineering Department', link: '/managestudent' },
  ];

  const handleClick = (link) => {
    // Handle the click event or redirect to the specified link
    console.log(`Clicked on department with link: ${link}`);
  };

  return (
    <div className="department-page">
    <h2 className="page-title" style={{fontSize:"2cm"}}>Departments</h2>
     
      <div className="department-card-container">
        {departmentData.map((department) => (
          <Link
            key={department.id}
            to={department.link}
            onClick={() => handleClick(department.link)}
            className="department-card"
          >
            <h3 className="department-name">{department.name}</h3>
            <p className="department-description">{department.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
