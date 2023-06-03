import React, {FC} from 'react';
import styles from "./ChatMain.module.css";
import {Message} from "./message/Message";

export const ChatMain: FC = () => {
    return (
        <div className={`${styles.messages} rel flex col`}>
            {[1,1,1,1,1,1,1,1,1,1,1,11,1,1,1].map((el, i) =>
                <Message key={i} order={i % 2 === 0 ? "mine" : ""} />
            )}
        </div>
    );
};
