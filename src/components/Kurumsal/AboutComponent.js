import React from 'react';
import { Row, Col } from 'antd';
import i18n from '../../i18n';

export const AboutComponent = ({ config }) => {
    return (
        <div className="about-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }} gutter={16}>
                <Row className="about-header-container">
                    <span className='about-header'>{i18n.t('institutional')}</span>
                    <Col xs={24} sm={24} md={10} lg={10}>
                        <img src={config.image} alt="instituonal" className='about-image'
                        />
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={10}>
                        <div className="boxMain">
                            {config.details}
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}