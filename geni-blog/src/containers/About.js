import React, { Component } from 'react';
import { Banner, Desktop, PageInfo } from '../components';
import '../style/containers/About.css';
import jsLogo from '../res/javascript_logo.png';

class About extends Component {
  render() {
    return (
      <div id="about_wrapper">
        <aside id="left_aside_menu">
          <div id="state_circle" className="circle"></div>
        </aside>
        <div id="about_content">
          <section id="introduce" className="content_wrapper">
            {PageInfo('Geni', 'I want to impress someone.')}
          </section>
          <section id="developer" className="content_wrapper">
            {PageInfo('Developer', 'I\'m interested in web development.')}
            {Desktop()}
          </section>
          <section id="project" className="content_wrapper"></section>
        </div>
      </div>
    );
  }
}

export default About;