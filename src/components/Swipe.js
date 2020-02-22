import React from 'react';
import { connect } from 'react-redux';

const Swipe = (props) => {
  const getName = () =>{
    const name = props.stateFromStore.data.user[0].name;
    return name;
  }
  const clickHandler = (e) =>{
    const tmpMsg = {id: 2,msg: 'yeah'};
    props.addMsgFn(tmpMsg);
  }
  return (
    <div>
      <h1>{getName()}</h1>
      <button onClick={clickHandler}>Click Me</button>
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