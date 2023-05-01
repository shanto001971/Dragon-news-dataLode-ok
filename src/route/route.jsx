import { createBrowserRouter } from "react-router-dom";
import Leayout from "../Components/Leayout/Leayout";
import Home from "../Components/Home/Home";
import DetlicePage from "../Components/DetlicePage/DetlicePage";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<Leayout></Leayout> ,
        children:[
            {
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/data')
            },
            {
                path:"/data/:id",
                element:<DetlicePage/>,
                loader: ({params})=> fetch(`http://localhost:5000/data/${params.id}`)

            }
        ]

    }
]);