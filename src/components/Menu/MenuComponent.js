import React, { useState, useEffect } from 'react';
import { LeftComponent } from './LeftComponent';
import { RightComponent } from './RightComponent';
import { TopInfo } from './TopInfo';
import './TopInfo.css';

export const MenuComponent = ({ isHome }) => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleRootClassName = () => {
        if (isHome) {
            return scrollHeight > 30 ? 'menu-bar bar-visible' : 'menu-bar bar-transparent';
        }
        else {
            return 'menu-bar bar-visible';
        }
    }

    useEffect(() => {
        const handleHeight = () => {
            setScrollHeight(window.scrollY);
        }
        if (isHome) {
            window.addEventListener('scroll', handleHeight);
        }

        return () => window.removeEventListener('scroll', handleHeight);
    }, [isHome]);
    return (
        <div className='menu-bar' style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color:'white',zIndex: 99, display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
                <TopInfo />
            </div>
            <div className={handleRootClassName()}>
                <LeftComponent scrollY={scrollHeight} isHome={isHome} />
                <RightComponent scrollY={scrollHeight} isHome={isHome} />
            </div>
        </div>
    );
}