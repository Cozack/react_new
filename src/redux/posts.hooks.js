import {useDispatch} from "react-redux";
import {setError, setIsLoading, setPosts} from "./";

export const usePostsFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPosts(payload))
    }
}
export const usePostsSetLoading = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setIsLoading())
    }
}
export const usePostsSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setError(payload))
    }
}