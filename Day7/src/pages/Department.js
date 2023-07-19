import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import './department.css';

const DepartmentPage = () => {
  const departmentData = [
    { id: 1, name: 'CSE', description: 'Computer Science Department', link: '/cs' },
    { id: 2, name: 'IT', description: 'Information Technology Department', link: '/it' },
    { id: 3, name: 'ECE', description: 'Electronics and Communication Engineering Department', link: '/ece' },
    { id: 4, name: 'EE', description: 'Electrical Engineering Department', link: '/ee' },
    { id: 5, name: 'Civil', description: 'Civil Engineering Department', link: '/civil' },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const handleClick = (link) => {
    // Handle the click event or redirect to the specified link
    console.log(`Clicked on department with link: ${link}`);
  };

  return (
    <div className="department-page">
      <h2 className="page-title">Departments</h2>
      <br/>
      <br/>
      <Carousel breakPoints={breakPoints}>
        {departmentData.map((department) => (
          <Link
            key={department.id}
            to={department.link}
            onClick={() => handleClick(department.link)}
            className="department-card"
          >
            <h3 className="department-name">{department.name}</h3>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default DepartmentPage;
