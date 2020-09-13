import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiUrl } from 'config/constants';
import firebase from 'fb';

const useAPI = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((token) => {
        axios
          .get(`${apiUrl}${path}`, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setData(res);
            setLoading(false);
          })
          .catch((e) => setError(e));
      })
      .catch((e) => setError(e));
  }, []);

  return { data, loading, error };
};

// const getUserFromDB = async () => {
//   try {
//     const token = await firebase.auth().currentUser?.getIdToken();

//     return axios.get(`${apiUrl}/user`, {
//       headers: { authorization: `Bearer ${token}` },
//     });
//   } catch (error) {
//     console.error(error);
//     return { error };
//   }
// };

export default useAPI;
