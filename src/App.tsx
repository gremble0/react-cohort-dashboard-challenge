import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex space-x-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route
            path="/post/:id"
            element={<Post title={""} content={""} id={1} contactId={1} />}
          />
        </Routes>
      </div>
    </>
  );
}
