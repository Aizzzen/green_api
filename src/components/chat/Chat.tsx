import React, {FC} from 'react';

import styles from "./Chat.module.css";

import {ChatHeader} from "./header/ChatHeader";
import {ChatInput} from "./input/ChatInput";
import {ChatMain} from "./main/ChatMain";
import {useAppContext} from "../../context/ContextProvider";
import {ChatItem} from "../sidebar/main/MainBar";

export const Chat: FC = () => {
    const {selectedChat, chats} = useAppContext()
    const chat = chats.filter((item: ChatItem) => item.id === selectedChat)[0]

    return (
        <div className={`${styles.chat} rel flex col`}>
            {chat === undefined ?
                (
                    <div className={`${styles.chat_background}`}/>
                ) : (
                    <>
                        <ChatHeader name={chat?.name}/>
                        <ChatMain name={chat?.name} msg={chat?.msg}/>
                        <ChatInput name={chat?.name} msg={chat?.msg}/>
                    </>
                )
            }
        </div>
    );
};
