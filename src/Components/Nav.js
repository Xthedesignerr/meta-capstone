import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './Nav.css'; // Link your CSS

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Little Lemon" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
}

export default Nav;
