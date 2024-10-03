import { Logo } from "../assets/svgs";
import Avatar from "./common/Avatar";
import { mockContact } from "./common/mock";

export default function Header() {
  return (
    <div className="flex bg-[#000046]">
      <Logo />
      <Avatar imgSrc={mockContact.profileImage} />
    </div>
  );
}
