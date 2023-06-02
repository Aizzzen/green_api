import React, {FC} from 'react';

import styles from "./Chat.module.css";

import {ChatHeader} from "./header/ChatHeader";
import {ChatInput} from "./input/ChatInput";
import {ChatMain} from "./main/ChatMain";

export const Chat: FC = () => {
    return (
        <div className={`${styles.chat} rel flex col`}>
            <ChatHeader/>
            <ChatMain/>
            <ChatInput/>
        </div>
    );
};
