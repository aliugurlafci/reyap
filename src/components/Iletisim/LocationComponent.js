import React, { useState } from 'react';
import {
    Row,
    Form,
    Input,
    Button,
    Col
} from 'antd';
import i18n from '../../i18n';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const LocationComponent = () => {
    return (
        <div className='contact-location-main'>
            <Row>
                <div className='items'>
                    <div className='item'>
                        <HomeOutlined style={{fontSize: 30, marginRight:20, color:'green'}} />
                        <p>HASANPAŞA MAH. FATİH BULV. FATİH İŞ MERK. NO:5/2 SULTANBEYLİ/İSTANBUL</p>
                    </div>
                    <div className='item'>
                        <PhoneOutlined style={{fontSize: 30, marginRight:20, color:'green'}} />
                        <p>+90 (530) 247 26 74</p>
                    </div>
                    <div className='item'>
                        <MailOutlined style={{fontSize: 30, marginRight:20, color:'green'}} />
                        <p>satis@reyapgroup.com</p>
                    </div>
                </div>
            </Row>
        </div>
    );
}