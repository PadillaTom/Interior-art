import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      {/* Desktop */}
      <nav className='desktop-nav'>
        <div className='desktop-nav-inside'>
          <div className='nav-logo'>
            <h2 className='logo-text'>Interior Art</h2>
          </div>
          <ul className='desktop-links'>
            <li className='desktop-link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='desktop-link'>
              <Link to='/about'>About</Link>
            </li>
            <li className='desktop-link'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='desktop-link'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
