import React, {FC} from 'react';
import styles from "./ChatMain.module.css";
import {Message} from "./message/Message";
import {msgState} from "../../../types";

interface ChatMainProps {
    chatId: string;
    msg: msgState[];
    myNumber: string
    phone_number: string
}

export const ChatMain: FC<ChatMainProps> = ({chatId, msg, myNumber, phone_number}) => {
    return (
        <div className={`${styles.messages} rel flex col`}>
            {msg?.map((el: any, i: number) =>
                <>
                    {el.senderId === phone_number ?
                        (<Message chatId={myNumber} msg={el.text} stamp={el.stamp} key={i} order={"mine"} />)
                        : (<Message chatId={chatId} msg={el.text} stamp={el.stamp} key={i} />)
                    }
                </>
            )}
        </div>
    );
};
