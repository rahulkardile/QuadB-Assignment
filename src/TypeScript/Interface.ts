export interface NoteInterface {
  id: string;
  title: string;
  content: string;
}

export interface NoteInterface2 {
  title: string;
  content: string;
}

export interface TodoInterface {
  id: string;
  title: string;
  content: string;
}

export type User = {
  name: string;
  password: string;
};
