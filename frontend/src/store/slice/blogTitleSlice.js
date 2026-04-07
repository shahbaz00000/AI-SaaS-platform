import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import blogTitleApi from "../../services/blogTitleService"

export const generateBlogTitleThunk = createAsyncThunk(
  "generateBlogTitle",
  async (data, { rejectWithValue }) => {
    try {
      const response = await blogTitleApi(data)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  isLoading: false,
  blogContent: null,
  isError: null
}

const blogTitleSlice = createSlice({
  name: "blogTitle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateBlogTitleThunk.pending, (state) => {
      state.isLoading = true
      state.isError = null
    })
    builder.addCase(generateBlogTitleThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.blogContent = action.payload
      state.isError = null
    })
    builder.addCase(generateBlogTitleThunk.rejected, (state, action) => {
      state.isLoading = false
      state.isError = action.payload || action.error.message
    })
  }
})

export default blogTitleSlice.reducer