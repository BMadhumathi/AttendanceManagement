// import React, { useState } from 'react';
// import './contacts.css'
// const Contact = () => {
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform any action with the message, such as sending it to a server
//     // or dispatching an action using Redux

//     // Reset the message input
//     setMessage('');

//     // Show "Submitted, thanks!" message
//     setSubmitted(true);

//     // Hide the message after 3 seconds
//     setTimeout(() => {
//       setSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div>
//       <section id="contact-section" className="contact-section">
//         <h1>Contact</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="message">Queries and Suggestions:</label>
//           <br/><br/>
//           <input
//             type="text"
//             id="message"
//             name="message"
//             value={message}
//             onChange={handleMessageChange}
//             placeholder="Enter your message..."
//             style={{boxSizing:'border-box',width:'300%'}}
//             required
//           />
//           <br/><br/>
//           <button type="submit" style={{height:'70px',width:'100px'}}>Submit</button>
//         </form>
//         {submitted && <p>Submitted, thanks!</p>}
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLeaveRequest } from './Redux/actions/leaveactions';
import { useNavigate } from 'react-router-dom';

import './contacts.css';

const EmpLeaveForm = ({ addLeaveRequest }) => {
 
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new leave request object
    const newLeaveRequest = {
      
      reason
    };

    // Dispatch the addLeaveRequest action
    addLeaveRequest(newLeaveRequest);

    // Reset the form fields
   
    setReason('');

    // Display the alert message
    window.alert('Thanks for your valuable comments !');

    // Navigate to the home page
    
  };

  return (
    <div className="leave-form-container">
      <h2 style={{fontSize:'1cm'}}>Contact us for Queries and Suggestions!!</h2><br/><br/>
      <form onSubmit={handleSubmit}>
             <div className="form-group">
          <label></label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)} style={{width:'700px',height:'300px',fontSize:'0.6cm'}}
            required
          ></textarea>
          </div>
          <br/>
        <button type="submit" style={{fontSize:'1cm',backgroundColor: '#4caf50'}}>Submit</button>
      </form>
    </div>
  );
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    addLeaveRequest: (leaveRequest) => dispatch(addLeaveRequest(leaveRequest))
  };
};

export default connect(null, mapDispatchToProps)(EmpLeaveForm);