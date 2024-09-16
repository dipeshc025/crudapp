import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { loadPosts, savePosts } from './utils/localStorage';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  const savePost = (post) => {
    let updatedPosts;
    if (currentPost) {
      updatedPosts = posts.map((p) => (p === currentPost ? post : p));
    } else {
      updatedPosts = [...posts, post];
    }
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setCurrentPost(null);
  };

  const deletePost = (postToDelete) => {
    const updatedPosts = posts.filter((post) => post !== postToDelete);
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Post CRUD App</h1>
      <PostForm currentPost={currentPost} onSave={savePost} />
      <PostList posts={posts} onEdit={setCurrentPost} onDelete={deletePost} />
    </div>
  );
};

export default App;
