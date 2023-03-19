import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
];

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload;
      state.push({
        content,
        important: false,
        id: generateId(),
      });
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
  },
});

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const { createNote, toggleImportanceOf } = noteSlice.actions;
export default noteSlice.reducer;
