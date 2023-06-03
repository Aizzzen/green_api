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
    msg: string;
    stamp: string;
}

interface MainBarProps {
    open: any;
    setOpen: any;
    chats: any;
}

export const MainBar: FC<MainBarProps> = ({open, setOpen, chats}) => {
    const [active, setActive] = useState(null)
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

            <Search placeholder={"Поиск или новый чат"} />

            <div className={`${styles.contacts_list} rel`}>
                {chats
                    .sort((a: any, b: any) => b - a)
                    .map(({id, name, msg, stamp}: ChatItem) =>
                    <Contact
                        id={id}
                        key={id}
                        isActive={active === id}
                        setActive={setActive}
                        name={name}
                        msg={msg[msg.length-1]}
                        stamp={stamp}
                    />
                )}
            </div>
        </div>
    );
};
