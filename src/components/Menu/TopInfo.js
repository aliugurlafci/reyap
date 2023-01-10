import React from 'react';
import './TopInfo.css';
import tr from '../../assets/turkey.png';
import eng from '../../assets/united-kingdom.png';
import { useDispatch } from 'react-redux';

export const TopInfo = () => {
    const dispatch = useDispatch();

    const notifyLanguageChange = (language) => {
        dispatch({ type: 'LANGUAGE_CHANGED', payload: language });
    }

    return (
        <div className='infoMain'>
            <div className='colInfo'>
                <a href onClick={() => notifyLanguageChange('tr')}>
                    <img src={tr} style={{ width: 30, height: 30 }} alt="TR" />
                </a>
            </div>
            <div className='colInfo'>
                <a href onClick={() => notifyLanguageChange("en")}>
                    <img src={eng} style={{ width: 30, height: 26, border: 1, borderRadius: 10 }} alt="EN" onClick={() => notifyLanguageChange('en')} />
                </a>
            </div>
        </div>
    );
}