import React from 'react';
import { Link } from 'react-router-dom';
import './it.css'
function ITdep() {
  return (
    <div >
      <Link to="/managestudent" ><div className='links-button'>1st yr</div></Link>
      <br/>
      <Link to="/managestudent" ><div className='links-button'>2nd yr</div></Link>
       <br/>
      <Link to="/managestudent"><div className='links-button'>3rt yr</div></Link>
      <br/>
      <Link to="/managestudent" ><div className='links-button'>4th yr</div></Link>
      
    </div>
  );
}

export default ITdep;
