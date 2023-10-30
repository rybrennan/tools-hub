import React, { useRef } from 'react';
import './video.scss';
import VideoPoster from '../../assets/images/video-poster.png';
import { Container } from 'react-bootstrap';

const VideoComponent = () => {
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
 
  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        className="customVideoPlayer"
        autoPlay
      >
        <source src="https://toolshubbucket.s3.us-west-1.amazonaws.com/Rytr+UGC+(With+Music).MP4" type="video/mp4" />
      </video>
      <div className="big-play-button" onClick={handlePlayClick}>
        ▶
      </div>
    </div>
  );
};

export default VideoComponent;