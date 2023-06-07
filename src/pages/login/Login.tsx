import React, { FC, useEffect } from 'react';
import styles from "./Login.module.css";
import Logo from "../../images/WhatsApp-Logo.png";
import {useAppContext} from "../../context/ContextProvider";
import {whatsAppApi} from "../../api";

export const Login: FC = () => {
    const {setLoaded, setIsAuth, id, setId, token, setToken} = useAppContext()

    useEffect(() => {
        setLoaded(false)
        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        if(id !== null && token !== null) {
            whatsAppApi
                .isAuthorized(id.trim(), token.trim())
                .then(res => {
                    if(res.stateInstance === "authorized") {
                        setIsAuth(true)
                    }
            })
        }
        setLoaded(true)
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setLoaded(false)
        whatsAppApi
            .isAuthorized(id.trim(), token.trim())
            .then(res => {
                if(res.stateInstance === "authorized") {
                    localStorage.setItem("IdInstance", id)
                    localStorage.setItem("ApiTokenInstance", token)
                    setIsAuth(true)
                }
        })
        setLoaded(true)
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
