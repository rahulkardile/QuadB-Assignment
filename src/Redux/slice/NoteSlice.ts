import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../../TypeScript/Interface";

interface TodosListInterface {
  todos: TodoInterface[];
}

const initialState: TodosListInterface = {
  todos: [],
};

const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, { payload: { title, content } }) => {
      const todo = {
        title: title,
        content: content,
      };

      state.todos.push(todo);
    },
    removeAll: (state) => {
      state.todos = [];
    },
  },
});

export default NoteSlice;
export const { addNote, removeAll } = NoteSlice.actions;
