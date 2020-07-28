import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchPhotoList from 'api/fetchPhotoList';

export const fetchPhotos = createAsyncThunk('fetchAllPhoto',
  async () => {
    const photos = await fetchPhotoList()
    return photos
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
    [fetchPhotos.fulfilled.type]: (state, {payload}) => {
      return state.length === 0 ? payload : state;
    }
  }
});


export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;