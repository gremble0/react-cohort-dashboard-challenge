import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import { CommentProps, CommentsProps } from "../../common/types";
import Avatar from "../../common/Avatar";

export default function Comments({ postId, contact }: CommentsProps) {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/hermagst/post/${postId}/comment`,
    )
      .then((res) => res.json())
      .then((body: CommentProps[]) => setComments(body));
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-4 p-4 rounded-lg">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <Avatar />

            <div className="bg-[#dfe7f4] rounded-lg p-3 w-full">
              <h4 className="text-sm font-bold text-[#00235b]">
                {`${contact.firstName} ${contact.lastName}`}
              </h4>
              <p className="text-sm text-[#4c5c7c]">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <CreateComment />
    </>
  );
}
