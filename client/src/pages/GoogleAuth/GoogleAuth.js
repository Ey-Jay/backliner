import React, { useEffect, useContext } from 'react';
// import Spinner from 'components/Spinner';
import { useLocation, Redirect } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from 'context/GlobalContext';
import { apiUrl } from 'config/constants';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const GoogleAuth = () => {
  const query = useQuery();
  const { currentUser, setCalendarAuthorized } = useContext(GlobalContext);

  useEffect(() => {
    currentUser
      .getIdToken()
      .then((token) => {
        axios
          .post(
            `${apiUrl}/getAuthUrl`,
            {
              code: query.get('code'),
              bid: query.get('state'),
            },
            {
              headers: { authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            setCalendarAuthorized(true);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Redirect to={`/${query.get('state')}/settings`} />
    </div>
  );
};

export default GoogleAuth;
