import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){
    
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div className="">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}


/**
 * 1. create a state to store the data
 * 2. create use effect with no dependencies
 * 3. use fetch to load data
*/