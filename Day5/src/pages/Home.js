import React from 'react';
import './home.css';
import Contact from '../Contact';
function Home() {
  return (
    <div className="container" id="contact-section">
    <h1 className="title" style={{fontSize:'1.5cm'}}>Ensuring every moment counts!!</h1>
      <h2 className="subtitle">Efficiently manage attendance with ease</h2>
       <Contact/>
    </div>
  );
}
export default Home;
