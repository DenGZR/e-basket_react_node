import * as catalogAction from './actions';

const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case catalogAction.GET_CATALOG_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case catalogAction.GET_CATALOG_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.response
      }
    }

    case catalogAction.GET_CATALOG_FAIL: {
      return {
          ...state,
          isLoading: false,
      }
    }    

    default: {
    return state;
    }
  }
};

export default CatalogReducer;
