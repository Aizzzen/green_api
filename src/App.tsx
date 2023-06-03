import React, {useEffect, useState } from 'react';
import {Main} from "./pages/main/Main";
import {Loading} from "./components/loading/Loading";
import {Login} from "./pages/login/Login";

function App() {
    const [loaded, setLoaded] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    return (
        <div>
            {loaded
                ?
                <>
                    {isAuth ? <Main/> : <Login setIsAuth={setIsAuth}/>}
                </>
                :
                <Loading/>
            }
        </div>
    );
}

export default App;
