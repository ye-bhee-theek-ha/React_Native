import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeMode: 'system',
  },
  reducers: {
    dispatchThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const {dispatchThemeMode} = themeSlice.actions;

export default themeSlice.reducer;
