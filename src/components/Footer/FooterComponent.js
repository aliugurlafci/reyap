import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import './footer.css';
import {
    TwitterOutlined,
    InstagramOutlined
  } from '@ant-design/icons';

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
                    <Col>Adres : HASANPAŞA MAH. FATİH BULV. FATİH İŞ MERK. NO:5/2 SULTANBEYLİ/İSTANBUL</Col>
                    <Col style={{marginTop:5}}>Telefon : +90 (530) 247 26 74</Col>
                    <Col style={{marginTop:5}}>E-mail : satis@reyapgroup.com</Col>
                </Row>
                <Row style={{ color: 'white' }} className='right-footer'>
                    <Col><InstagramOutlined style={{fontSize:40 }}/></Col>
                    <Col style={{ marginLeft: 10 }}><TwitterOutlined style={{fontSize:40}}/></Col>
                </Row>
            </div>
            <Row style={{ color: 'white' }} className='center'>Copyright © 2022 Reyap Plastik</Row>
        </Footer>
    );
}