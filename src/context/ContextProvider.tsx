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
    const [selectedChat, setSelectedChat] = useState(-1)

    const [chats, setChats] = useState([
        {"id": 1, "name": "+79622582626", "msg": ["Ты закончил тестовое", ], "stamp": new Date()},
        {"id": 2, "name": "89622582626", "msg": ["Ты не закончил тестовое", ], "stamp":  new Date()},
        {"id": 3, "name": "+79622532626", "msg": ["Ты закончишь тестовое", ], "stamp":  new Date()},
        {"id": 4, "name": "89622282626", "msg": ["Скегодгня", ], "stamp":  new Date()},
        {"id": 5, "name": "+79622584626", "msg": ["Сегодня", ], "stamp":  new Date()},
    ])

    const getAuthorized = () => {
        setLoaded(false)
         fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
             .then(res => res.json())
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
            })
                 .then(res => res.json())
                 .then(res => {
                    if(res.stateInstance === "authorized") {
                        setIsAuth(true)
                    }
                })
        }
        setLoaded(true)
    }

    const sendMessage = (chatId: any, message: any) => {
        setLoaded(false)
        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        let msg = {
            "chatId": "",
            "message": message,
        }
        const number = chatId.split("")
        number[0] === "8" ? number[0]="7" : number.shift()
        msg.chatId = number.join("")+"@c.us"
        fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(msg)
        })
        console.log(msg)
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
                selectedChat,
                setSelectedChat,
                chats,
                setChats,
                getAuthorized,
                isAuthorized,
                sendMessage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext)
