import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Swipe from './components/Swipe.js';
import Chat from './components/Chat.js';
import Match from './components/Match.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './reducer.js';
import Register from './components/Register.js';
import Match from './components/Match.js';

const App = () => {
  const store = createStore(reducer, applyMiddleware(logger));
  const name = "Pareena"

  return (
    <Provider store={store}>
      <div className="phone">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/swipe" component={Swipe} />
            <Route path="/match" render={()=><Match name={name}/>} />
            <Route path="/chat" component={Chat} />
            <Route exact path="/" component={null} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
