import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiUrl } from 'config/constants';
import firebase from 'fb';

const useGetAPI = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token) => {
        axios
          .delete(`${apiUrl}${path}`, {
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

export default useGetAPI;
