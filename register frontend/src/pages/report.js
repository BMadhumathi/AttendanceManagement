import React from 'react';
// import './report.css'
import Navbar2 from '../Navbar2';

import Calendar from './calendar';
function Attendance() {
  return (
    <div className='attendance'>
    <Navbar2/>
    <div className='att-bg'>
    <div className='atext'>My Attendance</div>
    <div className='user'>
    <table cellSpacing={15}><tr><td className='name-cell'>Name:Manohari</td>
    <td>Roll Number:19B68</td></tr>
    <tr><td>Email-Id:Mano68@gmail.com</td>
    <td>Class : X-C</td></tr></table></div>
    </div>
    </div>
    );
  }

export default Attendance;