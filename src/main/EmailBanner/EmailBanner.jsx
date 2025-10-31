import React, { useState } from "react";
import "./EmailBanner.css";

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
    <div className="email-banner-container">
      <div className="email-banner-content">
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
              Subscribe to get the latest updates on new arrivals and special offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBanner;
