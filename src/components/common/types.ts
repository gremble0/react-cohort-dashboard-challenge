export type ContactProps = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  jobTitle: string;
  street: string;
  city: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
  id: number;
};

export type PostPartialProps = {
  title: string;
  content: string;
  id: number;
  contactId: number;
};

export type PostHeaderProps = {
  contact: ContactProps;
  title: string;
  id: number;
  contactId: number;
};

export type CommentsProps = {
  postId: number;
};

export type CreateCommentProps = {
  postId: number;
  comments: CommentProps[];
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
};

export type CommentProps = {
  id: number;
  postId: number;
  contactId: number;
  content: string;
};

export type AvatarProps = {
  imgSrc: string;
};

export type CreatePostProps = {
  posts: PostPartialProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostPartialProps[]>>;
};
