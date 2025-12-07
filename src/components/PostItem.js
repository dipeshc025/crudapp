import React from "react";

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded mb-3" />
      <h2 className="text-xl font-bold mb-1">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.description}</p>
      <p className="text-gray-600 mb-1"><strong>Created by:</strong> {post.createdBy}</p>
      <p className="text-gray-600 mb-3"><strong>Time:</strong> {post.time}</p>
      <div className="mt-auto flex gap-2">
        <button onClick={onEdit} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Edit</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
