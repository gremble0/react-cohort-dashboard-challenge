import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { PostPartialProps } from "../common/types";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState<PostPartialProps[]>([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/hermagst/post")
      .then((res) => res.json())
      .then((body: PostPartialProps[]) => setPosts(body));
  }, []);

  return (
    <div className="flex-none">
      <CreatePost />
      <div className="flex flex-col space-y-4 mt-4">
        {posts.map((props: PostPartialProps) => (
          <Post {...props} key={props.id} />
        ))}
      </div>
    </div>
  );
}
