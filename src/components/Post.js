

export default function Post(props) {
    return (
        <div className="post">
        <h2>{ props.post.title }</h2>
        <p>{ props.post.body }</p>
        <p className="author">Posted By: { props.post.username }</p>
        
        </div>
    )
}