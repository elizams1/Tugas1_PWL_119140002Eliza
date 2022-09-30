import { 
  GET_LIST_TEMPAT,
  GET_DETAIL_TEMPAT,
} from './action.js';

const initialState = {
  getListTempatData : false,
  getListTempatLoading : false,
  getListTempatError : false,

  getDetailTempatData: false,
  getDetailTempatLoading: false,
  getDetailTempatError: false,
}

function reducers(state=initialState, action){
  switch (action.type){
    case GET_LIST_TEMPAT:
      return { 
        ...state,
        getListTempatData: action.payload.data,
        getListTempatLoading: action.payload.loading,
        getListTempatError: action.payload.error 
      };
    case GET_DETAIL_TEMPAT:
      return{
        ...state,
        getDetailTempatData: action.payload.data,
        getDetailTempatLoading: action.payload.loading,
        getDetailTempatError: action.payload.error
      };
    default:
      return state;
  }
}

export default reducers;