import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

const getPostsAsync = createAsyncThunk('images/getImgStatus', async () => {
  try {
    return await api.handlerGetImg()
  } catch (e) {
    console.log(e)
  }
})

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    error: false,
    spinner: false,
  },
  extraReducers: {
    [getPostsAsync.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.error = false
      state.spinner = false
    },
    [getPostsAsync.rejected]: (state, action) => {
      state.error = true
      state.spinner = false
    },
    [getPostsAsync.pending]: (state, action) => {
      state.spinner = true
    },
  },
})

export { getPostsAsync }

export default postSlice.reducer
