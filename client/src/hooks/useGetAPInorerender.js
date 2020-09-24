import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from 'context/GlobalContext';
import { apiUrl } from 'config/constants';
import firebase from 'fb';

const useGetAPInorerender = (path) => {
  const { rerender } = useContext(GlobalContext);

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
  }, []);

  return { data, loading, error };
};

export default useGetAPInorerender;
