import React, { useEffect, useState } from 'react';
import { Layout, Col, Row } from 'antd';

export const FooterComponent = () => {
    const [env, setEnv] = useState(window.location.href.replace("https://aliugurlafci.github.io/reyap/", ""));
    const { Footer } = Layout;

    useEffect(() => {
        setEnv(window.location.href.replace("https://aliugurlafci.github.io/reyap", ""));
    }, [env]);

    return (
        <Footer className='footer'>
            <Row style={{color:'white'}} className='center'>Copyright © 2022 Reyap Plastik</Row>
        </Footer>
    );
}