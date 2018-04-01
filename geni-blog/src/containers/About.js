import React, { Component } from 'react';
import { Banner, Desktop, PageInfo, WebProjectInfo, AndroidProjectInfo, AboutAsideMenu } from '../components';
import '../style/containers/About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileOpacity: 0,
      githubOpacity: 0,
      gitRepoOpacity: 0,
      profileDisplay: 'none',
      githubDisplay: 'none',
      gitRepoDisplay: 'none'
    }

    this.stateChange = this.stateChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      console.log(e);
    })
  }

  stateChange() {
  }

  render() {
    return (
      <div id="about_wrapper">
        {AboutAsideMenu(this.state)}
        <div id="about_content">
          <section id="introduce" className="content_wrapper">
            {PageInfo('Geni', 'I want to impress someone.')}
          </section>
          <section id="developer" className="content_wrapper">
            {PageInfo('Developer', 'I\'m interested in web development.')}
            {Desktop()}
          </section>
          <section id="project" className="content_wrapper">
            {PageInfo('Project', 'My own projects.')}
            {WebProjectInfo('entry', 'Entry', 'DSM entry system.', 'https://geni429.github.io/geni-blog/src/res/project_entry.jpg')}
            {WebProjectInfo('blog', 'Own blog', 'geni429.github.io', 'https://geni429.github.io/geni-blog/src/res/project_blog.jpg')}
            {AndroidProjectInfo('식문고', '키워드 기반 음식점 개선 시스템')}
          </section>
        </div>
      </div>
    );
  }
}

export default About;