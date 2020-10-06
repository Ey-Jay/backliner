import React, { useEffect, useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';
import axios from 'axios';
import Spinner from 'components/Spinner';

import Layout from 'layout';
import { Header } from 'layout/Layout.style';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { currentUser, rerender, setRerender } = useContext(GlobalContext);
  const { bid } = useParams();
  const [calendarEvents, setCalendarEvents] = useState(null);
  const [calendarAuthorized, setCalendarAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  let events;
  if (calendarEvents) {
    events = calendarEvents.map((event) => ({
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
              setLoading(false);
              return;
            }
            setCalendarEvents(res.data.data.items);
            setCalendarAuthorized(true);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.error(err));
  }, [rerender]);

  if (loading) return <Spinner />;

  return (
    <Layout title="Calendar">
      {calendarAuthorized ? null : 'The Band Owner has not set a calendar yet'}
      {calendarEvents && (
        <Calendar
          localizer={localizer}
          events={events}
          style={{ height: '100%', padding: '40px' }}
          toolbar={true}
          popup={true}
        />
      )}
    </Layout>
  );
};

export default CalendarPage;
