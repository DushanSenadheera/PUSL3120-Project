import React from 'react';
import './Footer.css'; // Import your Footer stylesheet here

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          <img src="assets/logo footer.png" alt="logo footer" />
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <br />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-other-links">
          <h4>Other</h4>
          <br />
          <ul>
            <li><a href="#">Premiere Now</a></li>
            <li><a href="#">Coming soon</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <br />
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
          </ul>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="footer-bottom">
        <small>Designed & Developed By Group 17</small>
      </div>
    </footer>
  );
}

export default Footer;
