import React from 'react';
import { FaHome, FaEnvelope, FaPhone, FaPrint, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h6 className="footer-heading">Online Learning</h6>
          <p>
            Welcome to Online Learning, your go-to platform for expanding your knowledge and skills. Explore our courses and stay connected.
          </p>
        </div>

        <div className="footer-section products">
          <h6 className="footer-heading">Products</h6>
          <ul>
            <li><a href="#">Course Catalog</a></li>
            <li><a href="#">Premium Courses</a></li>
            <li><a href="#">E-books</a></li>
            <li><a href="#">Certifications</a></li>
          </ul>
        </div>

        <div className="footer-section useful-links">
          <h6 className="footer-heading">Useful Links</h6>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h6 className="footer-heading">Contact</h6>
          <ul>
            <li><FaHome className="icon" /> 123 Learning St, Education City, EC 10001</li>
            <li><FaEnvelope className="icon" /> support@onlinelearning.com</li>
            <li><FaPhone className="icon" /> +01 234 567 89</li>
            <li><FaPrint className="icon" /> +01 234 567 90</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <a href="https://twitter.com/" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://google.com/" aria-label="Google"><FaGoogle /></a>
          <a href="https://instagram.com/" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <p className="footer-credit">© 2024 Online Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
