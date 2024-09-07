import React, { useEffect, useState } from 'react';
import './Login.css';
import { auth } from '../firebase1';
import { createUserWithEmailAndPassword    } from 'firebase/auth';
import { Nahdi_Gayth } from '../context/GlobalContext';
import { useNavigate } from "react-router-dom";
import axios from './axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const Nav = useNavigate();
  const Move = Nahdi_Gayth();
  const [data_apiWork,setdata_apiWork]  = useState([])
  const [Newuser,setNewusser]  = useState("")
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  
 
  
  const handleFirebase = async (e) => {
    e.preventDefault();
 


    try {



  const resp  =  await axios.post("/registerUser", {
     username: email.substr(0, email.indexOf("@")), // Extract username from email
     email: email,
     password: password,
     imgUrl: imageURL,
     bio :"",
     
   });
   toast.success("success 100%")
   console.log("this for reponse",resp)
  


Move.dispatch({
  type:"SET__TOKEN__USER",
  payloadDataINdex : {
    token : resp.data._id ,
    imgUrl__token  :resp.data.imgUrl,
    name__user__token : resp.data.username
  }

})









      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
     console.log(userCredential , "<=>")
      setEmail("");
      setPassword("");
      Nav("/videos");

      // SET__USER__FROM__FIRE__BASE 
      Move.dispatch({
        type: "SET__USER__FROM__FIRE__BASE",
        payload__xuser:{
          email :  email.substr(0, email.indexOf("@")) ,
          imgUrl  : "https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg" ||"https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
          bio : null,
          
        } 

        

      });
 
      
      
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

                   

  const api__data = [
    { id: 1, img_link: 'https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg' },
    { id: 2, img_link: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png' },
    { id: 3, img_link: 'https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg' },
    { id: 4, img_link: 'https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg' },
    { id: 5, img_link: 'https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg' }
  ];

 
  useEffect(()=>{

    

    setdata_apiWork(api__data)

  },[])
  
const POL__DATA = (id,file1)=>{
 
const response  = data_apiWork?.filter((index)=>index.id===id)

   
setNewusser(response)
 console.log(file1)
 setImageURL(file1)
 
}
 



 
 
  return (
    <>   
    <div className='center__container'>
      <div className="container">
        <div className="heading">Sign In For Tiktok</div>
        <form action="" className="form" onSubmit={handleFirebase}>
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
 

        <div className='copy'>

     
 
 {Newuser.length>0 ? Newuser.map(item=><img src={item.img_link}/>)  :  data_apiWork.map(item=><img src={item.img_link}      onClick={() => POL__DATA(item.id,item.img_link)} />) }
</div>




          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          <button className="login-button" type="submit" style={{cursor:"pointer"}}>
            Create Account
          </button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="social-button apple">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </button>
            <button className="social-button twitter">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement">
          <a href="#">Learn user license agreement</a>
        </span>
      </div>
    </div>

    <ToastContainer
   position="top-right" // Position of the toast notifications
   autoClose={5000} // Auto-close duration in milliseconds
   hideProgressBar={false} // Show or hide progress bar
   newestOnTop={false} // Show newest toast on top
   closeOnClick // Close on click
   rtl={false} // Right-to-left layout
   pauseOnFocusLoss // Pause on focus loss
   draggable // Make draggable
   pauseOnHover // Pause on hover
 />
 
    </>


  );
};

export default Login;
