import React from 'react';
import './Chat.scss';
import Bubble from './Bubble';
import { FaArrowLeft, FaEllipsisH } from 'react-icons/fa';

export default () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <FaArrowLeft className="back-btn"/>

        <div className="user-info">
          <div className="profile-pic"></div>
          <p className="username">Pareena</p>
        </div>

        <FaEllipsisH className="dot-btn"/>
        
      </div>

      <div className="chat-box">
        <Bubble/>
        <Bubble me/>
        <Bubble me/>
      </div>

      <div className="chat-input">
        <input placeholder="Type something..."/>
      </div>

    </div>
  );
}