import { Link } from "react-router-dom";

const DisplayBlog = ({blogs, blogtitle, deleteBlog}) =>{

    //const blogs = props.blogs;
    return(
    
        
        blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1> 
            <h4>{blog.author}</h4>
            <p>{blog.body}</p>
              <br></br>
              </Link>
              <button onClick={()=> deleteBlog(blog.id)}>Delete</button>
            </div>
        ))


        

    )
}


 export default DisplayBlog;