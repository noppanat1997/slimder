import React from 'react';
import './Bubble.scss';

export default ({ me }) => {
  return (
    <div className={me ? 'bubble-container me' : 'bubble-container'}>
      {!me && <div className="bubble-pic"></div>}

      <div className="bubble">
        <p>สวัสดีครับ ผมเชียร์ลุงมานานแล้ว คุณล่ะเชียร์ยัง?</p>
      </div>
    </div>
  );
}