import React from "react";

const Register = () => {
  return (
    <div>
      <div id="form">
        <form action="">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="field">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="btn btn-success login">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
