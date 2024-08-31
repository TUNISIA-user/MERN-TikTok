import React, { useEffect, useRef, useState } from 'react';
import './video.css';
import VideoSideBar from './VideoSideBar';
import RightsideBar from './RightsideBar';
import CommonetSection from './CommonetSection';

const Video = ({ id, url, channel, desc, like1, message, share, song, document__data ,item}) => {
  //  console.log(id, url,"channel", channel, desc,"like1:", like1,"mseesage:",message, "share:",share,"song:",song, document__data,"[]")
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
 
  return (
    <>  
    <div className='video'>
      <video
        className='video__player'
        width="400"
        height="515"
        ref={videoRef}
        onClick={handleVideoPress}
        src={url}
        muted
        loop
        playsInline
      >
      </video>

      <VideoSideBar channel={channel} desc={desc} song={song} />

      
      <RightsideBar
        item ={item}
        like1={document__data.length>0 &&document__data.length }
        message={document__data.length>0 && document__data.length}
        share={share}
        id={id}
        url={url}
        channel={channel}
        desc={desc}
        song={song}
        dataARRAY= {document__data}
        
      />

    
      <CommonetSection commt={document__data} />
    </div>
    </>

  );
};

export default Video;
