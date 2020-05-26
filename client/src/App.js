import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { provider as Provider } from './Context';

// Scenes
import Landing from './scenes/Landing';
import Login from './scenes/Login';
import Signup from './scenes/Register';
import Dashboard from './scenes/Dashboard';
import NotFound from './scenes/404';

const App = () => (
  <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
  </Router>
);

export default App;
