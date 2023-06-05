import React, {FC, useState} from 'react';
import styles from "./ChatInput.module.css";

import EmojiIcon from "../../../images/insert_emoticon.svg";
import FileIcon from "../../../images/paperclip.svg";
import SendIcon from "../../../images/send.svg";
import {useAppContext} from "../../../context/ContextProvider";
import {ChatItem} from "../../sidebar/main/MainBar";

interface ChatInputProps {
    name: string;
    msg: string[];
}

export const ChatInput: FC<ChatInputProps> = ({name, msg}) => {
    const {setLoaded, chats, setChats, selectedChat, sendMessage} = useAppContext()
    const [text, setText] = useState("")

    const handleChange = (e: any): any => {
        setText(e.target.value)
        console.log(text)
    }

    const handleClick = () => {
        // msg.push(text)

        setLoaded(false)
        chats.forEach((item: ChatItem) => {
            if(item.id === selectedChat) {
                if(item.id === selectedChat) {
                    item?.msg?.push(text)
                } else {
                    return
                }
            }
        });
        setChats(chats)
        sendMessage(name, text)
        setText("")
        console.log(chats)
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
