import React from 'react';
import {Main} from "./pages/main/Main";
import {Loading} from "./components/loading/Loading";
import {Login} from "./pages/login/Login";

function App() {
    const loaded = true
    const isAuth = false
    return (
        <div>
            {loaded ? <>
                {isAuth ? <Main/> : <Login/>}
            </> : <Loading/>}
        </div>
    );
}

export default App;
