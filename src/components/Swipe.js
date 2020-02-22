import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import CardItem from './CardItem.js';
import './Swipe.scss';
import { FaHeart } from 'react-icons/fa';
import { MdClose, MdRefresh, MdLocationOn } from 'react-icons/md';
import { FaArrowLeft} from 'react-icons/fa';
import {IoIosChatbubbles} from 'react-icons/io';

const Swipe = (props) => {
  let reactSwipeEl;
  const mapAllCard = props.stateFromStore.data.slim.map(item => (
    <div key={item.id}>
      <CardItem data={item} />
    </div>
  ));
  return (
    <div>
      <div className="chat-header">
        <FaArrowLeft className="back-btn"/>

        <div className="user-info">
          <p className="username text-danger font-weight-bold" style={{fontSize:'35px'}}>Slimder</p>
        </div>

        <Link to="/match">
          <IoIosChatbubbles style={{fontSize:'35px'}} className="dot-btn"/>
        </Link>
        
      </div>
      <ReactSwipe
        className="carousel ml-3 mt-5"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {mapAllCard}
      </ReactSwipe>
      <div className="d-flex justify-content-center than-padding mt-5" >
        <button className="buttonSmall" onClick={() => reactSwipeEl.prev()}>
          <MdRefresh className="text-warning" style={{fontSize: '30px'}}/>
        </button>
        <button className="buttonBig" onClick={() => reactSwipeEl.next()}>
          <MdClose className="text-danger" style={{fontSize: '50px'}}/>
        </button>
        <Link to="/match">
          <button className="buttonBig">
            <FaHeart className="text-info" style={{fontSize: '50px'}}/>
          </button>
        </Link>
        <button className="buttonSmall">
          <MdLocationOn className="text-primary" style={{fontSize: '30px'}}/>
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
    addMsgFn: (item) => {
      return dispatch({ type: 'ADD_MSG', payload: item })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Swipe);