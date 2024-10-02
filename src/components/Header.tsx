import { Logo } from "../assets/svgs";
import Avatar from "./common/Avatar";

export default function Header() {
  return (
    <div className="flex bg-[#000046]">
      <Logo />
      <Avatar imgSrc="" />
    </div>
  );
}
