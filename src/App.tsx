import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/posts/Posts";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex space-x-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}
