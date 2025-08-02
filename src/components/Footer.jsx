import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DNA Pathways CIC</h3>
            <p className="footer-tagline">
              Community Interest Company<br />
              Family-centred support for when the system fails
            </p>
            <div className="footer-badges">
              <div className="footer-badge">
                <Shield size={20} />
                <span>Safeguarding-first</span>
              </div>
              <div className="footer-badge">
                <Shield size={20} />
                <span>DBS Checked</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/services">Our Services</a></li>
              <li><a href="/get-support">Get Support</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/partners">Partner With Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="footer-contact">
              <a href="mailto:support@dnasupport.org.uk" className="footer-contact-item">
                <Mail size={18} />
                support@dnasupport.org.uk
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} />
                Based in Gloucestershire, UK
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <Instagram size={24} />
              </a>
              <a href="mailto:support@dnasupport.org.uk" aria-label="Email" className="footer-social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 DNA Pathways CIC. All rights reserved.</p>
          <p>Lived Experience-led | Fully Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;