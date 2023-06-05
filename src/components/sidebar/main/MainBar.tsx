import React, {FC, useState } from 'react';
import styles from "./MainBar.module.css";
import Avatar from "../../../images/avatar.png";
import ChatIcon from "../../../images/message.svg";
import MoreIcon from "../../../images/more_vert.svg";
import {Search} from "../search/Search";
import {Contact} from "../../contact/Contact";


export type ChatItem = {
    id: number;
    name: string;
    msg: string[];
    stamp: Date;
}

interface MainBarProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    chats: ChatItem[];
    setChats: (value: ChatItem[]) => void;
}

export const MainBar: FC<MainBarProps> = ({open, setOpen, chats, setChats}) => {
    const [active, setActive] = useState(-1)

    return (
        <div className={`${styles.sidebar}  ${open ? 'none' : 'flex rel col'}`}>
            <div className={`${styles.header} flex`}>
                <div className={`${styles.logo} rel flex aic`}>
                    <a className={styles.user} href="/">
                        <img src={Avatar} alt=""/>
                    </a>
                </div>
                <div className={`${styles.actions} rel flex aic`}>
                    <img onClick={() => setOpen(true)} className={styles.icon_size} src={ChatIcon} alt=""/>
                    <img className={styles.icon_size} src={MoreIcon} alt=""/>
                </div>
            </div>

            <Search chats={chats} setChats={setChats} placeholder={"Поиск или новый чат"} />

            <div className={`${styles.contacts_list} rel`}>
                {chats
                    ?.map(({id, name, msg, stamp}: ChatItem) =>
                    <Contact
                        id={id}
                        key={id}
                        isActive={active === id}
                        setActive={setActive}
                        name={name}
                        msg={msg[msg?.length-1]}
                        stamp={stamp}
                    />
                )}
            </div>
        </div>
    );
};
