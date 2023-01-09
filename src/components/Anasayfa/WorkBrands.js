import React from 'react';
import { Carousel, Row, Col } from 'antd';
import Lacoste from "../../assets/lacst.png";

export const WorkBrands = ({ config }) => {

    return (
        <Row
            className='buyer-comments-section'
            justify="center"
            align="middle">
            <Col xs={20} sm={20} md={20} lg={20}>
                <Carousel
                    autoplay
                    pauseOnHover
                    swipe={true}
                    autoplaySpeed={1000}
                    waitForAnimate
                    dots={false}
                    responsive={[{ breakpoint: 900, settings: 'unslick' }]}
                    slidesToShow={4}
                    swipeToSlide
                    adaptiveHeight
                    variableWidth={false}
                    className='comment-carousel'
                    speed={2400}>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='image-side'>
                            <img
                                src={Lacoste}
                                alt='test'
                            />
                        </div>
                    </div>

                </Carousel>
            </Col>
        </Row>
    );
}

/**
 * xs={22} sm={11} md={8} lg={4}
 * <div className='comment-content'>
                            <div className='image-side'>
                                <img
                                    src={Lacoste}
                                    alt='test'
                                />
                            </div>
                            <div className='comment-side'></div>
                            <div className='footer-side'></div>
                        </div>
 */