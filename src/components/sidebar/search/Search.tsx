import React, { FC, useState } from 'react';
import styles from "./Search.module.css";
import SearchIcon from "../../../images/search.svg";
import {ChatItem} from "../main/MainBar";

interface SearchProps {
    placeholder: string;
    chats?: ChatItem[];
    setChats?: (value: ChatItem[]) => void;
    setOpen?: (value: boolean) => void;
}

export const Search: FC<SearchProps> = ({placeholder, chats, setChats, setOpen}) => {
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
                            // @ts-ignore
                            setChats((prev) => [
                                {
                                    "id": Number(`${Math.random()}`.substr(2)),
                                    "name": search,
                                    "msg": [],
                                    "stamp": `${new Date().toLocaleTimeString('ru-RU')}`
                                },
                                ...prev
                            ])
                            if(placeholder === "Введите номер телефона") {
                                // @ts-ignore
                                setOpen(false)
                            }
                            setSearch("")
                        }
                    }}
                />
            </div>
        </div>
    );
};

export {}
