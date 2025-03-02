import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div id="form">
        <form>
          <div className="field">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="btn btn-success login">Log in</button>
          <div className="anchor">
            <span>
              <Link to="/register">Create Account</Link>
            </span>
          </div>
          <div className="anchor">
            <span>
              <Link to="/image-generator">Go to Image Generator</Link>
            </span>
          </div>
          <div className="anchor">
            <span>
              <Link to="/contact">Contact Us</Link>
            </span>
          </div>
          <div className="anchor">
            <span>
              <Link to="/about">About Us</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
