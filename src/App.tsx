import React from 'react';
import MainRouter from "./routing";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <MainRouter/>
        </Router>
    );
}

export default App;
