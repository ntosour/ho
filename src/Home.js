
    import { useEffect, useState } from "react";
    import DisplayBlog from './displayBlog'
    import useFetch from "./useFetch";



const Home = () =>{
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   
    /*let text = 'This is where Tech lives'
    const [text, setText] = useState('This is where Tech lives')

    const [subtext, setText] = useState('Hello hello')


    const clickHandler = () =>{
         setText('Get the Latest tech Updates from us')
        console.log(text)


       
       
    }*/

    

const [Ntosour, setState] = useState('Ntosour')

const deleteBlog = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    blogs(newBlogs);


}



    return (
        <div className = 'Home'>
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}

            <h1>HOME PAGE</h1>

            {blogs && <DisplayBlog  blogs={blogs} blogtitle="All Blogs"  deleteBlog ={deleteBlog}/>}
           {/* <DisplayBlog  blogs={blogs.filter((blog)=>blog.author=="Theo")} blogtitle=" Theo Blogs" />*/}
            <button onClick={()=>setState('kwasi')}>update name</button>
            <p>{Ntosour}</p>

        

            
        </div>
    );
}

export default Home;

