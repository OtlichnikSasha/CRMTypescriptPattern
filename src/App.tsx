import React from 'react';
import MainRouter from "./routing";
import {BrowserRouter as Router} from 'react-router-dom';
import {useAuth} from "./hooks/auth_hook"
import {Layout} from "./components/block/Layout";

function App() {
    const auth = useAuth()
    return (
        <Router>
            {auth.token ?
                <Layout>
                    <MainRouter/>
                </Layout>
                :
                <MainRouter/>
            }
        </Router>
    );
}

export default App;
