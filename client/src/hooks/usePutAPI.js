import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiUrl } from 'config/constants';
import firebase from 'fb';

const useGetAPI = (path, data) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token) => {
        axios
          .put(`${apiUrl}${path}`, {
            headers: { authorization: `Bearer ${token}` },
            data: {
              ...data,
            },
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
