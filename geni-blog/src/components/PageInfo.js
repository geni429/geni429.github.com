import React from 'react';
import '../style/components/PageInfo.css';

const PageInfo = (title, summary) => {
  return (
    <article className="page_info">
      <header className="content_title">{title}</header>
      <div className="content_summary">{summary}</div>
    </article>
  );
}

export default PageInfo;