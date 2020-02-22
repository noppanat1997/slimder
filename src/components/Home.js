import React from "react"
import "./Home.scss"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default () => {
  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="name">
        Slimder
      </div>
      <div className="home-btn">
        <Link to="/register">
          <button type="button" className="btn">
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}