import React from 'react'
import "./RightPofile.css"
import { Link } from 'react-router-dom'
import { Nahdi_Gayth } from '../context/GlobalContext'
const RightPofile = () => {
    const Move = Nahdi_Gayth()

  return (
    <div className='RightPofile'>
      
       <div className='icon__tik_tok'><span class="material-symbols-outlined">home</span>
       <span> <Link to={"/videos"} style={{textDecoration:"none",color:"black"}}>videos</Link>  </span>
       </div>
     
       <div className='icon__tik_tok'><span class="material-symbols-outlined">  explore</span>
       <span>Explore</span>
       </div>
       <div className='icon__tik_tok'><span class="material-symbols-outlined">  account_tree</span>
       <span>Following </span>
       </div>
       <div className='icon__tik_tok'><span class="material-symbols-outlined">  group</span>
       <span>Freinds</span>
        </div>
       <div className='icon__tik_tok'><span class="material-symbols-outlined">  videocam</span>
       <span>Live</span>
       </div>
       
       <div className='icon__tik_tok'> 
       <img loading="lazy"  style={{width:"30px",borderRadius:"100px"}}  alt="" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/37088e0f4d5663fc7b1baab2317fd6cb~c5_720x720.jpeg?lk3s=a5d48078&amp;nonce=76217&amp;refresh_token=6ac8a92226bf0bfd183487e9c09400af&amp;x-expires=1724324400&amp;x-signature=tTIBkeBor74qKHSc6db1MXho2jY%3D&amp;shp=a5d48078&amp;shcp=a1d2006b" class="css-1zpj2q-ImgAvatar e1e9er4e1"/>  

       <span>Profile</span>
       </div>
         <br/>
  
          <hr style={{ backgroundColor: "black"}}/>
          <div className='Following accounts'>
              <h2 className='follwing__acount__title'>Following accounts</h2>
{Move.FLOWING.map((item)=>{
    
 return    <div className='card__title'>
    <div className='icon__image'> 
         <video loading="lazy"     alt="" src={item.url}/>  
    </div>

    <div className='data__file'>
        <h4 >{item.channel}</h4>
        <h3 style={{color:"grey"}}>@___{item.channel}</h3>
    </div>
 </div>

})}


          </div>
    </div>
  )
}

export default RightPofile