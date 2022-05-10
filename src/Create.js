
import  {useState} from "react";
import { useHistory } from "react-router-dom";

const Create =() =>{
    const  [title, setTitle] = useState('')
    const  [body, setBody] = useState('')
    const  [author, setauthor] = useState('frank')
    const  [isPending, setIspending] = useState('false')
    const history = useHistory





    const postBlog = (e) =>{
        e.preventDefault();
        const blog = {title,body,author}
        setIspending(true)


        fetch('http://localhost:4000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)

        }).then(() =>{
            console.log("new data added")
            isPending(false)
           // history.go(-1)
           history.push('/')
        })
   


    }

    return(
        <div ClassName="Create">
        <h2>Add a new blog</h2><br></br>
        <form  onSubmit={postBlog}>

            <label>Blog Title</label>
            <input type="text"
            required
            value= {title}
            onChange={(e)=> setTitle(e.target.value)}

            /><br></br><br></br>
<label  id="l1">Blog Title</label>

<textarea required
value = {body}
            onChange={(e)=> setBody(e.target.value)}
    ></textarea><br></br>


<br></br><label id="l2">author</label>

<select  
value= {author}
            onChange={(e)=> setauthor(e.target.value)}  
    ><option value="frank">frank</option>
    <option value="Theo">Theo</option>
    
</select><br></br><br></br>
{! isPending && <button id="bnt">Add Blog</button>}
{isPending && <button id="bnt"  disabled> Adding Blog......</button>}


          
            
        </form>
        
            
        </div>
    )
}


export default Create;
