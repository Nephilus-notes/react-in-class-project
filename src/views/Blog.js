import { useState, useEffect } from 'react';
import Post from '../components/Post'

export default function Blog() {
    const [posts, setPosts] = useState([])


useEffect(() => {
    async function getPosts(){
        const response = await fetch("https://chief-flat-goose.glitch.me/api/posts")
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }

    getPosts()
    },[])

    return  (
        <div className="posts">
            <h1>Blog</h1>
            { posts.map(post => <Post key={post.id} post={post} /> )}
        </div>
    )
}
