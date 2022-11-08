import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import MyReviews from "../../Pages/MyReviews/MyReviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    }
]);

export default router;