import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';
import { ModalBackground } from './App.style';
import AddModal from 'components/AddModal';
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

function App() {
  const { state, dispatch } = useContext(ModalContext);

  return (
    <>
      {state.isModalVisible && (
        <ModalBackground onClick={() => dispatch({ type: 'RESET' })}>
          {state.modalType === 'ADDITEM' && <AddModal />}
          {state.modalType === 'ADDPROJECT' && <AddModal />}
          {state.modalType === 'DELETE' && <DeleteModal />}
          {state.modalType === 'THREEDOTS' && <ThreeDotsModal />}
        </ModalBackground>
      )}
      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <PrivateRoute path="/checkin" component={CheckInPage} />
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
        <PrivateRoute path="/:bid/audio" component={AudioPage} />
        <PrivateRoute
          path="/:bid/edit-audio/:id"
          component={() => <EditItemPage type="audio" />}
        />
        <PrivateRoute path="/:bid/video" component={VideoPage} />
        <PrivateRoute
          path="/:bid/edit-video/:id"
          component={() => <EditItemPage type="video" />}
        />
        <PrivateRoute path="/:bid/files" component={FilesPage} />
        <PrivateRoute
          path="/:bid/edit-audio/:id"
          component={() => <EditItemPage type="audio" />}
        />
        <PrivateRoute
          path="/:bid/edit-files/:id"
          component={() => <EditItemPage type="files" />}
        />
        <PrivateRoute path="/:bid/calendar" component={CalendarPage} />
        <PrivateRoute path="/:bid/settings" component={SettingsPage} />
        <Redirect to="/signin" />
      </Switch>
    </>
  );
}

export default App;
