import React, { useState, useEffect } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Skeleton, Col, Row, Menu, Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

export const ProductComponent = () => {
    const config = useSelector(state => state.config);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const [currentKey, setCurrentKey] = useState("1");
    const [pageSize, setPageSize] = useState(12);

    useEffect(() => {
        console.log(config.data);
    }, [config]);

    const navigateToDetailsPage = (index) => {
        navigate("/detaylar", { state: index });
    }

    const dl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1,
        11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];

    const RenderSelectedGroupItems = () => {
        return (
            <Row wrap gutter={16} className="product-row">
                {dl.map((i, k) => {
                    return k >= (currentPageIndex - 1) * pageSize && k < currentPageIndex * pageSize ?
                        <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                            <Card
                                onClick={() => navigateToDetailsPage(i)}
                                key={i}
                                className="product-card"
                                style={{
                                    marginBottom: 16,
                                    cursor: 'pointer'
                                }}
                                cover={
                                    loading ? <></> : <img src='https://www.burakplastik.net/wp-content/themes/burakplastik/resizer.php?src=https://www.burakplastik.net/wp-content/uploads/2021/08/F86F881E-CFFF-453E-ABE9-FB664B532A2B-480x420.jpeg&w=260&h=260&zc=2'
                                        className='item-cover-image' alt='item' />
                                }>
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Product title"
                                        description="Product description"
                                        style={{ paddingBottom: 15, marginLeft: 15 }}
                                    />
                                </Skeleton>
                            </Card>
                        </Col> : <></>
                })
                }
            </Row>
        );
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [currentKey, pageSize, currentPageIndex]);

    return (
        <div className="product-container">
            <Row wrap justify="center" style={{ marginBottom: 25, padding: 30 }}>
                <Col className="product-header-container">
                    <span className='product-header'>Ürünlerimiz</span>
                </Col>
            </Row>
            <Row wrap gutter={16} className="flex-row">
                <Col xs={24} sm={24} md={6} lg={4} xl={3} style={{ marginBottom: 16 }}>
                    <div className='product-menu'>
                        <Menu
                            defaultActiveFirst
                            defaultSelectedKeys={[currentKey]}
                            mode="vertical"
                            theme="light"
                            className={'category-menu'}
                            onClick={active => setCurrentKey(active.key)}
                            inlineCollapsed={false}
                            items={[
                                {
                                    label: 'Kategori 1',
                                    key: "1",
                                    icon: currentKey === "1" ? <ArrowRightOutlined /> : <></>,
                                },
                                {
                                    label: 'Kategori 2',
                                    key: "2",
                                    icon: currentKey === "2" ? <ArrowRightOutlined /> : <></>
                                },
                                {
                                    label: 'Kategori 3',
                                    key: "3",
                                    icon: currentKey === "3" ? <ArrowRightOutlined /> : <></>
                                },
                            ]}
                        />
                    </div>
                </Col>
                <Col xs={22} sm={24} md={18} lg={20} xl={21}>
                    <div className='product-list'>
                        <RenderSelectedGroupItems />
                    </div>
                </Col>
            </Row>
            <Row wrap gutter={16} style={{ marginTop: 25 }} justify="center">
                <Col>
                    <Pagination
                        current={currentPageIndex}
                        onChange={pageNumber => setCurrentPageIndex(pageNumber)}
                        defaultCurrent={1}
                        total={dl.length}
                        showSizeChanger
                        onShowSizeChange={(current, pageSize) => setPageSize(pageSize)}
                        showLessItems
                        responsive
                        defaultPageSize={12}
                        pageSizeOptions={[
                            12,
                            24,
                            48,
                            60,
                            72
                        ]} />
                </Col>
            </Row>
        </div>
    );
}
