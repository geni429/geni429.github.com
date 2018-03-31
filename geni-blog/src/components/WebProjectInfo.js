import React from 'react';
import '../style/components/WebProjectInfo.css';

const WebProjectInfo = (projectId, projectName, projectIntroduce, projectImage) => {
  return (
    <div id={projectId} className="web_project">
      <div className="project_img">
        <img src={projectImage} alt={projectIntroduce} />
      </div>
      <div className="project_info">
        <div className="project_name">{projectName}</div>
        <div className="project_introduce">{projectIntroduce}</div>
      </div>
    </div>
  );
}

export default WebProjectInfo;