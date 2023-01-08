import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import './footer.css'

export const FooterComponent = () => {
    const [env, setEnv] = useState(window.location.href.replace("https://aliugurlafci.github.io/reyap/", ""));
    const { Footer } = Layout;

    useEffect(() => {
        setEnv(window.location.href.replace("https://aliugurlafci.github.io/reyap", ""));
    }, [env]);

    return (
        <Footer className='footer'>
            <div className='footer-top'>
            <Row style={{ color: 'white' }} className='right'>
                <Col style={{marginLeft : 10}}>Telefon : {}</Col>
                <Col>Adres : {}</Col>
                <Col>E-mail : {}</Col>
            </Row>
            <Row style={{ color: 'white' }} className='left'>
                <Col style={{marginLeft : 10}}>Twitter</Col>
                <Col>İnstagram</Col>
            </Row>
            </div>
            <Row style={{ color: 'white' }} className='center'>Copyright © 2022 Reyap Plastik</Row>
        </Footer>
    );
}