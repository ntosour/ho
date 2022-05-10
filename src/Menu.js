import { Link } from "react-router-dom";

const Menu = ()=> {
    return(
    <nav className="Menu">
        <h1>world news</h1>
        <div className="links">
    <Link to="/">Home</Link>
    <Link to ='/News'>HOUSES</Link>
    <Link to ="">Images</Link>
    <Link to =''>Video</Link>
    <Link to={{ pathname: "https://www.google.com/search?q=map+of+ghana&oq=map+of+ghana&aqs=chrome..69i57j0i457i512j0i512l8.13732j0j4&sourceid=chrome&ie=UTF-8"}} target="_blank">Maps</Link>
    
    <Link to="/Create"  style={{
        color: "white",
        backgroundColor: "#f1356d",
        borderRadius: "5px"
    }


    }> New Blog</Link>
    </div>
    </nav>
 

    );
}

export default Menu;

