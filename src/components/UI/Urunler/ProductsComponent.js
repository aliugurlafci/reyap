import React, { useState, useEffect } from 'react';
import { ArrowRightOutlined, ShoppingOutlined, MonitorOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Col, Row, Menu, Pagination, Empty } from 'antd';
import { ProductDetailsComponent } from './ProductDetailsComponent';

const { Meta } = Card;

export const ProductComponent = () => {
    const [loading, setLoading] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const [currentKey, setCurrentKey] = useState("1");
    const [pageSize, setPageSize] = useState(12);
    const [drawerState, setDrawerState] = useState(false);

    const dl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1,
        11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];

    const RenderSelectedGroupItems = () => {
        return (
            <>
                <ProductDetailsComponent
                    drawerState={drawerState}
                    setDrawerState={setDrawerState}
                    item="drawer details item" />
                <Row wrap gutter={16} className="product-row">
                    {dl.map((i, k) => {
                        return k >= (currentPageIndex - 1) * pageSize && k < currentPageIndex * pageSize ?
                            <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                                <Card
                                    key={i}
                                    style={{
                                        width: '100%',
                                        marginBottom: 16
                                    }}
                                    hoverable
                                    actions={[
                                        <ShoppingOutlined style={{ fontSize: 24 }} />,
                                        <MonitorOutlined
                                            key="ellipsis"
                                            onClick={() => setDrawerState(true)}
                                            style={{ fontSize: 24 }} />,
                                    ]}
                                    cover={
                                        loading ? <></> : <Empty
                                            image="data:image/png;base64,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"
                                            description={false} />
                                    }>
                                    <Skeleton loading={loading} avatar active>
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    size={'large'}
                                                    src={require('../../../assets/logo.png')}
                                                    style={{ marginLeft: 15 }} />
                                            }
                                            title="Product title"
                                            description="Product description"
                                            style={{ paddingBottom: 15 }}
                                        />
                                    </Skeleton>
                                </Card>
                            </Col> : <></>
                    })}
                </Row>
            </>
        );
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
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
                            theme="dark"
                            style={{
                                backgroundColor: '#143d2b',
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8,
                                height: '100%'
                            }}
                            onClick={active => setCurrentKey(active.key)}
                            inlineCollapsed={false}
                            items={[
                                {
                                    label: 'Kategori 1',
                                    key: "1",
                                    icon: currentKey === "1" ? <ArrowRightOutlined /> : <></>

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

/**
 * 
 * <img alt="example" src={require('../../../assets/logo.png')} style={{ height: 200 }} />
 */