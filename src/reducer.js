const initialState = {
  data: {
    user: [
      { id: 0, name: 'Tommy' }
    ],
    slim: [
      { id: 0, name: 'Tu'},
      { id: 1, name: 'Pareena'}
    ],
    msg: [
      { id: 0, msg: 'Hello'},
      { id: 1, msg: 'I\'m Slim' }
    ]
  }
}
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD_MSG':
      const pushMsg = action.payload;
      console.log(pushMsg);
      newState.data.msg.push(pushMsg);
      return newState;
    default:
      break;
  }
  return state;
}
export default reducer;