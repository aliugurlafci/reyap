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
                <div className='carousel-content'>
                    <img
                        src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg"
                        alt="carousel-1"
                        decoding='async'
                        style={{ height: window.innerHeight }}
                        loading='lazy' />
                    <div className='info'>
                        <span>First information header</span>
                        <h1>First information Details</h1>
                    </div>
                </div>
                <div className='carousel-content'>
                    <img
                        src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg"
                        alt="carousel-1"
                        decoding='async'
                        style={{ height: window.innerHeight }}
                        loading='lazy' />
                    <div className='info'>
                        <span>First information header</span>
                        <h1>First information Details</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}