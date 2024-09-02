import React from 'react'
import "./VideoSideBar.css"
import { Nahdi_Gayth } from '../context/GlobalContext'

const   VideoSideBar = ({channel,desc,song}) => {
  const Move = Nahdi_Gayth()
  return (
    <div className='videoSideBar'>
        <div className='videoFooter__text'>
            <h3>@ {Move.user.email} ....{channel}</h3>
            <p>{desc}</p>

            <div className='videoFooter__ticker'>
         
        
                <div className='smooth_vra'>
                <span class="material-symbols-outlined">music_note</span>


                  <h4>{song}</h4>
                </div>

            
            </div>
              
        </div>

        {/* <img
        className='videoFooter__record'
        src='httos://static.thenounproject.com/png/934821-200.png'
        alt='data'
        /> */}
    
    </div>

  )
}

export default VideoSideBar