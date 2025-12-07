import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { loadPosts, savePosts } from "./utils/storage";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => setPosts(loadPosts()), []);
  useEffect(() => savePosts(posts), [posts]);

  const handleSavePost = (post) => {
    if (!post.time) post.time = new Date().toLocaleString();

    if (currentPost) {
      setPosts(posts.map((p) => (p === currentPost ? post : p)));
      setCurrentPost(null);
    } else {
      setPosts([...posts, post]);
    }
    setShowModal(false);
  };

  const handleEditPost = (post) => {
    setCurrentPost(post);
    setShowModal(true);
  };

  const handleDeletePost = (post) => {
    setPosts(posts.filter((p) => p !== post));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Blog</h1>

      <div className="text-center mb-6">
        <button
          onClick={() => { setCurrentPost(null); setShowModal(true); }}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
        >
          Add New Post
        </button>
      </div>

      <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <PostForm currentPost={currentPost} onSave={handleSavePost} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
