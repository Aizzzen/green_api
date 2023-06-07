import React, {FC} from 'react';
import styles from "./Message.module.css";

interface MessageProps {
    order?: string;
    chatId: string;
    msg: string;
    stamp: any;
}

export const Message: FC<MessageProps> = ({order, chatId, msg, stamp}) => {
    stamp = new Date(stamp)
    return (
        <div className={`${styles.message_item} ${order === "mine" ? "flex" : ""} rel`}>
            <div className={`${order === "mine" ? styles.mine : styles.content} rel`}>
                <h2 className={`${styles.name} s14 b`}>~ {chatId}</h2>
                <p className={`${styles.text} s13`}>{msg}</p>
                <h2 className={`${styles.stamp} s12 c777 def-1`}>
                    {
                        typeof stamp === 'object' &&
                        true &&
                        'getHours' in stamp &&
                        stamp?.getHours() + ":" + (Number(stamp?.getMinutes()) < 10 ? "0" + stamp?.getMinutes() : stamp?.getMinutes())
                    }
                </h2>
            </div>
        </div>
    );
};
