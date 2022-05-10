import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () =>{
    const {id} = useParams();
const {data:blog,error, isPending} = useFetch('http://localhost:4000/blogs/'+id)

const deleteBlog = ()=>{
    fetch('http://localhost:4000/blogs/'+blog.id,{
      method: 'DELETE'
    }).then(()=>{
        
    })
}

    return(
<div className="blog-details">
    <h2>Blog Details </h2>
    {isPending && <div>Loading.....</div>}
    {error && <div>{error}</div>}
    {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by  {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={deleteBlog}>delete</button>
        </article>
    )}
    </div>
    )
}
export default BlogDetails;