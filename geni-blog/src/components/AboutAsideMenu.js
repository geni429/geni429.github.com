import React from 'react';
import classNames from 'classnames';
import '../style/components/AboutAsideMenu.css';

const AboutAsideMenu = (circleStyle) => {
  return (
    <aside id="left_aside_menu">
      <div id="state_circle" className="circle">
        <div id="circle_background" className="circle"></div>
        <div id="state_profile" className={classNames("circle", "state")}>
          <img src="https://geni429.github.io/geni-blog/src/res/profile.jpg" style={{ 
            opacity: circleStyle.profileOpacity,
            display: circleStyle.profileDisplay
          }} />
        </div>
        <div id="state_github" className={classNames("circle", "state")}>
          <img src="https://geni429.github.io/geni-blog/src/res/github_logo.png" style={{ 
            opacity: circleStyle.githubOpacity,
            display: circleStyle.githubDisplay
          }} />
        </div>
        <div id="state_git_repo" className={classNames("circle", "state")}>
          <img src="https://geni429.github.io/geni-blog/src/res/git_repo.png" style={{ 
            opacity: circleStyle.gitRepoOpacity,
            display: circleStyle.gitRepoDisplay
          }} />
        </div>
      </div>
    </aside>
  );
}

export default AboutAsideMenu;