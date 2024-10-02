import { useEffect, useState } from "react";
import Post, { PostProps } from "./Post";
import CreatePost from "./CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/hermagst/post")
      .then((res) => res.json())
      .then((body) => setPosts(body));
  }, []);

  return (
    <div className="flex-none">
      <CreatePost />
      <div className="flex flex-col space-y-4 mt-4">
        {posts.map((post: PostProps) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
