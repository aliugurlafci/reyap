import React from 'react';
import { Row } from 'antd';
import logo from '../../assets/logo.png'

export const AboutComponent = ({ config }) => {
    return (
        <div className="about-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Row className="about-header-container">
                    <span className='about-header'>Kurumsal</span>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div>
                            <img src={logo} alt="instituonal"
                                style={{ width: 300, height: 300 }} />
                        </div>
                        <div className="boxMain">
                            <h1>What is Lorem Ipsum?</h1>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </Row>
            </Row>
        </div>
    );
}