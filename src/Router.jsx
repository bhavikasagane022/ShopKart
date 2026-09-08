import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./Pages/Products";
import Cart from "./pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";

//Routing Configuration
const router=createBrowserRouter([
    {
        path: "/",
        element:<App />,
        children:[
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "about",
                element: <About />
            }
        ],
    }]);
    export default router;