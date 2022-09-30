import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTempat, getDetailTempat } from '../../redux/action.js';
import { Link } from "react-router-dom";
import './ListTempat.css';

function ListTempat() {
  const { getListTempatData, getListTempatLoading, getListTempatError} = useSelector(state => state.reducers);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil getListTempat
    dispatch(getListTempat());
  }, [dispatch]);

  return (
    <div className="the-parents">
      <div className="the-list-tempat">
        <div>
          <p className="the-title">DAFTAR TEMPAT HEALING</p>
        </div>
        <div className="the-list-card">
          {getListTempatData ? (
            getListTempatData.map((tempat)=>{
              return(
                <>
                <Link to={{ pathname:"/detail-tempat/"+tempat.id }} onClick={()=>dispatch(getDetailTempat(tempat.id))} className="the-link">
                  <div className="the-card">
                    <div>
                      <img src={require("../../assets/PantaiMahitam.jpg")} alt="theImage" className='the-card-image'/>
                    </div>
                    <p className="the-image-description" key={tempat.id}>{tempat.nama}</p>
                  </div>
                </Link>
                
                </>
              )
            })
          ) : getListTempatLoading ? (
            <p>loading...</p>
          ) : (
            <p>{ getListTempatError ? getListTempatError : "Data Kosong" }</p>
          )}
        </div>
        <div className="the-button-back">
           <Link to="/beranda" className="the-link">
            <div className="the-button">
              <p className="the-text-button">Kembali ke Beranda</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    
  );

}

export default ListTempat;