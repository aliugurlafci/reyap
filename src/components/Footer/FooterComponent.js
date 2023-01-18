import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
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
        <Footer className="footer">
            <Row style={{ color: 'white' }} className='footer-top' gutter={[0, 16]}>
                <Col xs={24} sm={24} md={12} lg={8} className="footer-info">
                    <span className="poppins-regular">{i18n.t('phone')} : +90 (534) 424 44 23</span>
                    <span className="poppins-regular">{i18n.t('mailaddress')} : satis@reyapgroup.com</span>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} className="footer-social-links">
                    <a style={{ color: 'white' }} href="https://www.instagram.com/reyapgroup_/">
                        <span xs={24} sm={24} className='item'>@reyapgroup<InstagramOutlined style={{ fontSize: 30, marginLeft: 10 }} /></span>
                    </a>
                    <a style={{ color: 'white' }} className="second-link" href='https://www.facebook.com/reyapgroup_/'>
                        <span className='item'>@reyapgroup<FacebookOutlined style={{ fontSize: 30, marginLeft: 10 }} /></span>
                    </a>
                </Col>
            </Row>
            <Row style={{ color: 'white', marginTop: 32, fontStyle: 'italic' }} className='center poppins-regular'>Copyright © 2023 Reyap Plastik</Row>
        </Footer>
    );
}