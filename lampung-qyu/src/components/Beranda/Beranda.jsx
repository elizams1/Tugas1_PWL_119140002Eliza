import React from 'react';
import { Link } from "react-router-dom";

function Beranda(){
  return(
    <>
      <h1>ini beranda</h1>
      <Link to='/list-tempat'>
        <p>klik ke list tempat</p>
      </Link>
    </>
  )
}

export default Beranda;