import React, { useEffect, useContext } from 'react';
// import Spinner from 'components/Spinner';
import { useLocation, Redirect } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from 'context/GlobalContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const GoogleAuth = () => {
  const query = useQuery();
  const { currentUser } = useContext(GlobalContext);

  useEffect(() => {
    currentUser
      .getIdToken()
      .then((token) => {
        axios
          .post(
            'http://localhost:3001/authURL',
            {
              code: query.get('code'),
            },
            {
              headers: { authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Redirect to={`/${query.get('state')}/settings`} />
    </div>
  );
};

export default GoogleAuth;
