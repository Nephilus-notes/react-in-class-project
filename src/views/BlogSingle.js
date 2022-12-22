import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import { DataContext } from '../contexts/DataProvider';


export default function BlogSingle() {
    const[post, setPost] = useState({})
    const { id, uid } = useParams()
    const{ loadPost } = useContext(DataContext)

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
        async function handleloadPost() {
            const data = await loadPost(uid, id)
            setPost(data)
            console.log(data)
        }
    
        handleloadPost()
        },[loadPost, id])

    return (
        <div className="post">
            <Post post={post} /> 
        </div>
    )
    }