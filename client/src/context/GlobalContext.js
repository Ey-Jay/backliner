import React, { useEffect, useState } from 'react';
import fb from 'fb';
import axios from 'axios';
import { apiUrl } from 'config/constants';

export const GlobalContext = React.createContext({ currentUser: null });

export const GlobalContextProvider = ({ children }) => {
  const [bandID, setBandID] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [view, setView] = useState('list');
  const [showAddModal, setShowAddModal] = useState(false);
  const [rerender, setRerender] = useState(new Date());

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          axios
            .get(apiUrl, {
              headers: { authorization: `Bearer ${token}` },
            })
            .then((res) => setDbUser(res.data.data));
        });
      }

      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        bandID,
        setBandID,
        currentUser,
        dbUser,
        isLoading,
        view,
        setView,
        rerender,
        setRerender,
        showAddModal,
        setShowAddModal,
        isChatVisible,
        setIsChatVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
