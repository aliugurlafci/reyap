import React from 'react';
import { Carousel, Rate } from 'antd';

export const BuyerCommentComponent = () => {

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
                            src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                            alt='test'
                        />
                    </div>
                    <div className='comment-side align-center'>
                        <span>This is comment section...Type something here </span>
                    </div>
                    <div className='footer-side'>
                        <Rate
                            allowHalf={false}
                            allowClear={false}
                            disabled
                            defaultValue={5} />
                    </div>
                </div>
                <div className='comment-content'>
                    <div className='image-side'>
                        <img
                            src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                            alt='test'
                        />
                    </div>
                    <div className='comment-side align-center'>
                        <span>
                            This is comment section...Type something here
                            This is comment section...Type something here
                            This is comment section...Type something here
                            This is comment section...Type something here
                            This is comment section...Type something here
                            This is comment section...Type something here
                            This is comment section...Type something here
                        </span>
                    </div>
                    <div className='footer-side'>
                        <Rate
                            allowHalf={false}
                            allowClear={false}
                            disabled
                            defaultValue={5} />
                    </div>
                </div>
                <div className='comment-content'>
                    <div className='image-side'>
                        <img
                            src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                            alt='test'
                        />
                    </div>
                    <div className='comment-side align-center'>
                        <span>This is comment section...Type something here </span>
                    </div>
                    <div className='footer-side'>
                        <Rate
                            allowHalf={false}
                            allowClear={false}
                            disabled
                            defaultValue={5} />
                    </div>
                </div>
                <div className='comment-content'>
                    <div className='image-side'>
                        <img
                            src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                            alt='test'
                        />
                    </div>
                    <div className='comment-side align-center'>
                        <span>This is comment section...Type something here </span>
                    </div>
                    <div className='footer-side'>
                        <Rate
                            allowHalf={false}
                            allowClear={false}
                            disabled
                            defaultValue={5} />
                    </div>
                </div>
                <div className='comment-content'>
                    <div className='image-side'>
                        <img
                            src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                            alt='test'
                        />
                    </div>
                    <div className='comment-side align-center'>
                        <span>This is comment section...Type something here </span>
                    </div>
                    <div className='footer-side'>
                        <Rate
                            allowHalf={false}
                            allowClear={false}
                            disabled
                            defaultValue={5} />
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
                                    src='https://istanbulplastik.com/wp-content/uploads/2020/12/customer2.jpg'
                                    alt='test'
                                />
                            </div>
                            <div className='comment-side'></div>
                            <div className='footer-side'></div>
                        </div>
 */