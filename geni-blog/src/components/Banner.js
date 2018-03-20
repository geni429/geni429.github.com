import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import '../style/components/Banner.css';
import bgImage from '../res/post_bg_image_1.jpg';

const Banner = (bannerTitle, marginTop, opacity) => {
  return (
    <header id="banner" style={{marginTop: `-${marginTop}px`}}>
      <div id="banner_cover"></div>
      {TopNavigationBar()}
      <img src="https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg"/>
      <span style={{opacity: opacity}}>{bannerTitle}</span>
    </header>
  );
}

export default Banner;