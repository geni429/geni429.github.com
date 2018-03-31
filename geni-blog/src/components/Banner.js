import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import '../style/components/Banner.css';
import bgImage from '../res/post_bg_image_1.jpg';

const Banner = (bannerTitle, marginTop, opacity) => {
  return (
    <header id="banner" style={{marginTop: `-${marginTop}px`}}>
      <div id="banner_cover"></div>
      {TopNavigationBar()}
      <div id="banner_image">
        <img src="https://geni429.github.io/geni-blog/src/res/post_bg_image_1.jpg" class="image" alt="banner image"/>
      </div>
      <span style={{opacity: opacity}}>{bannerTitle}</span>
    </header>
  );
}

export default Banner;