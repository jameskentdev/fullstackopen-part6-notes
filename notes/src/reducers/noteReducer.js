const noteReducer = (state = [], action) => {
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

module.exports = {
  noteReducer,
};
