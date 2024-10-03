import { useEffect, useState } from "react";
import { ContactProps, PostPartialProps } from "../common/types";
import Comments from "./comments/Comments";
import PostHeader from "./PostHeader";
import { mockContact } from "../common/mock";
import { Link } from "react-router-dom";

export default function Post({
  title,
  content,
  contactId,
  id,
}: PostPartialProps) {
  const [contact, setContact] = useState(mockContact);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/hermagst/contact/${contactId}`)
      .then((res) => res.json())
      .then((contact: ContactProps) => setContact(contact));
  }, [id]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Link to={"post/" + id}>
        <PostHeader title={title} contact={contact} />
      </Link>

      <p className="text-gray-700 mb-4">{content}</p>

      <Comments postId={id} />
    </div>
  );
}
