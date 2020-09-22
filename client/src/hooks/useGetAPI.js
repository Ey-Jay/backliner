import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiUrl } from 'config/constants';
import firebase from 'fb';

const useGetAPI = (path, condition) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (firebase.auth().currentUser)
      firebase
        .auth()
        .currentUser.getIdToken()
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
  }, [path, condition]);

  return { data, loading, error };
};

export default useGetAPI;
