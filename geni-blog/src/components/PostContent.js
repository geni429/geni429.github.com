import React from 'react';

const PostContent = (content) => {
  return (
    <section dangerouslySetInnerHTML = {{
      __html: content
    }}>
    </section>
  );
}

export default PostContent;