import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
    return(
        <div className={styles.NewPassword}>
            <div className={styles["NewPassword-container"]}>
                <img 
                    src={logo}
                    alt="logo"
                    className={styles.logo}
                />
                <h1 className={styles.title}>
                    Create a new password
                </h1>
                <p className={styles.subtitle}> 
                    Enter a new password for your account.
                </p>
                <form action="/" className={styles['NewPassword_from']}>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        id="password" 
                        placeholder="******"
                        className={styles["input"]}    
                    />
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        id="password2" 
                        placeholder="******"
                        className={styles["input" ]}   
                    />
                    <input type="submit"
                        value="Confirm"
                        className={styles["primary-button"]}
                    />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;