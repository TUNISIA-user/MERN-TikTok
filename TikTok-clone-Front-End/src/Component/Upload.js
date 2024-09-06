import React, { useState, useEffect } from 'react';
import './Upload.css';
import axios from './axios';
import { Nahdi_Gayth } from '../context/GlobalContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null); // this img 
  const [channel, setChannel] = useState("");
  const [desc, setDesc] = useState("");
  const [song, setSong] = useState("");
  const [like1, setLike1] = useState(110);
  const [message, setMessage] = useState(110);
  const [share, setShare] = useState(110);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [imge1, setimg1] = useState("https://i.seadn.io/gae/Ihufw_BbfNUhFBD-XF74FlY2JjpYeUkkTdhzJy_bjEdfz0qKlLMOkxlUKxyJR7ib5dgsji9XZAMuorSX20Fw12q5XZ2LJTj2efcS?auto=format&dpr=1&w=1000");

  const Move = Nahdi_Gayth();
 useEffect(()=>{
  console.log(Move.tokn_user.token,"uplod.js")
 },[])
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateInputs = () => {
    if (!channel || !desc || !song) {
      setError("Please fill out all fields");
      return false;
    }
    return true;
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    // if (!validateInputs()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);   
   
    try {
      const response = await axios.post(`v2/posts/${Move.tokn_user.token}`, {
        url:   "https://videos.pexels.com/video-files/2836285/2836285-uhd_2560_1440_24fps.mp4",
        channel,
        
        user:Move.tokn_user.token,
      });
      setSuccess('Upload successful');
      console.log('Response:', response.data);
      toast.success("Upload successful")
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Upload failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">

      <div className='upload1'>  
      
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="upload-input"
        id='freeLancer'
        
      />
      
      {selectedFile && (
        <div className="file-preview">
          <video controls className="preview-video" style={{ width: "600px", height: "300px" }}>
            <source src={selectedFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <br /><br />

      <input
        type='text'
        placeholder='Channel'
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      /><br />
      <input
        type='text'
        placeholder='Description'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      /><br />
      <input
        type='text'
        placeholder='Song'
        value={song}
        onChange={(e) => setSong(e.target.value)}
      /><br />
      <input
        type='number'
        placeholder='Likes'
        value={like1}
        onChange={(e) => setLike1(Number(e.target.value))}
      /><br />
      <input
        type='number'
        placeholder='Messages'
        value={message}
        onChange={(e) => setMessage(Number(e.target.value))}
      /><br />
      <input
        type='number'
        placeholder='Shares'
        value={share}
        onChange={(e) => setShare(Number(e.target.value))}
      />
   <br/>  <br/>
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? "Loading..." : success ? success : "Send"}
      </button>
      <ToastContainer />


      {error && <p className="error-message">{error}</p>}
      </div>

    </div>
    
  );
};

export default Upload;
