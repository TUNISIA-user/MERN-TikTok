import React, { useEffect, useState } from 'react';
import "./LeftBAR2.css";
import { Nahdi_Gayth } from '../context/GlobalContext';
import axios from "./axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LeftBAR2 = () => {

  const [open,setopen] = useState(false)
  const [updateUserName,setUpdateUserName] = useState("")
  const [updatename,setupdatename] = useState("")
  const [updatebio,setupdatebio] =  useState("")
  const Move = Nahdi_Gayth()
  
  const [response,setresponse] = useState([])
  const [CommentUser,setCommentUser] = useState("")
  const reStore = async()=>{
    const response = await axios("/bioUsers")
    
    setresponse(response.data)
    console.log(response.data,"<==",Move.tokn_user.name__user__token)
   const res =  response?.data.filter((item)=>item.username === Move.tokn_user.name__user__token)
   
   const Last__data = res[0].bio
   
   setCommentUser(Last__data)
   console.log(CommentUser)
  }
  useEffect(()=>{
    reStore()
    
  },[])






  const [activeSection, setActiveSection] = useState('videos'); // Set default to 'videos'
  
  const renderContent = () => {
    if (activeSection === 'videos') {
      return <div>add videos</div>;
      
    } else if (activeSection === 'favorites') {
      return <div className='container__fav'>
                   <div className='card__favorite'>
                  
                      {Move.FLOWING2.map((item)=>
                      
                      <video 
                      className='video__player' 
             
                      autoPlay
                      src={item.url}
                   
                      loop  
                      playsInline   
                      
                      /> 

                      )}
 
                   </div>
      </div>;
    }
  };


 const Handel__click = async(e)=>{
  e.preventDefault();
 
  // Move.dispatch({
  //   type : "UPDATE__USER" ,
  //   paylod :{
      
  //     email : updatename,
  //     bio : "updatebio",

  //   }
  // })
  console.log(updatebio,Move.tokn_user.token)
  try{
    const responseData = await axios.post(`/biosUsers/Update/${Move.tokn_user.token}`,{
       text :updatebio.trim()
    })

    setCommentUser(updatebio);

   toast.success("the bio Modfied success")
  }

  catch(eroor){
    console.log(`this eror by ${eroor}`)
  }
 }
  return (
    <div className='LeftBAR2'>
      <div className='top__nav__bar'>
        <div className='top__nav__bar__img'>
          <img
            loading="lazy"
            alt=""
            src={Move.tokn_user.imgUrl__token}
          
            className="css-1zpj2q-ImgAvatar e1e9er4e1"
          />
        </div>
        <div className='top__nav__bar__title'>
          <div className='index1'>{Move.user?`hello ${Move.user.email}`:"Guest"}</div>
          <div className='index2'>@___{Move.user ? Move.user.email :"@Guest"}</div>
          <div className='edit'>
            <span className="material-symbols-outlined">edit</span>
            <span onClick={()=>setopen(true)} style={{cursor:"pointer"}}>Edit Profile</span>
          </div>
        </div>
      </div>

      <div className='floowers'>
        <div className='Following'>
          <span className='xa'>Following:</span>
          <span>0</span>
        </div>
        <div className='Followers'>
          <span className='xa'>Followers:</span>
          <span>323M</span>
        </div>
        <div className='Likes'>
          <span className='xa'>Likes:</span>
          <span>100Md</span>
        </div>
      </div>

      <div className='bio__tiktok__mern__stack'> 
      <h2>{CommentUser?CommentUser : "no comment yet "}</h2>

      </div>

      <div className='section__videos__tiktok'>
        <h2 
          onClick={() => setActiveSection('videos')}
          className={activeSection === 'videos' ? 'active' : ''}
        >
          Videos
        </h2>
        <h2 
          onClick={() => setActiveSection('favorites')}
          className={activeSection === 'favorites' ? 'active' : ''}
        >
          Favorite
        </h2>
      </div>

      <div className='section__content'>
        {renderContent()}
      </div>


      <div className="update__card" style={open?{display:"flex"}:  {display:"none"}}>
      <h3 onClick={() => setopen(false)} style={{ cursor: "pointer" }}>X</h3>
      <div className='section__update__camera'>
           
  
<div class="form-container">
      <form class="form">
        <div class="form-group">
          

      
          
         
          <label for="name"> hello {Move.tokn_user.name__user__token}</label>
          
          {/* <input type="text" id="name" name="name"  placeholder='Change name' onChange={(e)=>setupdatename(e.target.value)}/> */}
        </div>
        <div class="form-group">
          <label for="textarea">Set bio ... ?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50"  placeholder='set bio....' onChange={(e)=>setupdatebio(e.target.value)}>          </textarea>
        </div>
        <button class="form-submit-btn"  onClick={Handel__click}  >      <h2>{Move?.user?.bio ? "Update" : "ADD Comment"}</h2></button>
      </form>
    </div>
        </div>
      </div>
      <ToastContainer />
    </div>
 
  );
}

export default LeftBAR2;
