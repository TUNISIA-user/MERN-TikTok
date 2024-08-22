import React, { useState, useEffect } from 'react';
import './Upload.css';
import axios from './axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [channel, setChannel] = useState("");
  const [desc, setDesc] = useState("");
  const [song, setSong] = useState("");
  const [like1, setLike1] = useState(110);
  const [message, setMessage] = useState(110);
  const [share, setShare] = useState(110);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

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
    if (!selectedFile || !channel || !desc || !song || isNaN(like1) || isNaN(message) || isNaN(share)) {
      setError("Please fill all fields correctly.");
      return false;
    }
    return true;
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post("/v2/posts", {
        url: selectedFile,
        channel,
        desc,
        song,
        like1,
        message,
        share,
      });
      setSuccess('Upload successful');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="upload-input"
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
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? "Loading..." : success ? success : "Send"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Upload;
