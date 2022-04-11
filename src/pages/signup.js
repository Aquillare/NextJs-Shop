import React, { useRef, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/CreateAccount.module.scss';
import Loading from 'common/loading';

const CreateAccount = () => {
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);

    const auth = useAuth();

    const [loading,setLoading] = useState(false);
    //const [errorMessage, setErrorMessage] = useState();

    /*const showError= (err) => {
        setErrorMessage(err);
        setTimeout( () => {setErrorMessage()}, 3000)
    }*/

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const phone = parseInt(phoneRef.current.value);
        
        console.log(name,lastName,phone,email,password);
        
    
        auth.signUp(name,lastName,phone,email,password)
            .then( data => console.log(data))
            .then( () => console.log(errorMessage))
            .then( () => {setLoading(false)})
            .catch(error => {console.log(error);setLoading(false)});
      
    };

    return(
        <>
        { loading ? <Loading/> :<div className={styles.CreateAccount}>
        <div className={styles["CreateAccount-container"]}>
            <h1 className={styles.title}>My account</h1>
            <form action="/" className={styles.form} onSubmit={submitHandler}>
                <label htmlFor="name" className={styles.label}>
                    Name
                </label>
                <input
                type="text"
                className={styles.input}
                id="name"
                placeholder="name"
                required='required'
                ref={nameRef}
                />
                <label htmlFor='lastName' className={styles.label}>
                    Last name
                </label>
                <input
                type='text'
                className={styles.input}
                id='lastName'
                placeholder='last name'
                required='required'
                ref={lastNameRef}
                >
                </input>
                <label htmlFor='phone' className={styles.label}>Phone</label>
                <input 
                type='text'
                className={styles.input}
                id='phone'
                placeholder='1162995541'
                required='required'
                ref={phoneRef}
                ></input>
                <label htmlFor="email" className={styles.label}>Email addres</label>
                <input 
                type="email"
                className={styles.input}
                id="email"
                placeholder="name@example.com"
                required='required'
                ref={emailRef}
                />
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                type="password"
                className={styles.input}
                id="password"
                placeholder="******"
                required='required'
                ref={passwordRef}
                />
                <button 
                type="submit"
                className={styles["primary-button"]}
                >Create
                </button>
            </form>
            {/*
                errorMessage ? <p>{errorMessage}</p>  : null
            */}
                   
        </div>
       
    </div> }
    </>
    );
};

export default CreateAccount;