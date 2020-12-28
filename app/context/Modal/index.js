import { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { useImmerReducer } from 'use-immer';
import { initialState, modalReducer } from './modalReducer';

export const ModalStateContext = createContext({ ...initialState });
export const ModalDispatchContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const router = useRouter();
  const bid = router.query.bid;
  const [state, dispatch] = useImmerReducer(modalReducer, initialState);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const refresh = () => router.replace(router.asPath);

  const showSuccess = async () => {
    dispatch({ type: 'IS_SUCCESS' });
    await sleep(2000);
    dispatch({ type: 'RESET' });
    refresh();
  };

  const showError = async () => {
    dispatch({ type: 'IS_ERROR' });
    await sleep(2000);
    dispatch({ type: 'RESET' });
  };

  const addItem = async (data, path) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      // TODO: API CALL TO ADD ITEM
      // const token = await firebase.auth().currentUser.getIdToken();
      // const res = await axios.post(`${apiUrl}/bands/${bid}/${path}`, data, {
      //   headers: { authorization: `Bearer ${token}` },
      // });

      if (res.data.success) await showSuccess();
      else await showError();
    } catch (e) {
      await showError();
    }
  };

  const deleteItem = async () => {
    try {
      dispatch({ type: 'IS_LOADING' });

      // TODO: API CALL TO DELETE ITEM
      // const token = await firebase.auth().currentUser.getIdToken();
      // const res = await axios.delete(
      //   `${apiUrl}/${state.deleteType}/${state.deleteId}`,
      //   {
      //     headers: { authorization: `Bearer ${token}` },
      //   }
      // );

      if (res.data.success) {
        await showSuccess();
        if (state.deleteType === 'bands') router.push('/checkin');
        if (state.deleteType === 'lyrics') router.push(`/${bid}/lyrics`);
        if (state.deleteType === 'files') router.push(`/${bid}/files`);
        if (state.deleteType === 'audio') router.push(`/${bid}/audio`);
        if (state.deleteType === 'video') router.push(`/${bid}/video`);
        if (state.deleteType === 'projects' || state.deleteType === 'project')
          router.push(`/${bid}/projects`);
      } else await showError();
    } catch (e) {
      await showError();
    }
  };

  const gotoEditItem = (type, id) => {
    dispatch({ type: 'RESET' });
    router.push(`/${bid}/edit-${type}/${id}`);
  };

  const gotoDeleteItem = (id, type) => {
    dispatch({ type: 'SHOW_DELETE', payload: { id, type } });
  };

  const addBand = async (name) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      // TODO: API CALL TO ADD BAND
      // const token = await firebase.auth().currentUser.getIdToken();
      // const res = await axios.post(
      //   `${apiUrl}/bands`,
      //   { name, avatar: 0 },
      //   {
      //     headers: { authorization: `Bearer ${token}` },
      //   }
      // );

      if (res.data.success) await showSuccess();
      else await showError();
    } catch (e) {
      await showError();
    }
  };

  const addCalendarEvent = async (title, startDate, endDate) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      // TODO: ADD API CALL TO ADD CALENDAR EVENT
      // const token = await firebase.auth().currentUser.getIdToken();
      // const res = await axios.post(
      //   `${apiUrl}/${bid}/calendar`,
      //   {
      //     summary: title || 'Untitled',
      //     start: { dateTime: startDate },
      //     end: { dateTime: endDate },
      //   },
      //   {
      //     headers: { authorization: `Bearer ${token}` },
      //   }
      // );

      if (res.statusText === 'OK') await showSuccess();
      else await showError();
    } catch (e) {
      await showError();
    }
  };

  return (
    <ModalStateContext.Provider
      value={{
        ...state,
      }}
    >
      <ModalDispatchContext.Provider
        value={{
          addItem,
          deleteItem,
          gotoEditItem,
          gotoDeleteItem,
          addBand,
          addCalendarEvent,
          dispatch,
        }}
      >
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = () => useContext(ModalStateContext);
export const useModalDispatch = () => useContext(ModalDispatchContext);
