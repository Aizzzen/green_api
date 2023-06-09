import React, { FC, useState } from 'react';
import styles from "./Search.module.css";
import SearchIcon from "../../../images/search.svg";
import {utils} from "../../../utils";
import {useAppContext} from "../../../context/ContextProvider";
import {ChatItem} from "../../../types";

interface SearchProps {
    placeholder: string;
    chats: ChatItem[];
    setChats: (value: ChatItem[]) => void;
    setOpen?: (value: boolean) => void;
}

export const Search: FC<SearchProps> = ({placeholder, chats, setChats, setOpen}) => {
    const {setSelectedChat} = useAppContext()
    const [search, setSearch] = useState("")

    return (
        <div className={`${styles.search} flex`}>
            <div className={`${styles.search_box} flex aic`}>
                <img className={styles.icon_size} src={SearchIcon} alt=""/>
                <input
                    className="s16"
                    type="text"
                    value={search}
                    placeholder={placeholder}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={e => {
                        if(e.key === "Enter" && search.length > 0) {
                            let item = chats?.filter((item: ChatItem) => {
                                const number = utils.normalNumber(item.chatId)
                                return number === search.trim()
                            })[0]
                            if(item) {
                                alert("Чат с указанным пользователем уже существует.\nНажмите на OK чтобы перейти к чату")
                                setSelectedChat(item.id)
                            } else {
                                setChats([
                                    {
                                        id: Number(`${Math.random()}`.substr(2)),
                                        chatId: search.trim() + "@c.us",
                                        msg: [],
                                    },
                                    ...chats
                                ])
                                if(placeholder === "Введите номер телефона" && setOpen) { setOpen(false) }
                                setSearch("")
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
};

export {}
