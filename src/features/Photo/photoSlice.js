import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPhotoList } from 'api/photoResources';
import { randInt } from 'utils';

export const fetchPhotos = createAsyncThunk('fetchAllPhoto',
  async () => {
    const page = randInt();
    return await fetchPhotoList(page);
  }
)

const { actions, reducer } = createSlice({
  name: 'photo',
  initialState: [],
  reducers: {
    addPhoto: (state, { payload }) => {
      state.push(payload);
    },
    removePhoto: (state, { payload }) => {
      const removePhotoId = payload.id;
      return state.filter(photo => photo.id !== removePhotoId)
    },
    editPhoto: (state, { payload }) => {
      const photoIndex = state.findIndex(photo => photo.id === payload.id);
      if (photoIndex !== -1) {
        state[photoIndex] = payload
      }
    }
  },
  extraReducers: {
    [fetchPhotos.fulfilled.type]: (state, { payload }) => {
      return state.length === 0 ? payload : state;
    }
  }
});


export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;