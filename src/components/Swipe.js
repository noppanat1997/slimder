import React from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import CardItem from './CardItem.js';
import './Swipe.scss';
import { FaHeart } from 'react-icons/fa';
import { MdClose, MdRefresh, MdLocationOn } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';

const Swipe = (props) => {
  let curId = 0;
  let reactSwipeEl;
  const mapAllCard = props.stateFromStore.data.slim.map(item => (
    <div key={item.id}>
      <CardItem data={item} />
    </div>
  ));
  const prevHandler = (e) => {
    curId = props.stateFromStore.data.matchId;
    reactSwipeEl.prev();
    if (curId < 1) curId = 0;
    else if (curId >= 1) curId = curId - 1;
    const newData = { matchId: curId };
    props.setMatchId(newData);
  }
  const nextHandler = (e) => {
    curId = props.stateFromStore.data.matchId;
    reactSwipeEl.next();
    if (curId > 2) curId = 3;
    else if (curId <= 2) curId = curId + 1;
    const newData = { matchId: curId };
    props.setMatchId(newData);
  }
  return (
    <div>
      <div className="chat-header">
        <FaArrowLeft className="back-btn" />

        <div className="user-info">
          <p className="username text-danger font-weight-bold" style={{ fontSize: '35px' }}>slimder</p>
        </div>

        <IoIosChatbubbles style={{ fontSize: '35px' }} className="dot-btn" />

      </div>
      <ReactSwipe
        className="carousel ml-3 mt-5"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {mapAllCard}
      </ReactSwipe>
      <div className="d-flex justify-content-center" style={{ marginTop: '10%' }}>
        <button className="buttonSmall" onClick={prevHandler}>
          <MdRefresh className="text-warning" style={{ fontSize: '30px' }} />
        </button>
        <button className="buttonBig" onClick={nextHandler}>
          <MdClose className="text-danger" style={{ fontSize: '50px' }} />
        </button>
        <button className="buttonBig" >
          <FaHeart className="text-info" style={{ fontSize: '50px' }} />
        </button>
        <button className="buttonSmall" >
          <MdLocationOn className="text-primary" style={{ fontSize: '30px' }} />
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
const mapDispatchToProps = dispatch => {
  return {
    setMatchId: (item) => {
      return dispatch({ type: 'SET_MATCHID', payload: item })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Swipe);