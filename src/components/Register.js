import React from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const check = () => {
    const ele = document.querySelector("#party");
    if(ele.value==="FFP") {
      alert("ขออภัย! พรรคนี้ถูกยุบแล้ว");
      history.push("/register");
    }
    else if(ele.value!=="PPP") {
      alert("ขออภัย! คุณไม่ใช่สลิ่ม");
      history.push("/register");
    }
    else {
      history.push("/swipe");
    }
  }
  return (
    <div className="register-container">
      <div className="reg-header">
        <h1>Register</h1>
      </div>
      <form onSubmit={check} id="regis">
      <div className="forms">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="ชื่อจริง" required/>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" placeholder="อายุ" required/>
        </div>
        <label htmlFor="party">Select a party</label>
        <select name="party" className="party-drop" required id="party">
          <option value="">Select...</option>
          <option value="PPP">พลังประชารัฐ</option>
          <option value="PTP">เพื่อไทย</option>
          <option value="FFP">อนาคตใหม่</option>
          <option value="DEM">ประชาธิปัตย์</option>
          <option value="PJT">ภูมิใจไทย</option>
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