import React from 'react';
import { Link } from "react-router-dom";
import "./Beranda.css";
import background from "../../assets/BackgroundLampung.jpg";

function Beranda(){
  return(
    <div className="the-beranda">
      <div className="the-background">
        <img src={background} alt="background" className='background'/>
      </div>
      
      <div className="the-opening">
        <p className="the-title">SELAMAT DATANG DI HEALANG</p>
        <p className="the-description">Mari Healing Bersama di Lampung</p>
      </div>

      <div className="the-goToList">
        <Link to="/list-tempat" className="the-link">
          <div className="the-button">
            <p className="the-text-button">Yuk Healing</p>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Beranda;