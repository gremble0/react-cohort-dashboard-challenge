import { ContactProps, PostBodyProps, PostProps } from "./types";

export const mockContact: ContactProps = {
  id: 0,
  city: "loading...",
  email: "loading...",
  gender: "loading...",
  street: "loading...",
  jobTitle: "loading...",
  lastName: "loading...",
  latitude: 0,
  longitude: 0,
  firstName: "loading...",
  profileImage: "loading...",
  favouriteColour: "loading...",
};

export const mockPostBody: PostBodyProps = {
  id: 0,
  contactId: 0,
  content: "loading...",
  title: "loading...",
};

export const mockPost: PostProps = {
  contact: mockContact,
  body: mockPostBody,
};
