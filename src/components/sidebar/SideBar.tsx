import React, {FC, useState} from 'react';

import Avatar from "../../images/avatar.png"
import styles from "./SideBar.module.css";
import ChatIcon from "../../images/message.svg";
import MoreIcon from "../../images/more_vert.svg";
import GoBackIcon from "../../images/keyboard_backspace.svg";

import {Contact} from "../contact/Contact";
import {Search} from "./search/Search";

export const SideBar: FC = () => {
    const [chats, setChats] = useState([
        {"name": "Yunus Gadamurov", "msg": "Ты закончил тестовое", "stamp": "19:10"},
        {"name": "Yunus", "msg": "Ты не закончил тестовое", "stamp": "19:10"},
        {"name": "Gadamurov", "msg": "Ты закончишь тестовое", "stamp": "19:10"},
        {"name": "Vasya", "msg": "Скегодгня", "stamp": "19:10"},
        {"name": "Yu", "msg": "Сегодня", "stamp": "19:10"},
    ])
    const [open, setOpen] = useState(false)

    return (
        <>
            {open ? (
                <div className={`${styles.add_contact_bar}`}>
                    {/*HEADER*/}
                    <div className={`${styles.add_contact_header}`}>
                        <div className={`${styles.header_content}`}>
                            <img onClick={() => setOpen(false)} className={styles.icon_size} src={GoBackIcon} alt=""/>
                            <p>Новый чат</p>
                        </div>
                    </div>

                    {/*SEARCH*/}
                    <Search setOpen={setOpen} chats={chats} setChats={setChats} placeholder={"Поиск контактов"}/>

                    {/*CONTACT*/}
                    <div className={`${styles.add_contact_list}`}>

                    </div>
                </div>
            ) :
                (
                    <div className={`${styles.sidebar} rel ${open ? 'none' : 'flex'} col`}>
                        {/*HEADER*/}
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

                        {/*SEARCH*/}
                        <Search placeholder={"Поиск или новый чат"} />

                        {/*CONTACT*/}
                        <div className={`${styles.contacts_list} rel`}>
                            {chats.map(({name, msg, stamp}, i)=> <Contact key={i} name={name} msg={msg} stamp={stamp}/>)}
                        </div>
                    </div>
                )
            }
        </>
    );
};
