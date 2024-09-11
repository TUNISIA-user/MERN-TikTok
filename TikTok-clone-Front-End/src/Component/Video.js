import React, { useEffect, useRef, useState } from 'react';
import './video.css';
import VideoSideBar from './VideoSideBar';
import RightsideBar from './RightsideBar';
import CommonetSection from './CommonetSection';

const Video = ({ id, url, channel, desc, like1, message, share, song, document__data, item }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is in view
          if (playing) {
            videoRef?.current.play();
          }
        } else {
          // Element is out of view
          if (playing) {
            videoRef?.current.pause();
          }
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the video is in view
    );

    // Observe the video element
    if (videoRef.current) {
      observer?.observe(videoRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (videoRef.current) {
        observer?.unobserve(videoRef.current);
      }
    };
  }, [playing]);

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
          playsInline
          loop
        />
        <VideoSideBar channel={channel} desc={desc} song={song} />
        <RightsideBar
          item={item}
          like1={document__data.length > 0 && document__data.length}
          message={document__data.length > 0 && document__data.length}
          share={share}
          id={id}
          url={url}
          channel={channel}
          desc={desc}
          song={song}
          dataARRAY={document__data}
        />
        <CommonetSection commt={document__data} />
      </div>
    </>
  );
};

export default Video;
    