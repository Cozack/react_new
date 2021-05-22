import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setComments, setCommentsError,
    setCommentsIsLoading,
    usePostsFetcher, usePostsSetError, usePostsSetLoading
} from './redux';


const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => comments);
    const dispatch = useDispatch();
    const fetchComments = async () => {
        try {
            dispatch(setCommentsIsLoading());
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await response.json();
            dispatch(setComments(payload));
        } catch (e) {
            dispatch(setCommentsError('error'));
        }
    }
    useEffect(() => {
        fetchComments()
    }, []);
    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div>
            {comments.map((comment) => (
                <p key={comment.id}>{comment.name} - {comment.email} - {comment.body}</p>
            ))}
        </div>
    );

}

const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => posts);


    const postFetcher = usePostsFetcher();
    const postLoading = usePostsSetLoading();
    const postError = usePostsSetError();
    const fetchPosts = async () => {
        try {
            postLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();
            // dispatch(setPosts(payload));
            postFetcher(payload);
        } catch (e) {
            postError('failed to fetch data');
        }
    }
    useEffect(() => {
        fetchPosts()
    }, []);
    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div>
            {posts.map((post) => (
                <p key={post.id}>{post.title} - {post.body}</p>
            ))}
        </div>
    );

}


export default function App() {
    return (
        <div className="App">
            {/*<Posts/>*/}
            <Comments/>
        </div>
    );
};

