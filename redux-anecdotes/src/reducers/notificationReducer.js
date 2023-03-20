import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    updateNotification(state, action) {
      return action.payload;
    },
  },
});

export const { updateNotification } = notificationSlice.actions;

export const setNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch(updateNotification(notification));
    setTimeout(() => dispatch(updateNotification('')), timeout * 1000);
  };
};

export default notificationSlice.reducer;
