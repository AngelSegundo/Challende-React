import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { DataContext } from '../../context/Datacontext'
import Proyects from '../Projects/Projects';
import './LoginForm.css'


const LoginForm = () => {

    const { loginEmail, setLoginEmail, loginPassword, setLoginPassword, loginDetails, setLoginDetails } = useContext(DataContext);
    const [user, setUser] = useState(false);



    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));
        console.log(loginDetails);
    };

    return (
        <div className='loginPage'>
            <div className='baner'></div>
            <div className='content'>
                <div className='header'>
                    <div className='logoBackGround'></div>
                    <div className='text'>
                        <p>Iniciar sesión</p>
                    </div>
                </div>
                <div className='card'>
                    <form onSubmit={submitHandler}>
                        <div className='emailBox'>
                            <label className='email'>
                                Email
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={loginDetails.email}
                                        onBlur={changeHandler}
                                        required
                                        placeholder='you@example.com'
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='passwordBox'>
                            <label className='password'>
                                Password
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        defaultValue={loginDetails.password}
                                        onBlur={changeHandler}
                                        required
                                        placeholder='********'
                                    />
                                </div>
                            </label>
                        </div>
                        <button type="submit"> Acceder </button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default LoginForm