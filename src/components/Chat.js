import React, { useState, useEffect } from 'react';
import './Chat.scss';
import Bubble from './Bubble';
import { FaArrowLeft, FaEllipsisH, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Chat = (props) => {
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [index, setIndex] = useState(0);
  const data = props.stateFromStore.data;

  useEffect(() => {
    const ele = document.querySelector('.chat-box');
    ele.scrollTop = ele.scrollHeight;
  }, [msgs])

  const sendMsg = e => {
    e.preventDefault();
    if (msg) {
      msgs.push({ name: 'Thanathorn', text: msg, isMe: true });
      setMsg('');
      setMsgs([
        ...msgs,
        data.msg[data.matchId].msg[index]
      ])
      if (index===5) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Link to="/swipe">
          <FaArrowLeft className="back-btn"/>
        </Link>

        <div className="user-info">
          <div className="profile-pic">
            <img  src={data.slim[data.matchId].path} alt=""/>
          </div>
          <p className="username">{data.slim[data.matchId].name}, {data.slim[data.matchId].age}</p>
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
          type="text"
          placeholder="Type something..." 
          value={msg}
          onChange={e => setMsg(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? sendMsg(e) : null}
          autoFocus
        />
        <button onClick={sendMsg}>
          <FaTelegramPlane className="icon-btn"/>
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    stateFromStore: state
  }
}

export default connect(mapStateToProps, null)(Chat);