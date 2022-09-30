import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTempat } from '../../redux/action.js';
import { Link } from "react-router-dom";

function ListTempat() {
  const { getListTempatData, getListTempatLoading, getListTempatError} = useSelector(state => state.reducers);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil getListTempat
    dispatch(getListTempat());
  }, [dispatch]);

  return (
    <>
      <p>List Tempat</p>
      {getListTempatData ? (
        getListTempatData.map((tempat)=>{
          return(
            <>
            <Link to='/detail-tempat'>
              <p key={tempat.id}>{tempat.nama}</p>
            </Link>
            </>
          )
        })
      ) : getListTempatLoading ? (
        <p>loading...</p>
      ) : (
        <p>{ getListTempatError ? getListTempatError : "Data Kosong" }</p>
      )}
    </>
  );

}

export default ListTempat;