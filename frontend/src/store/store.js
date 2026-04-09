import { configureStore } from "@reduxjs/toolkit";
import blogTitleReducer from "./slice/blogTitleSlice"
import articleReducer from "./slice/articleSlice"

const store = configureStore({
    reducer:{
        blogTitle:blogTitleReducer,
        article:articleReducer
    }
});

export default store