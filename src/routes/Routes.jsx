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
import RequestPage from "../components/RequestPage";
import MyReq from "../components/MyReq";
import PrivateRoute from "./PrivateRoute";

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
                element:

<AvailableFood></AvailableFood>,

                loader:()=>fetch(`http://localhost:5000/food`),
            },
            {
                path:'/addFood',
                element:<PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path:'/manageFood',
                element:<PrivateRoute>
                    <ManageFood></ManageFood>
                </PrivateRoute>
            },
            {
                path:'/singleFood/:id',
                element:<PrivateRoute>
                    <SingleProductDetails></SingleProductDetails>
                </PrivateRoute>
            },
            {
                path:'/updateFood/:id',
                element:<UpdateFood></UpdateFood>,
                loader:({params})=>fetch(`http://localhost:5000/updateFood/${params.id}`)
            },
            {
                path:'/requestPage/:id',
                element:  <RequestPage></RequestPage> ,
                loader:({params})=>fetch(`http://localhost:5000/updateFood/${params.id}`)

            },
            {
                path:'/req',
                element:<PrivateRoute>
                    <MyReq></MyReq>
                </PrivateRoute>

            },

        ]
    }
])
export default router