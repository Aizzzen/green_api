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
        {
            id: 1,
            chatId: "79324318643@c.us", //название + от кого сообщения
            msg: [
                {
                    text: "Ты закончил тестовое",
                    stamp: "" ,
                    senderId: "",
                }
            ],
        },
        {
            id: 2,
            chatId: "77086930735@c.us",
            msg: [
                {
                    text: "Ты закончил тестовое",
                    stamp: "" ,
                    senderId: "",
                }
            ],
        },
        // {"id": 4, "name": "", "number": "89622282626", "msg": ["Скегодгня", ], "stamp":  new Date()},
        // {"id": 5, "name": "", "number": "+79622584626", "msg": ["Сегодня", ], "stamp":  new Date()},
    ])

    const [chats2, setChats2] = useState([] as any)

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


    const receiveAndDelete = async () => {
        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        let receiptId: number = 0
        if(id !== null && token !== null) {
            await fetch(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    if(res !== null) {
                        receiptId = res.receiptId
                        console.log(receiptId)
                        console.log(res.body.typeWebhook)
                        console.log(res.body)
                        if(
                            res.body.typeWebhook === "incomingMessageReceived" &&
                            res.body.messageData.typeMessage === "textMessage"
                        ) {
                            chats.forEach((item: any) => {
                                if(res.body.senderData.chatId === item.chatId) {
                                    item.msg.push({
                                        "text": res.body.messageData.textMessageData.textMessage,
                                        "stamp": res.body.timestamp,
                                        "senderId": res.body.senderData.sender,
                                    })
                                }
                            });
                            setChats([...chats])
                            console.log(chats)
                        }
                    }
                })
            await fetch(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${receiptId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(console.log)
        }
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
                chats2,
                setChats2,
                getAuthorized,
                isAuthorized,
                sendMessage,
                receiveAndDelete
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext)
