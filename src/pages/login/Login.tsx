import React, { FC, useEffect } from 'react';
import styles from "./Login.module.css";
import Logo from "../../images/WhatsApp-Logo.png";
import {useAppContext} from "../../context/ContextProvider";


export const Login: FC = () => {
    const {id, setId, token, setToken, isAuthorized, getAuthorized} = useAppContext()

    useEffect(() => {
        isAuthorized()
    }, [])

    const handleClick = (e: any
    ) => {
        e.preventDefault()
        getAuthorized()
    }

    return (
        <>
            <div className="greenBackLine"></div>
            <div className={styles.auth}>
                <img
                    src={Logo}
                    alt=""/>
                <h2 className={`${styles.title} s16`}>Логин в WhatsApp</h2>

                <form>
                    <div className={styles.input_group}>
                        <input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="s16"
                            type="text"
                            name=""
                            id="text1"
                            placeholder=" "
                            autoComplete="off"
                        />
                        <label htmlFor="text1">IdInstance</label>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="s16"
                            type="text"
                            name=""
                            id="text2"
                            placeholder=" "
                            autoComplete="off"
                        />
                        <label htmlFor="text2">ApiTokenInstance</label>
                    </div>
                    <button onClick={e => handleClick(e)} className={`${styles.sub_button} b`}>Авторизоваться</button>
                </form>
            </div>
        </>
    );
};
