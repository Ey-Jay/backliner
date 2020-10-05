import React, { useEffect, useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';
import axios from 'axios';

import Layout from 'layout';

const localizer = momentLocalizer(moment);

const Events = [{}];

const CalendarPage = () => {
  const {
    currentUser,
    rerender,
    setRerender,
    calendarAuthorized,
    setCalendarAuthorized,
  } = useContext(GlobalContext);
  const { bid } = useParams();
  const [calendarEvents, setCalendarEvents] = useState(null);

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
            if (res.data === 'calendar not set') {
              setCalendarAuthorized(false);
              return;
            }
            setCalendarEvents(res.data.data.items);
            console.log(res.data.data.items);
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
      {calendarEvents && (
        <Calendar
          localizer={localizer}
          events={Events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
        />
      )}
    </Layout>
  );
};

export default CalendarPage;
