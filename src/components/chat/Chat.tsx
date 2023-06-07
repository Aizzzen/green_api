import React, {FC} from 'react';

import styles from "./Chat.module.css";

import {ChatHeader} from "./header/ChatHeader";
import {ChatInput} from "./input/ChatInput";
import {ChatMain} from "./main/ChatMain";
import {useAppContext} from "../../context/ContextProvider";
import {utils} from "../../utils";
import {ChatItem} from "../../types";

export const Chat: FC = () => {
    const {selectedChat, chats} = useAppContext()
    const chat = chats.filter((item: ChatItem) => item.id === selectedChat)[0]
    const phone_number = localStorage.getItem("phone_number")
    const chatId = utils.normalNumber(chat?.chatId)
    const myNumber = utils.normalNumber(phone_number as string, 11)

    return (
        <div className={`${styles.chat} rel flex col`}>
            {chat === undefined ?
                (
                    <div className={`${styles.chat_background}`}/>
                ) : (
                    <>
                        <ChatHeader chatId={chatId}/>
                        <ChatMain chatId={chatId} msg={chat?.msg} myNumber={myNumber} phone_number={phone_number as string}/>
                        <ChatInput chatId={chat?.chatId}/>
                    </>
                )
            }
        </div>
    );
};
