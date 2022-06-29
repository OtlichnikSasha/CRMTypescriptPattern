import {Staffs} from "../pages/staffs";
import {Products} from "../pages/products";
import {Categories} from "../pages/categories";
import { Users } from "../pages/users";
import { Orders } from "../pages/orders";

export const authRoutes = [
    {
        path: "/staffs",
        element: <Staffs/>
    },
    {
        path: "/staffs/:page",
        element: <Staffs/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path: "/products/:page",
        element: <Products/>
    },
    {
        path: "/categories/:page",
        element: <Categories/>
    },
    {
        path: "/categories",
        element: <Categories/>
    },
    {
        path: "/users",
        element: <Users/>
    },
    {
        path: "/users/:page",
        element: <Users/>
    },
    {
        path: "/orders",
        element: <Orders/>
    },
    {
        path: "/orders/:page",
        element: <Orders/>
    },
]