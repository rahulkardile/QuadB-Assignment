import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NoteInterface } from "../../TypeScript/Interface";

type InitialState = {
  note: NoteInterface[]
};

const initialState: InitialState = {
  note: []
};

const NoteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<NoteInterface>)=>{
            state.note.push(action.payload);
        }
    }
})

export default NoteSlice;
export const { addNote } = NoteSlice.actions