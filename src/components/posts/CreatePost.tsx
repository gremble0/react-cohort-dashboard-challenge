import React, { useState } from "react";
import Avatar from "../common/Avatar";

export default function CreatePost() {
  const [postContent, setPostContent] = useState("");

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <Avatar />

        <form onSubmit={createPost} className="flex-grow flex items-center">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPostContent(e.target.value)
            }
            className="flex-grow bg-gray-100 rounded-md py-2 px-4 focus:outline-none placeholder:text-[#6c6c92]"
          />
          <button
            type="submit"
            className="ml-4 bg-[#000046] text-white px-4 py-2 rounded-md hover:bg-indigo-900 focus:outline-black"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
