import React, { useState } from 'react'
import "./RightsideBar.css"

import { Nahdi_Gayth } from '../context/GlobalContext'
 

const RightsideBar = ({id,url,channel,like1,message,share,song,desc,dataARRAY,item}) => {
  console.log(dataARRAY,id)
  const [like,addLike] = useState(false)
 
  const Handel =()=>{
    if(like){
      addLike(false)
    }else{
      addLike(true)
    }

  }
 const Move = Nahdi_Gayth ();

const function__say = (id,url,channel,like1,message,share,song)=>{
  
  Move.dispatch({
    type:"SET_FLOWING",
    payload__flow  : {
      id,
      url,
      channel,
      like1 : dataARRAY.length>0?dataARRAY.length : like1,
      message :  dataARRAY.length>0?dataARRAY.length : message,
      share,
      song,
      desc,


    }

  })
}



const function__say1 = (id, url, channel, like, message, share, song) => {
  console.log(id, url, channel, like, message, share, "song", song);
  Move.dispatch({
    type: "SET_ADD_LIST1", // Make sure this matches exactly with your reducer case
    payload_item: {
      id,
      url,
      channel,
      like,
      message,
      share,
      song
    }
  });
};




  const CombinedClickHandler = (status) => {
    // Call both functions this good thing really 
    Handel(status);
    function__say(id,url,channel,like1,message,share,song);
  };


  const Handel__change__the__item =(channel)=>{
 

    Move.dispatch({


      type : "SET__TOOGLE__TRUE"
    })

    console.log(channel)   // put this channel to context /// that is awsome 
 
    Move.dispatch({
      type:"SET__channel",
      payload  : channel
    })


  }
 
   
  

  
  return (
    <div className='videoSidebar'   >
      <div className='videoSidebar__button'>
     
      {like===false?  <span class="material-symbols-outlined"  style={item === "true" ? { display: "none" } : { display: "flex" }}  id='item' onClick={(e)=>{CombinedClickHandler(false)}
      
    }
        
        
        
        >favorite</span> : 
           <span class="material-symbols-outlined"
         
           onClick={(e)=>{CombinedClickHandler(true)}}>grade</span>
      }
         

















         
      <p>{like ? like1+1 : like1}</p>
      </div>

      <div className='videoSidebar__button'>
      <span class="material-symbols-outlined"  style={item === "true" ? { display: "none" } : { display: "flex" }}  onClick={()=>{Handel__change__the__item(channel)}}>chat</span>
        <p>{message}</p>
              </div>

        <div className='videoSidebar__button'   >
        <label class="ui-bookmark">
    <input type="checkbox"/>
    <div class="bookmark">
      <svg viewBox="0 0 32 32">
        <g>
          <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z" onClick={()=>{function__say1(id,url,channel,like1,message,share,song)}}></path>
        </g>
      </svg>
    </div>
  </label>
        </div>

        <img src='https://img.freepik.com/vecteurs-libre/vecteur-forme-geometrique-ronde-course_53876-175080.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid' alt='data' className='videoSidebar__button__x'
        
        
        style={item === "true" ? { display: "none" } : { display: "flex" }}
        
        />
           
 
        
    </div>
  )
}

export default RightsideBar