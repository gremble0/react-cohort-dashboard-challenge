import NavBar from "./NavBar";
import Posts from "./posts/Posts";

export default function Body() {
  return (
    <div className="flex">
      <NavBar />
      <Posts />
    </div>
  );
}
