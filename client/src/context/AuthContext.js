import React, { useEffect, useState } from 'react';
import fb from 'fb';

export const AuthContext = React.createContext({ currentUser: null });

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fb.auth().onAuthStateChanged(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
