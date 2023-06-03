import React, {FC} from 'react';
import Logo from "../../images/WhatsApp-Logo.png"

import styles from  "./Loading.module.css";

export const Loading: FC = () => {
    return (
        <div className={`${styles.loading} def-1 def-2`}>
            <img
                className="logoSize def-1 def-2"
                src={Logo}
                alt=""/>
        </div>
    );
};
