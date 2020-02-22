import React, { useState, useEffect } from 'react';
import './Chat.scss';
import Bubble from './Bubble';
import { FaArrowLeft, FaEllipsisH, FaTelegramPlane } from 'react-icons/fa';


export default () => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    setMsgs([
      ...msgs,
      {
        name: 'Pareena',
        text: 'สวัสดีครับ ผมเชียร์ลุงมานานแล้ว คุณล่ะเชียร์ยัง?',
        isMe: false
      }])
  }, [])

  useEffect(() => {
    const ele = document.querySelector('.chat-box');
    ele.scrollTop = ele.scrollHeight;
  }, [msgs])

  const sendMsg = e => {
    e.preventDefault();
    msgs.push({ name: 'Thanathorn', text: msg, isMe: true });
    setMsg('');
    setMsgs([
      ...msgs,
      {
        name: 'Pareena',
        text: 'สวัสดีครับ ผมเชียร์ลุงมานานแล้ว คุณล่ะเชียร์ยัง?',
        isMe: false
      }
    ])
  }

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
        {msgs.map(m => <Bubble me={m.isMe} text={m.text}/>)}
        <div id="lastest-msg"></div>
      </div>

      <div className="chat-input">
        <input 
          id="input-chat"
          placeholder="Type something..." 
          value={msg}
          onChange={e => setMsg(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? sendMsg(e) : null}
          autoFocus
        />
        <button onClick={sendMsg}><FaTelegramPlane /></button>
      </div>

    </div>
  );
}