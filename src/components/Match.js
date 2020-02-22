
import React from "react";
import "./Match.scss";

export default ({name}) => {
  return (
    <div className="match-container">
      <div className="header-match">
        Slim!
      </div>
      <p>You and {name} are slim each other.</p>
      <div className="pics">
        <img src="https://github.com/thanapat722/eBid/blob/test_builds/src/assets/eLogo.png?raw=true" alt="" />
        <img src="https://github.com/thanapat722/eBid/blob/test_builds/src/assets/eLogo.png?raw=true" alt="" />
      </div>
      <div className="match-btn-container">
        <button type="submit" className="btn">
          SEND A MESSAGE
        </button>
        <button type="submit" className="btn_s">
          KEEP SWIPING
        </button>
      </div>
    </div>
  )
}