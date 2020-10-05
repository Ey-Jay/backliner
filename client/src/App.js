import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';
import { ModalBackground } from './App.style';
import AddModal from 'components/AddModal';
import AddBandModal from 'components/AddBandModal';
import DeleteModal from 'components/DeleteModal';
import ThreeDotsModal from 'components/ThreeDotsModal';

import PrivateRoute from 'components/PrivateRoute';
import SignInPage from 'pages/SignInPage';
import ProjectsPage from 'pages/ProjectsPage';
import LyricsPage from 'pages/LyricsPage';
import SingleLyricsPage from 'pages/SingleLyricsPage';
import NewLyricsEditor from 'pages/NewLyricsEditor';
import EditLyricsEditor from 'pages/EditLyricsEditor';
import AudioPage from 'pages/AudioPage';
import VideoPage from 'pages/VideoPage';
import FilesPage from 'pages/FilesPage';
import CalendarPage from 'pages/CalendarPage';
import CheckInPage from 'pages/CheckInPage';
import SettingsPage from 'pages/SettingsPage';
import SingleProjectPage from 'pages/SingleProjectPage';
import EditItemPage from 'pages/EditItemPage';
import EditProjectPage from 'pages/EditProjectPage';
import SingleItemPage from 'pages/SingleItemPage';
import GoogleAuth from 'pages/GoogleAuth';

function App() {
  const { state, dispatch } = useContext(ModalContext);

  return (
    <>
      {state.isModalVisible && (
        <ModalBackground onClick={() => dispatch({ type: 'RESET' })}>
          {state.modalType === 'ADDITEM' && <AddModal />}
          {state.modalType === 'ADDPROJECT' && <AddModal />}
          {state.modalType === 'ADDBAND' && <AddBandModal />}
          {state.modalType === 'DELETE' && <DeleteModal />}
          {state.modalType === 'THREEDOTS' && <ThreeDotsModal />}
        </ModalBackground>
      )}
      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <PrivateRoute path="/checkin" component={CheckInPage} />
        <PrivateRoute path="/googleauth" component={GoogleAuth} />
        <PrivateRoute path="/:bid/projects" component={ProjectsPage} />
        <PrivateRoute path="/:bid/project/:pid" component={SingleProjectPage} />
        <PrivateRoute
          path="/:bid/edit-project/:pid"
          component={EditProjectPage}
        />
        <PrivateRoute path="/:bid/projects" component={ProjectsPage} />
        <PrivateRoute path="/:bid/new-lyrics" component={NewLyricsEditor} />
        <PrivateRoute
          path="/:bid/edit-lyrics/:id"
          component={EditLyricsEditor}
        />
        <PrivateRoute path="/:bid/lyrics/:id" component={SingleLyricsPage} />
        <PrivateRoute path="/:bid/lyrics" component={LyricsPage} />
        <PrivateRoute exact path="/:bid/audio" component={AudioPage} />
        <PrivateRoute
          path="/:bid/audio/:id"
          component={() => <SingleItemPage type="audio" />}
        />
        <PrivateRoute
          path="/:bid/edit-audio/:id"
          component={() => <EditItemPage type="audio" />}
        />
        <PrivateRoute exact path="/:bid/video" component={VideoPage} />
        <PrivateRoute
          path="/:bid/video/:id"
          component={() => <SingleItemPage type="video" />}
        />
        <PrivateRoute
          path="/:bid/edit-video/:id"
          component={() => <EditItemPage type="video" />}
        />
        <PrivateRoute path="/:bid/files" component={FilesPage} />
        <PrivateRoute
          path="/:bid/file/:id"
          component={() => <SingleItemPage type="file" />}
        />
        <PrivateRoute
          path="/:bid/edit-file/:id"
          component={() => <EditItemPage type="file" />}
        />
        <PrivateRoute path="/:bid/calendar" component={CalendarPage} />
        <PrivateRoute path="/:bid/settings" component={SettingsPage} />
        <Redirect to="/signin" />
      </Switch>
    </>
  );
}

export default App;
