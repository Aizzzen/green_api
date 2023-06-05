import React, {FC} from 'react';
import styles from "./ChatMain.module.css";
import {Message} from "./message/Message";

interface ChatMainProps {
    name: string;
    msg: string[];
}

export const ChatMain: FC<ChatMainProps> = ({name, msg}) => {
    return (
        <div className={`${styles.messages} rel flex col`}>
            {msg?.map((el: any, i: number) =>
                <Message name={name} msg={el} key={i} order={"mine"} />
            )}

            {/*{[1,1,1,1,1,1,1,1,1,1,1,11,1,1,1].map((el, i) =>*/}
            {/*    <Message name={name} msg={msg} key={i} order={i % 2 === 0 ? "mine" : ""} />*/}
            {/*)}*/}
        </div>
    );
};
