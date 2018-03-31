import React from 'react';
import '../style/components/PageInfo.css';

const PageInfo = (title, summary) => {
  return (
    <article class="page_info">
      <header class="content_title">{title}</header>
      <div class="content_summary">{summary}</div>
    </article>
  );
}

export default PageInfo;