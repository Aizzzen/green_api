import React from 'react';
// @ts-ignore
import styles from "./Main.module.css";
import {SideBar} from "../../components/sidebar/SideBar";
import {Chat} from "../../components/chat/Chat";

export const Main = () => {
    return (
        <>
            <div className={styles.greenBackLine}></div>
            <div className={`${styles.main} fixed flex`}>
            {/*<div className="main fixed fill flex">*/}
                <SideBar/>
                <Chat/>
            </div>
        </>
    );
};
