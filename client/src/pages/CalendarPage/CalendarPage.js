import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';
import axios from 'axios';

import Layout from 'layout';

const CalendarPage = () => {
  const {
    currentUser,
    rerender,
    setRerender,
    calendarAuthorized,
    setCalendarAuthorized,
  } = useContext(GlobalContext);
  const { bid } = useParams();

  useEffect(() => {
    currentUser
      .getIdToken()
      .then((token) => {
        axios
          .get(`https://api.backliner.app/${bid}/calendar`, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            if (res.data == 'refresh') {
              setRerender(new Date());
              return;
            }
            if (res.data == 'calendar not set') {
              setCalendarAuthorized(false);
              return;
            }
            console.log(res.data);
            setCalendarAuthorized(true);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  }, [rerender]);

  return (
    <Layout title="Calendar">
      {calendarAuthorized ? 'Calendar Set' : 'Calendar NOT set'}
    </Layout>
  );
};

export default CalendarPage;
