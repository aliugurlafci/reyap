import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import './footer.css';
import {
    TwitterOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import i18n from '../../i18n';

export const FooterComponent = () => {
    const [env, setEnv] = useState(window.location.href.replace("https://aliugurlafci.github.io/reyap/", ""));
    const { Footer } = Layout;

    useEffect(() => {
        setEnv(window.location.href.replace("https://aliugurlafci.github.io/reyap", ""));
    }, [env]);

    return (
        <Footer className='footer'>
            <div className='footer-top'>
                <Row style={{ color: 'white' }} className='left-footer'>
                    <Col style={{ marginTop: 5 }} className="poppins-regular">{i18n.t('phone')} : +90 (534) 434 44 23</Col>
                    <Col style={{ marginTop: 5 }} className="poppins-regular">{i18n.t('mailaddress')} : satis@reyapgroup.com</Col>
                </Row>
                <Row style={{ color: 'white' }} className='right-footer'>
                    <Col className='item'>@reyapgroup<InstagramOutlined style={{ fontSize: 30, marginLeft:10 }} /></Col>
                    <Col className='item'>@reyapgroup<TwitterOutlined style={{ fontSize: 30, marginLeft:10 }} /></Col>
                </Row>
            </div>
            <Row style={{ color: 'white' }} className='center poppins-regular'>Copyright © 2022 Reyap Plastik</Row>
        </Footer>
    );
}