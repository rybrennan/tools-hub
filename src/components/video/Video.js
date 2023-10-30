import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import './video.scss';
import VideoPoster from '../../assets/images/video-poster.png';

export default props => {
  return (
    // <Player src="https://toolshubbucket.s3.us-west-1.amazonaws.com/Rytr+UGC+(With+Music).MP4"  className="customVideoPlayer" >
    // </Player>
    <video
      controls
      width="100%"
      height="540"
      // poster={VideoPoster}
      className="customVideoPlayer"
      autoPlay
    >
      <source src="https://toolshubbucket.s3.us-west-1.amazonaws.com/Rytr+UGC+(With+Music).MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};