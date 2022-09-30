import React from 'react';
import { Link } from "react-router-dom";

function DetailTempat(){
  return(
    <>
      <h1>ini detail</h1>
      <Link to='/beranda'>
        <p>kembali ke beranda</p>
      </Link>
    </>
  )
}

export default DetailTempat;