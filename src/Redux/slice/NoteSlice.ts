import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../../TypeScript/Interface";
import { v4 as uuidv4 } from "uuid"

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
    deleteNote: (state, action: PayloadAction<string>) =>{
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      console.log(action.payload);
    },
    removeAll: (state) => {
      state.todos = [];
    },
  },
});

export default NoteSlice;
export const { addNote, removeAll, deleteNote } = NoteSlice.actions;
