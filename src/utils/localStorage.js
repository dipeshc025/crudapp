export const loadPosts = () => {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

export const savePosts = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};
