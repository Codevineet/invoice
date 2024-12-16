import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../api/api';
import Image from "../assets/img2.jpg";
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="header-container">
      <div className="header-content">

        <div className="logo-section">
          <Link to="/" className="logo">
            <img src={Image} alt="Logo" className="logo-image" />
            <p className="logo-text">InvoiceTrigger</p>
          </Link>
        </div>

        <div className="user-info">
          {user ? (
            <>
              <div className="user-profile">
                {user.photos && user.photos.length > 0 && (
                  <img src={user.photos[0].value} alt={`${user.displayName}'s profile`} className="profile-pic" />
                )}
                <span className="user-details">
                  <span className="welcome-messagee">Welcome, {user.displayName}</span>
                  {user.emails && user.emails.length > 0 && (
                    <span className="user-email">{user.emails[0].value}</span>
                  )}
                </span>
              </div>

       
              <Link to="/contact-us" className="contact-link">
                Contact Us
              </Link>

              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/google" className="login-button">
              Login with Google
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
