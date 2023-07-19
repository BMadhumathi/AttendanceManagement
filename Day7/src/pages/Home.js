import React from 'react';
import './home.css';

const studentData = { name: 'Riya', position: 'Asst. proff', dept:'CSE', empId: '1234' };

function Home() {
  return (
    <div className="container">
      <h1 className="title">Ensuring every moment counts!!</h1>
      <h2 className="subtitle">Efficiently manage attendance with ease</h2>
      <div className="card-container" style={{paddingLeft:'350px'}}>
        <div className="card" style={{width:'380px',height:'350px'}}>
          <h3 className="card-name" style={{fontSize:'1cm'}}>{studentData.name}</h3>
          <p className="card-position" style={{fontSize:'0.6cm'}}>Position: {studentData.position}</p>
          <p className="card-position" style={{fontSize:'0.6cm'}}>Department: {studentData.dept}</p>
          <p className="card-emp-id" style={{fontSize:'0.4cm'}}>Employee ID: {studentData.empId}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
