import React, { useRef, useState } from 'react';
import './video.css';
import VideoSideBar from './VideoSideBar';
import RightsideBar from './RightsideBar';
import CommonetSection from './CommonetSection';

const Video = ({ id, url, channel, desc, like1, message, share, song, document__data }) => {
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
        like1={like1}
        message={message}
        share={share}
        id={id}
        url={url}
        channel={channel}
        desc={desc}
        song={song}
      />

      {/* Pass the correct data to CommonetSection */}
      <CommonetSection commt={document__data} />
    </div>
  );
};

export default Video;
