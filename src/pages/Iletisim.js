import React from 'react';
import { Layout, Row, Col, Collapse } from 'antd';
import './Iletisim.css'
import {
    FooterComponent,
    MenuComponent,
    MapComponent,
    LocationComponent,
    FormComponent
} from '../../src/components/index';

const { Content } = Layout;

export default function Iletisim() {
    return (
        <Layout>
            <Layout className='content-layout'>
                <MenuComponent />
                <Content className='content' style={{ height: window.innerHeight }}>
                    <Row align="center" gutter={[24, 48]}>
                        <Col xs={24} sm={24} md={24} lg={8}>
                            <MapComponent />
                        </Col>
                        <Col
                            className='margin-after-1000'
                            xs={24} sm={24} md={12} lg={6}>
                            <LocationComponent />
                            <FormComponent />
                        </Col>
                    </Row>
                </Content>
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
/**
 * Veri şeması xs={24} sm={24} md={18} lg={15}
 *                  <div className='topContent'>
                        <MapComponent />
                        <div className='subcontent'>
                            
                        </div>
                    </div>
 * "contact": {
        "central": {
            "adres": "example",
            "tel": "example",
            "fax": "example",
            "email": "example"
        },
        "factory": {
            "adres": "example",
            "tel": "example"
        },
        "export": {
            "name": "example",
            "tel": "example"
        }
    },
 */