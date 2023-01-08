import React from 'react';
import logo from '../../assets/logo.png';
import logoW from '../../assets/logo-white.png';

export const LeftComponent = ({ scrollY, isHome }) => {
    const handleMenuLogoType = () => {
        if (isHome) {
            return scrollY > 30 ? logo : logoW;
        }
        else {
            return logo;
        }
    }
    return (
        <div className='logo-container flex-align-center'>
            <img src={handleMenuLogoType()} className="logo" alt="company-logo" />
        </div>
    );
}