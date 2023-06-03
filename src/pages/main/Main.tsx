import React, {FC} from 'react';

import styles from "./Main.module.css";

import {SideBar} from "../../components/sidebar/SideBar";
import {Chat} from "../../components/chat/Chat";

export const Main: FC = () => {
    return (
        <>
            <div className="greenBackLine"></div>
            <div className={`${styles.main} fixed flex`}>
                <SideBar/>
                <Chat/>
            </div>
        </>
    );
};
