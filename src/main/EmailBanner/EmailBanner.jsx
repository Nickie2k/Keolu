import React, { useState } from "react";
import "./EmailBanner.css";
import visaLogo from "./visa (2).png";
import mastercardLogo from "./card.png";
import applePayLogo from "./apple-pay.png";
import amexLogo from "./amex.png";

const EmailBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="email-banner-container">
      {/* Newsletter Section */}
      <div className="email-banner-content">
        <div className="text-icon-group">
          <div className="email-icon">
            <svg viewBox="0 0 24 24" className="banner-icon">
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </div>
          <div className="email-text-section">
            <h3 className="email-banner-title">Stay Updated with Keolu Beer</h3>
            <p className="email-banner-description">
              Subscribe to get the latest updates on new arrivals and special
              offers
            </p>
          </div>
        </div>
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>

      {/* Payment Methods Section */}
      <div className="payment-methods">
        <h4 className="payment-title">We Accept</h4>
        <div className="payment-logos">
          <div className="payment-card">
            <img src={visaLogo} alt="Visa" className="payment-icon" />
          </div>
          <div className="payment-card">
            <img src={mastercardLogo} alt="Mastercard" className="payment-icon" />
          </div>
          <div className="payment-card">
            <img src={amexLogo} alt="American Express" className="payment-icon" />
          </div>
          <div className="payment-card">
            <img src={applePayLogo} alt="Apple Pay" className="payment-icon" />
          </div>
        </div>
      </div>

      {/* Footer Information Section */}
      <div className="footer-info">
        <div className="footer-columns">
          {/* About Column */}
          <div className="footer-column">
            <h4 className="footer-heading">About Keolu Beer</h4>
            <p className="footer-text">
              Your paradise in every sip. Discover the finest craft beers and
              tropical flavors at Hawaii's premier beach destination.
            </p>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">📍 1051 Keolu Dr # 101</p>
            <p className="footer-text">Kailua, HI 96734</p>
            <p className="footer-text">📞 (808) XXX-XXXX</p>
            <p className="footer-text">✉️ info@keolubeers.com</p>
          </div>

          {/* Hours Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Opening Hours</h4>
            <p className="footer-text">Monday - Sunday</p>
            <p className="footer-text">10:00 AM - 10:00 PM</p>
            <p className="footer-text">Open Every Day!</p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#ubereats" className="footer-link">
              UberEats
            </a>
            <a href="#doordash" className="footer-link">
              DoorDash
            </a>
            <a
              href="https://www.google.com/maps/dir//Keolu+Beers,+1051+Keolu+Dr+%23+101,+Kailua,+HI+96734"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Keolu Beer. All rights reserved. | Your
          Paradise in Every Sip 🍺
        </p>
      </div>
    </footer>
  );
};

export default EmailBanner;
