import React from 'react';
import { Row } from 'antd';
import logo from '../../assets/logo.png'

export const AboutComponent = ({ config }) => {
    return (
        <div className="about-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Row className="about-header-container">
                    <span className='about-header'>Kurumsal</span>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <img src={config.image} alt="instituonal"
                                style={{ width: 300, height: 300 }} />
                        </div>
                        <div className="boxMain">
                            <h1>{config.title}</h1>
                            {config.details}
                        </div>
                    </div>
                </Row>
            </Row>
        </div>
    );
}