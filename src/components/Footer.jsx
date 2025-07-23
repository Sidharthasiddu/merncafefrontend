import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: About */}
        <div className="footer-section">
          <h3 className="footer-heading">Our Mission</h3>
          <p className="footer-text">
            Empowering users with seamless shopping experiences through modern technology.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Tech Used */}
        <div className="footer-section">
          <h4 className="footer-subheading">Built With</h4>
          <ul className="footer-list">
            <li><a href="https://react.dev/" className="footer-link" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://vitejs.dev/" className="footer-link" target="_blank" rel="noopener noreferrer">Vite</a></li>
            <li><a href="https://nodejs.org/" className="footer-link" target="_blank" rel="noopener noreferrer">Node.js</a></li>
            <li><a href="https://mongodb.com/" className="footer-link" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
          </ul>
        </div>

        {/* Section 4: External Resources */}
        <div className="footer-section">
          <h4 className="footer-subheading">External Links</h4>
          <ul className="footer-list">
            <li><a href="https://github.com/" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}
