import React from 'react';
import './App.css';
import Swipe from './components/Swipe.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './reducer.js';
import Register from './components/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const store = createStore(reducer, applyMiddleware(logger));
  return (
    <Provider store={store}>
      <div className="phone">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/swipe" component={Swipe} />
            <Route path="/match" component={null} />
            <Route path="/chat" component={null} />
            <Route exact path="/" component={null} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>

  );
}
export default App;
