import React, { FC } from 'react';
import styles from "./AddContact.module.css";
import GoBackIcon from "../../../images/keyboard_backspace.svg";
import {Search} from "../search/Search";
import {ChatItem} from "../main/MainBar";


interface AddContactProps {
    setOpen: (value: boolean) => void;
    chats: ChatItem[];
    setChats: (value: ChatItem[]) => void;
}

export const AddContact: FC<AddContactProps> = ({setOpen, chats, setChats}) => {
    return (
        <div className={`${styles.add_contact_bar}`}>
            <div className={`${styles.add_contact_header}`}>
                <div className={`${styles.header_content}`}>
                    <img onClick={() => setOpen(false)} className={styles.icon_size} src={GoBackIcon} alt=""/>
                    <p>Вернуться к списку чатов</p>
                </div>
            </div>

            <Search setOpen={setOpen} chats={chats} setChats={setChats} placeholder={"Введите номер телефона"}/>

            <div className={`${styles.add_contact_list}`}>

            </div>
        </div>
    );
};
