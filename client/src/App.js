import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route path="/protected">
          <DashboardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
