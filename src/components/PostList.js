import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onEdit, onDelete }) => {
  if (posts.length === 0) return <p className="text-center text-gray-500">No posts yet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} onEdit={() => onEdit(post)} onDelete={() => onDelete(post)} />
      ))}
    </div>
  );
};

export default PostList;
