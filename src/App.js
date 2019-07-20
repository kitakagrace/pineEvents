import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);
export default App;
