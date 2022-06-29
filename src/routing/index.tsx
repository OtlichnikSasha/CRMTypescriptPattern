import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter as Router
} from 'react-router-dom';
import { Layout } from '../components/block/Layout';
import {authRoutes} from "./auth_routes";
import {publicRoutes} from "./public_routes";

const MainRouter = () => {
    return (
        <Layout>
            <Routes>
                {authRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
            </Routes>
        </Layout>
    );
};

export default MainRouter;