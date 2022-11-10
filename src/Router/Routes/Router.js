import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Service from "../../Pages/Services/Service";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://services-server-site.vercel.app/services/${params.id}`),
                element: <Service></Service>
            },

        ]
    },
    {
        path: "*",
        element: <div className=" text-5xl pt-36 font-bold text-center mx-auto text-white">
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
        </div>
    }

]);

export default router;