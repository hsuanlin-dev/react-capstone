import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Little Lemon" />
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Main Street, Chicago, IL</p>
          <p>(312) 555-1234</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
