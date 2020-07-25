import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'photo',
  initialState: [],
  reducers: {
    addPhoto: (state, { payload }) => {
      state.push(payload);
    }
  }
});


export const { addPhoto } = actions;
export default reducer;