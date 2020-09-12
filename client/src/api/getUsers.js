import axios from 'axios';

import { apiUrl } from 'config/constants';
import firebase from 'fb';

const getUserFromDB = async () => {
  try {
    const token = await firebase.auth().currentUser?.getIdToken();

    return axios.get(`${apiUrl}/user`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default getUserFromDB;
