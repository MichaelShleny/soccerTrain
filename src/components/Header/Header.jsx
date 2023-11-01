import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-router-dom';
import Close from '../../assets/x-mark.png';

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  // Add an event listener to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1003);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"></img>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={toggleMenu}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundColor: 'var(--appColor)',
              padding: '0.5rem',
              borderRadius: '5px',
            }}
            onClick={closeMenu} // Close the menu when Close icon is clicked
          >
            <img
              src={Close}
              alt=""
              style={{ 
                width: '1.5rem', 
                height: '1.5rem',
                backgroundColor: 'black'}}
              
            />
          </div>
          <ul className="header-menu">
            <Link to="/" className="links">
              <li>Home</li>
            </Link>
            <div className="dropdown">
              <button className="dropbtn">Positions</button>
              <div className="dropdown-content">
                <Link to="/goalkeeper">Goalkeeper</Link>
                <Link to="/defender">Defender</Link>
                <Link to="/midfielder">Midfielder</Link>
                <Link to="/attacker">Attacker</Link>
              </div>
            </div>
            <Link to="/blog" className="links">
              <li>Blog</li>
            </Link>
            <Link to="/tech" className="links">
              <li>Technologies</li>
            </Link>
          </ul>
        </>
      )}
    </div>
  );
};

export default Header;
