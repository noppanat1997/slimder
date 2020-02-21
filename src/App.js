import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Swipe from './components/Swipe.js';
import Chat from './components/Chat.js';

function App() {

  return (
    <div className="phone">
      <BrowserRouter>
        <Switch>
          <Route path="/form" component={null}/>
          <Route path="/swipe" component={Swipe}/>
          <Route path="/match" component={null}/>
          <Route path="/chat" component={Chat}/>
          <Route exact path="/" component={null}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
