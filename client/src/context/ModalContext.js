import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import axios from 'axios';

import firebase from 'fb';
import { apiUrl } from 'config/constants';
import { GlobalContext } from 'context/GlobalContext';

const initialState = {
  modalType: null,
  isModalVisible: false,
  isModalLoading: false,
  isModalSuccess: false,
  isModalError: false,
  addType: null,
  deleteId: null,
  deleteType: null,
  dotsId: null,
  dotsType: null,
  dotsTitle: null,
};

const modalReducer = (draft, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;

    case 'IS_LOADING':
      draft.isModalSuccess = false;
      draft.isModalError = false;
      draft.isModalLoading = true;
      return draft;

    case 'IS_SUCCESS':
      draft.isModalLoading = false;
      draft.modalError = false;
      draft.isModalSuccess = true;
      return draft;

    case 'IS_ERROR':
      draft.isModalLoading = false;
      draft.isModalSuccess = false;
      draft.isModalError = true;
      draft.modalError = action.payload;
      return draft;

    case 'SHOW_ADDITEM':
      draft = { ...initialState };
      draft.modalType = 'ADDITEM';
      draft.addType = action.payload;
      draft.isModalVisible = true;
      return draft;

    case 'SHOW_ADDPROJECT':
      draft = { ...initialState };
      draft.modalType = 'ADDPROJECT';
      draft.addType = 'project';
      draft.isModalVisible = true;
      return draft;

    case 'SHOW_DELETE':
      draft = { ...initialState };
      draft.modalType = 'DELETE';
      draft.deleteId = action.payload.id;
      draft.deleteType = action.payload.type;
      draft.isModalVisible = true;
      return draft;

    case 'SHOW_THREEDOTS':
      draft = { ...initialState };
      draft.modalType = 'THREEDOTS';
      draft.dotsId = action.payload.id;
      draft.dotsType = action.payload.type;
      draft.dotsTitle = action.payload.title;
      draft.isModalVisible = true;
      return draft;

    case 'SHOW_ADDBAND':
      draft = { ...initialState };
      draft.isModalVisible = true;
      draft.modalType = 'ADDBAND';
      return draft;

    default:
      return draft;
  }
};

export const ModalContext = createContext({ ...initialState });

export const ModalContextProvider = ({ children }) => {
  const history = useHistory();
  const { setRerender } = useContext(GlobalContext);
  const [bid, setBid] = useState(null);
  const [state, dispatch] = useImmerReducer(modalReducer, initialState);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const showSuccess = async () => {
    dispatch({ type: 'IS_SUCCESS' });
    await sleep(2000);
    dispatch({ type: 'RESET' });
    setRerender(new Date());
  };

  const showError = async () => {
    dispatch({ type: 'IS_ERROR' });
    await sleep(2000);
    dispatch({ type: 'RESET' });
  };

  const addItem = async (data, path) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      const token = await firebase.auth().currentUser.getIdToken();
      const res = await axios.post(`${apiUrl}/bands/${bid}/${path}`, data, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (res.data.success) await showSuccess();
      else await showError();
    } catch (e) {
      await showError();
    }
  };

  const deleteItem = async () => {
    try {
      dispatch({ type: 'IS_LOADING' });

      const token = await firebase.auth().currentUser.getIdToken();
      const res = await axios.delete(
        `${apiUrl}/${state.deleteType}/${state.deleteId}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      if (res.data.success) {
        await showSuccess();
        if (state.deleteType === 'bands') history.push('/checkin');
        if (state.deleteType === 'lyrics') history.push(`/${bid}/lyrics`);
        if (state.deleteType === 'files') history.push(`/${bid}/files`);
        if (state.deleteType === 'audio') history.push(`/${bid}/audio`);
        if (state.deleteType === 'video') history.push(`/${bid}/video`);
        if (state.deleteType === 'projects') history.push(`/${bid}/projects`);
      } else await showError();
    } catch (e) {
      await showError();
    }
  };

  const gotoEditItem = (type, id) => {
    dispatch({ type: 'RESET' });
    history.push(`/${bid}/edit-${type}/${id}`);
  };

  const gotoDeleteItem = (id, type) => {
    dispatch({ type: 'SHOW_DELETE', payload: { id, type } });
  };

  const addBand = async (name) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      const token = await firebase.auth().currentUser.getIdToken();
      const res = await axios.post(
        `${apiUrl}/bands`,
        { name, avatar: 0 },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      if (res.data.success) await showSuccess();
      else await showError();
    } catch (e) {
      await showError();
    }
  };

  return (
    <ModalContext.Provider
      value={{
        state,
        dispatch,
        bid,
        setBid,
        addItem,
        deleteItem,
        gotoEditItem,
        gotoDeleteItem,
        addBand,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
