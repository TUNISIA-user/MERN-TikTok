import React, { useState,useEffect } from 'react'
import { Nahdi_Gayth } from '../context/GlobalContext';
import './CommonetSection.css';
  
const CardCommt = ({commet,username,img,time}) => {
 
     const Move = Nahdi_Gayth()
 
      const hours = 10      // shoul be call reall time here
      const minutes = 22
      const timeString = `${hours}:${minutes}`;

 



  return (   
    <div class="container1">
<div className="avatar">
  <img src={Move?.tokn_user?.imgUrl__token || img} alt="User Avatar" />
</div>

    <div class="text-container">
      {/* <div class="text-line short">{Move?.user?.email || "Guest"}</div> */}
      <div class="text-line short">{username}</div>

      <div class="text-line long">
             {commet}
      </div>

      <small style={{color:"black",fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"}}>{timeString}
        <br/>
        
      </small>
    </div>

    
  </div>
  
  )
}

export default CardCommt