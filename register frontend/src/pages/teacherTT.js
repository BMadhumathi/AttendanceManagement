import React from 'react';
import { Link } from 'react-router-dom';
import './department.css';

const DepartmentPage = () => {
  const departmentData = [
    { id: 1, name: 'CSE', description: 'Computer Science Department', link: '/ittt' },
    { id: 2, name: 'IT', description: 'Information Technology Department', link: '/ittt' },
    { id: 3, name: 'ECE', description: 'Electronics and Communication Engineering Department', link: '/ittt' },
    { id: 4, name: 'EE', description: 'Electrical Engineering Department', link: '/ittt' },
    { id: 5, name: 'Civil', description: 'Civil Engineering Department', link: '/ittt' },
  ];

  const handleClick = (link) => {
    // Handle the click event or redirect to the specified link
    console.log(`Clicked on department with link: ${link}`);
  };

  return (
    <div className="department-page">
     
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
