import React, { useEffect, useState } from 'react';
import './Login.css';
import { auth } from '../firebase1';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Nahdi_Gayth } from '../context/GlobalContext';
import { useNavigate } from "react-router-dom";
import axios from './axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const Nav = useNavigate();
  const Move = Nahdi_Gayth();
  const [data_apiWork, setdata_apiWork] = useState([]);
  const [Newuser, setNewuser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [img, setImage] = useState(null); // Image preview URL



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Image preview URL
      setImageURL(file.name); // Set the file name as image URL
    }
  };




  const handleFirebase = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("/registerUser", {
        username: email.substr(0, email.indexOf("@")), // Extract username from email
        email,
        password,
        imgUrl:img || imageURL  ,
        bio: "",
      });
      toast.success("Registration successful!");
      console.log("Response:", resp);

      Move.dispatch({
        type: "SET__TOKEN__USER",
        payloadDataINdex: {
          token: resp.data._id,
          imgUrl__token: resp.data.imgUrl,
          name__user__token: resp.data.username,
        },
      });

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Firebase User:", userCredential);

      setEmail("");
      setPassword("");
      Nav("/videos");

      Move.dispatch({
        type: "SET__USER__FROM__FIRE__BASE",
        payload__xuser: {
          email: email.substr(0, email.indexOf("@")),
          imgUrl: imageURL || "https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg",
          bio: "",
        },
      });
    } catch (error) {
      toast.error('Error creating user: ' + error.message);
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

  useEffect(() => {
    setdata_apiWork(api__data);
  }, []);

  const POL__DATA = (id, imgLink) => {
    const response = data_apiWork?.filter((item) => item.id === id);
    setNewuser(response);
    setImageURL(imgLink); // Set selected image URL
  };

 
  return (
    <>
      <div className='center__container'>
        <div className="container">
          <div className="heading">Sign In For Tiktok</div>
          <form className="form" onSubmit={handleFirebase}>
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
              {Newuser.length > 0 
                ? Newuser.map(item => <img key={item.id} src={item.img_link} alt="User" />)  
                : data_apiWork.map(item => (
                  <img 
                    key={item.id} 
                    src={item.img_link} 
                    alt="User"
                    onClick={() => POL__DATA(item.id, item.img_link)}
                  />
                ))}
            </div>

            <span className="forgot-password">
              <a href="#">Forgot Password?</a>
            </span>
            <button className="login-button" type="submit" style={{cursor: "pointer"}}>
              Create Account
            </button>

            <label htmlFor="data">Upload an image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          
          </form>

          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">
              {/* Social login buttons */}
            </div>
          </div>
          <span className="agreement">
            <a href="#">Learn user license agreement</a>
          </span>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
