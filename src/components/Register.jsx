import React from "react";
import "./Register.scss";

export default () => {
  return (
    <div className="register-container">
      <div className="reg-header">
        <h1>Register</h1>
      </div>
      <form>
      <div className="forms">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" required minLength="8"/>
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="First Name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" placeholder="Age" required/>
        </div>
        <label htmlFor="party">Select a party</label>
        <select name="party" className="party-drop" required>
          <option value="">Select...</option>
          <option value="PPP">PPP</option>
          <option value="AAA">AAA</option>
          <option value="BBB">BBB</option>
        </select>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Register
        </button>
      </div>
      </form>
    </div>
  )
}