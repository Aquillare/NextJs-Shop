import Head from 'next/head';
import React, {useRef} from 'react';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import styles from'@styles/Login.module.scss';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.Login}>
                <div className={styles["Login-container"]}>
                    <img 
                    src={logo.src}
                    alt="logo"
                    className={styles["logo-login"]}  
                    />
                    <form action="/" className={styles.form} ref={form}>
                        <label htmlFor="email" className={styles.label}>Email addres</label>
                        <input 
                        type="email" 
                        className={styles["input"]}
                        name="email"
                        placeholder="email@example.com"
                        />
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                        type="password"
                        className={styles["input"]}
                        name="password"
                        placeholder="******"
                        />
                        <button 
                        type="submit"
                        className={styles["primary-button"]}
                        onClick={handleSubmit} 
                        >
                            Log in
                        </button> 
                         <Link href="/recovery-password">Forgot mi password</Link>         
                    </form>

                         <Link href="/signup"  passHref>  
                           <button className={styles["secondary-button-login"]}>
                            Sign up
                           </button> 
                        </Link>  

                </div>
            </div>
        </>
        
    );
};

export default Login;