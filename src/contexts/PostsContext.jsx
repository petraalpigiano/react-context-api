import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const PostsContext = createContext();

// CUSTOM PROVIDER
function PostsProvider({ children }) {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      const listPosts = res.data;
      setPostsList(listPosts);
    });
  }, []);
  return (
    <PostsContext.Provider value={{ postsList }}>
      {children}
    </PostsContext.Provider>
  );
}
// CUSTOM HOOK
function usePosts() {
  return useContext(PostsContext);
}
// LE ESPORTOs
export { PostsProvider, usePosts };
