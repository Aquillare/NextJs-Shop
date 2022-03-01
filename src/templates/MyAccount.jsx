import React from 'react';
import '../styles/MyAccount.scss';
import Header from '../components/Header';

const MyAccount = () => {
    return(
        <>
        <Header/>
        <div className="MyAccount">
            <div className="MyAccount-container">
                <h1 className="title">
                    My account
                </h1>
                <form action="/" className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <p className="value">
                        Camila Yoko
                    </p>
                    <label htmlFor="email" className="label">Email address</label>
                    <p className="value">
                        camilayoko@gmail.com
                    </p>
                    <label htmlFor="password" className="label">Password</label>
                    <p className="value">
                        ******
                    </p>
                    <input 
                    type="submit"
                    value="Edit"
                    className="secondary-button login-button"  
                    />
                </form>
            </div>
        </div>
        </>
    );
};

export default MyAccount; 