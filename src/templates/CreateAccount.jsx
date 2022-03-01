import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return(
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                    type="text"
                    className="input input-name"
                    id="name"
                    placeholder="nombre"
                    />
                    <label htmlFor="email" className="label">Email addres</label>
                    <input 
                    type="email"
                    className="input input-email"
                    id="email"
                    placeholder="nombre@example.com"
                    />
                    <label htmlFor="password" className="label">Password</label>
                    <input
                    type="password"
                    className="input  input-password"
                    id="password"
                    placeholder="******"
                    />
                    <button 
                    type="button"
                    className="primary-button create-button"
                    >Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;