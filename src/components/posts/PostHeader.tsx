import { PostHeaderProps } from "../common/types";
import Avatar from "../common/Avatar";
import ContactInfo from "./ContactInfo";

export default function PostHeader({ contact, title }: PostHeaderProps) {
  return (
    <div className="flex items-center mb-4">
      <Avatar imgSrc={contact.profileImage} />
      <div className="ml-4">
        <ContactInfo {...contact} />
        <h3 className="text-sm text-gray-400">{title}</h3>
      </div>
    </div>
  );
}
