import React, { useEffect, useState } from 'react';
import fb from 'fb';

export const GlobalContext = React.createContext({ currentUser: null });

export const GlobalContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('list');

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser, isLoading, view, setView }}>
      {children}
    </GlobalContext.Provider>
  );
};
