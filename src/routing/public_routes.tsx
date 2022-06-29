import React from "react";
import {Login} from "../pages/login";
import {Registration} from "../pages/registration";


export const publicRoutes = [
    {
        path: "/sign_in",
        element: <Registration/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "*",
        element: <Login/>
    },
]