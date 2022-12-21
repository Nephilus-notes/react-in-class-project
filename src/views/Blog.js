import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/dataProvider';
import Post from '../components/Post'

export default function Blog() {
    const { posts } = useContext(DataContext)


    return  (
        <div className="posts">
            <h1>Blog</h1>
            { posts.map(post => <Post key={post.id} post={post} showLink='true' /> )}
        </div>
    )
}