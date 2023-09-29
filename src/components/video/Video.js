import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import './video.scss';
import VideoPOster from '../../assets/images/video-poster.png';
export default props => {
  return (
    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" height={540} poster={VideoPOster}>
      <BigPlayButton position="center" className='buttonRestyle'/>
    </Player>
  );
};