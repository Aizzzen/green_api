import React, {FC, useState} from 'react';
import styles from "./ChatInput.module.css";

import EmojiIcon from "../../../images/insert_emoticon.svg";
import FileIcon from "../../../images/paperclip.svg";
import SendIcon from "../../../images/send.svg";
import {useAppContext} from "../../../context/ContextProvider";

interface ChatInputProps {
    name: any;
    msg: any;
}

export const ChatInput: FC<ChatInputProps> = ({name, msg}) => {
    const {sendMessage} = useAppContext()
    const [text, setText] = useState("")

    const handleChange = (e: any): any => {
        setText(e.target.value)
        console.log(text)
        console.log(msg)
    }

    const handleClick = () => {
        // https://api.green-api.com/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}
        msg.push(text)
        sendMessage(name, text)
        setText("")
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
                onClick={handleClick}
            />
        </div>
    );
};
