import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import handleArticleApi from "../../services/articleTitleServices"


export const generateArticleThunk = createAsyncThunk(
  "generateArticle",
  async (data, { rejectWithValue }) => {
    try {
      const response = await handleArticleApi(data)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  isLoading: false,
  articleContent: null,
  isError: null
}

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(generateArticleThunk.pending, (state) => {
      state.isLoading = true
      state.isError = null
    })
    builder.addCase(generateArticleThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.articleContent = action.payload
      state.isError = null
    })
    builder.addCase(generateArticleThunk.rejected, (state, action) => {
      state.isLoading = false
      state.isError = action.payload || action.error.message
    })
  }
})

export default articleSlice.reducer