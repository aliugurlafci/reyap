import React from 'react';
import {
    Row,
} from 'antd';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

export const LocationComponent = () => {
    return (
        <div className='contact-location-main'>
            <Row align="middle">
                <div className='items'>
                    <div className='item'>
                        <HomeOutlined style={{ fontSize: 30, marginRight: 20, color: 'green' }} />
                        <p>HASANPAŞA MAH. FATİH BULV. FATİH İŞ MERK. NO:5/2 SULTANBEYLİ/İSTANBUL</p>
                    </div>
                    <div className='item'>
                        <PhoneOutlined style={{ fontSize: 30, marginRight: 20, color: 'green' }} />
                        <p>+90 (534) 424 44 23</p>
                    </div>
                    <div className='item'>
                        <MailOutlined style={{ fontSize: 30, marginRight: 20, color: 'green' }} />
                        <p>satis@reyapgroup.com</p>
                    </div>
                </div>
            </Row>
        </div>
    );
}