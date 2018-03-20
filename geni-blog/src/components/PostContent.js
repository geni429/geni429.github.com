import React from 'react';

const PostContent = (content) => {
  return (
    <section id="post_content" dangerouslySetInnerHTML = {{
      __html: content
    }}>
    </section>
  );
}

export default PostContent;