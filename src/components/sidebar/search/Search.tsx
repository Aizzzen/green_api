import React, { FC, useState } from 'react';
import styles from "./Search.module.css";
import SearchIcon from "../../../images/search.svg";

interface SearchProps {
    placeholder: string;
    chats?: any;
    setChats?: any;
    setOpen?: any;
}

export const Search: FC<SearchProps> = ({placeholder, chats, setChats, setOpen}) => {
    const [search, setSearch] = useState('')

    return (
        <div className={`${styles.search} flex`}>
            <div className={`${styles.search_box} flex aic`}>
                <img className={styles.icon_size} src={SearchIcon} alt=""/>
                {!chats && <input
                    className="s16"
                    type="text"
                    placeholder={placeholder}
                />}
                {chats && <input
                    className="s16"
                    type="text"
                    placeholder={placeholder}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={e => {
                        if(e.key === "Enter") {
                            setChats(
                                [...chats, {"name": search, "msg": "", "stamp": ""}]
                            )
                            setOpen(false)
                        }
                    }}
                />}
            </div>
        </div>
    );
};

export {}
