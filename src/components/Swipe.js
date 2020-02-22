import React from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import CardItem from './CardItem.js';

const Swipe = (props) => {
  const getName = () => {
    const name = props.stateFromStore.data.user[0].name;
    return name;
  }
  const clickHandler = (e) => {
    const tmpMsg = { id: 2, msg: 'yeah' };
    props.addMsgFn(tmpMsg);
  }
  let reactSwipeEl;
  const mapAllCard = props.stateFromStore.data.slim.map(item => (
    <div key={item.id}>
      <CardItem data={item} />
    </div>
  ));
  return (
    <ReactSwipe
      className="carousel"
      swipeOptions={{ continuous: false }}
      ref={el => (reactSwipeEl = el)}
      stlye={{}}
    >
      {mapAllCard}
    </ReactSwipe>
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