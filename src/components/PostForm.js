import React, { useState, useEffect } from 'react';

const PostForm = ({ currentPost, onSave }) => {
  const [post, setPost] = useState({ image: '', title: '', description: '', createdBy: '', time: '' });

  useEffect(() => {
    if (currentPost) {
      setPost(currentPost);
    }
  }, [currentPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
    setPost({ image: '', title: '', description: '', createdBy: '', time: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
        <input type="text" name="image" value={post.image} onChange={handleChange} placeholder="Image URL" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Title" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input type="text" name="description" value={post.description} onChange={handleChange} placeholder="Description" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Created By</label>
        <input type="text" name="createdBy" value={post.createdBy} onChange={handleChange} placeholder="Created By" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
        <input type="text" name="time" value={post.time} onChange={handleChange} placeholder="Time" required className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Post</button>
    </form>
  );
};

export default PostForm;
