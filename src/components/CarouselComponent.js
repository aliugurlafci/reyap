import React from 'react';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

export const CarouselComponent = () => {
    return (
        <Carousel
            autoplay
            effect='fade'
            lazyLoad='progressive'
            infinite
            arrows
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            draggable>
            <div className='carousel-content'>
                <div className='dark-filter'></div>
                <img
                    src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg"
                    alt="carousel-1"
                    decoding='async'
                    loading='lazy' />
                <div className='info'>
                    <span>First information header</span>
                    <h1>First information Details</h1>
                </div>
            </div>
            <div className='carousel-content'>
                <div className='dark-filter'></div>
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg" alt="carousel-1" />
                <div className='info'>
                    <span className='poppins-regular'>Second information header</span>
                    <h1 className='poppins-regular'>Second information Details</h1>
                </div>
            </div>
            <div className='carousel-content'>
                <div className='dark-filter'></div>
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg" alt="carousel-1" />
                <div className='info'>
                    <span className='poppins-regular'>Thirth information header</span>
                    <h1 className='poppins-regular'>Thirth information Details</h1>
                </div>
            </div>
            <div className='carousel-content'>
                <div className='dark-filter'></div>
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/10/29/thumbs_b_c_50d84e332243b7e83777e2a4991e0a92.jpg" alt="carousel-1" />
                <div className='info'>
                    <span className='poppins-regular'>Fourth information header</span>
                    <h1 className='poppins-regular'>Fourth information Details</h1>
                </div>
            </div>
        </Carousel>
    );
}