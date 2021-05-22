import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


const Posts = () => {
    const {isLoading, posts} = useSelector(({isLoading, posts}) => ({isLoading, posts}));
    const dispatch = useDispatch();
    const fetchPosts = async () => {
        try {
            dispatch({type:'SET_IS_LOADING'});
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();
            dispatch({type: 'SET_POSTS', payload});
        } catch (e) {
            console.log(e, 'aallala')
        }
        dispatch({type:'RESET_IS_LOADING'});
    }
    useEffect(() => {
        fetchPosts()
    }, []);
    if (isLoading){
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

};

function App() {
    return (
        <div className="App">
            <Posts/>
        </div>
    );
}

export default App;
