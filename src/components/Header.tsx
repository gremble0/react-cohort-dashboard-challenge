import { Logo } from "../assets/svgs";
import Avatar from "./common/Avatar";
import { mockContact } from "./common/mock";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#000046] px-4 py-2">
      <Logo />
      <Avatar imgSrc={mockContact.profileImage} />
    </div>
  );
}
