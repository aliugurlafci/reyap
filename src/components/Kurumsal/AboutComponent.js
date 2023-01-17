import React from 'react';
import { Row, Col } from 'antd';
import i18n from '../../i18n';

export const AboutComponent = ({ config }) => {
    return (
        <div className="about-container">
            <span className='about-header'>{i18n.t('institutional')}</span>
            <Row wrap gutter={16} align="middle" justify="center">
                <Col>
                    <img src={config.image} alt="instituonal" className='about-image'
                    />
                </Col>
                <Col >
                    <div className="boxMain">
                        {
                            config.details.map(item => (
                                <div className='text'>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
}