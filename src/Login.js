import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png' alt='' />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
