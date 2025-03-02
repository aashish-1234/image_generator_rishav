import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Reusing the same CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best user
        experience. Our platform helps users manage their data efficiently and
        offers tools like an Image Generator, Student Management System, and
        much more.
      </p>
      <p>
        Our mission is to create a seamless experience for users while
        maintaining a high level of security and reliability.
      </p>
      <h2>Our Vision</h2>
      <p>
        To be a leading provider of digital solutions that enhance productivity
        and make life easier for our users.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feel free to{" "}
        <Link to="/contact">Contact Us</Link>.
      </p>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  );
};

export default AboutUs;
