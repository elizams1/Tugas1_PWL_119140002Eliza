import React  from 'react';
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';
import './DetailTempat.css';


function DetailTempat(){
  
  const { getDetailTempatData, getDetailTempatLoading, getDetailTempatError} = useSelector(state => state.reducers);

  return(
    <div className="the-parents">
      <div className="the-detail-tempat">
        {getDetailTempatData ? (
          <div>
            <div>
              <p className="the-name">{getDetailTempatData.nama}</p>
            </div>
            <div>
              <img src={require("../../assets/PantaiMahitam.jpg")} alt="theImage" className='the-card-image'/>
            </div>
            <div>
              <p className="the-name-two">Lokasi</p>
              <p className="the-desc-place">{getDetailTempatData.lokasi}</p>
            </div>
            <div>
              <p className="the-name-two">Artikel Singkat</p>
              <p className="the-desc-place">{getDetailTempatData.detail}</p>
            </div>
            <div className="the-button-flex">
              <div className="the-button-back">
                <Link to="/beranda" className="the-link">
                  <div className="the-button">
                    <p className="the-text-button">Beranda</p>
                  </div>
                </Link>
              </div>
              <div className="the-button-back">
                <Link to="/list-tempat" className="the-link">
                  <div className="the-button">
                    <p className="the-text-button">Daftar Tempat</p>
                  </div>
                </Link>
              </div>
            </div>
            
          </div> 
        ) : getDetailTempatLoading ? (
          <p>loading</p>
        ) : (
          <p>{ getDetailTempatError ? getDetailTempatError : "Data Kosong" }</p>
        )}
      </div>
      
    </div>
  )
}

export default DetailTempat;