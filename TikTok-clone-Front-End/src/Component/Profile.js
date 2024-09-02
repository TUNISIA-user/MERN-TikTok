import React from 'react';
import './Profile.css'; // Ensure this matches the name of your CSS file
import RightPofile from './RightPofile';
import LeftBAR2 from './LeftBAR2';
import { Link } from 'react-router-dom';
import { Nahdi_Gayth } from '../context/GlobalContext';
function Profile() {
  
   const Move  = Nahdi_Gayth()
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
          
    <img loading="lazy"  style={{width:"30px",borderRadius:"100px"}}  alt=""    src={Move.tokn_user.imgUrl__token} />  
    
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
