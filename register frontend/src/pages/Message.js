import React, { useEffect, useState } from 'react';

export function Message() {
  const [leaveRequestData, setLeaveRequestData] = useState(null);


  useEffect(() => {
    // Add an event listener to listen for messages from the student portal
    window.addEventListener('message', receiveMessage);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);
  


  const receiveMessage = (event) => {
    // Make sure the message is from the expected origin (student portal)
    if (event.origin !== 'http://localhost:3000') {
      return;
    }
  
    // Handle the received leave request data
    const data = event.data;
    if (data.type === 'webpackWarnings' ) {
        return 1;
      }
    
    console.log('Received leave request data:', data); // Add this line to check if the data is being received

    setLeaveRequestData(data);
  };

  return (
    <div className="message-container">
      <h1>Leave Request Details</h1>
      {leaveRequestData ? (
        <div>
          <p>Roll No: {leaveRequestData.rollNo}</p>
          <p>Name: {leaveRequestData.name}</p>
          <p>Leave Reason: {leaveRequestData.leaveReason}</p>
          <p>Number of Days: {leaveRequestData.numOfDays}</p>
          <p>From: {leaveRequestData.date}</p>
          {/* Add teacher-specific functionality here, such as approving/rejecting the leave request */}
        </div>
      ) : (
        <p>No leave request data received yet.</p>
      )}
    </div>
  );
}
