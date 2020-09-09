import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import IndexPage from 'pages/IndexPage';
import SignInPage from 'pages/SignInPage';
import DashboardPage from 'pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <PrivateRoute path="/protected" component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
