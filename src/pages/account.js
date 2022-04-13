import React from 'react';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
    const auth = useAuth();

    if(auth.user === null ){
        auth.autorization();
    }

    return(
        <>
        <div className={styles.MyAccount}>
            <div className={styles["MyAccount-container"]}>
                <h1 className={styles.title}>
                    My account
                </h1>
                <form action="/" className={styles.form}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <p className={styles.value}>
                        Camila Yoko
                    </p>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <p className={styles.value}>
                        camilayoko@gmail.com
                    </p>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <p className={styles.value}>
                        ******
                    </p>
                    <input 
                    type="submit"
                    value="Edit"
                    className={styles["secondary-button"]} 
                    />
                </form>
            </div>
        </div>
        </>
    );
};

export default MyAccount; 