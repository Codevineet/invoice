import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
        <Link to="/contact-us" className="footer-link">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
