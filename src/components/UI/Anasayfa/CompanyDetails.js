import React from 'react';
import { Col, Row } from 'antd';
import ReactPlayer from 'react-player/lazy'

export const CompanyDetails = () => {
    return (
        <div className='company-details'>
            <Row className='company-details-row'>
                <Col xs={24} sm={24} md={14} lg={16}>
                    <div className='details'>
                        <span className='poppins-bold'>Header</span>
                        <h1 className='poppins-regular'>
                            Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description
                            Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description Detailed Description
                        </h1>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={8}>
                    <div className='video-container'>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JkaxUblCGz0"
                            width='100%'
                            pip
                            playing

                            loop
                            controls
                            config={{
                                file: {
                                    forceVideo: true
                                }
                            }}
                            stopOnUnmount={false}
                            height='100%' />
                    </div>
                </Col>
            </Row>
        </div>
    );
}