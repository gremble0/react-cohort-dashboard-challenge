import NavBar from "./NavBar";
import PostsWithCreatePost from "./PostsWithCreatePost";

export default function Body() {
  return (
    <div className="flex">
      <NavBar />
      <PostsWithCreatePost />
    </div>
  );
}
