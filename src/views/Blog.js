import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/dataProvider';
import Post from '../components/Post'
import { AuthContext } from '../contexts/AuthProvider';

export default function Blog() {
    const { posts, addPost } = useContext(DataContext)
    const { user } = useContext(AuthContext)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        addPost(formData.get('title'), formData.get('body'))
    }

if (user.loggedIn) {
    return  (
        <div className="posts">
            <h1>Blog</h1>
 
           <form onSubmit={handleSubmit}>
    <input type="text" name="title" placeholder="title" />
    <input type="text" name="body" placeholder="body" />
    <button>Add Post</button>
</form>      
     { posts.map(post => <Post key={post.id} post={post} showLink='true' /> )
           }

        </div>
    )
} else {
     return (
        <div className="posts">
        <h1>Blog</h1>
        <p>Please log in</p>
        </div>
     )
}

   
}