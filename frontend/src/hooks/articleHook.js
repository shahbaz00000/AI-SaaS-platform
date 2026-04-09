import { useDispatch, useSelector } from "react-redux";
import { generateArticleThunk } from "../store/slice/articleSlice";


export const useArticle = ()=>{
    const dispatch = useDispatch()

    const {isLoading,isError,articleContent} = useSelector(state => state.article);

    const generateArticle = (articlePrompt)=>{
        dispatch(generateArticleThunk(articlePrompt));
    }

    return {generateArticle,articleContent,isError,isLoading};

};
