import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import SignInPage from 'pages/SignInPage';
import ProjectsPage from 'pages/ProjectsPage';
import LyricsPage from 'pages/LyricsPage';
import LyricsEditor from 'pages/LyricsEditor';
import AudioPage from 'pages/AudioPage';
import VideoPage from 'pages/VideoPage';
import FilesPage from 'pages/FilesPage';
import CalendarPage from 'pages/CalendarPage';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignInPage />
      </Route>
      <PrivateRoute exact path="/" component={ProjectsPage} />
      <PrivateRoute path="/projects" component={ProjectsPage} />
      <PrivateRoute path="/lyrics-editor" component={LyricsEditor} />
      <PrivateRoute path="/lyrics" component={LyricsPage} />
      <PrivateRoute path="/audio" component={AudioPage} />
      <PrivateRoute path="/video" component={VideoPage} />
      <PrivateRoute path="/files" component={FilesPage} />
      <PrivateRoute path="/calendar" component={CalendarPage} />
      <Redirect to="/signin" />
    </Switch>
  );
}

export default App;
