import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import { CommentProps, CommentsProps } from "../../common/types";
import Comment from "./Comment";

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/hermagst/post/${postId}/comment`,
    )
      .then((res) => res.json())
      .then((body: CommentProps[]) => setComments(body));
  }, []);

  // TODO: see previous comments instead of loading all
  return (
    <>
      <div className="flex flex-col space-y-4 p-4 rounded-lg">
        {comments.map((comment) => (
          <Comment {...comment} key={comment.id} />
        ))}
      </div>

      <CreateComment
        postId={postId}
        setComments={setComments}
        comments={comments}
      />
    </>
  );
}
