import React, { useEffect, useState } from 'react';
import fb from 'fb';
import axios from 'axios';
import { apiUrl } from 'config/constants';

export const GlobalContext = React.createContext({ currentUser: null });

export const GlobalContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('list');

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        axios
          .get(apiUrl, {
            headers: { authorization: `Bearer ${user.getIdToken()}` },
          })
          .then((res) => setDbUser(res.data.data));
      }

      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ currentUser, dbUser, isLoading, view, setView }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
