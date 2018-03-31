import React from 'react';
import '../style/components/Desktop.css';

const Desktop = () => {
  return (
    <div id="desktop_wrapper">
      <div id="desktop_border"></div>
      <div id="desktop_display">
        <nav id="desktop_navigation"></nav>
        <div id="desktop_banner"></div>
        <div id="desktop_profile" className="circle"></div>
        <div className="desktop_list desktop_list_1"></div>
        <div className="desktop_list desktop_list_2"></div>
        <div className="desktop_list desktop_list_3"></div>
        <div className="desktop_image_1"></div>
        <div className="desktop_image_2"></div>
      </div>
    </div>
  );
}

export default Desktop;