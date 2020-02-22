import React from 'react';
import './Bubble.scss';

export default ({ me, text }) => {
  return (
    <div className={me ? 'bubble-container me' : 'bubble-container'}>
      {!me && <div className="bubble-pic"></div>}

      <div className="bubble">
        <p>{text}</p>
      </div>
    </div>
  );
}