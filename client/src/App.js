import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Scenes
import Landing from './scenes/Landing';
import Login from './scenes/Login';
import Signup from './scenes/Register';

const App = () => (
  <Router>
    <Route exact path='/' component={Landing} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
  </Router>
);

export default App;
