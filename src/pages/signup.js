import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
    return(
        <div className={styles.CreateAccount}>
            <div className={styles["CreateAccount-container"]}>
                <h1 className={styles.title}>My account</h1>
                <form action="/" className={styles.form}>
                    <label htmlFor="name" className={styles.label}>
                        Name
                    </label>
                    <input
                    type="text"
                    className={styles.input}
                    id="name"
                    placeholder="nombre"
                    />
                    <label htmlFor="email" className={styles.label}>Email addres</label>
                    <input 
                    type="email"
                    className={styles.input}
                    id="email"
                    placeholder="nombre@example.com"
                    />
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                    type="password"
                    className={styles.input}
                    id="password"
                    placeholder="******"
                    />
                    <button 
                    type="button"
                    className={styles["primary-button"]}
                    >Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;