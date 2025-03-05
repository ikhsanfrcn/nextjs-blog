export interface UserState {
  objectId: string | null;
  name: string;
  email: string;
}

export interface BlogInput {
  title: string;
  category: string;
  content: string;
  thumbnail: string;
}

export interface iAuthor {
  objectId: string;
  name: string;
  email: string;
}

export interface iBlog {
  title: string;
  category: string;
  content: string;
  thumbnail: string;
  objectId: string;
  author: iAuthor;
  created: string;
}