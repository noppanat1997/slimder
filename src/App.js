import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
