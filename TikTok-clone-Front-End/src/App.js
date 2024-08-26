import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Video from './Component/Video';
import axios from './Component/axios';
import './App.css';
import Login from './Component/Login';
import { Nahdi_Gayth } from './context/GlobalContext';
import Profile from './Component/Profile';
import CommonetSection from './Component/CommonetSection';
import './Component/Profile.css';
import Upload from './Component/Upload';


// @ app founder test 
//.........
// change templte 
//Change state
const App = () => {
  const [videos, setVideos] = useState([]);
  const Move = Nahdi_Gayth()
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/v2/posts');
       console.log(response.data,"dd")
        setVideos(response.data);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    
  
  }, []);

  // Define the click handler
 
  return (
    <Router>
      <Routes>
        <Route path="/videos" element={

          <>       


 
 
 <header className="profile-header">
   <div className="profile-logo">TikTok</div>
 
   <div className="profile-search-bar">
    
   </div>
   <div className="profile-icons">
    
  
     <span class="material-symbols-outlined off">send</span>
     <span class="material-symbols-outlined off">chat_bubble</span>
 
  <Link to={"/profile/login"}><img loading="lazy"  style={{width:"30px",borderRadius:"100px"}}  alt="" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/37088e0f4d5663fc7b1baab2317fd6cb~c5_720x720.jpeg?lk3s=a5d48078&amp;nonce=76217&amp;refresh_token=6ac8a92226bf0bfd183487e9c09400af&amp;x-expires=1724324400&amp;x-signature=tTIBkeBor74qKHSc6db1MXho2jY%3D&amp;shp=a5d48078&amp;shcp=a1d2006b" class="css-1zpj2q-ImgAvatar e1e9er4e1"/>  </Link>
   </div>
 </header>
 
 


 
 





          <div className="App">  
          <div className='section__app__box'>
          <Link to={"/following"} style={{textDecorationLine:"none",color:"white"}}><h3>Following</h3></Link>
          <Link to={"/videos"} style={{textDecorationLine:"none",color:"white"}} ><h3>For Your</h3></Link>
        </div>
            <div className="app_videos">
             
              {videos.map((item) => {
                    console.log(item.comments,"||")
                    return (
                      <>      
                    
                        <Video
                          key={item._id}
                          id={item._id}
                          url={item.url}
                          channel={item.channel}
                          desc={item.desc}
                          like1={item.like1}
                          message={item.message}
                          share={item.share}
                          song={item.song}
                          document__data = {item.comments}
                  
                        />
                    
                        </>

                    );
                    
                  })}
                  
            
                  
            </div>
            
          </div>
        
          </>
      
        } />

<Route path="/following" element={
          <div className="App">  
          <div className='section__app__box'>
           
          <Link to={"/following"} style={{textDecorationLine:"none",color:"white"}} ><h3>Following</h3></Link>
          <Link to={"/videos"} style={{textDecorationLine:"none",color:"white"}}><h3>For Your</h3></Link>

           
        </div>
            <div className="app_videos">
             
              {
              Move.FLOWING.length>0?
              
              Move.FLOWING.map( item =>  
                    
                   
                      <Video
                        id={item._id}
                        url={item.url}
                        channel={item.channel}
                        desc={item.desc}
                        like1={item.like1}
                        message={item.message}
                        share={item.share}
                        song={item.song}
                     
                      />
                  
                  ) :
                  
                   <div className='not__found'>
                    <h4 style={{fontWeight:"bold"}}>    Follow some one    </h4> 
                   <br/><br/>
                    <Link to={"/videos"} style={{textDecoration:"none",color:"white"}}>For You</Link>
                   </div>
                  }

            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path='/profile/login' element ={<Profile/>} />
        <Route path='/profile/upload' element ={<Upload/>} />
 
        
       

      </Routes>
    </Router>
  );
}

export default App;
