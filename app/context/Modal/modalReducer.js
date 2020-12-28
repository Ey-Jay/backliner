export const initialState = {
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

export const modalReducer = (draft, action) => {
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

    case 'SHOW_CALENDAR_ADD':
      draft = { ...initialState };
      draft.isModalVisible = true;
      draft.modalType = 'CALENDAR_ADD';
      return draft;

    default:
      return draft;
  }
};
