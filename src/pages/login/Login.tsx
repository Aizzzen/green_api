import React, { FC } from 'react';
import styles from "./Login.module.css";
import Logo from "../../images/WhatsApp-Logo.png";

export const Login: FC = () => {
    return (
        <>
            <div className="greenBackLine"></div>
            <div className={styles.auth}>
                <img
                    src={Logo}
                    alt=""/>
                <h2 className={`${styles.title} s16`}>Логин в WhatsApp</h2>

                <form action="">
                    <div className={styles.inputGroup}>
                        <input className="s16" type="text" name="" id="text1" placeholder=" " autoComplete="off"/>
                        <label htmlFor="text1">IdInstance</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input className="s16" type="text" name="" id="text2" placeholder=" " autoComplete="off"/>
                        <label htmlFor="text2">ApiTokenInstance</label>
                    </div>
                    <button type="submit" className={`${styles.subButton} b`}>Авторизоваться</button>
                </form>
            </div>
        </>
    );
};
