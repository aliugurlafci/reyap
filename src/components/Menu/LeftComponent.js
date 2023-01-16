import React from 'react';
import logo from '../../assets/logo.png';

export const LeftComponent = () => {
    return (
        <div className='logo-container flex-align-center'>
            <a href="/">
                <img src={logo} className="logo" alt="company-logo" />
            </a>
        </div>
    );
}