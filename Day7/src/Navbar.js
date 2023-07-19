import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleSignUp = () => setIsSignedUp(true);
  const handleContactClick = () => {
    scroll.scrollTo('contact-section', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const handleAboutClick = () => {
    setShowFooter(true);
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
              <button className='sign-up-button' onClick={handleAboutClick}>
                About
              </button>
              <Link to='/contact' className='sign-up-button' onClick={handleContactClick}>
                Contact
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
      <div className={showFooter ? 'show-footer' : ''}>
        <footer className='footer'>
          <p style={{ color: 'white' ,fontSize:'1cm'}}>Manage attendance with ease!!</p>
        </footer>
      </div>
    </>
  );
}

export default Navbar;
