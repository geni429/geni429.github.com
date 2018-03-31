import React from 'react';
import '../style/components/WebProjectInfo.css';

const WebProjectInfo = (project_id, project_name, project_introduce, project_image) => {
  return (
    <div id={project_id} className="project">
      <div className="project_img">
        <img src={project_image} alt={project_introduce} />
      </div>
      <div className="project_info">
        <div className="project_name">{project_name}</div>
        <div className="project_introduce">{project_introduce}</div>
      </div>
    </div>
  );
}

export default WebProjectInfo;