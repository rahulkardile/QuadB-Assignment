import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../../TypeScript/Interface";
import { v4 as uuidv4 } from "uuid";

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
        id: uuidv4(),
        title,
        content,
      };

      state.todos.push(todo);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log(action.payload);
    },
    updateNote: (state, { payload: { id, title, content } }) => {
      const update = state.todos.filter((todo) => todo.id !== id);
      update.push({
        id,
        title,
        content,
      });

      state.todos = update;

    },
    removeAll: (state) => {
      state.todos = [];
    },
  },
});

export default NoteSlice;
export const { addNote, removeAll, deleteNote, updateNote } = NoteSlice.actions;
