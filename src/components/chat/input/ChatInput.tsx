import React, {FC} from 'react';
import styles from "./ChatInput.module.css";

import EmojiIcon from "../../../images/insert_emoticon.svg";
import FileIcon from "../../../images/paperclip.svg";
import SendIcon from "../../../images/send.svg";

export const ChatInput: FC = () => {
    return (
        <div className={`${styles.sendMessage} flex aic`}>
            <img className={styles.iconSize} src={EmojiIcon} alt=""/>
            <img className={styles.iconSize} src={FileIcon} alt=""/>
            <textarea className={`${styles.newMessage} s14`} placeholder="Введите сообщение"/>
            <img className={styles.iconSize} src={SendIcon} alt=""/>
        </div>
    );
};
