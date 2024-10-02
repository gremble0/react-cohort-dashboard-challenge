import Avatar from "../common/Avatar";
import CreatePostForm from "./CreatePostForm";

export default function CreatePost() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <Avatar />

        <CreatePostForm />
      </div>
    </div>
  );
}
