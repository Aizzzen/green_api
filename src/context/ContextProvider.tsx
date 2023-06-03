import React, { createContext, FC, useState, useContext } from 'react';

const AppContext = createContext(null as any)

interface AppContextProps {
    children: any;
}

export const AppContextProvider: FC<AppContextProps> = ({children}) => {
    const [loaded, setLoaded] = useState(true)
    const [id, setId] = useState("")
    const [token, setToken] = useState("")
    const [isAuth, setIsAuth] = useState(false)

    const [chats, setChats] = useState([
        {"id": 1, "name": "Yunus Gadamurov", "msg": "Ты закончил тестовое", "stamp": "19:10"},
        {"id": 2, "name": "Yunus", "msg": "Ты не закончил тестовое", "stamp": "19:10"},
        {"id": 3, "name": "Gadamurov", "msg": "Ты закончишь тестовое", "stamp": "19:10"},
        {"id": 4, "name": "Vasya", "msg": "Скегодгня", "stamp": "19:10"},
        {"id": 5, "name": "Yu", "msg": "Сегодня", "stamp": "19:10"},
    ])

    const getAuthorized = () => {
        setLoaded(false)
         fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.stateInstance === "authorized") {
                    localStorage.setItem("IdInstance", id)
                    localStorage.setItem("ApiTokenInstance", token)
                    setIsAuth(true)
                }
            })
        setLoaded(true)
    }

    const isAuthorized = () => {
        setLoaded(false)
        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        if(id !== null && token !== null) {
             fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(res => {
                    if(res.stateInstance === "authorized") {
                        setIsAuth(true)
                    }
                })
        }
        setLoaded(true)
    }

    return (
        <AppContext.Provider
            value={{
                loaded,
                setLoaded,
                id,
                setId,
                token,
                setToken,
                isAuth,
                setIsAuth,
                chats,
                setChats,
                getAuthorized,
                isAuthorized,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext)
