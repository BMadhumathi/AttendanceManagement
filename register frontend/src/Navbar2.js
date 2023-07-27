import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { SidebarData2 } from './SidebarData2';
import Frontpage from './pages/Frontpage';

function Navbar2() {
  const [sidebar, setSidebar] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [logoutClicked, setLogoutClicked] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleSignUp = () => setIsSignedUp(true);


  const handleAboutClick = () => {
    setShowFooter(true);
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    setIsSignedUp(false);
    setShowProfileDropdown(false);
    setLogoutClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {logoutClicked ? (
        <Frontpage />
      ) : (
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {!isSignedUp && (
              <div className='sign-up'>
                {!isSignedUp && (
                  <Link to='/' className='sign-up-button'>
                    Home
                  </Link>
                )}
                <button className='sign-up-button' onClick={handleAboutClick}>
                  About
                </button>
                <Link to='/contact' className='sign-up-button' >
                  Contact
                </Link>
                <div className='profile-dropdown'>
                  <FaIcons.FaUserCircle onClick={handleProfileClick} size={70} />
                  {showProfileDropdown && (
                    <div className='dropdown-menu'>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {!isSignedUp && (
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                {SidebarData2.map((item, index) => {
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
          )}
        </IconContext.Provider>
      )}
      <div className={showFooter ? 'show-footer' : ''}>
        <footer className='footer'>
          <p style={{ color: 'white',fontSize:'1cm' }}>Manage Attendance with ease!!</p>
        </footer>
      </div>
    </>
  );
}

export default Navbar2;
