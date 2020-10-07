import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';
import { ModalContext } from 'context/ModalContext';
import axios from 'axios';
import Spinner from 'components/Spinner';
import { ThemeContext } from 'styled-components';
import { apiUrl } from 'config/constants';
import useGetAPInorerender from 'hooks/useGetAPInorerender';

import Layout from 'layout';
import {
  CalendarToolbar,
  NavigationButton,
  NewEventButton,
} from './CalendarPage.style';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { currentUser, rerender, setRerender, dbUser } = useContext(
    GlobalContext
  );
  const { dispatch } = useContext(ModalContext);
  const { bid } = useParams();
  const band = useGetAPInorerender(`/bands/${bid}`);
  const [calendarEvents, setCalendarEvents] = useState(null);
  const [calendarAuthorized, setCalendarAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext);
  const history = useHistory();

  let events;
  if (calendarEvents) {
    events = calendarEvents.map((event) => ({
      title: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
    }));
  }

  const CustomToolbar = (props) => {
    return (
      <CalendarToolbar>
        <h1>{props.label}</h1>
        <div>
          <NewEventButton
            onClick={() => dispatch({ type: 'SHOW_CALENDAR_ADD' })}
          >
            New Event
          </NewEventButton>
          <NavigationButton onClick={() => props.onNavigate('TODAY')}>
            Today
          </NavigationButton>
          <NavigationButton onClick={() => props.onNavigate('PREV')}>
            Back
          </NavigationButton>
          <NavigationButton onClick={() => props.onNavigate('NEXT')}>
            Next
          </NavigationButton>
        </div>
      </CalendarToolbar>
    );
  };

  function dayStyleGetter(day) {
    const style = {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    };
    if (moment(Date.now()).isSame(day, 'day')) return { style };
    if (!moment(Date.now()).isSame(day, 'month'))
      return {
        style: {
          backgroundColor: 'inherit',
        },
      };
  }

  const eventStyleGetter = () => ({
    style: { backgroundColor: theme.primary, outline: 'none' },
  });

  useEffect(() => {
    currentUser
      .getIdToken()
      .then((token) => {
        axios
          .get(`${apiUrl}/${bid}/calendar`, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            if (res.data === 'refresh') {
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
    // eslint-disable-next-line
  }, [rerender]);

  if (loading || band.loading) return <Spinner />;

  return (
    <Layout title="Calendar">
      {band.data?.data?.data?.owner?._id === dbUser._id &&
      !calendarAuthorized ? (
        <div style={{ textAlign: 'center' }}>
          <h2>You haven't connected to google calendar yet</h2>
          <NavigationButton onClick={() => history.push(`/${bid}/settings`)}>
            Go to Settings
          </NavigationButton>
        </div>
      ) : null}
      {!calendarAuthorized &&
      band.data?.data?.data?.owner?._id !== dbUser._id ? (
        <h2 style={{ textAlign: 'center' }}>
          The band owner has not set a calendar yet
        </h2>
      ) : null}
      {calendarEvents && (
        <Calendar
          localizer={localizer}
          events={events}
          style={{ height: '100%', padding: '40px' }}
          toolbar={true}
          popup={true}
          views={['month']}
          showMultiDayTimes={true}
          dayPropGetter={dayStyleGetter}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      )}
    </Layout>
  );
};

export default CalendarPage;
