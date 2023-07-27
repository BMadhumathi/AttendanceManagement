import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';
import Frontpage from './pages/Frontpage';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showLogout, setShowLogout] = useState(false); // State to handle showing/hiding the logout option

  const showSidebar = () => setSidebar(!sidebar);

  const handleSignUp = () => setIsSignedUp(true);

  const handleContactClick = () => {
    scroll.scrollTo('contact-section', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  // Your comment: Handle "About" button click to show/hide the footer
  const handleAboutClick = () => {
    setShowFooter((prev) => !prev); // Toggle the showFooter state
  };

  // Your comment: Handle the click on the avatar profile icon to show/hide the logout option
  const handleProfileIconClick = () => {
    setShowLogout((prev) => !prev); // Toggle the showLogout state
  };

  // Your comment: Handle the logout action
  const handleLogout = () => {
   Navigate('./f')
  };

  // Your comment: Conditionally render the Navbar based on isSignedUp state
  if (!isSignedUp) {
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <div className='sign-up'>
              <Link to='/' className='sign-up-button'>
                Home
              </Link>
              <Link className='sign-up-button' onClick={handleAboutClick}>
                About
              </Link>
              <Link to='/contact' className='sign-up-button' onClick={handleContactClick}>
                Contact
              </Link>
              {/* Your comment: Add the avatar profile icon */}
              <div className='profile-icon' onClick={handleProfileIconClick}>
                <FaIcons.FaUserCircle
                  style={{ width: '80px', height: '110px', cursor: 'pointer' }}
                />
                {/* Your comment: Show the logout option when showLogout is true */}
                {showLogout && (
                  <div className='logout-option'>
                    <Link  onClick={handleLogout}>Logout</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                if (isSignedUp && item.title === 'Dashboard') {
                  return null;
                }
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
        {/* Your comment: Show the footer when showFooter is true */}
        <div className={showFooter ? 'show-footer' : ''}>
          <footer className='footer'>
            <p style={{ color: 'white', fontSize: '1cm' }}>Manage attendance with ease!!</p>
          </footer>
        </div>
      </>
    );
  } else {
    return null; // If signed up, do not render the Navbar at all
  }
}

export default Navbar;
