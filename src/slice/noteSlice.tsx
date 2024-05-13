import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteData } from "../types";

interface NoteState {
  notes: NoteData[];
  notesData: NoteData[];
}

const initialState: NoteState = {
  notes: [],
  notesData: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteData>) => {
      state.notes.push(action.payload);
      state.notesData.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload
      );
      console.log(noteIndex);
      state.notes.splice(Number(noteIndex), 1);
      state.notesData.splice(Number(noteIndex), 1);
    },
    updateDone: (state, action: PayloadAction<NoteData>) => {
      const newNotes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, isDone: !note.isDone } : note
      );
      state.notes = newNotes;
      state.notesData = newNotes;
    },
    setFilteredNotes: (state, action: PayloadAction<NoteData[]>) => {
      state.notesData = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateDone, setFilteredNotes } =
  noteSlice.actions;

export default noteSlice.reducer;
