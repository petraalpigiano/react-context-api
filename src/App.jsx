import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages/posts/PostsPage";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ROTTE CON IN COMUNE IL LAYOUT */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            {/* ROTTE CON IN COMUNE IL PREFISSO  */}
            <Route path="/posts">
              <Route path="" element={<PostsPage />}></Route>
              {/* <Route path=":id" element={<DetailsPostPage />}></Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
