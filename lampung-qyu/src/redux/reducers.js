import { 
  GET_LIST_TEMPAT
} from './action.js';

const initialState = {
  getListTempatData : false,
  getListTempatLoading : false,
  getListTempatError : false,
}

function reducers(state=initialState, action){
  switch (action.type){
    case GET_LIST_TEMPAT:
      return { 
        ...state,
        getListTempatData: action.payload.data,
        getListTempatLoading: action.payload.loading,
        getListTempatError: action.payload.error };
    default:
      return state;
  }
}

export default reducers;