import React, {FC} from 'react';

import Avatar from "../../images/avatar.png"

import styles from "./Contact.module.css";
import {useAppContext} from "../../context/ContextProvider";

interface ContactProps {
    id: number;
    chatId: string;
    msg?: string;
    stamp?: any;
    isActive?: boolean;
    setActive: (value: number) => void;
}

export const Contact: FC<ContactProps> = ({id, chatId, msg, stamp, isActive, setActive}) => {
    const {setSelectedChat} = useAppContext()
    stamp = new Date(stamp)
    const handleClick = (ID: number) => {
        setSelectedChat(ID)
        setActive(ID)
    }

    return (
        <div
            onClick={() => handleClick(id)}
            className={`${styles.contact} ${isActive ? styles.contact_active : ""} flex rel aic`}
        >
            <div className={`${styles.logo} rel flex aic`}>
                <a className={styles.user} href="#">
                    <img src={Avatar} alt=""/>
                </a>
            </div>
            <div className={`${styles.meta} rel flex aic`}>
                <div className={`${styles.info} rel flex col`}>
                    <h2 className={`${styles.name} b s14 wordwrap`}>{chatId}</h2>
                    {msg && <h2 className={`${styles.msg} s13 c333 wordwrap`}>
                        {msg.length > 30 ? msg.substr(0, 30) + "......" : msg}
                    </h2>}
                </div>
                {stamp && <div className={`${styles.extra} rel flex col aic`}>
                    <h2 className={`${styles.stamp} s11 c777`}>
                        {
                            !isNaN(stamp) &&
                            typeof stamp === 'object' &&
                            true &&
                            'getHours' in stamp &&
                            stamp?.getHours() + ":" + (Number(stamp?.getMinutes()) < 10 ? "0" + stamp?.getMinutes() : stamp?.getMinutes())
                        }
                    </h2>
                    {/* Здесь будет количество новых непрочитанных сообщений */}
                    {/*<div className={`${styles.badge} rel s12 cfff`}>*/}
                    {/*    99+ */}
                    {/*</div>*/}
                </div>}
            </div>
        </div>
    );
};
