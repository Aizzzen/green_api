import React, {FC} from 'react';

import styles from "./ChatHeader.module.css";

import Avatar from "../../../images/avatar.png";
import SearchIcon from "../../../images/search.svg";
import MoreIcon from "../../../images/more_vert.svg";


interface ChatHeaderProps {
    number?: string;
}

export const ChatHeader: FC<ChatHeaderProps> = ({number}) => {
    return (
        <div className={`${styles.header} flex`}>
            <div className={`${styles.logo} rel flex aic`}>
                <a className={styles.user} href="#">
                    <img src={Avatar} alt=""/>
                </a>
                <div className={`${styles.meta}`}>
                    <h2 className={`${styles.name} s14 b`}>{number}</h2>
                    <h2 className={`${styles.status} s13 c777`}>был(а) недавно</h2>
                </div>
            </div>
            <div className={`${styles.actions} rel flex aic`}>
                <img className={styles.icon_size} src={SearchIcon} alt=""/>
                <img className={styles.icon_size} src={MoreIcon} alt=""/>
            </div>
        </div>
    );
};
