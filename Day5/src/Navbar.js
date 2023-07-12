import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { animateScroll as scroll,scroller } from 'react-scroll';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleSignUp = () => setIsSignedUp(true);
  const handleContactClick = () => {
    scroll.scrollTo('contact-section', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {!isSignedUp && (
            <div className='sign-up'>
              <Link to='/' className='sign-up-button'>
                Home
              </Link>
              <Link to='/about' className='sign-up-button'>
                About
              </Link>
              <Link to='/contact' className='sign-up-button' onClick={handleContactClick}>
                Contact
              </Link>
              <Link to='/form' className='sign-up-button' onClick={handleSignUp}>
                SIGN UP
              </Link>
            </div>
          )}
          {!isSignedUp && (
            <div className='profile-icon'>
              <Link to='/profile'>
                <AiIcons.AiOutlineUser />
              </Link>
            </div>
          )}
        </div>
        {!isSignedUp && (
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
        )}
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
