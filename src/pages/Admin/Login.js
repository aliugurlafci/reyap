import React from 'react';
import '../../css/Login.css';
import { LoginComponent } from '../../components/index';

export default function Login() {
    return (
        <div className='login-page' style={{height:window.innerHeight}}>
            <LoginComponent />
        </div>
    );
}