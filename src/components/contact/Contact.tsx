import React, {FC} from 'react';

import Avatar from "../../images/avatar.png"

import styles from "./Contact.module.css";

export const Contact: FC = () => {
    return (
        <div className={`${styles.contact} flex rel aic`}>
            <div className={`${styles.logo} rel flex aic`}>
                <a className={styles.user} href="/">
                    <img src={Avatar} alt=""/>
                </a>
            </div>
            <div className={`${styles.meta} rel flex aic`}>
                <div className={`${styles.info} rel flex col`}>
                    <h2 className={`${styles.name} b s14 wordwrap`}>Yunus Gadamurov</h2>
                    <h2 className={`${styles.msg} s13 c333 wordwrap`}>Ты закончил тестовое</h2>
                </div>
                <div className={`${styles.extra} rel flex col aic`}>
                    <h2 className={`${styles.stamp} s11 c777`}>19:10</h2>
                    <div className={`${styles.badge} rel s12 cfff`}>
                        99+
                    </div>
                </div>
            </div>
        </div>
    );
};
