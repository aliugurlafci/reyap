import React, { useEffect } from 'react';
import { Row, Col, Image, Table, Button, Carousel } from 'antd';

export const ProductDetailsComponent = ({ index }) => {
    const dataSource = [
        {
            key: '1',
            urun_kodu: "asdada",
            name: 'asdadadadadd',
            litre: 1,
            adet: '10',
        },
        {
            key: '2',
            name: 'asdadadadadd',
            litre: 1,
            adet: '10',
            urun_kodu: "asdada",
        },
        {
            key: '3',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
        },
        {
            key: '4',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
        },
    ];
    const dataSourcee = [
        {
            key: '1',
            urun_kodu: "asdada",
            name: 'asdadadadadd',
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
        {
            key: '2',
            name: 'asdadadadadd',
            litre: 1,
            adet: '10',
            urun_kodu: "asdada",
            barkod: "243567"
        },
        {
            key: '3',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
        {
            key: '4',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
        {
            key: '5',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
        {
            key: '6',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
        {
            key: '7',
            name: 'asdadadadadd',
            urun_kodu: "asdada",
            litre: 1,
            adet: '10',
            barkod: "243567"
        },
    ];

    const columns = [
        {

            dataIndex: 'urun_kodu',
            key: 'urun_kodu',
        },
        {

            dataIndex: 'litre',
            key: 'litre',
        },
        {

            dataIndex: 'adet',
            key: 'adet',
        }
    ];
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
                        <Image
                            src='https://www.burakplastik.net/wp-content/themes/burakplastik/resizer.php?src=https://www.burakplastik.net/wp-content/uploads/2021/08/F86F881E-CFFF-453E-ABE9-FB664B532A2B-480x420.jpeg&w=260&h=260&zc=2'
                            alt='iaag'
                            decoding='async'
                            unselectable='on'
                            width="100%"
                            height="100%"
                            className="product-details-image" />
                        <Image
                            src='https://www.burakplastik.net/wp-content/themes/burakplastik/resizer.php?src=https://www.burakplastik.net/wp-content/uploads/2021/08/F86F881E-CFFF-453E-ABE9-FB664B532A2B-480x420.jpeg&w=260&h=260&zc=2'
                            alt='iaag'
                            decoding='async'
                            unselectable='on'
                            width="100%"
                            height="100%"
                            className="product-details-image" />
                        <Image
                            src='https://www.burakplastik.net/wp-content/themes/burakplastik/resizer.php?src=https://www.burakplastik.net/wp-content/uploads/2021/08/F86F881E-CFFF-453E-ABE9-FB664B532A2B-480x420.jpeg&w=260&h=260&zc=2'
                            alt='iaag'
                            decoding='async'
                            unselectable='on'
                            width="100%"
                            height="100%"
                            className="product-details-image" />
                    </Carousel>
                </Col>
                <Col xs={24} sm={24} md={14} lg={4}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        bordered
                        showHeader={false}
                        expandable
                        col
                        size='large' />
                </Col>
                <Col xs={24} sm={24} md={14} lg={4}>
                    <Table
                        dataSource={dataSourcee}
                        columns={columns}
                        pagination={false}
                        bordered
                        showHeader={false}
                        expandable
                        size='large' />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Button type='default'>Order</Button>
                </Col>
            </Row>
        </div>
    );
}