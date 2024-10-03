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
    <div className="flex-none m-4">
      <CreatePost posts={posts} setPosts={setPosts} />
      <div className="flex flex-col space-y-4 mt-4 w-full">
        {posts.map((props) => (
          <Post {...props} key={props.id} />
        ))}
      </div>
    </div>
  );
}
