import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generateBlogTitleThunk } from "../store/slice/blogTitleSlice"

const useBlogTitle = () => {
  const dispatch = useDispatch()
  const { blogContent, isError, isLoading } = useSelector(
    (state) => state.blogTitle
  )

  const generateBlogTitle = (data)=>{
     dispatch(generateBlogTitleThunk(data))
  }

  return {
    blogContent,
    isError,
    isLoading,
    generateBlogTitle
  }
}

export default useBlogTitle