import React, { FC } from 'react';
import styles from "./AddContact.module.css";
import GoBackIcon from "../../../images/keyboard_backspace.svg";
import {Search} from "../search/Search";


interface AddContactProps {
    setOpen: any;
    chats: any;
    setChats: any;
}

export const AddContact: FC<AddContactProps> = ({setOpen, chats, setChats}) => {
    return (
        <div className={`${styles.add_contact_bar}`}>
            <div className={`${styles.add_contact_header}`}>
                <div className={`${styles.header_content}`}>
                    <img onClick={() => setOpen(false)} className={styles.icon_size} src={GoBackIcon} alt=""/>
                    <p>Новый чат</p>
                </div>
            </div>

            <Search setOpen={setOpen} chats={chats} setChats={setChats} placeholder={"Поиск контактов"}/>

            <div className={`${styles.add_contact_list}`}>

            </div>
        </div>
    );
};
