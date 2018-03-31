import React from 'react';
import '../style/components/AndroidDisplay.css';
import { project_sigmungo } from '../res';

const AndroidDisplay = () => {
  return (
    <div id="android_wrapper">
      <div id="android_speaker"></div>
      <div id="android_display"></div>
      <img id="content" src={project_sigmungo} />
    </div>
  );
}

export default AndroidDisplay;