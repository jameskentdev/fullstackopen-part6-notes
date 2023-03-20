import { createSlice } from '@reduxjs/toolkit';
import noteService from '../services/notes';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      return state.map((n) => {
        if (n.id === action.payload) {
          return {
            ...n,
            important: !n.important,
          };
        }
        return n;
      });
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export default noteSlice.reducer;
