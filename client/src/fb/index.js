import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: 'https://backliner-11c39.firebaseio.com',
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: 'backliner-11c39.appspot.com',
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

firebase.initializeApp(config);

export default firebase;
