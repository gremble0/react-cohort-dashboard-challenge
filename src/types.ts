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
  id: string;
};

export type PostProps = {
  title: string;
  content: string;
  id: number;
  contactId: number;
};
