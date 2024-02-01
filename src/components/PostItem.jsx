import React from 'react';

const PostItem = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostItem;
