import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import { DataContext } from '../contexts/dataProvider';


export default function BlogSingle() {
    const[post, setPost] = useState({})
    const { id } = useParams()
    const{ getPost } = useContext(DataContext)

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
        async function handleGetPost() {
            const data = await getPost(id)
            setPost(data)
        }
    
        handleGetPost()
        },[getPost, id])

    return (
        <div className="post">
            Post Single: {post.id}
            <Post post={post} /> 
        </div>
    )
    }