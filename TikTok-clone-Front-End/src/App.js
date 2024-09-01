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


const App = () => {
  const [videos, setVideos] = useState([]);

  const Move = Nahdi_Gayth()
    
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/v2/posts');
         
        setVideos(response.data);   // this to put data in hooks 
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
    
  
  }, []);
 
 
  return (
    <Router>
      <Routes>

      {Move.user!=null?   <Route      path="/videos" element={

<>       




<header className="profile-header">
<div className="profile-logo">TikTok</div>


<div className="profile-icons">

<span class="material-symbols-outlined off">send</span>
<span class="material-symbols-outlined off">chat_bubble</span>

<Link to={"/profile/login"}><img style={{height:"30px",width:"30px",borderRadius:"100px"}}   src="https://picsum.photos/id/237/200/300" class="css-1zpj2q-ImgAvatar e1e9er4e1"/>
  </Link>

</div>
</header>











<div className="App">  
<div className='section__app__box'>
<Link to={"/following"} style={{textDecorationLine:"none",color:"white"}}><h3>Following</h3></Link>
<Link to={"/videos"} style={{textDecorationLine:"none",color:"white"}} ><h3>For Your</h3></Link>
</div>
  <div className="app_videos">
   
    {videos.map((item) => {
        
          return (
            <>      
          
              <Video
                key={item._id}
                id={item._id}
                url={item.url}
                channel={item.channel}
                desc={item.desc}
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
:<Route path='/' element={<p>404</p>}/>
}


<Route path="/following" element={


              <>  

                    
      <header className="profile-header">
        <div className="profile-logo">TikTok</div>
      
        
        <div className="profile-icons">
      
          <span class="material-symbols-outlined off">send</span>
          <span class="material-symbols-outlined off">chat_bubble</span>
        
          <Link to={"/profile/login"}><img style={{height:"30px",width:"30px",borderRadius:"100px"}}   src="https://picsum.photos/id/237/200/300" class="css-1zpj2q-ImgAvatar e1e9er4e1"/>
            </Link>
        
        </div>
      </header>
      


      
          <div className="App">  
           <div className='section__app__box  boxFollwing'>
          <Link to={"/following"} style={{textDecorationLine:"none",color:"white"}}><h3>Following</h3></Link>
          <Link to={"/videos"} style={{textDecorationLine:"none",color:"white"}} ><h3>For Your</h3></Link>
      
        </div>

            <div className="app_videos">
             
               {Move.FLOWING.length>0?
                
                 
                Move.FLOWING.map((item,index)=> 
                
                  <Video
                  item = "true"
                  key={index}
                  id={item.id}
                  url={item.url}
                  channel={item.channel}
                  desc={item.desc}
                  share={item.share}
                  song={item.song}
                  like1={item.like1}
                  document__data ={[]}
          
                />
                 
                )
               :
                  <div className='not__found'>
                  <h4 style={{fontWeight:"bold"}}>    Follow some one    </h4> 
                 <br/><br/>
                  <Link to={"/videos"} style={{textDecoration:"none",color:"white"}}>For You</Link>
                 </div>
                 }

            </div>
          </div> 
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path='/profile/login' element ={<Profile/>} />
        <Route path='/profile/upload' element ={<Upload/>} />
 
        
       

      </Routes>
    </Router>
  );
}

export default App;
