import React, { useEffect, useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';
import axios from 'axios';

import Layout from 'layout';

const localizer = momentLocalizer(moment);

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

  if (calendarEvents) {
    var events = calendarEvents.map((event) => ({
      title: event.summary,
      start: event.start.dateTime,
      end: event.end.dateTime,
    }));
  }

  console.log(events);

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
          events={events}
          style={{ height: '100%', padding: '40px' }}
          toolbar={true}
        />
      )}
    </Layout>
  );
};

export default CalendarPage;
