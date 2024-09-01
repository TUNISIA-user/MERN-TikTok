import React from 'react';
import './Profile.css'; // Ensure this matches the name of your CSS file
import RightPofile from './RightPofile';
import LeftBAR2 from './LeftBAR2';
import { Link } from 'react-router-dom';
 
function Profile() {
  
  
  return (
    <div className="profile">
 
      <header className="profile-header">
    
        <Link to={"/videos"} style={{textDecorationLine:"none",color:"white"}}>     <div className="profile-logo">TikTok</div></Link>
        <div className="profile-search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="profile-icons">
        <div className='uplod'>
          +
        
          <Link to={"/profile/upload"} style={{textDecorationLine:"none",color:"white"}}>      <h2>Uplod</h2>   </Link>
         </div>
       
          <span className="material-symbols-outlined"  >send</span>
          <span className="material-symbols-outlined"  >chat_bubble</span>
          
    <img loading="lazy"  style={{width:"30px",borderRadius:"100px"}}  alt="" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/37088e0f4d5663fc7b1baab2317fd6cb~c5_720x720.jpeg?lk3s=a5d48078&amp;nonce=76217&amp;refresh_token=6ac8a92226bf0bfd183487e9c09400af&amp;x-expires=1724324400&amp;x-signature=tTIBkeBor74qKHSc6db1MXho2jY%3D&amp;shp=a5d48078&amp;shcp=a1d2006b" class="css-1zpj2q-ImgAvatar e1e9er4e1"/>  
    
        </div>
        
      </header>
       
       <div className='container__Profile'>
            <RightPofile/>
             <LeftBAR2/>

       </div>
      
 
  
    </div>
  );
}

export default Profile;
