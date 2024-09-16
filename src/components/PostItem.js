import React from 'react';

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.description}</p>
      <p className="text-gray-600 mb-2"><strong>Created by:</strong> {post.createdBy}</p>
      <p className="text-gray-600 mb-2"><strong>Time:</strong> {post.time}</p>
      <button onClick={onEdit} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Edit</button>
      <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  );
};

export default PostItem;
