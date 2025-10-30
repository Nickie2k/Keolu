// useState is a React Hook that lets you add state to functional components
// State is data that changes over time and causes the component to re-render when updated
import React, { useState } from "react";
import "./myHeader.css";
import uberEatsIcon from "./icons8-uber-eats-app-48.png";
import doorDashIcon from "./doordash.jpeg";

const MyHeader = () => {
  // useState Hook syntax: const [stateVariable, setterFunction] = useState(initialValue);
  // - isModalOpen: the current state value (true or false)
  // - setIsModalOpen: function to update the state (calling it triggers a re-render)
  // - useState(false): sets the initial value to false (modal closed by default)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to open the modal
  // Calls setIsModalOpen(true) which updates the state and re-renders the component
  const openModal = () => setIsModalOpen(true);

  // Helper function to close the modal
  // Calls setIsModalOpen(false) which updates the state and re-renders the component
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="my-header-container">
        <div className="my-header-left">
          <h1 className="my-header-brand">Keolu Beer 🍺</h1>
        </div>
        <nav className="my-header-right">
          {/* When this button is clicked, openModal() is called */}
          {/* openModal() sets isModalOpen to true, causing the component to re-render */}
          {/* After re-render, the modal appears because {isModalOpen && ...} becomes true */}
          <button
            onClick={openModal}
            className="my-header-link my-header-contact-btn"
          >
            Contact Us
          </button>
          <a href="#ubereats" className="my-header-link">
            UberEats
            <img src={uberEatsIcon} alt="UberEats" className="my-header-icon" />
          </a>
          <a href="#doordash" className="my-header-link">
            DoorDash
            <img src={doorDashIcon} alt="DoorDash" className="my-header-icon" />
          </a>
        </nav>
      </header>

      {/* CONDITIONAL RENDERING: This only renders when isModalOpen is true */}
      {/* Syntax: {condition && <JSX>} means "if condition is true, render the JSX" */}
      {/* When isModalOpen changes from false to true, React re-renders and shows the modal */}
      {/* When isModalOpen changes from true to false, React re-renders and hides the modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* e.stopPropagation() prevents clicks on modal content from bubbling up to overlay */}
          {/* Without it, clicking inside the modal would trigger closeModal from the overlay */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close button: clicking it calls closeModal() which sets isModalOpen to false */}
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason for Contact:</label>
                <select id="reason" name="reason" required>
                  <option value="">Select a reason...</option>
                  <option value="stock-inquiry">Stock Inquiry</option>
                  <option value="general-information">General Information</option>
                  <option value="career">Career</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyHeader;
