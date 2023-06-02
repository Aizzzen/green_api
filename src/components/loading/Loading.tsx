import React, {FC} from 'react';

import styles from  "./Loading.module.css";

export const Loading: FC = () => {
    return (
        <div className={`${styles.loading} def-1 def-2`}>
            <img
                className="def-1 def-2"
                src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
                alt=""/>
        </div>
    );
};
