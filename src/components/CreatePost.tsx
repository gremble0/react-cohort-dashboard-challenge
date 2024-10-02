import React, { useState } from "react";
import Avatar from "./Avatar";

export default function CreatePost() {
  const [postContent, setPostContent] = useState("");

  const createPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <Avatar />
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPostContent(e.target.value)
          }
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}
