import React from 'react';
import { Login } from '../components/auth/Login';
import { DashBoard } from '../components/DashBoard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={ DashBoard } />
          <Route exact path="/login" component={ Login } />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
    )
}
