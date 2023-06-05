import React, {FC} from 'react';
import styles from "./Message.module.css";

interface MessageProps {
    order: string;
    name: string;
    msg: string;
}

export const Message: FC<MessageProps> = ({order, name, msg}) => {
    return (
        <div className={`${styles.message_item} ${order === "mine" ? "flex" : ""} rel`}>
            <div className={`${order === "mine" ? styles.mine : styles.content} rel`}>
                <h2 className={`${styles.name} s14 b`}>~ {name}</h2>
                <p className={`${styles.text} s13`}>{msg}</p>
                <h2 className={`${styles.stamp} s12 c777 def-1`}>{`${new Date().toLocaleTimeString('ru-RU')}`.substr(0, 5)}</h2>
            </div>
        </div>
    );
};
