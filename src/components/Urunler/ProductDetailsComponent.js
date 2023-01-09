import React, { useEffect } from 'react';
import { Row, Col, Image, Table, Button } from 'antd';

export const ProductDetailsComponent = ({ index }) => {
    const dataSource = [
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
            title: 'Ürün Kodu',
            dataIndex: 'urun_kodu',
            key: 'urun_kodu',
        },
        {
            title: 'Litre',
            dataIndex: 'litre',
            key: 'litre',
        },
        {
            title: 'Koli içi adedi',
            dataIndex: 'adet',
            key: 'adet',
        },
        {
            title: 'Barkod',
            dataIndex: 'barkod',
            key: 'barkod',
        }
    ];
    useEffect(() => {
        alert(index);
    }, []);
    return (
        <div className="product-details">
            <Row justify="center" align="middle" gutter={16}>
                <Col span={6}>
                    <Image src='https://www.burakplastik.net/wp-content/themes/burakplastik/resizer.php?src=https://www.burakplastik.net/wp-content/uploads/2021/08/F86F881E-CFFF-453E-ABE9-FB664B532A2B-480x420.jpeg&w=260&h=260&zc=2'
                        alt='iaag'
                        width="100%"
                        height="100%" />
                </Col>
                <Col span={4}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        expandable
                        size='large' />
                </Col>
                <Col span={4}>
                    <Table
                        dataSource={dataSourcee}
                        columns={columns}
                        pagination={false}
                        expandable
                        size='large' />
                </Col>
                <Col span={1}></Col>
                <Col span={1}></Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Button type='default'>Order</Button>
                </Col>
            </Row>
        </div>
    );
}