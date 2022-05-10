
import Menu from './Menu'
import Home from './Home'
import Project from './Project'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create'
import News from './News'
import BlogDetails from './BlogDetails';



function App() { 
 
  return (
   <Router>
      <div className="App">
      <Menu/>
     <div className="content">
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>

         <Route path="/Create">
           <Create/>
         </Route>

         <Route path="/blogs/:id">
           <BlogDetails/>
         </Route>

         <Route path="/News">
           <News/>
           </Route>

       </Switch>
       <div className="frank">
         <Project/>


       </div>
       
     </div>
    
    </div>
    </Router>
  );
}

export default App;

