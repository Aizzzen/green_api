import React, {FC, useEffect} from 'react';

import Avatar from "../../images/avatar.png"

import styles from "./Contact.module.css";
import {useAppContext} from "../../context/ContextProvider";

interface ContactProps {
    id: number;
    name: string;
    msg?: string;
    stamp?: string;
    isActive?: boolean;
    setActive: (value: number) => void;
}

export const Contact: FC<ContactProps> = ({
                                              id,
                                              name,
                                              msg,
                                              stamp,
                                              isActive,
                                              setActive
}) => {
    const {setSelectedChat} = useAppContext()

    const handleClick = (ID: number) => {
        setSelectedChat(ID)
        setActive(ID)
    }

    return (
        <div
            onClick={() => handleClick(id)}
            // onClick={() => setActive(id)}
            className={`${styles.contact} ${isActive ? styles.contact_active : ""} flex rel aic`}
        >
            <div className={`${styles.logo} rel flex aic`}>
                <a className={styles.user} href="/">
                    <img src={Avatar} alt=""/>
                </a>
            </div>
            <div className={`${styles.meta} rel flex aic`}>
                <div className={`${styles.info} rel flex col`}>
                    <h2 className={`${styles.name} b s14 wordwrap`}>{name}</h2>
                    {
                        msg &&
                        <h2 className={`${styles.msg} s13 c333 wordwrap`}>
                            {msg.length > 30 ? msg.substr(0, 30) + "......" : msg}
                        </h2>
                    }
                </div>
                {
                    stamp &&
                    <div className={`${styles.extra} rel flex col aic`}>
                        <h2 className={`${styles.stamp} s11 c777`}>{stamp.substr(0, 5)}</h2>
                        <div className={`${styles.badge} rel s12 cfff`}>
                            99+
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
