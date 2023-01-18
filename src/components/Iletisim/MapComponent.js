import React from 'react';
import {
    Row,
    Col
} from 'antd';
import i18n from '../../i18n';

export const MapComponent = () => {
    return (
        <div className="contact-container">
            <Row wrap align="middle" justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Col className="contact-header-container flex-align-center" xs={24}>
                    <span className='contact-header'>{i18n.t('contact')}</span>
                    <div className='contact-body'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.427083688976!2d29.24657831566132!3d40.97212802959696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad01697c3c0e7%3A0xbfedeb715d949d67!2zRmF0aWggxLDFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1673380056661!5m2!1str!2str"
                            height="100%"
                            width="100%"
                            className='contact-map'
                            style={{ border: 1 }}
                            loading="lazy"
                            title='reyap-map'
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
        </div>
    );
}