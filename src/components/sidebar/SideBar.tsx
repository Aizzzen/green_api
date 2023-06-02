import React, {FC} from 'react';

import Avatar from "../../images/avatar.png"
import styles from "./SideBar.module.css";
import ChatIcon from "../../images/message.svg";
import MoreIcon from "../../images/more_vert.svg";
import SearchIcon from "../../images/search.svg";

import {Contact} from "../contact/Contact";

export const SideBar: FC = () => {
    return (
        <div className={`${styles.sidebar} rel flex col`}>
            {/*HEADER*/}
            <div className={`${styles.header} flex`}>
                <div className={`${styles.logo} rel flex aic`}>
                    <a className={styles.user} href="/">
                        <img src={Avatar} alt=""/>
                    </a>
                </div>
                <div className={`${styles.actions} rel flex aic`}>
                    <img className={styles.iconSize} src={ChatIcon} alt=""/>
                    <img className={styles.iconSize} src={MoreIcon} alt=""/>
                </div>
            </div>

            {/*SEARCH*/}
            <div className={`${styles.search} flex`}>
               <div className={`${styles.searchBox} flex aic`}>
                   <img className={styles.iconSize} src={SearchIcon} alt=""/>
                   <input className="s16" type="text" placeholder="Поиск или новый чат"/>
               </div>
            </div>

            {/*CONTACT*/}
            <div className={`${styles.contactsList} rel`}>
                {[1,2,3,4,4,5,5,62,2,2,2,2,2,2,2,2,22,2,2,2].map(el=> <Contact/>)}
            </div>
        </div>
    );
};
