import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Table, Button, Carousel, Form, Input } from 'antd';
import i18n from '../../i18n';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;


export const ProductDetailsComponent = () => {
    const { state } = useLocation();
    const [product,] = useState(state.products[state.key - 1]);

    //ÜRÜN KODU => product.productCode

    const detailsColumns = [
        {
            title: 'Ürün Kodu',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Ölçü Tipi',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Ölçüler',
            dataIndex: 'value',
            key: 'value'
        }
    ];
    const bulkColums = [
        {
            title: 'Adet',
            key: 'gap',
            dataIndex: 'gap'
        },
        {
            title: 'Birim fiyatı',
            key: 'value',
            dataIndex: 'value'
        },
    ]
    const handleDetailsDataSource = () => {
        let newSoure = [];
        product.productDetails.map(item => {
            let source = {
                title:item.title,
                value: item.value,
                code: product.productCode
            };
            newSoure.push(source);
        });
        return newSoure;
    }

    const handleBulkDataSource = () => {
        let newSoure = [];
        product.bulkDetails.map(item => {
            let source = {
                gap: item.gap,
                value: item.value + " " + item.currency
            };
            newSoure.push(source);
        });
        return newSoure;
    }
    useEffect(() => {
        console.log(product);
    }, []);
    return (
        <div className="product-details">
            <Row justify="center" align="top" gutter={[16, 16]}>
                <Col xs={20} sm={18} md={12} lg={6}>
                    <Carousel
                        autoplay
                        dots={{ className: "dots" }}
                        autoplaySpeed={2000}
                        effect='scrollx'
                        lazyLoad='progressive'
                        swipe
                        draggable>
                        {
                            product.image.map(item => (
                                <Image
                                    key={item.key}
                                    src={item.url}
                                    alt='iaag'
                                    decoding='async'
                                    unselectable='on'
                                    width="100%"
                                    height="100%"
                                    className="product-details-image" />
                            ))
                        }
                    </Carousel>
                </Col>
                <Col xs={24} sm={24} md={14} lg={4}>
                    <Table
                        dataSource={handleDetailsDataSource()}
                        columns={detailsColumns}
                        pagination={false}
                        bordered
                        expandable
                        col
                        size='large' />
                </Col>
                <Col xs={24} sm={24} md={14} lg={4}>
                    <Table
                        dataSource={handleBulkDataSource()}
                        columns={bulkColums}
                        pagination={false}
                        bordered

                        expandable
                        size='large' />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <div className='order-form'>
                        <h3>{i18n.t('orderform')}</h3>
                        <Form.Item>
                            <Input placeholder={i18n.t("namesurname")} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder={i18n.t("phone")} />
                        </Form.Item>
                        <Form.Item >
                            <Input placeholder={i18n.t("mailadress")} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder={i18n.t("companyname")} />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder={i18n.t("pieces")} />
                        </Form.Item>
                        <Form.Item>
                            <TextArea placeholder={i18n.t("ordernote")} />
                        </Form.Item>
                        <Form.Item>
                            <Button>{i18n.t("order")}</Button>
                        </Form.Item>
                    </div>
                </Col>
            </Row>
        </div>
    );
}