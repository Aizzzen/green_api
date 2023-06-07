import React, {FC, MouseEventHandler, SetStateAction, useState} from 'react';
import styles from "./ChatInput.module.css";

import EmojiIcon from "../../../images/insert_emoticon.svg";
import FileIcon from "../../../images/paperclip.svg";
import SendIcon from "../../../images/send.svg";
import {useAppContext} from "../../../context/ContextProvider";
import {whatsAppApi} from "../../../api";
import {ChatItem, msgSend} from "../../../types";

interface ChatInputProps {
    chatId: string;
}

export const ChatInput: FC<ChatInputProps> = ({chatId}) => {
    const {setLoaded, chats, setChats, selectedChat} = useAppContext()
    const [text, setText] = useState("")

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setText(e.target.value)
    }

    const handleClick: MouseEventHandler<HTMLImageElement> = () => {
        setLoaded(false)
        chats.forEach((item: ChatItem) => {
            if(item.id === selectedChat) {
                if(item.id === selectedChat) {
                    item?.msg?.push({
                        text: text,
                        stamp: Date.now(),
                        senderId: "79622582626@c.us",
                    })
                }
            }
        });
        setChats([...chats])

        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        let msg: msgSend = {
            chatId: "",
            message: text,
        }
        const number = chatId.split("")
        number[0] === "8" ? number[0]="7" : number.shift()
        msg.chatId = number.join("")+"@c.us"

        if(id && token) {
            whatsAppApi.sendMessage(id, token, msg)
        }
        setText("")
        setLoaded(true)
    }

    return (
        <div className={`${styles.send_message} flex aic`}>
            <img className={styles.iconSize} src={EmojiIcon} alt=""/>
            <img className={styles.iconSize} src={FileIcon} alt=""/>
            <textarea
                value={text}
                onChange={handleChange}
                className={`${styles.new_message} s14`}
                placeholder="Введите сообщение"
            />
            <img
                className={`${styles.iconSize}`}
                src={SendIcon} alt=""
                onClick={text.length > 0 ? handleClick : undefined}
            />
        </div>
    );
};
