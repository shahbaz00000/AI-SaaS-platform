import { configureStore } from "@reduxjs/toolkit";
import blogTitleReducer from "./slice/blogTitleSlice"

const store = configureStore({
    reducer:{
        blogTitle:blogTitleReducer
    }
});

export default store