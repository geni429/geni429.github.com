import React, { Component } from 'react';
import { TopNavigationBar, Banner, PostContent } from '../components';
import post from '../../blog-post/test.md';
import '../style/containers/Post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postContent: post,
      postBannerMarginTop: 0,
      postBannerOpacity: 1
    }

    this.bannerFadeOut = this.bannerFadeOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.bannerFadeOut);
  }

  bannerFadeOut() {
    this.setState({
      postBannerMarginTop: window.scrollY / 5,
      postBannerOpacity: 1 - window.scrollY / 200
    })
  }

  render() {
    return (
      <div id="post_wrapper">
        {Banner("React Router: <Switch>", this.state.postBannerMarginTop, this.state.postBannerOpacity)}
        <div id="post_content_wrapper">
          <div id="container">
            {PostContent(post)}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;