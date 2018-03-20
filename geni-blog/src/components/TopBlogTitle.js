import React from 'react';

const TopBlogTitle = (style) => {
  return (
    <div id="top_blog_title" style={{
      opacity: style.opacity,
      display: style.display
    }}>
      <span>geni429's BLOG</span>
    </div>
  );
}

export default TopBlogTitle;