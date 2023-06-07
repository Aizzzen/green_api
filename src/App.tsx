// @ts-no-check
import React, { useEffect } from 'react';
import {Main} from "./pages/main/Main";
import {Loading} from "./components/loading/Loading";
import {Login} from "./pages/login/Login";
import {useAppContext} from "./context/ContextProvider";
import {whatsAppApi} from "./api";

function App() {
    const {loaded, isAuth, chats, setChats} = useAppContext()
    const id = localStorage.getItem("IdInstance")
    const token = localStorage.getItem("ApiTokenInstance")

    setInterval(() => {
        if(id && token) {
            whatsAppApi.receiveAndDelete({id, token, chats, setChats});
        }
    }, 30000)


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
