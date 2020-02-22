import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Match.scss";

const Match = (props) => {
  const data = props.stateFromStore.data;

  return (
    <div className="match-container">
      <div className="header-match">
        Slim!
      </div>
      <p>You and {data.slim[data.matchId].name} are slim each other.</p>
      <div className="pics">
        <img src={data.slim[data.matchId].path} alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHoZmtS4AUAV-gZE4Pi3c7dC1lvELfQEWl50n3V1tH_1u-QLmm" alt="" />
      </div>
      <div className="match-btn-container">
        <Link to="/chat">
          <button type="submit" className="btn">
            SEND A MESSAGE
          </button>
        </Link>
        <Link to="/swipe">
          <button type="submit" className="btn_s">
            KEEP SWIPING
          </button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stateFromStore: state
  }
}

export default connect(mapStateToProps, null)(Match);