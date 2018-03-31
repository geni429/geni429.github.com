import React from 'react';
import AndroidDisplay from './AndroidDisplay';
import '../style/components/AndroidProjectInfo.css';

const AndroidProjectInfo = (projectName, projectIntroduce) => {
  return (
    <div className="android_project">
      <div className="project_info">
        <div className="project_name">{projectName}</div>
        <div className="project_introduce">{projectIntroduce}</div>
      </div>
      <div className="project_img">
        {AndroidDisplay()}
      </div>
    </div>
  );
}

export default AndroidProjectInfo;