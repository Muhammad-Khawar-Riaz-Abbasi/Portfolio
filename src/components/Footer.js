import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}

        {/* Social Media Links */}
        <div className="footer-section social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/khaviiiiiiiii_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:khawarworkspace@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://pk.linkedin.com/in/muhammad-khawar-riaz-abbasi-9b98632a6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 <a
              href="https://linktr.ee/KhawarAbbasi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i className="fas fa-envelope">M Khawar Riaz Abbasi.</i>
            </a> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
