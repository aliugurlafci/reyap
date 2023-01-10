import React from 'react';
import { LeftComponent } from './LeftComponent';
import { RightComponent } from './RightComponent';
import { TopInfo } from './TopInfo';
import './TopInfo.css';

export const MenuComponent = () => {

    return (
        <div className='menu-bar' style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'white', zIndex: 99, display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
                <TopInfo />
            </div>
            <div className='menu-bar bar-visible'>
                <LeftComponent />
                <RightComponent />
            </div>
        </div>
    );
}