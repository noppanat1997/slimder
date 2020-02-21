import React from 'react';
import './App.css';
import Swipe from './components/Swipe.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter className="phone">
      <Switch>
        <Route path="/form" component={null}/>
        <Route path="/swipe" component={null}/>
        <Route path="/match" component={null}/>
        <Route path="/chat" component={null}/>
        <Route exact path="/" component={null}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
