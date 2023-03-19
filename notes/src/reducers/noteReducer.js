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

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload);
    case 'TOGGLE_IMPORTANCE':
      return state.map((n) => {
        if (n.id === action.payload.id) {
          return {
            ...n,
            important: !n.important,
          };
        }
        return n;
      });
    default:
      return state;
  }
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: {
      id,
    },
  };
};

module.exports = {
  noteReducer,
  createNote,
  toggleImportanceOf,
};
