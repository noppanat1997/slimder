import React from 'react';
import './App.css';
import Swipe from './components/Swipe.js';
import Register from './components/Register.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="phone">
      <BrowserRouter className="phone">
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/swipe" component={null}/>
        <Route path="/match" component={null}/>
        <Route path="/chat" component={null}/>
        <Route exact path="/" component={null}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
