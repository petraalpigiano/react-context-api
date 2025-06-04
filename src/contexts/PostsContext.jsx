import { createContext, useContext } from "react";
const PostsContext = createContext();

// CUSTOM PROVIDER
function PostsProvider({ children }) {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
}
// CUSTOM HOOK
function usePosts() {
  return useContext(PostsContext);
}
// LE ESPORTO
export { PostsProvider, usePosts };
