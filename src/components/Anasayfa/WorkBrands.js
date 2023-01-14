import React from 'react';
import { Carousel, Row, Col } from 'antd';


export const WorkBrands = ({ config }) => {
    const carouselResize = () => {
        const leng = config.lenth;
        return leng < 6 ? leng < 5 ? leng < 4 ? leng < 3 : 2 : 3 : 4
    }
    return (
        <Row
            className='buyer-comments-section'
            justify="center"
            align="middle">
            <Col xs={24} sm={22} md={20} lg={20}>
                <div className='header'>
                    <h3>Satış Noktalarımız</h3>
                </div>
                <Carousel
                    autoplay
                    pauseOnHover
                    swipe={true}
                    autoplaySpeed={1000}
                    waitForAnimate
                    dots={false}
                    responsive={[{ breakpoint: 800, settings: 'unslick' }]}
                    slidesToShow={carouselResize()}
                    swipeToSlide
                    adaptiveHeight
                    centerMode
                    variableWidth={false}
                    className='comment-carousel center'
                    speed={2400}>
                    {
                        config.map(item => (
                            <div className='comment-content' key={item.key}>
                                <div className='image-side'>
                                    <a href={item.clickEventUrl} alt="no">
                                        <img
                                            src={item.icon}
                                            alt='test'
                                        />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
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