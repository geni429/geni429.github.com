import React, { Component } from 'react';
import { TopNavigationBar, Banner } from '../components';
import '../style/BlogMain.css';

class BlogMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationBar: {
        opacity: 1,
        display: 'block'
      }
    }
  }

  render() {
    return (
      <div>
        {TopNavigationBar()}
        {Banner("geni429의 개발 블로그")}
        <div id="container">
          <section></section>
        </div>
      </div>
    );
  }
}

export default BlogMain;