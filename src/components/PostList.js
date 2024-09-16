import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="max-w-lg mx-auto mt-6">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} onEdit={() => onEdit(post)} onDelete={() => onDelete(post)} />
      ))}
    </div>
  );
};

export default PostList;
