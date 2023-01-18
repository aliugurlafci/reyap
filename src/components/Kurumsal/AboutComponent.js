import React from 'react';
import { Row, Col } from 'antd';
import i18n from '../../i18n';

export const AboutComponent = ({ config }) => {
    return (
        <div className="about-container">
            <Row justify="center" align="middle">
                <Col xs={15} sm={15} md={12} lg={12}>
                    <span className='about-header'>{i18n.t('institutional')}</span>
                </Col>
            </Row>
            <Row wrap gutter={16} align="middle" justify="center">
                <Col xs={22} sm={22} md={12} lg={10}>
                    <img src={config.image} alt="instituonal" className='about-image'
                    />
                </Col>
                <Col xs={22} sm={20} md={12} lg={10} className="boxMain">
                    {
                        config.details.map((item, index) => (
                            <div className='text' key={`key-of-${index}`}>
                                {item}
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </div>
    );
}