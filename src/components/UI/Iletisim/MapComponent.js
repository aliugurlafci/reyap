import React from 'react';
import { Col, Row } from 'antd';

export const MapComponent = () => {
    return (
        <div className="product-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Col className="product-header-container">
                    <span className='product-header'>İLETİŞİM</span>
                </Col>
            </Row>
            <div>
                <iframe
                    width="50%"
                    height="356"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    id="gmap_canvas"
                    title='reyap-map'
                    src="https://maps.google.com/maps?width=520&amp;height=356&amp;hl=en&amp;q=Sultanbeyli%20Istanbul+(Our%20Office)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    );
}