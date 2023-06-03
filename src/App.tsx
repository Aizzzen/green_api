import React from 'react';
import {Main} from "./pages/main/Main";
import {Loading} from "./components/loading/Loading";
import {Login} from "./pages/login/Login";
import {useAppContext} from "./context/ContextProvider";

function App() {
    const {loaded, isAuth} = useAppContext()

    return (
        <div>
            {loaded
                ?
                <>
                    {isAuth ? <Main/> : <Login/>}
                </>
                :
                <Loading/>
            }
        </div>
    );
}

export default App;
