import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Dashboard";

const myrouter = createBrowserRouter([
    {
        path : '/admin',
        element : <App/>,
        children :[
         {
            path : '/admin',
            element : <Home/>
         },
        
        ]
    }
])

export default  myrouter