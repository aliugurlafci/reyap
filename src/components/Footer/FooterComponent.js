import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './footer.css';
import {
    FacebookOutlined,
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
                    <Col style={{ marginTop: 5 }} className="poppins-regular">{i18n.t('phone')} : +90 (534) 424 44 23</Col>
                    <Col style={{ marginTop: 5 }} className="poppins-regular">{i18n.t('mailaddress')} : satis@reyapgroup.com</Col>
                </Row>
                <Row style={{ color: 'white' }} className='right-footer' gutter={[0, 8]}>
                    <a style={{color:'white'}} href="https://www.instagram.com/reyapgroup_/">
                        <Col className='item'>@reyapgroup<InstagramOutlined style={{ fontSize: 30, marginLeft: 10 }} /></Col>
                    </a>
                    <a style={{color:'white'}} href='https://www.facebook.com/reyapgroup_/'>
                        <Col className='item'>@reyapgroup<FacebookOutlined style={{ fontSize: 30, marginLeft: 10 }} /></Col>
                    </a>
                </Row>
            </div>
            <Row style={{ color: 'white' }} className='center poppins-regular'>Copyright © 2022 Reyap Plastik</Row>
        </Footer>
    );
}