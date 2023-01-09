import React from 'react';
import { Carousel, Rate, Text } from 'antd';
import Lacoste from "../../assets/lacst.png";

export const WorkBrands = ({ config }) => {

    return (
        <div className='buyer-comments-section'>
            <Carousel
                autoplay
                pauseOnHover
                swipe={true}
                autoplaySpeed={1000}
                waitForAnimate
                dots={false}
                responsive={[{ breakpoint: 900, settings: 'unslick' }]}
                slidesToShow={3}
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
            </Carousel>
        </div>
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