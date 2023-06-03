import React, { FC, useEffect, useState } from 'react';
import styles from "./Login.module.css";
import Logo from "../../images/WhatsApp-Logo.png";

interface LoginProps {
    setIsAuth: any;
}

export const Login: FC<LoginProps> = ({setIsAuth}) => {
    const [id, setId] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        const id = localStorage.getItem("IdInstance")
        const token = localStorage.getItem("ApiTokenInstance")
        if(id !== null && token !== null) {
            fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    if(res.stateInstance === "authorized") {
                        setIsAuth((prev: boolean) => !prev)
                    }
                })
        }
    }, [])

    const handleClick = () => {
        fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.stateInstance === "authorized") {
                    localStorage.setItem("IdInstance", id)
                    localStorage.setItem("ApiTokenInstance", token)
                    setIsAuth((prev: boolean) => !prev)
                }
            })
    }

    return (
        <>
            <div className="greenBackLine"></div>
            <div className={styles.auth}>
                <img
                    src={Logo}
                    alt=""/>
                <h2 className={`${styles.title} s16`}>Логин в WhatsApp</h2>

                {/*<form action="" onSubmit={handleClick}>*/}
                    <div className={styles.inputGroup}>
                        <input value={id} onChange={(e) => setId(e.target.value)} className="s16" type="text" name="" id="text1" placeholder=" " autoComplete="off"/>
                        <label htmlFor="text1">IdInstance</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input value={token} onChange={(e) => setToken(e.target.value)} className="s16" type="text" name="" id="text2" placeholder=" " autoComplete="off"/>
                        <label htmlFor="text2">ApiTokenInstance</label>
                    </div>
                    <button onClick={handleClick} className={`${styles.subButton} b`}>Авторизоваться</button>
                {/*</form>*/}
            </div>
        </>
    );
};
