import React from 'react';
// @ts-ignore
import styles from  "./Loading.module.css";

export const Loading = () => {
    return (
        <div className={`${styles.loading} def-1 def-2`}>
            <img
                className="def-1 def-2"
                src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
                alt=""/>
        </div>
    );
};
