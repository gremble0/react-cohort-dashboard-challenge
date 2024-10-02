import Avatar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex">
      <Logo />
      <Avatar />
    </div>
  );
}
