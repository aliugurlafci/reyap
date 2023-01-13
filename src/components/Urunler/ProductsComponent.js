import React, { useState, useEffect } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Skeleton, Col, Row, Menu, Pagination, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import i18n from '../../i18n';

const { Meta } = Card;

export const ProductComponent = ({ categories, products }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const [currentKey, setCurrentKey] = useState(1);

    const navigateToDetailsPage = (index) => {
        navigate("/detaylar", {
            state: {
                products: products,
                key: index
            }
        });
    }
    const RenderSelectedGroupItems = () => {
        return (
            <Row wrap gutter={16} className="product-row">
                {products.map(item => {
                    return currentKey !== 1 && item.category === categories[currentKey - 1].name ?
                        <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.key}>
                            <Card
                                hoverable
                                onClick={() => navigateToDetailsPage(item.key)}
                                className="product-card"
                                style={{
                                    marginBottom: 16,
                                    cursor: 'pointer',
                                    maxWidth: 280,
                                    minHeight: 330
                                }}
                            >
                                {loading ? <></> : <img src={item.image[0].url}
                                    className='item-cover-image' alt='item' />}
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title={item.name}
                                        description={item.productCode}
                                        style={{ paddingBottom: 15, marginLeft: 15 }}
                                    />
                                </Skeleton>
                            </Card>
                        </Col> : <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.key}>
                            <Card
                                hoverable
                                onClick={() => navigateToDetailsPage(item.key)}
                                className="product-card"
                                style={{
                                    marginBottom: 16,
                                    cursor: 'pointer',
                                    maxWidth: 280,
                                    minHeight: 330
                                }}
                            >
                                {loading ? <></> : <img src={item.image[0].url}
                                    className='item-cover-image' alt='item' />}
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title={item.name}
                                        description={item.productCode}
                                        style={{ paddingBottom: 15, marginLeft: 15 }}
                                    />
                                </Skeleton>
                            </Card>
                        </Col>
                })
                }
            </Row>
        );
    }
    const handleOnMenuClick = (key) => {
        setCurrentKey(key);
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [currentKey, currentPageIndex]);

    return (
        <div className="product-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Col className="product-header-container">
                    <span className='product-header'>{i18n.t('products')}
                        <Divider style={{ color: '#000' }} type="horizontal" /></span>
                </Col>
            </Row>
            <Row wrap gutter={16} className="flex-row">
                <Col xs={24} sm={24} md={4} lg={4} style={{ marginBottom: 16 }}>
                    <div className='product-menu'>
                        <Menu
                            defaultSelectedKeys={[currentKey]}
                            mode="vertical"
                            theme="light"
                            className='category-menu'
                            onClick={active => handleOnMenuClick(active.key)}
                            inlineCollapsed={false}
                            items={
                                categories.map((item) => {
                                    return {
                                        key: item.key,
                                        label: item.name,
                                        icon: currentKey === item.key ? <ArrowRightOutlined /> : <></>,
                                    }
                                })
                            }
                        />
                    </div>
                </Col>
                <Col xs={22} sm={22} md={18} lg={18}>
                    <RenderSelectedGroupItems />
                </Col>
            </Row>
            <Row wrap gutter={16} style={{ marginTop: 25 }} justify="center">
                <Col>
                    <Pagination
                        current={currentPageIndex}
                        onChange={pageNumber => setCurrentPageIndex(pageNumber)}
                        defaultCurrent={1}
                        total={products.length}
                        showSizeChanger={false}
                        showLessItems
                        responsive />
                </Col>
            </Row>
        </div>
    );
}

/*  0534 424 44 23  */