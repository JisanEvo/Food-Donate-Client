import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AvailableFood from "../components/AvailableFood";
import AddFood from "../components/AddFood";
import ManageFood from "../components/ManageFood";
import SingleProductDetails from "../components/SingleProductDetails";
import UpdateFood from "../components/UpdateFood";
import ErrorPage from "../components/ErrorPage";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000/food`),

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/availableFood',
                element:<AvailableFood></AvailableFood>,
                loader:()=>fetch(`http://localhost:5000/food`),
            },
            {
                path:'/addFood',
                element:<AddFood></AddFood>
            },
            {
                path:'/manageFood',
                element:<ManageFood></ManageFood>
            },
            {
                path:'/singleFood/:id',
                element:<SingleProductDetails></SingleProductDetails>
            },
            {
                path:'/updateFood/:id',
                element:<UpdateFood></UpdateFood>,
                loader:({params})=>fetch(`http://localhost:5000/updateFood/${params.id}`)
            }
        ]
    }
])
export default router