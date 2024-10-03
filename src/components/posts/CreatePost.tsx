import Avatar from "../common/Avatar";
import { mockContact } from "../common/mock";
import { CreatePostProps } from "../common/types";
import CreatePostForm from "./CreatePostForm";

export default function CreatePost({ posts, setPosts }: CreatePostProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <Avatar imgSrc={mockContact.profileImage} />

        <CreatePostForm posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}
