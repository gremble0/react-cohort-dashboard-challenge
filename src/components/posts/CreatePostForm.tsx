import React, { useState } from "react";

export default function CreatePostForm() {
  const [postContent, setPostContent] = useState("");

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
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
        className="ml-4 bg-[#000046] text-white px-14 py-3 rounded-md hover:bg-indigo-900 focus:outline-black"
      >
        Post
      </button>
    </form>
  );
}
