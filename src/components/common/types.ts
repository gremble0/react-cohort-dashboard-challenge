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
};

export type CommentsProps = {
  postId: number;
  contact: ContactProps;
};

export type CommentProps = {
  id: number;
  postId: number;
  contactId: number;
  content: string;
};
