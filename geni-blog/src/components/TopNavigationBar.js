import React from 'react';
import '../style/components/TopNavigationBar.css';

const TopNavigationBar = (style) => {
  return (
    <nav id="top_navigation_bar">
      {/* <span id="blog_logo">Geni Logo</span> */}
      <ul>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">DEV</a></li>
        <li><a href="#">THOUGHT</a></li>
      </ul>
    </nav>
  );
}

export default TopNavigationBar;