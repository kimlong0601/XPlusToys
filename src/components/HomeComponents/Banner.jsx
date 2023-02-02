import React from 'react';

import videoBanner from '../../assets/video/banner.mp4';

const Banner = () => {
  return (
    <div className="banner">
        <video src={videoBanner} autoPlay loop muted></video>
    </div>
  )
}

export default Banner