import React, { Component } from 'react';
import { TopNavigationBar, Banner, PostContent } from '../components';
import showdown from 'showdown';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postContent: "## It's mark down!"
    }
  }

  componentDidMount() {
    let converter = new showdown.Converter();
    this.setState({
      postContent: converter.makeHtml(this.state.postContent)
    });
  }

  render() {
    return (
      <div>
        {TopNavigationBar()}
        {Banner("Test post")}
        <div id="container">
          {PostContent(this.state.postContent)}
        </div>
      </div>
    );
  }
}

export default Post;