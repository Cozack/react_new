const initialState = {
    posts: [],
    isLoading: false,
error:null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
return {
    ...state,
    posts: action.payload,
    isLoading: false
}
        }
        case 'SET_IS_LOADING': {
return {
    ...state,
    isLoading: true
}
        }
        case 'RESET_IS_LOADING': {
            return {
                ...state,
                isLoading: false
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}