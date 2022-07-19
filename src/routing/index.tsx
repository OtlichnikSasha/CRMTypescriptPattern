import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import {authRoutes} from "./auth_routes";
import {publicRoutes} from "./public_routes";
import {useAuth} from "../hooks/auth_hook";

const MainRouter = () => {
    const auth = useAuth()
    return (
        <Routes>
            {
                auth.token && authRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )
            }
            {
                    !auth.token && publicRoutes.map(({path, element}) =>
                        <Route key={path} path={path} element={element}/>
                    )
            }
        </Routes>

    );
};

export default MainRouter;