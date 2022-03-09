import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Link from 'next/link';
import styles from '@styles/SendEmail.module.scss';


const SendEmail= () => {
    return(
        <div className={styles.SendEmail}>
            <div className={styles["form-container"]}>
                <img src={logo.src} alt="logo" className={styles.logo}/>
                <h1 className={styles["title-center"]}>
                    Email has been sent!
                </h1>
                <p className={styles["subtitle"]}>
                    Please check your inbox for instruccions
                    on how to reset the password
                </p>
                <div className={styles["email-image"]}>
                    <img src={email.src} alt="email"/>
                </div>
                
                    <button
                        type="submit"
                        className={styles["primary-button"]}   
                    >Login</button>
                    <p className={styles.resend}>
                        <span>Didn&apos;t recive the email?</span>
                        <Link href="/">Resend</Link>
                    </p>
            </div>
        </div>
    );
};

export default SendEmail;