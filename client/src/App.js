import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import SignInPage from 'pages/SignInPage';
import ProjectsPage from 'pages/ProjectsPage';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignInPage />
      </Route>
      <PrivateRoute path="/projects" component={ProjectsPage} />
      <Redirect to="/signin" />
    </Switch>
  );
}

export default App;
