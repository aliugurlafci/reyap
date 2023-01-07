import React from 'react';
import { Col } from 'antd';
import '../../../css/TopInfo.css';
import {
    MailOutlined,
    WhatsAppOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';

export const TopInfo = () => {

    return (
        <div className='infoMain'>
            <div className='colInfo'>
                <MailOutlined />
                <Col className='colText'>info@reyap.com</Col>
            </div>
            <div className='colInfo'>
                <WhatsAppOutlined />
                <Col className='colText'>90542734283</Col>
            </div>
            <div className='colInfo'>
                <EnvironmentOutlined />
                <Col className='colText'>İstanbul / Pendik</Col>
            </div>
        </div>
    );
}