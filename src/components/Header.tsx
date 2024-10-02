import { Logo } from "../assets/svgs";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="flex bg-[#000046]">
      <Logo />
      <Avatar />
    </div>
  );
}
