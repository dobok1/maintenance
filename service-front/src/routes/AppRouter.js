import React from 'react';
import { Login } from '../components/auth/Login';
import { DashBoard } from '../components/DashBoard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/home" component={ DashBoard } />
          <Route exact path="/login" component={ Login } />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
    )
}
