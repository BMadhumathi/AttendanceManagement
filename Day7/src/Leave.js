import React, { useState } from 'react';
import './leave.css';

const LeaveRequestPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [leaveReason, setLeaveReason] = useState('');
  const [numOfDays, setNumOfDays] = useState('');
  const [date, setDate] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or API calls here
    if (!rollNo || !name || !leaveReason || !numOfDays || !date) {
      alert('Please fill in all fields.');
      return;
    }

    // Reset the form fields
    setRollNo('');
    setName('');
    setLeaveReason('');
    setNumOfDays('');
    setDate('');

    // Show the success message
    alert('Submitted. Your leave request will be reviewed soon!');
  };

  const renderLeaveForm = () => {
    return (
      <form onSubmit={handleFormSubmit} className='fm'>
        <label>
          Roll No:
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} style={{height:'0.9cm'}} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{height:'0.9cm'}} required />
        </label>
        <label>
          Leave Reason:
          <textarea value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} required />
        </label>
        <label>
          Number of Days:
          <input type="number" value={numOfDays} onChange={(e) => setNumOfDays(e.target.value)} required />
        </label>
        <label>
          From:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{height:'0.9cm'}} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div className="leave-request-container">
      <h1>Leave Request</h1>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Request Leave</button>
      )}
      {showForm && renderLeaveForm()}
    </div>
  );
};

export default LeaveRequestPage;
