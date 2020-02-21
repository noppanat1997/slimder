import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Swipe from './components/Swipe.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form" component={null}/>
        <Route path="/swipe" component={Swipe}/>
        <Route path="/match" component={null}/>
        <Route path="/chat" component={null}/>
        <Route exact path="/" component={null}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
