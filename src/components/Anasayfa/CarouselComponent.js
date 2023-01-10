import React from 'react';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import '../../i18n'

export const CarouselComponent = ({ config }) => {
    return (
        <div className='carousel-section'>
            <Carousel
                autoplay
                effect='fade'
                lazyLoad='progressive'
                infinite
                arrows
                swipe
                style={{ position: 'relative', zIndex: 3 }}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                draggable>
                {
                    config.map(item => (
                        <div className='carousel-content'>
                            <img
                                key={item.key}
                                src={item.carouselImage}
                                alt={item.carouseHeader}
                                decoding='async'
                                style={{ height: window.innerHeight }}
                                loading='lazy' />
                            <div className='info'>
                                <span>{item.carouselHeader}</span>
                                <h1>{item.carouselSubText}</h1>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}