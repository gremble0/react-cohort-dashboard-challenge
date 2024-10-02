import NavBar from "./NavBar";
import Posts from "./Posts";

export default function Body() {
  return (
    <div className="flex">
      <NavBar />
      <Posts />
    </div>
  );
}
