import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function PostsWithCreatePost() {
  return (
    <div className="flex-none w-full">
      <CreatePost />
      <Posts />
    </div>
  );
}
