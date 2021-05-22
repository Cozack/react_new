import {RESET_IS_LOADING, SET_ERROR, SET_IS_LOADING, SET_POSTS} from "./actionTypes";

const initialState = {
    posts: [],
    isLoading: false,
error:null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
return {
    ...state,
    posts: action.payload,
    isLoading: false
}
        }
        case SET_IS_LOADING: {
return {
    ...state,
    isLoading: true
}
        }
        case RESET_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default:
            return state;
    }
}