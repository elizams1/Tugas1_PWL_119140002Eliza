import axios from 'axios';

export const GET_LIST_TEMPAT = "GET_LIST_TEMPAT";

export const getListTempat = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_TEMPAT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      }
    })
    //getAPIService
    axios
      .get("http://localhost:3000/tempat")
      .then((response) => {
        console.log("berhasil dapet data :", response.data);
        //jika berhasil
        dispatch({
          type: GET_LIST_TEMPAT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch((error) => {
        //jika gagal
        dispatch({
          type: GET_LIST_TEMPAT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
}