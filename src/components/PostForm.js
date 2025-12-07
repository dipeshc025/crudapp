import React, { useState, useEffect } from "react";

const PostForm = ({ currentPost, onSave }) => {
  const [post, setPost] = useState({ image: "", title: "", description: "", createdBy: "", time: "" });

  useEffect(() => {
    if (currentPost) setPost(currentPost);
  }, [currentPost]);

  const handleChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPost({ ...post, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
    setPost({ image: "", title: "", description: "", createdBy: "", time: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} required={!post.image} className="w-full border rounded px-3 py-2" />
      </div>

      {post.image && <img src={post.image} alt="Preview" className="w-32 h-32 object-cover rounded mb-2" />}

      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea name="description" value={post.description} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-semibold mb-1">Created By</label>
        <input type="text" name="createdBy" value={post.createdBy} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {currentPost ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
};

export default PostForm;
