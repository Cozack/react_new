import {useDispatch} from "react-redux";
import {setError, setIsLoading, setPosts, setPostsError, setPostsIsLoading} from "./";

export const usePostsFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPosts(payload))
    }
}
export const usePostsSetLoading = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPostsIsLoading())
    }
}
export const usePostsSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPostsError(payload))
    }
}