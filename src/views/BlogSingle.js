import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Post from '../components/Post'

export default function BlogSingle() {
    const[post, setPost] = useState({})
    const { id } = useParams()

    /*
    * Take the id from useParams
    * Use the ID in a useEffect to fetch data
    * from our single post api endpoint
    * 
    * https://chief-flat-goose.glitch.me/api/post/1
    * 
    * Use that to put post data on the page
    * 
    */
    useEffect(() => {
        async function getPost(){
            const response = await fetch(`https://chief-flat-goose.glitch.me/api/post/${id}`)
            const data = await response.json()
            setPost(data)
            console.log(data)
        }
    
        getPost()
        },[id])

    return (
        <div className="post">
            Post Single: {post.id}
            <Post key={post.id} post={post} /> 
        </div>
    )
}