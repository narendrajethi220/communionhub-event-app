import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="Navbar">
      <div className="main-logo">
        <Link to="/">
          <img id="logo-img" src="/images/Logo.png" alt="Logo"/>
        </Link>
      </div>

      <div id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img id="hamburger-icon" src="/images/hamburger.png" alt="menu"/>
      </div>  

      <div className={`links-container ${menuOpen ? "open" : ""}`}>
        <ul id='links'>
          <li className='page-link'><Link to='/'>Home</Link></li>
          <li className='page-link'><Link to='/events'>Events</Link></li>
          <li className='page-link'><Link to='/about'>About</Link></li>
        </ul>

        <div className='btn-sign'>
          <button id='btn-signin'>Sign in</button>
        </div>
      </div>
    </nav>
  );
}
