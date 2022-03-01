import React from 'react';
import '@styles/RecoveryPassword.scss';

import logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
    return(
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={logo} alt="logo" className="logo-login"/>
                <h1 className="title-center">
                    Password recovery
                </h1>
                <p className="subtitle">
                Inform the email address used to create your account
                </p>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email addres</label>
                    <input type="text" id="email" className="input input-email"/>
                    <button type="button" className="primary-button login-button">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default RecoveryPassword;