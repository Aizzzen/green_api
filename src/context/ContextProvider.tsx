import React, { createContext, FC, useState, useContext } from 'react';
import {ChatItem} from "../types";

const AppContext = createContext(null as any)

interface AppContextProps {
    children: any;
}

export const AppContextProvider: FC<AppContextProps> = ({children}) => {
    const [loaded, setLoaded] = useState<boolean>(true)
    const [id, setId] = useState<string>("")
    const [token, setToken] = useState<string>("")
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [selectedChat, setSelectedChat] = useState<number>(-1)
    const [chats, setChats] = useState<ChatItem[]>([])

    return (
        <AppContext.Provider
            value={{
                loaded, setLoaded,
                id, setId,
                token, setToken,
                isAuth, setIsAuth,
                selectedChat, setSelectedChat,
                chats, setChats,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext)
