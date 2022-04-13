import Head from 'next/head';
import React, {useRef, useState} from 'react';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import { useAuth } from '@hooks/useAuth';
import styles from'@styles/Login.module.scss';
import { useRouter } from 'next/router';
import Loading from '@common/Loading';


const Login = () => {
    const auth = useAuth();
    const form = useRef(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(form.current);
        const datas = {
            username: formData.get('email'),
            password: formData.get('password'),
        };

        auth.login(datas.username,datas.password)
            .then( () => router.push('/'))
            .then( () => setLoading(false))
            .catch( error => {setErrorMessage(error.message);setLoading(false); setTimeout(() => setErrorMessage(null), 6000)});
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            { loading ? 
             <Loading/>
             :
             <div className={styles.Login}>
                <div className={styles["Login-container"]}>
                    <img 
                    src={logo.src}
                    alt="logo"
                    className={styles["logo-login"]}  
                    />
                    <form action="/" className={styles.form} ref={form} onSubmit={handleSubmit}>
                        <label htmlFor="email" className={styles.label}>Email addres</label>
                        <input 
                        type="email" 
                        className={styles["input"]}
                        name="email"
                        required="required"
                        placeholder="email@example.com"
                        />
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                        type="password"
                        className={styles["input"]}
                        name="password"
                        required="required"
                        placeholder="******"
                        />
                        <button 
                        type="submit"
                        className={styles["primary-button"]}
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
                        {errorMessage ? <p>{errorMessage}</p> : null}
                </div>
                 
            </div>
            }
            
        </>
        
    );
};

export default Login;