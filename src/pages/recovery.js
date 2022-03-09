import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/RecoveryPassword.module.scss';

const RecoveryPassword = () => {
    return(
        <div className={styles.PasswordRecovery}>
            <div className={styles["PasswordRecovery-container"]}>
                <img src={logo.src} alt="logo" className={styles["logo-login"]}/>
                <h1 className={styles["title-center"]}>
                    Password recovery
                </h1>
                <p className={styles["subtitle"]}>
                Inform the email address used to create your account
                </p>
                <form action="/" className={styles.form}>
                    <label htmlFor="email" className={styles.label}>Email addres</label>
                    <input type="text" id="email" className={styles.input}/>
                    <button type="button" className={styles["primary-button"]}>Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default RecoveryPassword;