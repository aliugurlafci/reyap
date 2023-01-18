import React from 'react';
import { Layout, Row, Col } from 'antd';
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
        <Layout style={{ backgroundColor: '#fff' }}>
            <MenuComponent />
            <Content style={{ backgroundColor: '#fff', marginTop: 70, paddingBottom: 100 }}>
                <Row align="center" justify="center">
                    <Col xs={24} sm={24} md={24} lg={10}>
                        <MapComponent />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8}
                        className='margin-after-1000'>
                        <LocationComponent />
                        <FormComponent />
                    </Col>
                </Row>
            </Content>
            <FooterComponent />
        </Layout>
    );
}