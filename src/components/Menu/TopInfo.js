import React from 'react';
import { Col } from 'antd';
import './TopInfo.css';
import tr from '../../assets/turkey.png';
import eng from '../../assets/united-kingdom.png';

export const TopInfo = () => {

    return (
        <div className='infoMain'>
            <div className='colInfo'>
                <img src={tr} style={{ width: 30, height: 30 }} />
            </div>
            <div className='colInfo'>
                <img src={eng} style={{ width: 30, height: 26, border: 1, borderRadius:10 }} />
            </div>
        </div>
    );
}