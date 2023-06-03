import React, {FC} from 'react';
import styles from "./Message.module.css";

interface MessageProps {
    order: string;
}

export const Message: FC<MessageProps> = ({order}) => {
    return (
        <>
            {order === "mine" ? (
                <div className={`${styles.messageItem} flex rel`}>
                    <div className={`${styles.mine} rel`}>
                        <h2 className={`${styles.name} s14 b`}>Yunus</h2>
                        <p className={`${styles.text} s13`}>Mesage aaaasfbsdfbaa dog frog fg</p>
                        <h2 className={`${styles.stamp} s12 c777 def-1`}>03:54</h2>
                    </div>
                </div>
            ) : (
                <div className={`${styles.messageItem} rel`}>
                    <div className={`${styles.content} rel`}>
                        <h2 className={`${styles.name} s14 b`}>Yunus</h2>
                        <p className={`${styles.text} s13`}>Mesage aaaasfbsdfbaa dog frog fg</p>
                        <h2 className={`${styles.stamp} s12 c777 def-1`}>03:54</h2>
                    </div>
                </div>
            )}
        </>
    );
};
