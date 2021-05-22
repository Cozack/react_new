import {combineReducers} from "redux";
import {commentsReducer} from './commentsReducer';
import {postsReducer} from './postsReducer';

export const rootReducer = combineReducers({
    posts:postsReducer,
    comments:commentsReducer
})