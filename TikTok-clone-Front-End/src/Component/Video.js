import React, { useEffect, useRef, useState } from 'react';
import './video.css';
import VideoSideBar from './VideoSideBar';
import RightsideBar from './RightsideBar';
import CommonetSection from './CommonetSection';

const Video = ({ id, url, channel, desc, like1, message, share, song, document__data, item }) => {
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
  console.log(playing)

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         if (!playing) {
  //           videoElement.play();
  //           setPlaying(true);
  //         }
  //       } else {
  //         if (playing) {
  //           videoElement.pause();
  //           setPlaying(false);
  //         }
  //       }
  //     },
  //     { threshold: 0.5 } // Adjust this threshold as needed
  //   );

  //   if (videoElement) {
  //     observer.observe(videoElement);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       observer.unobserve(videoElement);
  //     }
  //   };
  // }, [playing]);

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
