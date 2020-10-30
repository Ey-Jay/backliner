import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import firebase from 'fb';
import { GlobalContext } from 'context/GlobalContext';
import { apiUrl } from 'config/constants';

export const APIContext = React.createContext({ currentUser: null });

export const APIContextProvider = ({ children }) => {
  const { bandID, dbUser } = useContext(GlobalContext);
  const [isAPILoading, setIsAPILoading] = useState(true);
  const [error, setError] = useState(null);
  const [bandData, setBandData] = useState(null);
  const [projects, setProjects] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [audios, setAudios] = useState(null);
  const [videos, setVideos] = useState(null);
  const [files, setFiles] = useState(null);

  const getBandData = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getProjects = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}/projects`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getLyrics = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}/lyrics`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getAudios = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}/audio`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getVideos = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}/video`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getFiles = async (token) => {
    const data = await axios.get(`${apiUrl}/bands/${bandID}/files`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return data.data.data;
  };

  const getAllData = async () => {
    try {
      if (firebase.auth().currentUser && bandID) {
        const token = await firebase.auth().currentUser.getIdToken();

        const data = await Promise.all([
          getBandData(token),
          getProjects(token),
          getLyrics(token),
          getAudios(token),
          getVideos(token),
          getFiles(token),
        ]);

        setBandData(data[0]);
        setProjects(data[1]);
        setLyrics(data[2]);
        setAudios(data[3]);
        setVideos(data[4]);
        setFiles(data[5]);
        setIsAPILoading(false);
      }
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  useEffect(() => {
    if (dbUser) getAllData();
  }, [bandID, dbUser]);

  return (
    <APIContext.Provider
      value={{
        isAPILoading,
        error,
        bandData,
        projects,
        lyrics,
        audios,
        videos,
        files,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
